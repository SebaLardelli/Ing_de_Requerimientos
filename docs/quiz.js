const PREGUNTAS_TEORIA = [
  {
    clase: "Clase 1",
    pregunta: "Según Tukey, ¿qué conviene más en ingeniería de requerimientos?",
    opciones: [
      { texto: "Resolver de forma exacta el problema, aunque no sea el correcto.", ok: false },
      { texto: "Resolver de forma aproximada el problema correcto.", ok: true },
      { texto: "Empezar a programar y ajustar el problema después.", ok: false }
    ],
    porque: "Es mejor atacar el problema correcto, aunque sea aproximado, que resolver con precisión el problema equivocado."
  },
  {
    clase: "Clase 1",
    pregunta: "Si llamamos software solo al ejecutable, ¿qué se pierde?",
    opciones: [
      { texto: "Nada: el programa ya contiene todo el conocimiento.", ok: false },
      { texto: "Diseños, requerimientos, decisiones y pruebas: el conocimiento del dominio.", ok: true },
      { texto: "Solo la documentación de marketing.", ok: false }
    ],
    porque: "El software es información. Si solo miramos lo que corre, se pierde lo que permite mantenerlo y evolucionarlo."
  },
  {
    clase: "Clase 1",
    pregunta: "La deseconomía de escala en software dice que:",
    opciones: [
      { texto: "Un sistema diez veces más grande cuesta aproximadamente diez veces más.", ok: false },
      { texto: "Agregar personas siempre baja el costo por unidad, como en una fábrica.", ok: false },
      { texto: "Agrandar el sistema cuesta más que proporcionalmente: aparecen más vías de comunicación.", ok: true }
    ],
    porque: "Más gente y más partes no se escalan como ladrillos. Crece el costo de coordinar y de tener una visión global."
  },
  {
    clase: "Clase 1",
    pregunta: "Las cualidades externas de un sistema las percibe principalmente:",
    opciones: [
      { texto: "El usuario (confiabilidad, facilidad de uso, corrección).", ok: true },
      { texto: "Solo el desarrollador, al mirar el código.", ok: false },
      { texto: "El compilador, si el programa anda.", ok: false }
    ],
    porque: "Las externas las percibe quien usa el sistema. Las internas (verificabilidad, estructura) las perciben quienes lo construyen."
  },
  {
    clase: "Clase 1",
    pregunta: "Un proceso de software, en la mirada de IEEE / Pfleeger, es:",
    opciones: [
      { texto: "Escribir código hasta que compile.", ok: false },
      { texto: "Pasos con propósito, recursos, restricciones y productos.", ok: true },
      { texto: "Una metodología ágil concreta, como SCRUM.", ok: false }
    ],
    porque: "Proceso no es “el método de moda”: son actividades, productos intermedios y un criterio de entrada y de salida."
  },
  {
    clase: "Clase 2",
    pregunta: "¿Quién es un stakeholder?",
    opciones: [
      { texto: "Solo quien firmó el contrato o paga el desarrollo.", ok: false },
      { texto: "Quien influye en los requerimientos o es impactado por el sistema, aunque no lo haya pedido.", ok: true },
      { texto: "Solo los usuarios que van a tocar la pantalla.", ok: false }
    ],
    porque: "Wieringa y Glinz: stakeholder es quien influye o es impactado. Puede ganar o perder con el cambio sin haber sido consultado."
  },
  {
    clase: "Clase 2",
    pregunta: "Un gap semántico es:",
    opciones: [
      { texto: "Un conflicto de prioridades entre dos sectores.", ok: false },
      { texto: "La misma palabra con dos significados distintos según quién habla.", ok: true },
      { texto: "Un requerimiento que todavía no se escribió.", ok: false }
    ],
    porque: "Hay que construir un acuerdo de significados. El usuario habla dominio; el analista tiende a hablar tecnología."
  },
  {
    clase: "Clase 2",
    pregunta: "En el hospital, “urgente” para administración es “llegó sin turno” y para el médico es “no puede esperar”. Eso es:",
    opciones: [
      { texto: "Un deseo.", ok: false },
      { texto: "Un requerimiento de sistema.", ok: false },
      { texto: "Un gap semántico.", ok: true }
    ],
    porque: "Una sola palabra, dos mundos. Si no se pregunta, el sistema implementa una sola de las dos."
  },
  {
    clase: "Clase 2",
    pregunta: "Brooks marca dificultades esenciales del software. Una de ellas es:",
    opciones: [
      { texto: "Que el lenguaje de programación sea viejo.", ok: false },
      { texto: "Complejidad, conformidad, modificabilidad e invisibilidad: no se “ven” como un edificio.", ok: true },
      { texto: "Que el equipo no use inteligencia artificial.", ok: false }
    ],
    porque: "Esas dificultades no se eliminan con una herramienta nueva. El analista las vuelve explícitas en los requerimientos."
  },
  {
    clase: "Clase 2",
    pregunta: "El “contrato social” de los requerimientos sirve para:",
    opciones: [
      { texto: "Reemplazar la entrevista por un documento legal.", ok: false },
      { texto: "Dejar claros derechos y deberes del usuario y del analista (explicar, elegir, respetar el proceso).", ok: true },
      { texto: "Fijar el precio del sistema antes de entender el dominio.", ok: false }
    ],
    porque: "Si nadie elige entre alternativas, no hay requerimiento: hay una frase decorativa. El contrato social ordena esa relación."
  },
  {
    clase: "Clase 3",
    pregunta: "Estudios de IBM y Bell Labs sobre defectos indican que:",
    opciones: [
      { texto: "La mayoría de los defectos se insertan al programar.", ok: false },
      { texto: "Una parte muy grande se inserta en la fase de requerimientos, y corregirlos tarde cuesta mucho más.", ok: true },
      { texto: "Los defectos de requerimientos casi no se pueden detectar hasta producción.", ok: false }
    ],
    porque: "Cerca del 80% se insertan en requerimientos. Corregir en un producto ya liberado puede costar entre 100 y 200 veces más."
  },
  {
    clase: "Clase 3",
    pregunta: "Standish (calidad / éxito de proyectos) destaca, entre otros, que predice el éxito:",
    opciones: [
      { texto: "Usar el framework más nuevo.", ok: false },
      { texto: "Input del usuario y enunciados claros de requerimientos.", ok: true },
      { texto: "Congelar el alcance el día uno y no hablar más con el cliente.", ok: false }
    ],
    porque: "En los que fallan aparecen falta de input del usuario, requerimientos incompletos, cambios constantes y expectativas irreales."
  },
  {
    clase: "Clase 3",
    pregunta: "Un método ágil, respecto de los requerimientos:",
    opciones: [
      { texto: "Los elimina: no hace falta escribir lo pedido.", ok: false },
      { texto: "Cambia cuándo y con qué formalidad aparecen; no elimina descubrir qué se desea.", ok: true },
      { texto: "Solo sirve si ya existe una SRS IEEE completa.", ok: false }
    ],
    porque: "Gause y Weinberg: los requerimientos son la parte en la que la gente intenta descubrir qué se desea. El método no reemplaza eso."
  },
  {
    clase: "Clase 3",
    pregunta: "En el modelo en V, un RF mal escrito se nota sobre todo porque:",
    opciones: [
      { texto: "El código no compila.", ok: false },
      { texto: "No se puede trazar a una prueba del mismo nivel.", ok: true },
      { texto: "El usuario no sabe usar git.", ok: false }
    ],
    porque: "Baja por especificación y diseño, y sube por verificación. Si no hay prueba, el requerimiento no está bien escrito."
  },
  {
    clase: "Clase 4",
    pregunta: "Una necesidad, en este laboratorio, se escribe:",
    opciones: [
      { texto: "Como “El sistema debe…” con verbo y condición observable.", ok: false },
      { texto: "Contando el problema de fondo: de qué dependen hoy y por qué eso motiva el proyecto.", ok: true },
      { texto: "Como historia de usuario con criterio de aceptación.", ok: false }
    ],
    porque: "Necesidad, deseo y expectativa se cuentan como el dominio, no como un RF."
  },
  {
    clase: "Clase 4",
    pregunta: "Un deseo se diferencia de una necesidad porque:",
    opciones: [
      { texto: "El deseo es un RFN medible y la necesidad es un RF.", ok: false },
      { texto: "El deseo suma valor (fomenta adopción), pero el proyecto podría arrancar sin él.", ok: true },
      { texto: "El deseo lo pide el gerente y la necesidad el usuario final.", ok: false }
    ],
    porque: "Sin la necesidad el proyecto no cumple su razón de ser. El deseo es extra atractivo, no indispensable."
  },
  {
    clase: "Clase 4",
    pregunta: "Una expectativa, en la práctica de este laboratorio, es:",
    opciones: [
      { texto: "Un RFN escrito “El sistema debe responder en menos de 3 segundos”.", ok: false },
      { texto: "Qué esperan, en prosa: experiencia, costo, seguridad, no quedar atrás.", ok: true },
      { texto: "Un botón o una pantalla que el usuario imagina.", ok: false }
    ],
    porque: "En los casilleros se cuenta el dominio. El RFN medible es una especificación posterior."
  },
  {
    clase: "Clase 4",
    pregunta: "En esta práctica de laboratorio, los requerimientos de usuario y de sistema:",
    opciones: [
      { texto: "Se escriben dos de cada uno, con “El usuario quiere” y “El sistema debe”.", ok: false },
      { texto: "No se piden: acá se trabaja el dominio, el interés, el conflicto y el gap si aparece.", ok: true },
      { texto: "Se piden solo si el caso es el hospital.", ok: false }
    ],
    porque: "La pestaña Práctica no es para listar RF. Primero el mundo del problema."
  },
  {
    clase: "Clase 4",
    pregunta: "Un RFN (cuando más adelante se especifica) no puede quedar en:",
    opciones: [
      { texto: "“El sistema debe estar disponible durante el horario de atención.”", ok: false },
      { texto: "“El sistema debe ser rápido, amigable y seguro.”", ok: true },
      { texto: "“El sistema debe mostrar el resultado de una consulta en menos de 3 segundos.”", ok: false }
    ],
    porque: "Rápido, amigable y seguro no se prueban. Hace falta una cualidad medible: número, horario o prueba."
  },
  {
    clase: "Clase 4",
    pregunta: "Según IEEE, un requerimiento es (en distintos estados):",
    opciones: [
      { texto: "Solo el renglón escrito en la SRS.", ok: false },
      { texto: "Lo que necesita el usuario, lo que debe satisfacer el sistema, y su representación documentada.", ok: true },
      { texto: "Cualquier idea que alguien dijo en una reunión.", ok: false }
    ],
    porque: "Las tres son el mismo requerimiento en distintos estados: necesidad del usuario, lo que el sistema satisface, y lo escrito."
  },
  {
    clase: "Clase 5",
    pregunta: "Elicitar, en este curso, es sobre todo:",
    opciones: [
      { texto: "Pedirle al stakeholder “pasame los requerimientos” en un formulario.", ok: false },
      { texto: "Un proceso social: obtener, interpretar, acordar; las palabras del stakeholder no son automáticamente un requerimiento.", ok: true },
      { texto: "Dibujar la arquitectura antes de hablar con nadie.", ok: false }
    ],
    porque: "“Que sea fácil” es una pista, no un enunciado. Hay que preguntar, interpretar y volver a preguntar."
  },
  {
    clase: "Clase 5",
    pregunta: "El enunciado del dominio (etapa 1) tiene que dejar en claro, entre otras cosas:",
    opciones: [
      { texto: "La lista completa de RF y RFN numerados.", ok: false },
      { texto: "Contexto, organización, necesidad, cómo se hace hoy, objetivo y lo que todavía no se sabe.", ok: true },
      { texto: "El stack tecnológico y las pantallas.", ok: false }
    ],
    porque: "En esta etapa el objetivo es comprender. No se espera definir todos los requerimientos."
  },
  {
    clase: "Clase 5",
    pregunta: "“Queremos transferencias rápidas y seguras” todavía no es un requerimiento porque:",
    opciones: [
      { texto: "Falta el logo de la empresa.", ok: false },
      { texto: "No se sabe qué es rápido, qué es seguro, quién lo define ni qué pasa si falla.", ok: true },
      { texto: "Las transferencias siempre son un deseo, nunca una necesidad.", ok: false }
    ],
    porque: "Hay que preguntar y recién después escribir un enunciado verificable."
  },
  {
    clase: "Clase 5",
    pregunta: "Un buen requerimiento (cuando sí se especifica) debería ser, entre otras cosas:",
    opciones: [
      { texto: "Largo, con varios “y” para abarcar todo.", ok: false },
      { texto: "Atómico, claro, verificable y acordado.", ok: true },
      { texto: "Técnico: que nombre la base de datos.", ok: false }
    ],
    porque: "Si hay un “y”, casi siempre hay dos requerimientos. Si no se puede imaginar una prueba, no está bien escrito."
  },
  {
    clase: "Clase 6",
    pregunta: "Loucopoulos define la elicitación como:",
    opciones: [
      { texto: "Traducir lo que dijo el usuario a casos de uso y listo.", ok: false },
      { texto: "Adquirir o sonsacar todo el conocimiento relevante para modelar el dominio del problema.", ok: true },
      { texto: "Validar la interfaz con un prototipo clickeable.", ok: false }
    ],
    porque: "El objetivo es entender el dominio. Sin ese conocimiento no hay especificación consistente ni completa."
  },
  {
    clase: "Clase 6",
    pregunta: "Si al especificar aparece un hueco (nadie dijo qué es “urgente”), ¿qué hay que hacer?",
    opciones: [
      { texto: "Inventar un número razonable para no frenar.", ok: false },
      { texto: "Volver a elicitar: hay necesidad de más conocimiento.", ok: true },
      { texto: "Pasar el hueco a un RFN de usabilidad.", ok: false }
    ],
    porque: "Especificación y elicitación se alimentan. El hueco obliga a volver a preguntar."
  },
  {
    clase: "Clase 6",
    pregunta: "El efecto Hawthorne, en elicitación, es que:",
    opciones: [
      { texto: "El analista se enamora de su propio modelo.", ok: false },
      { texto: "La presencia del observador deforma lo que se observa.", ok: true },
      { texto: "El usuario copia los requerimientos de un competidor.", ok: false }
    ],
    porque: "Si mirás la ventanilla, ese día pueden atender “como corresponde”. Lo observado no es necesariamente el día a día."
  },
  {
    clase: "Clase 6",
    pregunta: "En el gráfico de Loucopoulos, el dominio del problema alimenta:",
    opciones: [
      { texto: "Solo la programación.", ok: false },
      { texto: "La elicitación y también la validación (conocimiento del dominio).", ok: true },
      { texto: "Solo al usuario, nunca a la validación.", ok: false }
    ],
    porque: "Validar no es solo “¿le gusta al usuario?”. También: ¿esto es coherente con el mundo del problema?"
  },
  {
    clase: "Clase 6",
    pregunta: "Si tuvieras 60 minutos para un problema del que depende tu vida, Loucopoulos sugiere (aprox.):",
    opciones: [
      { texto: "50 minutos programando y 10 preguntando.", ok: false },
      { texto: "40 para estudiarlo, 15 para revisarlo, 5 para resolverlo.", ok: true },
      { texto: "30 de brainstorming y 30 de diseño de pantallas.", ok: false }
    ],
    porque: "Primero el dominio; la “solución” al final es corta si el problema se entendió."
  },
  {
    clase: "Clase 6",
    pregunta: "El conflicto entre stakeholders, en la práctica de este laboratorio, hay que:",
    opciones: [
      { texto: "Resolverlo eligiendo al que paga.", ok: false },
      { texto: "Detectar al menos uno y dejarlo escrito, sacado del chat.", ok: true },
      { texto: "Evitarlo para que el dominio quede limpio.", ok: false }
    ],
    porque: "Hacer visible el conflicto es trabajo del analista. No se pide diseñar la solución del conflicto acá, sí detectarlo."
  },
  {
    clase: "Clase 6",
    pregunta: "Si en el chat no apareció un gap semántico, en el casillero correspondiente:",
    opciones: [
      { texto: "Hay que inventar uno típico del dominio (por ejemplo “urgente”).", ok: false },
      { texto: "Se deja vacío: solo se anota si aparece.", ok: true },
      { texto: "Se copia el ejemplo de la teoría para que no quede en blanco.", ok: false }
    ],
    porque: "No se inventan hechos. El gap es “si aparece”."
  }
];

const PUNTOS_CLASE6 = [
  {
    titulo: "Caja: Dominio del problema",
    etiqueta: "el mundo real",
    guia: "El mundo real: hospital, biblioteca, taller. Ahí están las reglas, el lenguaje y cómo se trabaja hoy. Sin esto no hay elicitación ni validación serias."
  },
  {
    titulo: "Caja: Usuario",
    etiqueta: "quien vive el dominio",
    guia: "Quien vive ese dominio (administrativo, bibliotecario, dueño). Trae necesidades, da feedback y valida modelos. No es el analista."
  },
  {
    titulo: "Caja: Elicitación",
    etiqueta: "sonsacar conocimiento",
    guia: "Sonsacar conocimiento: preguntar, observar, leer. Produce conocimiento y requerimientos del usuario todavía crudos."
  },
  {
    titulo: "Caja: Especificación",
    etiqueta: "modelos de requerimientos",
    guia: "Pasar ese conocimiento a modelos (enunciados, dominio escrito). Si no alcanza, pide más elicitación."
  },
  {
    titulo: "Caja: Validación",
    etiqueta: "chequear modelos",
    guia: "Chequear con el usuario y con el dominio si esos modelos son fieles. Se acepta, se corrige o hay que elicitar otra vez."
  },
  {
    titulo: "Dominio del problema → Elicitación",
    etiqueta: "conocimiento del dominio",
    guia: "El analista no inventa el problema. El dominio alimenta la elicitación: cómo se trabaja hoy, quién atiende, qué planilla se usa."
  },
  {
    titulo: "Dominio del problema → Validación",
    etiqueta: "conocimiento del dominio",
    guia: "Validar no es solo “¿le gusta al usuario?”. También: ¿esto es coherente con el mundo del problema?"
  },
  {
    titulo: "Usuario ↔ Elicitación",
    etiqueta: "requerimientos del usuario",
    guia: "Flecha de ida y vuelta. El usuario cuenta; el analista elicita y vuelve a preguntar. Todavía no es la especificación formal."
  },
  {
    titulo: "Elicitación → Especificación",
    etiqueta: "conocimiento",
    guia: "Lo elicitedo se transforma en modelos: de “me contaron” a “queda escrito de forma verificable”."
  },
  {
    titulo: "Especificación → Elicitación",
    etiqueta: "necesidad de más conocimiento",
    guia: "Al especificar aparecen huecos. Eso obliga a volver a elicitar. Por eso la flecha es doble."
  },
  {
    titulo: "Especificación → Usuario",
    etiqueta: "especificación de requerimientos",
    guia: "La especificación se le muestra al usuario. Tiene que poder reconocer su problema en esos enunciados."
  },
  {
    titulo: "Especificación → Validación",
    etiqueta: "modelos de requerimientos",
    guia: "Los modelos (dominio + requerimientos) entran a validación. Se validan artefactos, no la idea en la cabeza del analista."
  },
  {
    titulo: "Validación → Especificación",
    etiqueta: "resultados de la validación",
    guia: "Si el usuario o el dominio no cierran, el resultado vuelve a la especificación: se corrige o se tira lo inventado."
  },
  {
    titulo: "Especificación / Validación → Usuario",
    etiqueta: "modelos a validar",
    guia: "Se le llevan modelos concretos (lista, escenario, resumen de dominio) para que los mire. Validar sin mostrar nada es teatro."
  },
  {
    titulo: "Usuario → Validación",
    etiqueta: "feedback del usuario",
    guia: "El usuario responde: esto sí, esto no, esto no se entendió, esto falta. Ese feedback es insumo de la validación."
  }
];
