(() => {
  const LS = {
    nombre: "ir.nombre",
    ai: "ir.ai",
    temas: "ir.temas",
    revisiones: "ir.revisiones",
    sesiones: "ir.sesiones",
    mensajes: "ir.mensajes",
    reqs: "ir.reqs",
    revisionesReq: "ir.revisionesReq",
    dominio: "ir.dominio",
    dominios: "ir.dominios",
    clases: "ir.clases",
    tema: "ir.tema",
    wipeTrabajos: "ir.wipeTrabajos"
  };

  const WIPE_TRABAJOS = "20260910c";

  const TIPOS_PRACTICA = [
    { tipo: "necesidad", titulo: "Necesidad" },
    { tipo: "deseo", titulo: "Deseo" },
    { tipo: "expectativa", titulo: "Expectativa" },
    { tipo: "usuario", titulo: "Usuario" },
    { tipo: "sistema", titulo: "Sistema" }
  ];

  const CASOS = {
    hospital: {
      titulo: "Hospital — gestión de turnos",
      organizacion: "Hospital público de la facultad / red municipal",
      rol: "Jefa de Administración",
      nombre: "Laura Gómez",
      escenario: "Laura quiere que le desarrollen una aplicación de turnos. Los pacientes deberían poder pedir, consultar, cambiar y cancelar turnos; el personal, manejar agendas y la atención. Hoy se resuelve por ventanilla, papel y llamadas. Ella no es técnica: cuenta cómo trabajan y qué le duele, no diseña la solución."
    },
    biblioteca: {
      titulo: "Biblioteca de la facultad",
      organizacion: "Biblioteca central de la facultad",
      rol: "Director de Biblioteca",
      nombre: "Martín Alegre",
      escenario: "Martín quiere que le desarrollen una aplicación para la biblioteca: préstamos y devoluciones, stock, usuarios (alumno, docente, no docente) y, si se puede, reservas y avisos. Hoy se anota en planillas y a veces se pierde un ejemplar. Habla el idioma de la biblioteca, no el de sistemas."
    }
  };

  const state = {
    tab: "teoria",
    nombre: localStorage.getItem(LS.nombre) || "",
    temas: [],
    revisiones: [],
    temaActual: null,
    sesiones: [],
    mensajes: [],
    reqs: [],
    revisionesReq: [],
    dominios: {},
    clasesExtra: [],
    sesionActual: null,
    sb: null,
    canales: [],
    aiBusy: false,
    trabajoAbierto: null,
    aulaError: ""
  };

  const $ = (id) => document.getElementById(id);
  const uid = () => {
    if (crypto.randomUUID) return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
  };
  const now = () => new Date().toISOString();
  const escapeHtml = (s = "") => String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const esUuid = (id) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(id || ""));
  const mismoId = (a, b) => String(a || "") === String(b || "");

  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3800);
  }

  function exigeNombre() {
    if (state.nombre.trim()) return true;
    $("modal-nombre").classList.add("show");
    $("input-nombre").focus();
    return false;
  }

  function renderNombre() {
    $("nombre-actual").textContent = state.nombre || "sin registrar";
  }

  function temaActual() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function aplicarTema(tema) {
    const t = tema === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem(LS.tema, t);
    const oscuro = $("btn-tema-oscuro");
    const claro = $("btn-tema-claro");
    if (oscuro) oscuro.classList.toggle("active", t === "dark");
    if (claro) claro.classList.toggle("active", t === "light");
  }

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function markdown(text) {
    if (window.marked) return marked.parse(text || "");
    return `<p>${escapeHtml(text).replace(/\n/g, "<br>")}</p>`;
  }

  function cfgGlobal() {
    return window.IR_CONFIG || {};
  }

  function cargarScriptOpcional(src) {
    return new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);
      document.head.appendChild(s);
    });
  }

  function urlProyectoSupabase(valor) {
    return String(valor || "")
      .trim()
      .replace(/\/+$/, "")
      .replace(/\/rest\/v1$/i, "")
      .replace(/\/+$/, "");
  }

  function cfgSupabase() {
    const g = cfgGlobal();
    return {
      url: urlProyectoSupabase(g.supabaseUrl),
      key: (g.supabaseAnonKey || "").trim()
    };
  }

  function normalizarProveedor(valor) {
    return valor === "gemini" ? "gemini" : "groq";
  }

  function pareceClaveGroq(clave) {
    return /^gsk_/i.test(clave || "");
  }

  function claveDelModelo(proveedor) {
    const g = cfgGlobal();
    if (proveedor === "groq") {
      const propia = (g.aiKeyGroq || "").trim();
      if (propia) return propia;
      const comun = (g.aiKey || "").trim();
      return pareceClaveGroq(comun) || !comun ? comun : "";
    }
    if (proveedor === "gemini") {
      const propia = (g.aiKeyGemini || "").trim();
      if (propia) return propia;
      const comun = (g.aiKey || "").trim();
      return comun && !pareceClaveGroq(comun) ? comun : "";
    }
    return "";
  }

  function contenidosGemini(messages) {
    const system = messages.find((m) => m.role === "system")?.content || "";
    const turns = [];
    messages.forEach((m) => {
      if (m.role === "system") return;
      const role = m.role === "assistant" ? "model" : "user";
      const text = String(m.content || "").trim();
      if (!text) return;
      const last = turns[turns.length - 1];
      if (last && last.role === role) last.parts[0].text += "\n\n" + text;
      else turns.push({ role, parts: [{ text }] });
    });
    if (!turns.length) {
      turns.push({ role: "user", parts: [{ text: system || "Respondé en español." }] });
    } else if (turns[0].role === "model") {
      turns.unshift({
        role: "user",
        parts: [{ text: "Hola, soy el analista. Contame de tu situación para arrancar la entrevista." }]
      });
    }
    return { system, contents: turns };
  }

  function proveedorElegido() {
    const saved = loadJSON(LS.ai, { proveedor: "" });
    const g = cfgGlobal();
    return normalizarProveedor(saved.proveedor || g.aiProvider);
  }

  function cfgAI() {
    const proveedor = proveedorElegido();
    return {
      proveedor,
      clave: claveDelModelo(proveedor)
    };
  }

  function uuidONuevo(id, remap) {
    if (!id) return id;
    const raw = String(id);
    if (esUuid(raw)) return raw;
    if (!remap[raw]) remap[raw] = uid();
    return remap[raw];
  }

  function normalizarIdsLocales() {
    const remap = {};
    const sesiones = loadJSON(LS.sesiones, state.sesiones || []);
    const mensajes = loadJSON(LS.mensajes, state.mensajes || []);
    const reqs = loadJSON(LS.reqs, state.reqs || []);
    const revs = loadJSON(LS.revisionesReq, state.revisionesReq || []);
    const dominios = loadJSON(LS.dominios, state.dominios || {});
    sesiones.forEach((s) => { s.id = uuidONuevo(s.id, remap); });
    mensajes.forEach((m) => {
      m.id = uuidONuevo(m.id, remap);
      m.sesion_id = uuidONuevo(m.sesion_id, remap);
    });
    reqs.forEach((r) => {
      r.id = uuidONuevo(r.id, remap);
      r.sesion_id = uuidONuevo(r.sesion_id, remap);
    });
    revs.forEach((r) => {
      r.id = uuidONuevo(r.id, remap);
      r.sesion_id = uuidONuevo(r.sesion_id, remap);
    });
    const dominiosNuevos = {};
    Object.values(dominios).forEach((d) => {
      if (!d) return;
      d.sesion_id = uuidONuevo(d.sesion_id, remap);
      if (d.sesion_id) dominiosNuevos[String(d.sesion_id)] = d;
    });
    saveJSON(LS.sesiones, sesiones);
    saveJSON(LS.mensajes, mensajes);
    saveJSON(LS.reqs, reqs);
    saveJSON(LS.revisionesReq, revs);
    saveJSON(LS.dominios, dominiosNuevos);
    state.sesiones = sesiones;
    state.mensajes = mensajes;
    state.reqs = reqs;
    state.revisionesReq = revs;
    state.dominios = dominiosNuevos;
    if (state.sesionActual?.id) {
      const nid = uuidONuevo(state.sesionActual.id, remap);
      state.sesionActual = sesiones.find((s) => mismoId(s.id, nid)) || { ...state.sesionActual, id: nid };
    }
  }

  async function conectarSupabase() {
    const cfg = cfgSupabase();
    state.canales.forEach((c) => {
      try { c.unsubscribe(); } catch (_) {}
    });
    state.canales = [];
    state.sb = null;
    state.aulaError = "";
    normalizarIdsLocales();

    if (!cfg.url || !cfg.key || !window.supabase) {
      pintarEstadoAula();
      return false;
    }
    const client = window.supabase.createClient(cfg.url, cfg.key);
    const [teoria, practicas] = await Promise.all([
      client.from("temas_teoria").select("id").limit(1),
      client.from("sesiones").select("id").limit(1)
    ]);
    if (teoria.error && practicas.error) {
      state.aulaError = practicas.error.message || teoria.error.message;
      pintarEstadoAula();
      return false;
    }
    state.sb = client;
    state.aulaError = practicas.error
      ? "La teoría conecta, pero las prácticas no: " + practicas.error.message
      : teoria.error
        ? "Las prácticas conectan, pero la teoría no: " + teoria.error.message
        : "";
    escucharRealtime();
    if (!state._pulsoAula) {
      state._pulsoAula = setInterval(() => refrescarAula(), 8000);
    }
    pintarEstadoAula();
    return true;
  }

  async function refrescarAula() {
    if (!state.sb) return;
    await Promise.all([
      cargarTemas({ sembrar: false, liviano: true }),
      cargarRevisiones(),
      cargarSesiones(),
      cargarMensajes(),
      cargarReqs(),
      cargarRevisionesReq(),
      cargarDominios()
    ]);
    if (state.tab === "trabajos") renderTrabajos();
  }

  function vaciarHistorialLocal() {
    state.sesiones = [];
    state.mensajes = [];
    state.reqs = [];
    state.revisionesReq = [];
    state.dominios = {};
    state.sesionActual = null;
    state.trabajoAbierto = null;
    saveJSON(LS.sesiones, []);
    saveJSON(LS.mensajes, []);
    saveJSON(LS.reqs, []);
    saveJSON(LS.revisionesReq, []);
    saveJSON(LS.dominios, {});
    saveJSON(LS.dominio, {});
  }

  function vaciarHistorialLocalSiHaceFalta() {
    if (localStorage.getItem(LS.wipeTrabajos) === WIPE_TRABAJOS) return;
    vaciarHistorialLocal();
    localStorage.setItem(LS.wipeTrabajos, WIPE_TRABAJOS);
  }

  function pintarEstadoAula() {
    const txt = state.aulaError
      ? "Aula a medias: " + state.aulaError
      : state.sb
        ? "Aula conectada: los trabajos se ven entre todos."
        : "Aula desconectada: lo que hagas queda solo en este navegador.";
    ["aula-estado", "aula-estado-ajustes"].forEach((id) => {
      const el = $(id);
      if (el) el.textContent = txt;
    });
  }

  function filaSesion(s) {
    return {
      id: s.id,
      titulo: s.titulo || "",
      organizacion: s.organizacion || "",
      rol_gerente: s.rol_gerente || "",
      nombre_gerente: s.nombre_gerente || "",
      escenario: s.escenario || "",
      creado_por: s.creado_por || "",
      creado_en: s.creado_en || now()
    };
  }

  function filaMensaje(m) {
    return {
      id: m.id,
      sesion_id: m.sesion_id,
      autor: m.autor || "",
      rol: m.rol || "analista",
      contenido: m.contenido || "",
      creado_en: m.creado_en || now()
    };
  }

  function filaReq(r) {
    return {
      id: r.id,
      sesion_id: r.sesion_id,
      codigo: r.codigo || "",
      tipo: r.tipo || "",
      enunciado: r.enunciado || "",
      autor: r.autor || "",
      creado_en: r.creado_en || now()
    };
  }

  function filaRev(r) {
    return {
      id: r.id,
      sesion_id: r.sesion_id,
      autor: r.autor || "",
      comentario: r.comentario || "",
      creado_en: r.creado_en || now()
    };
  }

  function filaDominio(d) {
    return {
      sesion_id: d.sesion_id,
      contexto: d.contexto || "",
      organizacion: d.organizacion || d.org || "",
      hoy: d.hoy || "",
      objetivo: d.objetivo || "",
      desconocido: d.desconocido || "",
      autor: d.autor || "",
      actualizado_en: d.actualizado_en || now()
    };
  }

  function sanear(tabla, row) {
    if (tabla === "sesiones") return filaSesion(row);
    if (tabla === "mensajes") return filaMensaje(row);
    if (tabla === "requerimientos") return filaReq(row);
    if (tabla === "revisiones_req") return filaRev(row);
    if (tabla === "dominios") return filaDominio(row);
    return row;
  }

  function escucharRealtime() {
    if (!state.sb) return;
    const ch = state.sb.channel("aula-ir")
      .on("postgres_changes", { event: "*", schema: "public", table: "temas_teoria" }, (payload) => {
        aplicarTemaRemoto(payload);
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "revisiones_teoria" }, cargarRevisiones)
      .on("postgres_changes", { event: "*", schema: "public", table: "sesiones" }, cargarSesiones)
      .on("postgres_changes", { event: "*", schema: "public", table: "mensajes" }, async () => {
        await cargarMensajes();
        renderChat();
        if (state.tab === "trabajos") renderTrabajos();
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "requerimientos" }, async () => {
        await cargarReqs();
        renderReqs();
        if (state.tab === "trabajos") renderTrabajos();
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "revisiones_req" }, cargarRevisionesReq)
      .on("postgres_changes", { event: "*", schema: "public", table: "dominios" }, async () => {
        await cargarDominios();
        pintarSesionEnUI();
        if (state.tab === "trabajos") renderTrabajos();
      })
      .subscribe();
    state.canales.push(ch);
  }

  function temasDesdeMaterial() {
    return TEORIA_INICIAL.map((t) => ({
      id: uid(),
      ...t,
      actualizado_por: "material de clase",
      actualizado_en: now()
    }));
  }

  function normalizarTema(t) {
    return {
      ...t,
      id: t.id || uid(),
      slug: t.slug || slugify(t.titulo || t.title || "tema"),
      clase: t.clase || t.class || "Clase 1",
      titulo: t.titulo || t.title || "Sin título",
      resumen: t.resumen || t.summary || "",
      contenido: t.contenido || t.content || t.body || "",
      orden: t.orden ?? t.order ?? 0,
      actualizado_por: t.actualizado_por || ""
    };
  }

  function temasUsables(lista) {
    return (lista || []).map(normalizarTema).filter((t) => t.slug && (t.titulo || t.contenido));
  }

  function editandoTeoria() {
    const ed = $("editor-teoria");
    return !!(ed && !ed.classList.contains("hidden"));
  }

  function pintarTeoriaInicial() {
    const local = temasUsables(loadJSON(LS.temas, []));
    state.temas = local.length ? local : temasDesdeMaterial();
    renderListaTemas();
    if (!state.temaActual) mostrarTema(state.temas[0]?.slug);
  }

  function aplicarTemaRemoto(payload) {
    const row = payload?.new || payload?.old;
    if (!row) {
      cargarTemas({ sembrar: false });
      return;
    }
    const tipo = payload.eventType || payload.event;
    if (tipo === "DELETE") {
      state.temas = state.temas.filter((t) => !mismoId(t.id, row.id) && t.slug !== row.slug);
      saveJSON(LS.temas, state.temas);
      if (state.temaActual && (mismoId(state.temaActual.id, row.id) || state.temaActual.slug === row.slug)) {
        if (!editandoTeoria()) mostrarTema(state.temas[0]?.slug);
        else renderListaTemas();
      } else renderListaTemas();
      return;
    }
    const n = normalizarTema(payload.new);
    const i = state.temas.findIndex((t) => mismoId(t.id, n.id) || t.slug === n.slug);
    if (i >= 0) state.temas[i] = { ...state.temas[i], ...n };
    else state.temas.push(n);
    state.temas.sort((a, b) => (Number(a.orden) || 0) - (Number(b.orden) || 0));
    saveJSON(LS.temas, state.temas);
    const abierto = state.temaActual && (mismoId(state.temaActual.id, n.id) || state.temaActual.slug === n.slug);
    if (abierto && !editandoTeoria()) mostrarTema(n.slug);
    else renderListaTemas();
  }

  function firmaTemas(lista) {
    return (lista || []).map((t) => [t.slug, t.actualizado_en || "", t.titulo || "", t.actualizado_por || ""].join(":")).join("|");
  }

  async function cargarTemas({ sembrar = true, liviano = false } = {}) {
    if (!state.sb) {
      if (!state.temas.length) pintarTeoriaInicial();
      return;
    }
    if (liviano && state.temas.length) {
      const { data, error } = await state.sb
        .from("temas_teoria")
        .select("id,slug,titulo,clase,orden,actualizado_en,actualizado_por")
        .order("orden");
      if (error || !data) return;
      if (data.length === state.temas.length && firmaTemas(data) === firmaTemas(state.temas)) return;
    }
    const { data, error } = await state.sb.from("temas_teoria").select("*").order("orden");
    if (error) {
      if (!state.temas.length) pintarTeoriaInicial();
      return;
    }
    const remotos = temasUsables(data);
    if (remotos.length) {
      if (firmaTemas(remotos) === firmaTemas(state.temas)) {
        if (sembrar) completarTemasFaltantes();
        return;
      }
      const slugAbierto = state.temaActual?.slug;
      state.temas = remotos;
      saveJSON(LS.temas, state.temas);
      if (!editandoTeoria()) mostrarTema(slugAbierto || state.temas[0]?.slug);
      else renderListaTemas();
      if (sembrar) completarTemasFaltantes();
      return;
    }
    if (!state.temas.length) pintarTeoriaInicial();
    if (sembrar && !state._sembrandoTeoria) {
      state._sembrandoTeoria = true;
      sembrarTeoria()
        .then(async (res) => {
          if (!res?.error) await cargarTemas({ sembrar: false });
        })
        .finally(() => { state._sembrandoTeoria = false; });
    }
  }

  async function completarTemasFaltantes() {
    if (!state.sb || state._completarTemas) return;
    const existentes = new Set(state.temas.map((t) => t.slug));
    const faltan = TEORIA_INICIAL.filter((t) => !existentes.has(t.slug));
    if (!faltan.length) return;
    state._completarTemas = true;
    for (const t of faltan) {
      const row = {
        id: uid(),
        slug: t.slug,
        clase: t.clase,
        titulo: t.titulo,
        resumen: t.resumen,
        contenido: t.contenido,
        orden: t.orden,
        actualizado_por: "material de clase",
        actualizado_en: now()
      };
      const { error } = await state.sb.from("temas_teoria").insert(row);
      if (!error || !state.temas.some((x) => x.slug === row.slug)) state.temas.push(row);
    }
    state.temas.sort((a, b) => (Number(a.orden) || 0) - (Number(b.orden) || 0));
    saveJSON(LS.temas, state.temas);
    renderListaTemas();
  }

  async function sembrarTeoria() {
    if (!state.sb) return { error: null };
    const rows = TEORIA_INICIAL.map((t, i) => ({
      slug: t.slug,
      clase: t.clase,
      titulo: t.titulo,
      resumen: t.resumen,
      contenido: t.contenido,
      orden: t.orden || i + 1,
      actualizado_por: "material de clase"
    }));
    return state.sb.from("temas_teoria").upsert(rows, { onConflict: "slug" });
  }

  async function cargarRevisiones() {
    if (state.sb) {
      const { data, error } = await state.sb
        .from("revisiones_teoria")
        .select("*")
        .order("creado_en", { ascending: false })
        .limit(80);
      if (!error && data) {
        state.revisiones = data;
        saveJSON(LS.revisiones, data);
        return;
      }
    }
    state.revisiones = loadJSON(LS.revisiones, []);
  }

  async function hidratarLista(tabla, collection, localKey, { order, asc = true } = {}) {
    const local = loadJSON(localKey, state[collection] || []);
    if (state.sb) {
      let q = state.sb.from(tabla).select("*");
      if (order) q = q.order(order, { ascending: asc });
      const { data, error } = await q;
      if (error) {
        state.aulaError = error.message;
        pintarEstadoAula();
        state[collection] = local;
        return;
      }
      state[collection] = data || [];
      saveJSON(localKey, state[collection]);
      return;
    }
    state[collection] = local;
  }

  async function cargarSesiones() {
    await hidratarLista("sesiones", "sesiones", LS.sesiones, { order: "creado_en", asc: false });
    renderListaSesiones();
  }

  async function cargarMensajes() {
    await hidratarLista("mensajes", "mensajes", LS.mensajes, { order: "creado_en", asc: true });
  }

  async function cargarReqs() {
    await hidratarLista("requerimientos", "reqs", LS.reqs, { order: "creado_en", asc: true });
  }

  async function cargarRevisionesReq() {
    await hidratarLista("revisiones_req", "revisionesReq", LS.revisionesReq, { order: "creado_en", asc: true });
    if (state.tab === "trabajos") renderTrabajos();
  }

  async function cargarDominios() {
    const local = loadJSON(LS.dominios, state.dominios || {});
    if (state.sb) {
      const { data, error } = await state.sb.from("dominios").select("*");
      if (error) {
        state.aulaError = error.message;
        pintarEstadoAula();
        state.dominios = local;
        return;
      }
      const remotos = {};
      (data || []).forEach((d) => {
        if (d?.sesion_id) remotos[String(d.sesion_id)] = d;
      });
      state.dominios = remotos;
      saveJSON(LS.dominios, remotos);
      return;
    }
    state.dominios = local;
  }

  async function upsert(tabla, row, localKey, collection) {
    const limpio = sanear(tabla, row);
    const list = state[collection];
    if (Array.isArray(list)) {
      const i = list.findIndex((x) => mismoId(x.id, limpio.id || row.id));
      if (i >= 0) list[i] = { ...list[i], ...limpio };
      else list.push(limpio);
      saveJSON(localKey, list);
    }
    if (state.sb) {
      const { error } = await state.sb.from(tabla).upsert(limpio);
      if (error) {
        state.aulaError = error.message;
        pintarEstadoAula();
        throw error;
      }
    }
  }

  function slugify(texto) {
    const base = String(texto || "apartado")
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "apartado";
    return base + "-" + Date.now().toString(36);
  }

  function clasesDeTemas() {
    const orden = ["Clase 1", "Clase 2", "Clase 3", "Clase 4", "Clase 5", "Práctica"];
    state.temas.forEach((t) => {
      if (t.clase && !orden.includes(t.clase)) orden.push(t.clase);
    });
    (state.clasesExtra || []).forEach((c) => {
      if (c && !orden.includes(c)) orden.push(c);
    });
    return orden;
  }

  function abrirModalApartado(clase, { nuevaClase = false } = {}) {
    if (!exigeNombre()) return;
    $("nuevo-clase").value = nuevaClase ? "" : (clase || state.temaActual?.clase || "Clase 1");
    $("nuevo-titulo").value = "";
    $("nuevo-resumen").value = "";
    $("modal-apartado-titulo").textContent = nuevaClase ? "Nueva clase" : "Nuevo apartado";
    $("apartado-clase-hint").textContent = nuevaClase
      ? "Escribí el nombre de la clase. El título del apartado es opcional: si lo dejás vacío, se crea la clase vacía."
      : "Se agrega dentro de " + ($("nuevo-clase").value || "la clase") + ". Todos lo van a ver.";
    $("modal-apartado").classList.add("show");
    if (nuevaClase) $("nuevo-clase").focus();
    else $("nuevo-titulo").focus();
  }

  async function crearApartado() {
    if (!exigeNombre()) return;
    const clase = $("nuevo-clase").value.trim();
    const titulo = $("nuevo-titulo").value.trim();
    const resumen = $("nuevo-resumen").value.trim();
    if (!clase) return toast("Indicá la clase.");
    if (!titulo) {
      if (!state.clasesExtra.includes(clase) && !state.temas.some((t) => t.clase === clase)) {
        state.clasesExtra.push(clase);
        saveJSON(LS.clases, state.clasesExtra);
      }
      $("modal-apartado").classList.remove("show");
      renderListaTemas();
      toast("Clase agregada. Ahora podés sumar apartados.");
      return;
    }
    if (titulo.length < 3) return toast("Escribí un título para el apartado.");

    const deClase = state.temas.filter((t) => t.clase === clase);
    const orden = (deClase.length
      ? Math.max(...deClase.map((t) => Number(t.orden) || 0))
      : Math.max(0, ...state.temas.map((t) => Number(t.orden) || 0))) + 1;

    const tema = {
      id: uid(),
      slug: slugify(titulo),
      clase,
      titulo,
      resumen: resumen || "Apartado agregado por " + state.nombre + ".",
      contenido: "## " + titulo + "\n\nEscribí acá la explicación, formal y sencilla, con un ejemplo.",
      orden,
      actualizado_por: state.nombre,
      actualizado_en: now()
    };

    try {
      if (state.sb) {
        const { error } = await state.sb.from("temas_teoria").insert(tema);
        if (error) throw error;
      }
      state.temas.push(tema);
      state.temas.sort((a, b) => (a.orden || 0) - (b.orden || 0));
      saveJSON(LS.temas, state.temas);
      $("modal-apartado").classList.remove("show");
      mostrarTema(tema.slug);
      $("tema-contenido").classList.add("hidden");
      $("editor-teoria").classList.remove("hidden");
      $("teoria-titulo").value = tema.titulo;
      $("teoria-resumen").value = tema.resumen;
      $("teoria-md").focus();
      toast("Apartado creado en " + clase + ".");
    } catch (err) {
      toast("No se pudo crear: " + err.message);
    }
  }

  function renderListaTemas() {
    const box = $("lista-temas");
    box.innerHTML = clasesDeTemas().map((clase) => {
      const temas = state.temas.filter((t) => t.clase === clase).sort((a, b) => (Number(a.orden) || 0) - (Number(b.orden) || 0));
      const items = temas.map((t) => `
        <button class="topic-btn ${state.temaActual && state.temaActual.slug === t.slug ? "active" : ""}" data-slug="${t.slug}" type="button">
          ${escapeHtml(t.titulo)}
        </button>
      `).join("");
      return `
        <div class="clase-grupo">
          <div class="clase-cab">
            <strong>${escapeHtml(clase)}</strong>
            <button class="btn-add-apartado" type="button" data-clase="${escapeHtml(clase)}">+ Apartado</button>
          </div>
          ${items || "<p class='hint'>Todavía no hay apartados.</p>"}
        </div>
      `;
    }).join("");
    box.querySelectorAll(".topic-btn").forEach((btn) => {
      btn.onclick = () => mostrarTema(btn.dataset.slug, { ir: true });
    });
    box.querySelectorAll(".btn-add-apartado").forEach((btn) => {
      btn.onclick = () => abrirModalApartado(btn.dataset.clase);
    });
  }

  function llevarAlTema() {
    const art = $("tema-leido") || document.querySelector("#panel-teoria .article");
    if (!art) return;
    const rect = art.getBoundingClientRect();
    const visible = rect.top < window.innerHeight * 0.42 && rect.bottom > 140;
    if (visible) return;
    art.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function mostrarTema(slug, { ir = false } = {}) {
    const tema = state.temas.find((t) => t.slug === slug) || state.temas[0];
    if (!tema) return;
    state.temaActual = tema;
    $("tema-clase").textContent = tema.clase + (tema.actualizado_por ? ` · última edición: ${tema.actualizado_por}` : "");
    $("tema-titulo").textContent = tema.titulo;
    $("tema-resumen").textContent = tema.resumen || "";
    $("tema-contenido").innerHTML = markdown(tema.contenido);
    $("tema-contenido").classList.remove("hidden");
    $("editor-teoria").classList.add("hidden");
    $("teoria-titulo").value = tema.titulo || "";
    $("teoria-resumen").value = tema.resumen || "";
    $("teoria-md").value = tema.contenido;
    renderListaTemas();
    renderRevisionesTema();
    if (ir) requestAnimationFrame(llevarAlTema);
  }

  function renderRevisionesTema() {
    const box = $("lista-revisiones");
    const revs = state.revisiones.filter((r) => r.tema_id === state.temaActual?.id);
    if (!revs.length) {
      box.innerHTML = "<p class='hint'>Todavía no hay ediciones de compañeros sobre este tema.</p>";
      return;
    }
    box.innerHTML = revs.map((r) => `
      <div class="rev-item">
        <strong>${escapeHtml(r.autor)}</strong>
        <span class="hint"> · ${new Date(r.creado_en).toLocaleString("es-AR")}</span>
        <div class="diff">
          <div><small>Antes</small><pre>${escapeHtml(r.contenido_anterior)}</pre></div>
          <div><small>Después</small><pre>${escapeHtml(r.contenido_nuevo)}</pre></div>
        </div>
      </div>
    `).join("");
  }

  function insertarBloqueTeoria(tipo) {
    const ta = $("teoria-md");
    if (!ta) return;
    const start = ta.selectionStart ?? ta.value.length;
    const end = ta.selectionEnd ?? start;
    const sel = ta.value.slice(start, end).trim();
    const antes = ta.value.slice(0, start);
    const salto = !start ? "" : /\n\n$/.test(antes) ? "" : /\n$/.test(antes) ? "\n" : "\n\n";
    let cuerpo = "";
    if (tipo === "titulo") cuerpo = "## " + sel;
    else if (tipo === "lista") cuerpo = "- " + sel;
    else cuerpo = sel;
    const cola = sel && tipo !== "lista" ? "\n\n" : sel ? "\n" : "";
    const insercion = salto + cuerpo + cola;
    ta.value = ta.value.slice(0, start) + insercion + ta.value.slice(end);
    const cursor = start + insercion.length;
    ta.focus();
    ta.setSelectionRange(cursor, cursor);
  }

  async function guardarTeoria() {
    if (!exigeNombre() || !state.temaActual) return;
    const nuevo = $("teoria-md").value.trim();
    const titulo = ($("teoria-titulo")?.value || state.temaActual.titulo || "").trim();
    const resumen = ($("teoria-resumen")?.value || "").trim();
    if (!titulo) return toast("El apartado necesita un título.");
    if (!nuevo) return toast("El tema no puede quedar vacío.");
    const anterior = state.temaActual.contenido;
    if (anterior === nuevo && titulo === state.temaActual.titulo && resumen === (state.temaActual.resumen || "")) {
      return toast("No hay cambios.");
    }

    const rev = {
      id: uid(),
      tema_id: state.temaActual.id,
      titulo,
      contenido_anterior: anterior,
      contenido_nuevo: nuevo,
      autor: state.nombre,
      creado_en: now()
    };

    state.temaActual.titulo = titulo;
    state.temaActual.resumen = resumen;
    state.temaActual.contenido = nuevo;
    state.temaActual.actualizado_por = state.nombre;
    state.temaActual.actualizado_en = now();

    try {
      if (state.sb) {
        const patch = {
          titulo,
          resumen,
          contenido: nuevo,
          actualizado_por: state.nombre,
          actualizado_en: state.temaActual.actualizado_en
        };
        const porId = await state.sb.from("temas_teoria").update(patch).eq("id", state.temaActual.id).select("id");
        if (porId.error || !(porId.data && porId.data.length)) {
          const porSlug = await state.sb.from("temas_teoria").update(patch).eq("slug", state.temaActual.slug).select("id");
          if (porSlug.error) throw porSlug.error;
          if (porSlug.data?.[0]?.id) state.temaActual.id = porSlug.data[0].id;
          if (!(porSlug.data && porSlug.data.length)) {
            const { error: ins } = await state.sb.from("temas_teoria").insert({
              id: state.temaActual.id,
              slug: state.temaActual.slug,
              clase: state.temaActual.clase,
              orden: state.temaActual.orden,
              ...patch
            });
            if (ins) throw ins;
          }
        }
        const { error: e2 } = await state.sb.from("revisiones_teoria").insert(rev);
        if (e2) throw e2;
      }
      const i = state.temas.findIndex((t) => mismoId(t.id, state.temaActual.id) || t.slug === state.temaActual.slug);
      if (i >= 0) state.temas[i] = state.temaActual;
      saveJSON(LS.temas, state.temas);
      state.revisiones.unshift(rev);
      saveJSON(LS.revisiones, state.revisiones);
      mostrarTema(state.temaActual.slug);
      toast("Tema actualizado para el aula.");
    } catch (err) {
      toast("No se pudo guardar: " + err.message);
    }
  }

  function mensajesDe(sesionId) {
    return state.mensajes.filter((m) => mismoId(m.sesion_id, sesionId));
  }

  function reqsDe(sesionId) {
    return state.reqs.filter((r) => mismoId(r.sesion_id, sesionId));
  }

  function dominioDe(sesionId) {
    const sid = String(sesionId || "");
    const d = state.dominios[sid] || state.dominios[sesionId] || loadJSON(LS.dominio, {})[sid] || {};
    return {
      contexto: d.contexto || "",
      org: d.org || d.organizacion || "",
      hoy: d.hoy || "",
      objetivo: d.objetivo || "",
      desconocido: d.desconocido || ""
    };
  }

  function renderChat() {
    const log = $("chat-log");
    if (!state.sesionActual) {
      log.innerHTML = "<div class='bubble sistema'><b>Práctica</b>Abrí un caso. Preguntá de a una cosa: no te va a contar todo el problema y te va a repreguntar. No asumas información.</div>";
      return;
    }
    const msgs = mensajesDe(state.sesionActual.id);
    log.innerHTML = msgs.map((m) => {
      const quien = m.rol === "gerente"
        ? (state.sesionActual.nombre_gerente + " · " + state.sesionActual.rol_gerente)
        : m.autor;
      return `<div class="bubble ${escapeHtml(m.rol)}"><b>${escapeHtml(quien)}</b><span class="bubble-text">${escapeHtml(m.contenido)}</span></div>`;
    }).join("");
    log.scrollTop = log.scrollHeight;
  }

  function codigoReq(tipo, sesionId) {
    const lista = reqsDe(sesionId);
    const prefijo = tipo === "expectativa" || tipo === "no_funcional" ? "RFN"
      : tipo === "usuario" ? "RU"
        : tipo === "sistema" ? "RS"
          : "RF";
    const n = lista.filter((r) => String(r.codigo || "").startsWith(prefijo)).length + 1;
    return prefijo + n;
  }

  function slotId(tipo, i) {
    return "req-" + tipo + "-" + i;
  }

  function pintarSlotsReq(lista) {
    TIPOS_PRACTICA.forEach((def) => {
      const deTipo = (lista || []).filter((r) => r.tipo === def.tipo);
      for (let i = 0; i < 2; i++) {
        const el = $(slotId(def.tipo, i));
        if (el) el.value = deTipo[i] ? deTipo[i].enunciado : "";
      }
    });
  }

  function slotsIncompletos() {
    return TIPOS_PRACTICA.filter((def) =>
      [0, 1].some((i) => !($(slotId(def.tipo, i))?.value || "").trim())
    ).map((def) => def.titulo);
  }

  async function persistirSlotsReq() {
    if (!state.sesionActual) return [];
    const sid = state.sesionActual.id;
    const guardados = [];
    for (const def of TIPOS_PRACTICA) {
      const deTipo = reqsDe(sid).filter((r) => r.tipo === def.tipo);
      for (let i = 0; i < 2; i++) {
        const enunciado = ($(slotId(def.tipo, i))?.value || "").trim();
        if (!enunciado) continue;
        if (deTipo[i]) {
          deTipo[i].enunciado = enunciado;
          await upsert("requerimientos", deTipo[i], LS.reqs, "reqs");
          guardados.push(deTipo[i]);
        } else {
          const row = {
            id: uid(),
            sesion_id: sid,
            codigo: codigoReq(def.tipo, sid),
            tipo: def.tipo,
            enunciado,
            autor: state.nombre,
            creado_en: now()
          };
          await upsert("requerimientos", row, LS.reqs, "reqs");
          deTipo.push(row);
          guardados.push(row);
        }
      }
    }
    return guardados;
  }

  function etiquetaTipo(tipo) {
    return ({
      necesidad: "Necesidad",
      deseo: "Deseo",
      expectativa: "Expectativa",
      usuario: "Usuario",
      sistema: "Sistema",
      funcional: "Funcional",
      no_funcional: "No funcional"
    })[tipo] || tipo;
  }

  function renderReqs() {
    const box = $("lista-req");
    if (!state.sesionActual) {
      box.innerHTML = "<p class='hint'>Los requerimientos quedan atados al caso que estén entrevistando.</p>";
      return;
    }
    const lista = reqsDe(state.sesionActual.id);
    const extras = lista.filter((r) => {
      const deTipo = lista.filter((x) => x.tipo === r.tipo);
      const idx = deTipo.findIndex((x) => x.id === r.id);
      return idx > 1 || !TIPOS_PRACTICA.some((d) => d.tipo === r.tipo);
    });
    if (!extras.length) {
      box.innerHTML = "";
      return;
    }
    box.innerHTML = extras.map((r) => `
      <div class="req">
        <span class="chip">${escapeHtml(r.codigo)}</span>
        <span class="chip">${escapeHtml(etiquetaTipo(r.tipo))}</span>
        <div>${escapeHtml(r.enunciado)}</div>
        <div class="meta">${escapeHtml(r.autor)} · ${new Date(r.creado_en).toLocaleString("es-AR")}</div>
      </div>
    `).join("");
  }

  function pintarSesionEnUI() {
    const s = state.sesionActual;
    if (!s) {
      $("sesion-titulo").textContent = "Todavía no hay un caso abierto";
      $("sesion-meta").textContent = "Elegí un escenario o pedile a la IA uno nuevo. El chat es el contexto.";
      ["dom-contexto", "dom-org", "dom-hoy", "dom-objetivo", "dom-desconocido"].forEach((id) => { $(id).value = ""; });
      pintarSlotsReq([]);
      renderChat();
      renderReqs();
      return;
    }
    $("sesion-titulo").textContent = s.titulo;
    $("sesion-meta").textContent = `${s.nombre_gerente} quiere desarrollar una aplicación · ${s.rol_gerente} · ${s.organizacion}`;
    const d = dominioDe(s.id);
    $("dom-contexto").value = d.contexto || "";
    $("dom-org").value = d.org || s.organizacion || "";
    $("dom-hoy").value = d.hoy || "";
    $("dom-objetivo").value = d.objetivo || "";
    $("dom-desconocido").value = d.desconocido || "";
    pintarSlotsReq(reqsDe(s.id));
    renderChat();
    renderReqs();
  }

  async function crearSesion(caso) {
    if (!exigeNombre()) return;
    const sesion = {
      id: uid(),
      titulo: caso.titulo,
      organizacion: caso.organizacion,
      rol_gerente: caso.rol,
      nombre_gerente: caso.nombre,
      escenario: caso.escenario,
      creado_por: state.nombre,
      creado_en: now()
    };
    const saludo = {
      id: uid(),
      sesion_id: sesion.id,
      autor: caso.nombre,
      rol: "gerente",
      contenido: `Hola, soy ${caso.nombre}, ${caso.rol}. Necesitamos una aplicación, pero no sé por dónde empezar a explicarlo. Pregúntenme de a una cosa. ¿Qué quieren saber primero?`,
      creado_en: now()
    };
    let remoto = null;
    try {
      await upsert("sesiones", sesion, LS.sesiones, "sesiones");
    } catch (err) {
      remoto = err;
    }
    try {
      await upsert("mensajes", saludo, LS.mensajes, "mensajes");
    } catch (err) {
      remoto = remoto || err;
    }
    state.sesionActual = sesion;
    state.sesiones = [sesion, ...state.sesiones.filter((x) => !mismoId(x.id, sesion.id))];
    pintarSesionEnUI();
    if (state.sb && !remoto) await refrescarAula();
    if (remoto) toast("El caso quedó en este navegador, pero no se compartió: " + remoto.message);
    else toast(state.sb ? "Caso abierto. Cuando lo corrijan, va a aparecer en Trabajos." : "Caso abierto solo en este navegador: el aula no está conectada.");
  }

  function mostrarPensando() {
    const log = $("chat-log");
    if (!log || $("bubble-pensando") || !state.sesionActual) return;
    const d = document.createElement("div");
    d.id = "bubble-pensando";
    d.className = "bubble gerente pensando";
    d.innerHTML = `<b>${escapeHtml(state.sesionActual.nombre_gerente + " · " + state.sesionActual.rol_gerente)}</b><span class="bubble-text">Escribiendo…</span>`;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }

  function quitarPensando() {
    const el = $("bubble-pensando");
    if (el) el.remove();
  }

  async function chatAI(messages, { json = false } = {}) {
    const cfg = cfgAI();
    const proveedor = cfg.proveedor;
    const clave = (cfg.clave || "").trim();

    if (proveedor === "groq") {
      if (!clave) throw new Error("Groq no está configurado en el repositorio.");
      const intentos = json
        ? [{ model: "qwen/qwen3.6-27b", reasoning_effort: "none" }]
        : [
            { model: "qwen/qwen3.6-27b", reasoning_effort: "none" },
            { model: "openai/gpt-oss-20b", reasoning_effort: "low", include_reasoning: false }
          ];
      let ultimoError = "Groq rechazó el pedido.";
      for (const intento of intentos) {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), json ? 18000 : 12000);
        let res;
        let data = {};
        try {
          res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + clave
            },
            signal: ctrl.signal,
            body: JSON.stringify({
              model: intento.model,
              temperature: json ? 0.3 : 0.7,
              max_tokens: json ? 700 : 280,
              messages,
              reasoning_effort: intento.reasoning_effort,
              include_reasoning: false,
              ...(json ? { response_format: { type: "json_object" } } : {})
            })
          });
          data = await res.json();
        } catch (err) {
          clearTimeout(timer);
          if (err.name === "AbortError") {
            ultimoError = "La corrección tardó demasiado.";
            continue;
          }
          throw err;
        }
        clearTimeout(timer);
        if (!res.ok) {
          ultimoError = data.error?.message || ultimoError;
          continue;
        }
        const msg = data.choices?.[0]?.message || {};
        const texto = String(msg.content || "").trim();
        if (texto) return texto;
        ultimoError = "Groq devolvió una respuesta vacía.";
      }
      throw new Error(ultimoError);
    }

    if (proveedor === "gemini") {
      if (!clave) throw new Error("Falta la clave de Gemini en el repo (secreto AI_KEY_GEMINI). La de Groq no sirve para Gemini.");
      const { system, contents } = contenidosGemini(messages);
      const modelos = ["gemini-3.6-flash", "gemini-3.5-flash"];
      let ultimoError = "Gemini rechazó el pedido.";
      for (const model of modelos) {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 14000);
        let res;
        let data = {};
        try {
          res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(clave)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            signal: ctrl.signal,
            body: JSON.stringify({
              systemInstruction: { parts: [{ text: system }] },
              contents,
              generationConfig: {
                maxOutputTokens: json ? 700 : 220,
                temperature: 0.7,
                thinkingConfig: { thinkingLevel: "MINIMAL" },
                ...(json ? { responseMimeType: "application/json" } : {})
              }
            })
          });
          data = await res.json();
        } catch (err) {
          clearTimeout(timer);
          if (err.name === "AbortError") {
            ultimoError = "Gemini tardó demasiado.";
            continue;
          }
          throw err;
        }
        clearTimeout(timer);
        if (!res.ok) {
          const msg = data.error?.message || ultimoError;
          if (/API_KEY_HTTP_REFERRER_BLOCKED|referer|referrer/i.test(msg)) {
            throw new Error("La clave de Gemini bloquea este sitio. En Google AI Studio, dejá la clave sin restricción de referrer o sumá el dominio de Pages.");
          }
          if (/API key not valid|invalid|PERMISSION/i.test(msg)) {
            throw new Error("La clave de Gemini no es válida. Cargá AI_KEY_GEMINI en los secretos del repo.");
          }
          ultimoError = msg;
          continue;
        }
        const cand = data.candidates?.[0];
        const texto = cand?.content?.parts?.map((p) => p.text).filter(Boolean).join("") || "";
        if (texto.trim()) return texto;
        ultimoError = cand?.finishReason === "SAFETY"
          ? "Gemini bloqueó la respuesta por seguridad. Probá reformular la pregunta."
          : "Gemini devolvió una respuesta vacía.";
      }
      throw new Error(ultimoError);
    }

    throw new Error("Elegí Groq o Gemini en Ajustes.");
  }

  function promptGerente(sesion) {
    const nPreguntas = mensajesDe(sesion.id).filter((m) => m.rol === "analista").length;
    return `Sos ${sesion.nombre_gerente}, ${sesion.rol_gerente} de ${sesion.organizacion}.
Querés que te desarrollen una aplicación. Te están entrevistando analistas de una materia. NO sos programador.

Memoria privada (NUNCA la cuentes de corrido; soltá UN dato si te lo preguntan):
${sesion.escenario}

Turno: van ${nPreguntas} pregunta(s) del analista.

Cómo hablar:
- Español, primera persona, tono de alguien ocupado que no tiene todo pensado.
- Respondé SOLO lo que te preguntaron, y a medias: un hecho, una anécdota o un dolor. Nada más.
- CADA mensaje termina con UNA repregunta concreta al analista (para que tengan que seguir indagando).
- Si piden "contame todo", "qué problema tienen" o "qué necesitás", contá UNA situación chica y preguntá por dónde seguir.
- Hasta la 4ª pregunta: no listes stakeholders, excepciones, ni el proceso entero de hoy.
- No cierres vos la entrevista: no digas "entonces el sistema debería…" ni armes la conclusión. Eso lo hacen ellos.
- Si ya preguntaron bien, confirmá o corregí ese punto y repregunta algo que todavía no salió.
- Inventá detalles coherentes solo cuando pregunten (nombres, horarios, quejas).
- Palabras del dominio: usalas como las usa tu organización, aunque sean ambiguas.
- Nunca hables de bases, APIs, pantallas, arquitectura ni requerimientos numerados.
- 30 a 55 palabras. Sin listas. Una idea por mensaje.`;
  }

  async function preguntarGerente() {
    if (!exigeNombre()) return;
    if (!state.sesionActual) return toast("Primero abrí un caso.");
    if (state.aiBusy) return;
    const texto = $("pregunta").value.trim();
    if (!texto) return;

    const msgUser = {
      id: uid(),
      sesion_id: state.sesionActual.id,
      autor: state.nombre,
      rol: "analista",
      contenido: texto,
      creado_en: now()
    };
    $("pregunta").value = "";
    try {
      await upsert("mensajes", msgUser, LS.mensajes, "mensajes");
      renderChat();
      state.aiBusy = true;
      $("btn-preguntar").disabled = true;
      mostrarPensando();

      const historial = mensajesDe(state.sesionActual.id).map((m) => ({
        role: m.rol === "gerente" ? "assistant" : "user",
        content: (m.rol === "analista" ? `[Analista ${m.autor}]: ` : "") + m.contenido
      }));

      const respuesta = await chatAI([
        { role: "system", content: promptGerente(state.sesionActual) },
        ...historial
      ]);

      const msgAI = {
        id: uid(),
        sesion_id: state.sesionActual.id,
        autor: state.sesionActual.nombre_gerente,
        rol: "gerente",
        contenido: respuesta.trim(),
        creado_en: now()
      };
      await upsert("mensajes", msgAI, LS.mensajes, "mensajes");
      renderChat();
    } catch (err) {
      quitarPensando();
      toast("La IA no pudo responder: " + err.message);
    } finally {
      quitarPensando();
      state.aiBusy = false;
      $("btn-preguntar").disabled = false;
    }
  }

  async function casoNuevoIA() {
    if (!exigeNombre()) return;
    if (state.aiBusy) return;
    state.aiBusy = true;
    $("btn-caso-nuevo").disabled = true;
    try {
      const raw = await chatAI([
        {
          role: "system",
          content: `Generá UN caso nuevo para una práctica de ingeniería de requerimientos en español.
Devolvé SOLO un JSON válido con las claves:
titulo, organizacion, rol, nombre, escenario
El escenario (120-180 palabras) describe a una persona que QUIERE que le desarrollen una aplicación: la organización, el dolor actual, cómo trabajan hoy. No es técnica.
Evitá hospital y biblioteca. Elegí un dominio cotidiano argentino (club, municipio, comercio, cooperativa, facultad, taller, ONG).`
        },
        { role: "user", content: "Nuevo caso, distinto a los anteriores." }
      ], { json: true });
      const limpio = raw.replace(/```json|```/g, "").trim();
      const caso = JSON.parse(limpio);
      await crearSesion({
        titulo: caso.titulo,
        organizacion: caso.organizacion,
        rol: caso.rol,
        nombre: caso.nombre,
        escenario: caso.escenario
      });
    } catch (err) {
      toast("No se pudo inventar el caso: " + err.message + ". Probá Hospital o Biblioteca, o cambiá el modelo en Ajustes.");
    } finally {
      state.aiBusy = false;
      $("btn-caso-nuevo").disabled = false;
    }
  }

  function transcripcion(sesion, tope = 0) {
    const msgs = mensajesDe(sesion.id);
    const lista = tope > 0 ? msgs.slice(-tope) : msgs;
    return lista.map((m) => {
      const quien = m.rol === "gerente" ? `${sesion.nombre_gerente} (${sesion.rol_gerente})` : `Analista ${m.autor}`;
      return `${quien}: ${m.contenido}`;
    }).join("\n\n");
  }

  async function sintesisIA() {
    if (!exigeNombre() || !state.sesionActual) return toast("Abrí un caso y conversen primero.");
    if (state.aiBusy) return;
    const texto = transcripcion(state.sesionActual);
    if (mensajesDe(state.sesionActual.id).length < 3) return toast("Hagan unas preguntas más antes de pedir síntesis.");
    state.aiBusy = true;
    try {
      const raw = await chatAI([
        {
          role: "system",
          content: `Sos docente de ingeniería de requerimientos. A partir de la entrevista, devolvés un JSON con:
contexto, organizacion, hoy, objetivo, desconocido, stakeholders (array de {nombre, interes}), conflicto, gap.
No inventes lo que no se insinuó: si falta, ponelo en desconocido. Español formal y breve.`
        },
        { role: "user", content: texto }
      ], { json: true });
      const d = JSON.parse(raw.replace(/```json|```/g, "").trim());
      $("dom-contexto").value = d.contexto || "";
      $("dom-org").value = d.organizacion || "";
      $("dom-hoy").value = d.hoy || "";
      $("dom-objetivo").value = d.objetivo || "";
      const extra = [
        d.desconocido || "",
        d.stakeholders ? "Stakeholders: " + d.stakeholders.map((s) => `${s.nombre} (${s.interes})`).join("; ") : "",
        d.conflicto ? "Conflicto: " + d.conflicto : "",
        d.gap ? "Gap semántico: " + d.gap : ""
      ].filter(Boolean).join("\n");
      $("dom-desconocido").value = extra;
      await persistirDominio();
      toast("Síntesis cargada. Revísenla: la IA puede haberse equivocado.");
    } catch (err) {
      toast("No se pudo sintetizar: " + err.message);
    } finally {
      state.aiBusy = false;
    }
  }

  async function persistirDominio({ silent = false } = {}) {
    if (!state.sesionActual) return;
    const row = {
      sesion_id: state.sesionActual.id,
      contexto: $("dom-contexto").value,
      organizacion: $("dom-org").value,
      hoy: $("dom-hoy").value,
      objetivo: $("dom-objetivo").value,
      desconocido: $("dom-desconocido").value,
      autor: state.nombre,
      actualizado_en: now()
    };
    state.dominios[row.sesion_id] = row;
    saveJSON(LS.dominios, state.dominios);
    const all = loadJSON(LS.dominio, {});
    all[row.sesion_id] = { contexto: row.contexto, org: row.organizacion, hoy: row.hoy, objetivo: row.objetivo, desconocido: row.desconocido };
    saveJSON(LS.dominio, all);
    try {
      if (state.sb) {
        const { error } = await state.sb.from("dominios").upsert(filaDominio(row));
        if (error) throw error;
      }
      if (!silent) toast(state.sb ? "Dominio guardado para todo el aula." : "Dominio guardado en este navegador.");
    } catch (err) {
      toast("El dominio quedó local, pero Supabase no lo tomó: " + err.message);
    }
  }

  function parseJSONRespuesta(raw) {
    const limpio = String(raw || "").replace(/```json|```/g, "").trim();
    const inicio = limpio.indexOf("{");
    const fin = limpio.lastIndexOf("}");
    if (inicio < 0 || fin < inicio) throw new Error("La IA no devolvió un JSON usable.");
    return JSON.parse(limpio.slice(inicio, fin + 1));
  }

  function promptCorreccionReq() {
    return `Sos docente de ingeniería de requerimientos. Revisá TODO el trabajo: dominio, los 10 requerimientos y el chat.

Mirás cuatro cosas:
1) FORMATO. Necesidad, deseo y sistema: "El sistema debe" + verbo + objeto + condición observable. Expectativa: cualidad MEDIBLE. Usuario: "El usuario quiere…" sin diseño técnico. Atómico (una idea), verificable, sin "rápido/amigable/etc.".
2) COHERENCIA. Lo escrito tiene que salir del chat. Si un req no se sostiene, o el dominio se contradice, marcalo.
3) REDACCIÓN. Mayúscula al empezar, punto al final, tildes, ortografía, concordancia y frases claras. Si falta un punto o arranca en minúscula, corregilo.
4) CONSEJO. Decí qué mejorar: qué preguntar, qué reescribir, qué falta.

No inventes hechos. Si falta evidencia en el chat, decilo.

Devolvé SOLO un JSON válido:
{
  "formato": "qué tan bien escribieron la forma; 4 a 8 líneas",
  "coherencia": "si dominio, chat y reqs se sostienen entre sí; 4 a 8 líneas",
  "redaccion": "mayúsculas, puntos, tildes y claridad; 4 a 8 líneas. Nombrá ejemplos concretos.",
  "consejos": ["consejo concreto 1", "consejo 2", "consejo 3"],
  "dominio": { "contexto": "", "organizacion": "", "hoy": "", "objetivo": "", "desconocido": "" },
  "correcciones": [
    { "id": "id", "codigo": "RF1", "tipo": "necesidad", "enunciado_original": "...", "enunciado_corregido": "...", "motivo": "formato, coherencia o redacción" }
  ],
  "faltantes": [
    { "tipo": "sistema", "enunciado": "El sistema debe...", "fundamento": "En el chat se dijo que..." }
  ]
}
correcciones: SOLO los que hay que cambiar (incluí los de redacción). faltantes: máximo 3 y solo si el chat lo sostiene. consejos: 3 a 5, accionables.`;
  }

  function textoEspecificacion(sesion) {
    const d = dominioDe(sesion.id);
    const reqs = reqsDe(sesion.id).map((r) =>
      `id=${r.id} | ${r.codigo} [${r.tipo}] (${r.autor}): ${r.enunciado}`
    ).join("\n");
    return [
      `Caso: ${sesion.titulo}`,
      "",
      "ESPECIFICACIÓN — DOMINIO",
      `Contexto: ${d.contexto || "(vacío)"}`,
      `Organización: ${d.org || sesion.organizacion || "(vacío)"}`,
      `Cómo se hace hoy: ${d.hoy || "(vacío)"}`,
      `Objetivo general: ${d.objetivo || "(vacío)"}`,
      `Lo que todavía no sabemos: ${d.desconocido || "(vacío)"}`,
      "",
      "ESPECIFICACIÓN — REQUERIMIENTOS",
      reqs || "(ninguno escrito)",
      "",
      "CONTEXTO (últimos mensajes del chat)",
      transcripcion(sesion, 10) || "(sin chat)"
    ].join("\n");
  }

  function specVacia(sesion) {
    const d = dominioDe(sesion.id);
    const hayDom = [d.contexto, d.org, d.hoy, d.objetivo, d.desconocido].some((x) => String(x || "").trim());
    return !hayDom && slotsIncompletos().length === TIPOS_PRACTICA.length;
  }

  function informeCorreccion(data, originales) {
    const corr = (data.correcciones || []).map((c) => {
      const cambio = (c.enunciado_original || "").trim() !== (c.enunciado_corregido || "").trim();
      return `**${c.codigo || ""}** (${etiquetaTipo(c.tipo)})${cambio ? " — corregido" : " — bien"}\n- Original: ${c.enunciado_original || ""}\n- Corregido: ${c.enunciado_corregido || ""}\n- ${c.motivo || ""}`;
    }).join("\n\n");
    const faltan = (data.faltantes || []).map((f) =>
      `- (${etiquetaTipo(f.tipo)}) ${f.enunciado}\n  Fundamento: ${f.fundamento || ""}`
    ).join("\n");
    const consejos = (data.consejos || []).map((c) => `- ${c}`).join("\n");
    const escritos = originales.map((r) => `- ${r.codigo} [${r.tipo}] (${r.autor}): ${r.enunciado}`).join("\n");
    const dom = data.dominio || {};
    return [
      "## Formato",
      data.formato || data.comparacion || "Sin revisión de formato.",
      "## Coherencia",
      data.coherencia || "Sin revisión de coherencia.",
      "## Redacción",
      data.redaccion || "Sin revisión de mayúsculas, puntos u ortografía.",
      "## Qué mejorar",
      consejos || "Nada puntual.",
      "## Dominio revisado",
      `- Contexto: ${dom.contexto || "sin cambios sugeridos"}`,
      `- Organización: ${dom.organizacion || "sin cambios sugeridos"}`,
      `- Hoy: ${dom.hoy || "sin cambios sugeridos"}`,
      `- Objetivo: ${dom.objetivo || "sin cambios sugeridos"}`,
      `- Desconocido: ${dom.desconocido || "sin cambios sugeridos"}`,
      "## Requerimientos que escribieron",
      escritos || "Ninguno.",
      "## Enunciados reescritos",
      corr || "Ninguno hacía falta reescribir.",
      "## Lo que faltaba (si el chat lo sostiene)",
      faltan || "Nada evidente."
    ].join("\n\n");
  }

  async function aplicarDominioCorregido(dom) {
    if (!dom || !state.sesionActual) return;
    if (dom.contexto) $("dom-contexto").value = dom.contexto;
    if (dom.organizacion) $("dom-org").value = dom.organizacion;
    if (dom.hoy) $("dom-hoy").value = dom.hoy;
    if (dom.objetivo) $("dom-objetivo").value = dom.objetivo;
    if (dom.desconocido) $("dom-desconocido").value = dom.desconocido;
    await persistirDominio({ silent: true });
  }

  async function corregirReqs() {
    if (!exigeNombre() || !state.sesionActual) return toast("Abrí un caso primero.");
    if (state.aiBusy) return;
    await persistirDominio({ silent: true });
    await persistirSlotsReq();
    const faltanTipos = slotsIncompletos();
    if (faltanTipos.length) {
      return toast("Para practicar escribí 2 de cada tipo. Faltan: " + faltanTipos.join(", ") + ".");
    }
    if (mensajesDe(state.sesionActual.id).filter((m) => m.rol === "analista").length < 1) {
      return toast("El contexto es el chat: hacé al menos una pregunta antes de corregir.");
    }
    if (specVacia(state.sesionActual)) {
      return toast("Completá el dominio a partir del chat antes de corregir.");
    }
    const lista = reqsDe(state.sesionActual.id);
    state.aiBusy = true;
    $("btn-corregir-req").disabled = true;
    $("btn-corregir-req").textContent = "Corrigiendo…";
    toast("Corrigiendo formato, coherencia, redacción y consejos…");
    try {
      const raw = await chatAI([
        { role: "system", content: promptCorreccionReq() },
        { role: "user", content: textoEspecificacion(state.sesionActual) }
      ], { json: true });
      const data = parseJSONRespuesta(raw);
      const informe = informeCorreccion(data, lista);
      $("feedback-ia").innerHTML = "<h3>Corrección de la especificación</h3>" + markdown(informe);

      await aplicarDominioCorregido(data.dominio);

      for (const c of data.correcciones || []) {
        const req = lista.find((r) => r.id === c.id) || lista.find((r) => r.codigo === c.codigo);
        if (!req || !c.enunciado_corregido) continue;
        req.enunciado = String(c.enunciado_corregido).trim();
        if (c.tipo) req.tipo = c.tipo;
        await upsert("requerimientos", req, LS.reqs, "reqs");
      }

      for (const f of data.faltantes || []) {
        if (!f.enunciado) continue;
        const tipo = f.tipo || "sistema";
        const row = {
          id: uid(),
          sesion_id: state.sesionActual.id,
          codigo: codigoReq(tipo, state.sesionActual.id),
          tipo,
          enunciado: String(f.enunciado).trim(),
          autor: "IA · " + state.nombre,
          creado_en: now()
        };
        await upsert("requerimientos", row, LS.reqs, "reqs");
      }

      const rev = {
        id: uid(),
        sesion_id: state.sesionActual.id,
        autor: "IA · " + state.nombre,
        comentario: informe,
        creado_en: now()
      };
      await upsert("revisiones_req", rev, LS.revisionesReq, "revisionesReq");
      await refrescarAula();
      pintarSlotsReq(reqsDe(state.sesionActual.id));
      renderReqs();
      if (state.tab === "trabajos") renderTrabajos();
      toast("Listo. Abajo está la revisión: formato, coherencia, redacción y qué mejorar.");
    } catch (err) {
      toast("No se pudo corregir: " + err.message);
    } finally {
      state.aiBusy = false;
      $("btn-corregir-req").disabled = false;
      $("btn-corregir-req").textContent = "Corregir";
    }
  }

  function idsEnHistorial() {
    return new Set(state.revisionesReq.map((r) => r.sesion_id).filter(Boolean));
  }

  function sesionesEnHistorial() {
    const ids = idsEnHistorial();
    return (state.sesiones || []).filter((s) => [...ids].some((id) => mismoId(id, s.id)));
  }

  function cuerpoTrabajo(s) {
    const d = dominioDe(s.id);
    const msgs = mensajesDe(s.id).map((m) =>
      `<p><strong>${escapeHtml(m.rol === "gerente" ? s.nombre_gerente : "Analista " + m.autor)}</strong> — ${escapeHtml(m.contenido)}</p>`
    ).join("");
    const reqs = reqsDe(s.id).map((r) =>
      `<li><strong>${escapeHtml(r.codigo)}</strong> (${escapeHtml(etiquetaTipo(r.tipo))}, ${escapeHtml(r.autor)}): ${escapeHtml(r.enunciado)}</li>`
    ).join("");
    const revs = state.revisionesReq.filter((r) => r.sesion_id === s.id).map((r) =>
      `<div class="rev-item"><strong>${escapeHtml(r.autor)}</strong><div class="content">${markdown(r.comentario)}</div></div>`
    ).join("");
    return `
      <p class="hint">${escapeHtml(s.creado_por)} · ${escapeHtml(s.nombre_gerente)}, ${escapeHtml(s.rol_gerente)} · ${escapeHtml(s.organizacion)}</p>
      <div class="row" style="margin-bottom:12px">
        <button class="btn small btn-seguir-caso" type="button" data-id="${s.id}">Seguir este caso</button>
        <button class="btn small btn-borrar-trabajo" type="button" data-id="${s.id}">Borrar del aula</button>
      </div>
      <h3>Dominio</h3>
      <p><strong>Contexto.</strong> ${escapeHtml(d.contexto || "sin cargar")}</p>
      <p><strong>Organización.</strong> ${escapeHtml(d.org || s.organizacion)}</p>
      <p><strong>Hoy.</strong> ${escapeHtml(d.hoy || "sin cargar")}</p>
      <p><strong>Objetivo.</strong> ${escapeHtml(d.objetivo || "sin cargar")}</p>
      <p><strong>Desconocido.</strong> ${escapeHtml(d.desconocido || "sin cargar")}</p>
      <h3>Requerimientos</h3>
      <ul>${reqs || "<li>Todavía no escribieron requerimientos.</li>"}</ul>
      <h3>Chat</h3>
      ${msgs || "<p class='hint'>No hubo entrevista guardada.</p>"}
      <h3>Revisión de la IA</h3>
      ${revs || "<p class='hint'>Todavía no hay corrección.</p>"}
    `;
  }

  function renderTrabajos() {
    const filtro = ($("filtro-autor")?.value || "").trim().toLowerCase();
    const box = $("lista-sesiones");
    if (!box) return;
    const lista = sesionesEnHistorial().filter((s) => {
      if (!filtro) return true;
      const msgs = mensajesDe(s.id);
      const reqs = reqsDe(s.id);
      const blob = [s.creado_por, s.titulo, ...msgs.map((m) => m.autor), ...reqs.map((r) => r.autor)].join(" ").toLowerCase();
      return blob.includes(filtro);
    });
    if (!lista.length) {
      box.innerHTML = "<p class='hint'>Todavía no hay trabajos. Acá aparece cada práctica después de pulsar Corregir.</p>";
      return;
    }
    box.innerHTML = lista.map((s) => {
      const nReq = reqsDe(s.id).length;
      const abierto = mismoId(state.trabajoAbierto, s.id);
      return `
      <details class="trabajo${abierto ? " abierto" : ""}" data-id="${s.id}" ${abierto ? "open" : ""}>
        <summary class="trabajo-cab">
          <span>
            <strong>${escapeHtml(s.titulo)}</strong>
            <small>${escapeHtml(s.creado_por || "sin nombre")} · ${nReq} requerimientos · corregido</small>
          </span>
          <span class="trabajo-flecha" aria-hidden="true"></span>
        </summary>
        <div class="trabajo-cuerpo">${cuerpoTrabajo(s)}</div>
      </details>`;
    }).join("");
    box.querySelectorAll("details.trabajo").forEach((el) => {
      el.addEventListener("toggle", () => {
        if (el.open) state.trabajoAbierto = el.dataset.id;
        else if (mismoId(state.trabajoAbierto, el.dataset.id)) state.trabajoAbierto = null;
        el.classList.toggle("abierto", el.open);
      });
    });
    box.querySelectorAll(".btn-seguir-caso").forEach((btn) => {
      btn.onclick = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        state.sesionActual = state.sesiones.find((s) => mismoId(s.id, btn.dataset.id)) || null;
        pintarSesionEnUI();
        irTab("practica");
      };
    });
    box.querySelectorAll(".btn-borrar-trabajo").forEach((btn) => {
      btn.onclick = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        borrarTrabajo(btn.dataset.id);
      };
    });
  }

  async function borrarTrabajo(id) {
    if (!id) return;
    if (!confirm("¿Borrar este trabajo del aula para todos?")) return;
    try {
      if (state.sb) {
        await state.sb.from("revisiones_req").delete().eq("sesion_id", id);
        await state.sb.from("requerimientos").delete().eq("sesion_id", id);
        await state.sb.from("mensajes").delete().eq("sesion_id", id);
        await state.sb.from("dominios").delete().eq("sesion_id", id);
        const { error } = await state.sb.from("sesiones").delete().eq("id", id);
        if (error) throw error;
      }
      state.sesiones = (state.sesiones || []).filter((s) => !mismoId(s.id, id));
      state.mensajes = (state.mensajes || []).filter((m) => !mismoId(m.sesion_id, id));
      state.reqs = (state.reqs || []).filter((r) => !mismoId(r.sesion_id, id));
      state.revisionesReq = (state.revisionesReq || []).filter((r) => !mismoId(r.sesion_id, id));
      const dominios = { ...(state.dominios || {}) };
      delete dominios[id];
      delete dominios[String(id)];
      state.dominios = dominios;
      saveJSON(LS.sesiones, state.sesiones);
      saveJSON(LS.mensajes, state.mensajes);
      saveJSON(LS.reqs, state.reqs);
      saveJSON(LS.revisionesReq, state.revisionesReq);
      saveJSON(LS.dominios, state.dominios);
      if (mismoId(state.sesionActual?.id, id)) {
        state.sesionActual = null;
        pintarSesionEnUI();
      }
      if (mismoId(state.trabajoAbierto, id)) state.trabajoAbierto = null;
      renderTrabajos();
      toast("Trabajo borrado del aula.");
    } catch (err) {
      toast("No se pudo borrar: " + err.message);
    }
  }

  function renderListaSesiones() {
    renderTrabajos();
  }

  function renderHistorial() {
    renderTrabajos();
  }

  async function guardarNombre() {
    const n = $("input-nombre").value.trim();
    if (n.length < 2) return toast("Escribí nombre y apellido.");
    state.nombre = n;
    localStorage.setItem(LS.nombre, n);
    renderNombre();
    $("modal-nombre").classList.remove("show");
    if (state.sb) {
      await state.sb.from("perfiles").upsert({ nombre: n, visto_en: now() });
    }
  }

  function etiquetaModelo(proveedor) {
    return proveedor === "gemini" ? "Modelo activo: Gemini 3.6 Flash." : "Modelo activo: Groq (rápido).";
  }

  function pintarAjustesAI() {
    const proveedor = proveedorElegido();
    $("ai-proveedor").value = proveedor;
    $("ai-estado").textContent = etiquetaModelo(proveedor);
  }

  function guardarAI() {
    const proveedor = normalizarProveedor($("ai-proveedor").value);
    saveJSON(LS.ai, { proveedor });
    $("ai-estado").textContent = etiquetaModelo(proveedor);
    toast(proveedor === "gemini" ? "Ahora las respuestas van por Gemini." : "Ahora las respuestas van por Groq.");
  }

  function irTab(tab) {
    state.tab = tab;
    document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
    document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.id === "panel-" + tab));
    if (tab === "trabajos") renderTrabajos();
  }

  function eventos() {
    document.querySelectorAll(".tab").forEach((b) => b.onclick = () => irTab(b.dataset.tab));
    $("btn-nombre").onclick = () => {
      $("input-nombre").value = state.nombre;
      $("modal-nombre").classList.add("show");
    };
    $("btn-guardar-nombre").onclick = guardarNombre;
    $("input-nombre").addEventListener("keydown", (e) => {
      if (e.key === "Enter") guardarNombre();
    });
    $("btn-editar-teoria").onclick = () => {
      if (!exigeNombre()) return;
      $("tema-contenido").classList.add("hidden");
      $("editor-teoria").classList.remove("hidden");
    };
    $("btn-md-titulo").onclick = () => insertarBloqueTeoria("titulo");
    $("btn-md-texto").onclick = () => insertarBloqueTeoria("texto");
    $("btn-md-lista").onclick = () => insertarBloqueTeoria("lista");
    $("btn-cancelar-teoria").onclick = () => mostrarTema(state.temaActual.slug);
    $("btn-guardar-teoria").onclick = guardarTeoria;
    $("btn-nueva-clase").onclick = () => abrirModalApartado("", { nuevaClase: true });
    $("btn-crear-apartado").onclick = crearApartado;
    $("btn-cancelar-apartado").onclick = () => $("modal-apartado").classList.remove("show");
    $("nuevo-titulo").addEventListener("keydown", (e) => {
      if (e.key === "Enter") crearApartado();
    });
    $("btn-ver-cambios").onclick = () => {
      $("revisiones-teoria").classList.toggle("hidden");
      renderRevisionesTema();
    };
    $("btn-caso-hospital").onclick = () => crearSesion(CASOS.hospital);
    $("btn-caso-biblioteca").onclick = () => crearSesion(CASOS.biblioteca);
    $("btn-caso-nuevo").onclick = casoNuevoIA;
    $("btn-preguntar").onclick = preguntarGerente;
    $("pregunta").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        preguntarGerente();
      }
    });
    $("btn-guardar-dominio").onclick = async () => {
      if (!exigeNombre() || !state.sesionActual) return toast("Abrí un caso.");
      await persistirDominio();
    };
    $("btn-sintesis-ia").onclick = sintesisIA;
    $("btn-corregir-req").onclick = corregirReqs;
    $("filtro-autor").addEventListener("input", renderListaSesiones);
    $("btn-guardar-ai").onclick = guardarAI;
    $("ai-proveedor").addEventListener("change", guardarAI);
    $("btn-tema-oscuro").onclick = () => aplicarTema("dark");
    $("btn-tema-claro").onclick = () => aplicarTema("light");
  }

  async function init() {
    eventos();
    state.clasesExtra = loadJSON(LS.clases, []);
    aplicarTema(localStorage.getItem(LS.tema) || temaActual());
    renderNombre();
    if (!state.nombre) $("modal-nombre").classList.add("show");
    await cargarScriptOpcional("./config.local.js");
    pintarAjustesAI();
    vaciarHistorialLocalSiHaceFalta();
    pintarTeoriaInicial();
    await conectarSupabase();
    await Promise.all([
      cargarTemas({ sembrar: true }),
      cargarRevisiones(),
      cargarSesiones(),
      cargarMensajes(),
      cargarReqs(),
      cargarRevisionesReq(),
      cargarDominios()
    ]);
    pintarSesionEnUI();
    pintarEstadoAula();
    renderListaSesiones();
  }

  init();
})();
