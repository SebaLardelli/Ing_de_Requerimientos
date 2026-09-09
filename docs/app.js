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
    tema: "ir.tema"
  };

  const CASOS = {
    hospital: {
      titulo: "Hospital — gestión de turnos",
      organizacion: "Hospital público de la facultad / red municipal",
      rol: "Jefa de Administración",
      nombre: "Laura Gómez",
      escenario: "El hospital quiere un sistema para que los pacientes soliciten, consulten, modifiquen y cancelen turnos, y para que el personal gestione agendas y la atención. Hoy gran parte se resuelve por ventanilla, papel y llamadas. Laura no es técnica: describe situaciones, no soluciones."
    },
    biblioteca: {
      titulo: "Biblioteca de la facultad",
      organizacion: "Biblioteca central de la facultad",
      rol: "Director de Biblioteca",
      nombre: "Martín Alegre",
      escenario: "La biblioteca necesita registrar préstamos y devoluciones, stock, usuarios (alumno, docente, no docente) y, si se puede, reservas y avisos. Hoy se anota en planillas y a veces se pierde el rastro de un ejemplar. Martín habla el idioma de la biblioteca, no el de sistemas."
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
    sesionActual: null,
    sb: null,
    canales: [],
    aiBusy: false
  };

  const $ = (id) => document.getElementById(id);
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random());
  const now = () => new Date().toISOString();
  const escapeHtml = (s = "") => String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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

  function cfgSupabase() {
    const g = cfgGlobal();
    return {
      url: (g.supabaseUrl || "").trim(),
      key: (g.supabaseAnonKey || "").trim()
    };
  }

  function claveDelModelo(proveedor) {
    const g = cfgGlobal();
    if (proveedor === "groq") return (g.aiKeyGroq || g.aiKey || "").trim();
    if (proveedor === "gemini") return (g.aiKeyGemini || "").trim();
    return "";
  }

  function cfgAI() {
    const saved = loadJSON(LS.ai, { proveedor: "" });
    const g = cfgGlobal();
    const select = $("ai-proveedor");
    const proveedor = (select && select.value) || saved.proveedor || g.aiProvider || "pollinations";
    return {
      proveedor,
      clave: claveDelModelo(proveedor)
    };
  }

  async function conectarSupabase() {
    const cfg = cfgSupabase();
    state.canales.forEach((c) => {
      try { c.unsubscribe(); } catch (_) {}
    });
    state.canales = [];
    state.sb = null;
    $("sb-dot").classList.remove("on");
    $("sb-texto").textContent = "Todavía no hay aula remota. El trabajo queda en este navegador.";

    if (!cfg.url || !cfg.key || !window.supabase) return false;
    const client = window.supabase.createClient(cfg.url, cfg.key);
    const { error } = await client.from("temas_teoria").select("id").limit(1);
    if (error) {
      $("sb-texto").textContent = "El aula remota no respondió. Revisá los secretos del repositorio y el SQL.";
      return false;
    }
    state.sb = client;
    $("sb-dot").classList.add("on");
    $("sb-texto").textContent = "Aula sincronizada. Los cambios se ven en todos.";
    escucharRealtime();
    return true;
  }

  function escucharRealtime() {
    if (!state.sb) return;
    const ch = state.sb.channel("aula-ir")
      .on("postgres_changes", { event: "*", schema: "public", table: "temas_teoria" }, async () => {
        await cargarTemas();
        if (state.temaActual) mostrarTema(state.temaActual.slug);
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "revisiones_teoria" }, cargarRevisiones)
      .on("postgres_changes", { event: "*", schema: "public", table: "sesiones" }, cargarSesiones)
      .on("postgres_changes", { event: "*", schema: "public", table: "mensajes" }, async () => {
        await cargarMensajes();
        renderChat();
        if (state.tab === "historial") renderHistorial();
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "requerimientos" }, async () => {
        await cargarReqs();
        renderReqs();
        if (state.tab === "historial") renderHistorial();
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "revisiones_req" }, cargarRevisionesReq)
      .on("postgres_changes", { event: "*", schema: "public", table: "dominios" }, async () => {
        await cargarDominios();
        pintarSesionEnUI();
        if (state.tab === "historial") renderHistorial();
      })
      .subscribe();
    state.canales.push(ch);
  }

  async function cargarTemas() {
    if (state.sb) {
      const { data, error } = await state.sb.from("temas_teoria").select("*").order("orden");
      if (!error && data) {
        if (data.length === 0) {
          await sembrarTeoria();
          const second = await state.sb.from("temas_teoria").select("*").order("orden");
          state.temas = second.data || [];
        } else {
          state.temas = data;
        }
        saveJSON(LS.temas, state.temas);
        renderListaTemas();
        return;
      }
    }
    const local = loadJSON(LS.temas, []);
    state.temas = local.length ? local : TEORIA_INICIAL.map((t) => ({
      id: uid(),
      ...t,
      actualizado_por: "material de clase",
      actualizado_en: now()
    }));
    saveJSON(LS.temas, state.temas);
    renderListaTemas();
  }

  async function sembrarTeoria() {
    if (!state.sb) return;
    const rows = TEORIA_INICIAL.map((t, i) => ({
      slug: t.slug,
      clase: t.clase,
      titulo: t.titulo,
      resumen: t.resumen,
      contenido: t.contenido,
      orden: t.orden || i + 1,
      actualizado_por: "material de clase"
    }));
    await state.sb.from("temas_teoria").upsert(rows, { onConflict: "slug" });
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

  async function cargarSesiones() {
    if (state.sb) {
      const { data, error } = await state.sb
        .from("sesiones")
        .select("*")
        .order("creado_en", { ascending: false });
      if (!error && data) {
        state.sesiones = data;
        saveJSON(LS.sesiones, data);
        renderListaSesiones();
        return;
      }
    }
    state.sesiones = loadJSON(LS.sesiones, []);
    renderListaSesiones();
  }

  async function cargarMensajes() {
    if (state.sb) {
      const { data, error } = await state.sb
        .from("mensajes")
        .select("*")
        .order("creado_en", { ascending: true });
      if (!error && data) {
        state.mensajes = data;
        saveJSON(LS.mensajes, data);
        return;
      }
    }
    state.mensajes = loadJSON(LS.mensajes, []);
  }

  async function cargarReqs() {
    if (state.sb) {
      const { data, error } = await state.sb
        .from("requerimientos")
        .select("*")
        .order("creado_en", { ascending: true });
      if (!error && data) {
        state.reqs = data;
        saveJSON(LS.reqs, data);
        return;
      }
    }
    state.reqs = loadJSON(LS.reqs, []);
  }

  async function cargarRevisionesReq() {
    if (state.sb) {
      const { data, error } = await state.sb
        .from("revisiones_req")
        .select("*")
        .order("creado_en", { ascending: true });
      if (!error && data) {
        state.revisionesReq = data;
        saveJSON(LS.revisionesReq, data);
        return;
      }
    }
    state.revisionesReq = loadJSON(LS.revisionesReq, []);
  }

  async function cargarDominios() {
    if (state.sb) {
      const { data, error } = await state.sb.from("dominios").select("*");
      if (!error && data) {
        state.dominios = Object.fromEntries(data.map((d) => [d.sesion_id, d]));
        saveJSON(LS.dominios, state.dominios);
        return;
      }
    }
    state.dominios = loadJSON(LS.dominios, {});
  }

  async function upsert(tabla, row, localKey, collection) {
    if (state.sb) {
      const { error } = await state.sb.from(tabla).upsert(row);
      if (error) throw error;
    }
    const list = state[collection];
    const i = list.findIndex((x) => x.id === row.id);
    if (i >= 0) list[i] = { ...list[i], ...row };
    else list.push(row);
    saveJSON(localKey, list);
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
    const orden = [];
    state.temas.forEach((t) => {
      if (t.clase && !orden.includes(t.clase)) orden.push(t.clase);
    });
    ["Clase 1", "Clase 2", "Práctica"].forEach((c) => {
      if (!orden.includes(c)) orden.push(c);
    });
    return orden;
  }

  function abrirModalApartado(clase) {
    if (!exigeNombre()) return;
    $("nuevo-clase").value = clase || state.temaActual?.clase || "Clase 1";
    $("nuevo-titulo").value = "";
    $("nuevo-resumen").value = "";
    $("apartado-clase-hint").textContent = "Se agrega dentro de " + ($("nuevo-clase").value || "la clase") + ". Todos lo van a ver.";
    $("modal-apartado").classList.add("show");
    $("nuevo-titulo").focus();
  }

  async function crearApartado() {
    if (!exigeNombre()) return;
    const clase = $("nuevo-clase").value.trim();
    const titulo = $("nuevo-titulo").value.trim();
    const resumen = $("nuevo-resumen").value.trim();
    if (!clase) return toast("Indicá la clase.");
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
      const temas = state.temas.filter((t) => t.clase === clase);
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
      btn.onclick = () => mostrarTema(btn.dataset.slug);
    });
    box.querySelectorAll(".btn-add-apartado").forEach((btn) => {
      btn.onclick = () => abrirModalApartado(btn.dataset.clase);
    });
  }

  function mostrarTema(slug) {
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
        const { error: e1 } = await state.sb.from("temas_teoria").update({
          titulo,
          resumen,
          contenido: nuevo,
          actualizado_por: state.nombre,
          actualizado_en: state.temaActual.actualizado_en
        }).eq("id", state.temaActual.id);
        if (e1) throw e1;
        const { error: e2 } = await state.sb.from("revisiones_teoria").insert(rev);
        if (e2) throw e2;
      }
      const i = state.temas.findIndex((t) => t.id === state.temaActual.id);
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
    return state.mensajes.filter((m) => m.sesion_id === sesionId);
  }

  function reqsDe(sesionId) {
    return state.reqs.filter((r) => r.sesion_id === sesionId);
  }

  function dominioDe(sesionId) {
    const d = state.dominios[sesionId] || loadJSON(LS.dominio, {})[sesionId] || {};
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
      log.innerHTML = "<div class='bubble sistema'><b>Aula</b>Abrí un caso para empezar la entrevista. No asumas información: preguntá.</div>";
      return;
    }
    const msgs = mensajesDe(state.sesionActual.id);
    log.innerHTML = msgs.map((m) => `
      <div class="bubble ${m.rol}">
        <b>${escapeHtml(m.rol === "gerente" ? (state.sesionActual.nombre_gerente + " · " + state.sesionActual.rol_gerente) : m.autor)}</b>
        ${escapeHtml(m.contenido)}
      </div>
    `).join("");
    log.scrollTop = log.scrollHeight;
  }

  function codigoReq(tipo, sesionId) {
    const lista = reqsDe(sesionId);
    const esN = tipo === "expectativa" || tipo === "no_funcional";
    const n = lista.filter((r) => (esN ? /RFN/i.test(r.codigo) : /^RF\d/i.test(r.codigo))).length + 1;
    return esN ? `RFN${n}` : `RF${n}`;
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
    if (!lista.length) {
      box.innerHTML = "<p class='hint'>Todavía no cargaron requerimientos de este caso.</p>";
      return;
    }
    box.innerHTML = lista.map((r) => `
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
      $("sesion-meta").textContent = "Elegí un escenario o pedile a la IA uno nuevo.";
      ["dom-contexto", "dom-org", "dom-hoy", "dom-objetivo", "dom-desconocido"].forEach((id) => { $(id).value = ""; });
      renderChat();
      renderReqs();
      return;
    }
    $("sesion-titulo").textContent = s.titulo;
    $("sesion-meta").textContent = `${s.nombre_gerente} · ${s.rol_gerente} · ${s.organizacion} · abierto por ${s.creado_por}`;
    const d = dominioDe(s.id);
    $("dom-contexto").value = d.contexto || "";
    $("dom-org").value = d.org || s.organizacion || "";
    $("dom-hoy").value = d.hoy || "";
    $("dom-objetivo").value = d.objetivo || "";
    $("dom-desconocido").value = d.desconocido || "";
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
      contenido: `Hola, soy ${caso.nombre}, ${caso.rol}. El equipo de sistemas me dijo que ustedes van a relevarmi el problema. Yo no manejo jerga técnica: cuéntenme qué necesitan saber y les hablo de cómo trabajamos. ¿Por dónde quieren empezar?`,
      creado_en: now()
    };
    try {
      await upsert("sesiones", sesion, LS.sesiones, "sesiones");
      await upsert("mensajes", saludo, LS.mensajes, "mensajes");
      state.sesionActual = sesion;
      state.sesiones = [sesion, ...state.sesiones.filter((x) => x.id !== sesion.id)];
      pintarSesionEnUI();
      renderListaSesiones();
      toast("Caso abierto. Entrevisten: no inventen el dominio.");
    } catch (err) {
      toast("No se pudo crear el caso: " + err.message);
    }
  }

  async function chatAI(messages, { json = false } = {}) {
    const cfg = cfgAI();
    const proveedor = $("ai-proveedor").value || cfg.proveedor || "pollinations";
    const clave = (cfg.clave || "").trim();

    if (proveedor === "groq") {
      if (!clave) throw new Error("Groq no está configurado en el repositorio.");
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + clave
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0.7,
          messages,
          ...(json ? { response_format: { type: "json_object" } } : {})
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Groq rechazó el pedido.");
      return data.choices[0].message.content;
    }

    if (proveedor === "gemini") {
      if (!clave) throw new Error("Gemini no está configurado en el repositorio.");
      const contents = messages
        .filter((m) => m.role !== "system")
        .map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] }));
      const system = messages.find((m) => m.role === "system")?.content || "";
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(clave)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents,
          generationConfig: json ? { responseMimeType: "application/json" } : {}
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Gemini rechazó el pedido.");
      return data.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "";
    }

    const res = await fetch("https://text.pollinations.ai/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "openai",
        messages,
        temperature: 0.7
      })
    });
    if (res.ok) {
      const data = await res.json();
      return data.choices?.[0]?.message?.content || data.content || String(data);
    }
    const plano = messages.map((m) => `${m.role}: ${m.content}`).join("\n\n");
    const fallback = await fetch("https://text.pollinations.ai/" + encodeURIComponent(plano) + "?model=openai");
    if (!fallback.ok) throw new Error("Pollinations no respondió. Probá Groq en Ajustes.");
    return fallback.text();
  }

  function promptGerente(sesion) {
    return `Sos ${sesion.nombre_gerente}, ${sesion.rol_gerente} de ${sesion.organizacion}.
Te están entrevistando analistas de requerimientos de una materia universitaria.

Contexto interno (NO lo vuelques de una vez):
${sesion.escenario}

Reglas estrictas:
- Respondé SIEMPRE en español, en primera persona, como esa persona de negocio.
- NO seas técnico. No hables de bases de datos, APIs, pantallas ni arquitectura.
- NO entregues toda la información en un solo mensaje. Si preguntan una necesidad, contá primero la situación o el problema.
- Inventá detalles coherentes (nombres de sectores, horarios, excepciones, quejas, política interna).
- Dejá entrever conflictos entre áreas sin etiquetarlos como "conflicto".
- Si usan una palabra del dominio, usala como la usa la organización, aunque sea ambigua.
- Si no les preguntaron algo importante, no lo ofrezcas entero: insinuá que "eso lo maneja otro sector".
- Nunca diseñes el sistema ni listes requerimientos.
- Mensajes de 80 a 160 palabras, salvo que pidan un recuento puntual.`;
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
      toast("La IA no pudo responder: " + err.message);
    } finally {
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
          content: `Generá UN caso nuevo para un taller de ingeniería de requerimientos en español.
Devolvé SOLO un JSON válido con las claves:
titulo, organizacion, rol, nombre, escenario
El escenario (120-180 palabras) describe la organización, el dolor actual, cómo trabajan hoy y que el interlocutor no es técnico.
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

  function transcripcion(sesion) {
    return mensajesDe(sesion.id).map((m) => {
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

  async function persistirDominio() {
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
        const { error } = await state.sb.from("dominios").upsert(row);
        if (error) throw error;
      }
      toast(state.sb ? "Dominio guardado para todo el aula." : "Dominio guardado en este navegador.");
    } catch (err) {
      toast("El dominio quedó local, pero Supabase no lo tomó: " + err.message);
    }
  }

  async function agregarReq() {
    if (!exigeNombre() || !state.sesionActual) return toast("Abrí un caso primero.");
    if (mensajesDe(state.sesionActual.id).filter((m) => m.rol === "analista").length < 1) {
      return toast("Primero debatan con la IA. Los requerimientos salen de esa conversación.");
    }
    const enunciado = $("req-texto").value.trim();
    const tipo = $("req-tipo").value;
    if (!enunciado) return;
    const row = {
      id: uid(),
      sesion_id: state.sesionActual.id,
      codigo: codigoReq(tipo, state.sesionActual.id),
      tipo,
      enunciado,
      autor: state.nombre,
      creado_en: now()
    };
    try {
      await upsert("requerimientos", row, LS.reqs, "reqs");
      $("req-texto").value = "";
      renderReqs();
      toast("Requerimiento guardado. Queda en el historial para tus compañeros.");
    } catch (err) {
      toast("No se pudo guardar el requerimiento: " + err.message);
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
    return `Sos docente de ingeniería de requerimientos. Comparás el DEBATE (entrevista al gerente) con los REQUERIMIENTOS que escribieron los analistas.

Reglas de un buen enunciado:
- Atómico: una sola idea. Si hay dos acciones unidas con "y", partilo.
- Verificable: se puede imaginar una prueba.
- Sin ambigüedad: nada de "rápido", "amigable", "etc.", "flexible" sin criterio.
- RF / necesidad / deseo / funcional / sistema: "El sistema debe" + verbo + objeto + condición observable.
- RFN / expectativa / no_funcional: una cualidad medible (tiempo, disponibilidad, usabilidad).
- Usuario: "El usuario quiere…" en lenguaje de negocio, sin diseño técnico.
- No inventes hechos que no estén en el debate. Si falta en el debate, decilo.

Devolvé SOLO un JSON válido con:
{
  "comparacion": "texto markdown: qué se debatió y se escribió bien; qué se debatió y no se escribió; qué se escribió y no salió del debate",
  "correcciones": [
    {
      "id": "id del requerimiento original",
      "codigo": "RF1",
      "tipo": "necesidad|deseo|expectativa|usuario|sistema|funcional|no_funcional",
      "enunciado_original": "...",
      "enunciado_corregido": "...",
      "motivo": "por qué se corrige"
    }
  ],
  "faltantes": [
    {
      "tipo": "sistema",
      "enunciado": "El sistema debe...",
      "fundamento": "En el debate se dijo que..."
    }
  ]
}
Incluí todos los requerimientos en correcciones, aunque estén bien (enunciado_corregido igual al original y motivo "sin cambios").
faltantes: solo lo que el debate sostiene y nadie escribió. Máximo 5.`;
  }

  function informeCorreccion(data, originales) {
    const corr = (data.correcciones || []).map((c) => {
      const cambio = (c.enunciado_original || "").trim() !== (c.enunciado_corregido || "").trim();
      return `**${c.codigo || ""}** (${etiquetaTipo(c.tipo)})${cambio ? " — corregido" : " — bien"}\n- Original: ${c.enunciado_original || ""}\n- Corregido: ${c.enunciado_corregido || ""}\n- ${c.motivo || ""}`;
    }).join("\n\n");
    const faltan = (data.faltantes || []).map((f) =>
      `- (${etiquetaTipo(f.tipo)}) ${f.enunciado}\n  Fundamento: ${f.fundamento || ""}`
    ).join("\n");
    const escritos = originales.map((r) => `- ${r.codigo} [${r.tipo}] (${r.autor}): ${r.enunciado}`).join("\n");
    return [
      "## Debate vs. lo escrito",
      data.comparacion || "Sin comparación.",
      "## Requerimientos que escribieron",
      escritos || "Ninguno.",
      "## Corrección (forma atómica y estructura)",
      corr || "Sin correcciones.",
      "## Lo debatido que no habían escrito",
      faltan || "Nada evidente."
    ].join("\n\n");
  }

  async function corregirReqs() {
    if (!exigeNombre() || !state.sesionActual) return;
    const lista = reqsDe(state.sesionActual.id);
    if (!lista.length) return toast("Escriban los requerimientos a partir del debate, después la IA los compara y corrige.");
    if (mensajesDe(state.sesionActual.id).length < 3) {
      return toast("Debatan un poco más con la IA antes de pedir la corrección.");
    }
    if (state.aiBusy) return;
    state.aiBusy = true;
    $("btn-corregir-req").disabled = true;
    try {
      const payload = lista.map((r) =>
        `id=${r.id} | ${r.codigo} [${r.tipo}] (${r.autor}): ${r.enunciado}`
      ).join("\n");
      const raw = await chatAI([
        { role: "system", content: promptCorreccionReq() },
        {
          role: "user",
          content: `Caso: ${state.sesionActual.titulo}\n\nDEBATE:\n${transcripcion(state.sesionActual)}\n\nDOMINIO:\n${JSON.stringify(dominioDe(state.sesionActual.id))}\n\nREQUERIMIENTOS ESCRITOS:\n${payload}`
        }
      ], { json: true });
      const data = parseJSONRespuesta(raw);
      const informe = informeCorreccion(data, lista);
      $("feedback-ia").innerHTML = "<h3>Comparación y corrección</h3>" + markdown(informe);

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
        requerimiento_id: null,
        autor: "IA · " + state.nombre,
        comentario: informe,
        creado_en: now()
      };
      await upsert("revisiones_req", rev, LS.revisionesReq, "revisionesReq");
      renderReqs();
      toast("La IA comparó el debate, corrigió los enunciados y lo dejó en el historial.");
    } catch (err) {
      toast("No se pudo corregir: " + err.message);
    } finally {
      state.aiBusy = false;
      $("btn-corregir-req").disabled = false;
    }
  }

  function renderListaSesiones() {
    const filtro = ($("filtro-autor")?.value || "").trim().toLowerCase();
    const box = $("lista-sesiones");
    if (!box) return;
    const lista = state.sesiones.filter((s) => {
      if (!filtro) return true;
      const msgs = mensajesDe(s.id);
      const reqs = reqsDe(s.id);
      const blob = [s.creado_por, s.titulo, ...msgs.map((m) => m.autor), ...reqs.map((r) => r.autor)].join(" ").toLowerCase();
      return blob.includes(filtro);
    });
    if (!lista.length) {
      box.innerHTML = "<p class='hint'>Aún no hay casos en el historial.</p>";
      return;
    }
    box.innerHTML = lista.map((s) => {
      const nMsg = mensajesDe(s.id).length;
      const nReq = reqsDe(s.id).length;
      return `
      <button class="session-btn ${state.sesionActual && state.sesionActual.id === s.id ? "active" : ""}" data-id="${s.id}" type="button">
        <strong>${escapeHtml(s.titulo)}</strong><br>
        <small>${escapeHtml(s.creado_por)} · ${nMsg} mensajes · ${nReq} requerimientos</small>
      </button>`;
    }).join("");
    box.querySelectorAll(".session-btn").forEach((btn) => {
      btn.onclick = () => {
        state.sesionActual = state.sesiones.find((s) => s.id === btn.dataset.id);
        pintarSesionEnUI();
        renderHistorial();
        renderListaSesiones();
      };
    });
  }

  function renderHistorial() {
    const s = state.sesionActual;
    if (!s) {
      $("hist-titulo").textContent = "Elegí un caso";
      $("hist-meta").textContent = "";
      $("hist-cuerpo").innerHTML = "<p class='hint'>Elegí un caso para ver el debate con la IA, los requerimientos que escribió cada compañero y cómo los corrigió la IA.</p>";
      return;
    }
    $("hist-kicker").textContent = s.organizacion;
    $("hist-titulo").textContent = s.titulo;
    $("hist-meta").textContent = `Abierto por ${s.creado_por} · ${s.nombre_gerente}, ${s.rol_gerente}`;
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
    $("hist-cuerpo").innerHTML = `
      <div class="row" style="margin-bottom:12px">
        <button class="btn" id="btn-seguir-caso" type="button">Seguir entrevistando este caso</button>
      </div>
      <h3>Dominio</h3>
      <p><strong>Contexto.</strong> ${escapeHtml(d.contexto || "sin cargar")}</p>
      <p><strong>Organización.</strong> ${escapeHtml(d.org || s.organizacion)}</p>
      <p><strong>Hoy.</strong> ${escapeHtml(d.hoy || "sin cargar")}</p>
      <p><strong>Objetivo.</strong> ${escapeHtml(d.objetivo || "sin cargar")}</p>
      <p><strong>Desconocido.</strong> ${escapeHtml(d.desconocido || "sin cargar")}</p>
      <h3>1. Debate con la IA</h3>
      ${msgs || "<p class='hint'>Todavía no debatieron.</p>"}
      <h3>2. Requerimientos (versión actual, ya corregida si pidieron corrección)</h3>
      <ul>${reqs || "<li>Todavía no escribieron requerimientos.</li>"}</ul>
      <h3>3. Comparación y corrección</h3>
      ${revs || "<p class='hint'>Todavía no compararon el debate con lo escrito.</p>"}
    `;
    const seguir = $("btn-seguir-caso");
    if (seguir) seguir.onclick = () => {
      pintarSesionEnUI();
      irTab("taller");
    };
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

  function pintarAjustesAI() {
    const saved = loadJSON(LS.ai, { proveedor: "" });
    const g = cfgGlobal();
    $("ai-proveedor").value = saved.proveedor || g.aiProvider || "pollinations";
    const cfg = cfgAI();
    if (cfg.proveedor === "pollinations") {
      $("ai-estado").textContent = "Modelo activo: Pollinations.";
    } else if (cfg.clave) {
      $("ai-estado").textContent = "Modelo activo: " + cfg.proveedor + ".";
    } else if (cfg.proveedor === "groq") {
      $("ai-estado").textContent = "Falta el secreto AI_KEY_GROQ (o el AI_KEY viejo de Groq).";
    } else {
      $("ai-estado").textContent = "Falta el secreto AI_KEY_GEMINI.";
    }
  }

  function guardarAI() {
    saveJSON(LS.ai, { proveedor: $("ai-proveedor").value });
    pintarAjustesAI();
    toast("Modelo guardado en este navegador.");
  }

  async function probarAI() {
    try {
      const t = await chatAI([
        { role: "system", content: "Respondé en una frase, en español." },
        { role: "user", content: "Confirmá que estás listo para simular un gerente en un taller de requerimientos." }
      ]);
      $("ai-estado").innerHTML = "<span class='ok'>Respuesta: " + escapeHtml(t) + "</span>";
    } catch (err) {
      $("ai-estado").innerHTML = "<span class='warn-text'>" + escapeHtml(err.message) + "</span>";
    }
  }

  function irTab(tab) {
    state.tab = tab;
    document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
    document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.id === "panel-" + tab));
    if (tab === "historial") {
      renderListaSesiones();
      renderHistorial();
    }
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
    $("btn-cancelar-teoria").onclick = () => mostrarTema(state.temaActual.slug);
    $("btn-guardar-teoria").onclick = guardarTeoria;
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
    $("btn-agregar-req").onclick = agregarReq;
    $("req-texto").addEventListener("keydown", (e) => {
      if (e.key === "Enter") agregarReq();
    });
    $("btn-corregir-req").onclick = corregirReqs;
    $("filtro-autor").addEventListener("input", renderListaSesiones);
    $("btn-guardar-ai").onclick = guardarAI;
    $("ai-proveedor").addEventListener("change", pintarAjustesAI);
    $("btn-probar-ai").onclick = probarAI;
    $("btn-tema-oscuro").onclick = () => aplicarTema("dark");
    $("btn-tema-claro").onclick = () => aplicarTema("light");
  }

  async function init() {
    eventos();
    aplicarTema(localStorage.getItem(LS.tema) || temaActual());
    renderNombre();
    if (!state.nombre) $("modal-nombre").classList.add("show");
    await cargarScriptOpcional("./config.local.js");
    pintarAjustesAI();
    await conectarSupabase();
    await Promise.all([cargarTemas(), cargarRevisiones(), cargarSesiones(), cargarMensajes(), cargarReqs(), cargarRevisionesReq(), cargarDominios()]);
    mostrarTema(state.temas[0]?.slug);
    pintarSesionEnUI();
    renderListaSesiones();
  }

  init();
})();
