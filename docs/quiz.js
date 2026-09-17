const PREGUNTAS_TEORIA = [
  {
    clase: "Clase 1",
    pregunta: "Según Tukey, ¿qué conviene más en ingeniería de requerimientos?",
    opciones: [
      { texto: "Resolver de forma exacta el problema, aunque no sea el correcto.", ok: false },
      { texto: "Resolver de forma aproximada el problema correcto.", ok: true },
      { texto: "Empezar a programar y ajustar el problema después.", ok: false },
      { texto: "Elegir el framework primero y recién después el problema.", ok: false }
    ],
    porque: "Es mejor atacar el problema correcto, aunque sea aproximado, que resolver con precisión el problema equivocado."
  },
  {
    clase: "Clase 1",
    pregunta: "Si llamamos software solo al ejecutable, ¿qué se pierde?",
    opciones: [
      { texto: "Nada: el programa ya contiene todo el conocimiento.", ok: false },
      { texto: "Diseños, requerimientos, decisiones y pruebas: el conocimiento del dominio.", ok: true },
      { texto: "Solo la documentación de marketing.", ok: false },
      { texto: "Únicamente el código fuente comentado.", ok: false }
    ],
    porque: "El software es información. Si solo miramos lo que corre, se pierde lo que permite mantenerlo y evolucionarlo."
  },
  {
    clase: "Clase 1",
    pregunta: "La deseconomía de escala en software dice que:",
    opciones: [
      { texto: "Un sistema diez veces más grande cuesta aproximadamente diez veces más.", ok: false },
      { texto: "Agregar personas siempre baja el costo por unidad, como en una fábrica.", ok: false },
      { texto: "Agrandar el sistema cuesta más que proporcionalmente: aparecen más vías de comunicación.", ok: true },
      { texto: "El costo por línea de código baja si el equipo se duplica.", ok: false }
    ],
    porque: "Más gente y más partes no se escalan como ladrillos. Crece el costo de coordinar y de tener una visión global."
  },
  {
    clase: "Clase 1",
    pregunta: "Las cualidades externas de un sistema las percibe principalmente:",
    opciones: [
      { texto: "El usuario (confiabilidad, facilidad de uso, corrección).", ok: true },
      { texto: "Solo el desarrollador, al mirar el código.", ok: false },
      { texto: "El compilador, si el programa anda.", ok: false },
      { texto: "El jefe de proyecto, al mirar el Gantt.", ok: false }
    ],
    porque: "Las externas las percibe quien usa el sistema. Las internas (verificabilidad, estructura) las perciben quienes lo construyen."
  },
  {
    clase: "Clase 1",
    pregunta: "Un proceso de software, en la mirada de IEEE / Pfleeger, es:",
    opciones: [
      { texto: "Escribir código hasta que compile.", ok: false },
      { texto: "Pasos con propósito, recursos, restricciones y productos.", ok: true },
      { texto: "Una metodología ágil concreta, como SCRUM.", ok: false },
      { texto: "El conjunto de tickets abiertos en un tablero.", ok: false }
    ],
    porque: "Proceso no es “el método de moda”: son actividades, productos intermedios y un criterio de entrada y de salida."
  },
  {
    clase: "Clase 1",
    pregunta: "En el ambiente de desarrollo conviven tres familias de información. ¿Cuáles son?",
    opciones: [
      { texto: "Marketing, ventas y soporte.", ok: false },
      { texto: "Representaciones del software, conocimiento de ingeniería y conocimiento del dominio.", ok: true },
      { texto: "Front, back y base de datos.", ok: false },
      { texto: "Código, tests y deploys.", ok: false }
    ],
    porque: "El analista trabaja en esa intersección. Un requerimiento mal escrito es conocimiento del dominio que se está perdiendo."
  },
  {
    clase: "Clase 1",
    pregunta: "Que el software sea intangible implica sobre todo que:",
    opciones: [
      { texto: "No se puede vender.", ok: false },
      { texto: "Cuesta controlarlo y medirlo: no se “ve” como un puente.", ok: true },
      { texto: "No tiene usuarios reales.", ok: false },
      { texto: "No hace falta documentarlo.", ok: false }
    ],
    porque: "A diferencia de un edificio, no hay un objeto físico que inspeccionar. Por eso importan modelos, trazas y acuerdos escritos."
  },
  {
    clase: "Clase 1",
    pregunta: "“Cambiar software es fácil” es una idea errónea porque:",
    opciones: [
      { texto: "El código no se puede editar.", ok: false },
      { texto: "Un cambio es un cambio de diseño, no solo de código.", ok: true },
      { texto: "Solo se puede cambiar el hardware.", ok: false },
      { texto: "Los usuarios nunca piden cambios.", ok: false }
    ],
    porque: "Es maleable, pero “agregar un botón de urgente” puede alterar prioridades, responsabilidades y el trabajo de varios sectores."
  },
  {
    clase: "Clase 1",
    pregunta: "Según IEEE, el software como conocimiento acumulado incluye:",
    opciones: [
      { texto: "Solo el binario que se instala.", ok: false },
      { texto: "Programas, procedimientos, documentación y datos de operación.", ok: true },
      { texto: "Únicamente los casos de uso dibujados.", ok: false },
      { texto: "Solo las librerías de terceros.", ok: false }
    ],
    porque: "El ejecutable es el final de una cadena de representaciones. Si nos quedamos solo con él, el saber se evapora."
  },
  {
    clase: "Clase 1",
    pregunta: "Sin verificabilidad (cualidad interna) es muy difícil garantizar:",
    opciones: [
      { texto: "El logo de la empresa.", ok: false },
      { texto: "Confiabilidad (cualidad externa).", ok: true },
      { texto: "Que el código compile.", ok: false },
      { texto: "La cantidad de pantallas.", ok: false }
    ],
    porque: "Las externas no salen solas de las internas, pero las internas ayudan a conseguirlas. Si no se puede comprobar, no se puede depender del sistema."
  },
  {
    clase: "Clase 1",
    pregunta: "El project manager, frente a las cualidades, mira sobre todo:",
    opciones: [
      { texto: "Reusabilidad y portabilidad del código.", ok: false },
      { texto: "Productividad, visibilidad y oportunidad (entregar a tiempo y ver el avance).", ok: true },
      { texto: "Solo que la interfaz sea amistosa.", ok: false },
      { texto: "Que el compilador no tire warnings.", ok: false }
    ],
    porque: "Usuario, ingeniero y manager no están equivocados: miran distinto. El analista hace visibles los conflictos."
  },
  {
    clase: "Clase 1",
    pregunta: "Con 5 personas, las vías de comunicación (si todos hablan con todos) son:",
    opciones: [
      { texto: "5", ok: false },
      { texto: "10", ok: true },
      { texto: "25", ok: false },
      { texto: "4", ok: false }
    ],
    porque: "Crecen de forma cuadrática: n(n−1)/2. Con 5 hay 10 vías. Por eso un documento de requerimientos no es burocracia: evita 45 conversaciones informales."
  },
  {
    clase: "Clase 1",
    pregunta: "En este curso, los requerimientos respecto del software son:",
    opciones: [
      { texto: "Un trámite previo que se tira cuando empieza el código.", ok: false },
      { texto: "Parte del software, no un anexo decorativo.", ok: true },
      { texto: "Solo el contrato legal de compra.", ok: false },
      { texto: "Un diagrama UML obligatorio.", ok: false }
    ],
    porque: "Reducir el software a “lo que corre” es útil para la máquina y peligroso para quien lo construye."
  },
  {
    clase: "Clase 1",
    pregunta: "La corrección funcional responde a la pregunta:",
    opciones: [
      { texto: "¿Se libera a tiempo?", ok: false },
      { texto: "¿Hace lo que dice la especificación?", ok: true },
      { texto: "¿Corre en distintos ambientes?", ok: false },
      { texto: "¿El proceso de construcción es eficiente?", ok: false }
    ],
    porque: "Corrección no es lo mismo que performance, amistosidad u oportunidad. Si solo listamos funciones, las otras cualidades quedan implícitas."
  },
  {
    clase: "Clase 1",
    pregunta: "Antes de dar por cerrado un requerimiento, un criterio de salida típico es que sea:",
    opciones: [
      { texto: "Largo y con varios “y”.", ok: false },
      { texto: "Claro, verificable y acordado con el stakeholder.", ok: true },
      { texto: "Aprobado solo por el programador.", ok: false },
      { texto: "Escrito en inglés técnico.", ok: false }
    ],
    porque: "Sin criterio de salida, el trabajo nunca termina o se da por terminado demasiado pronto. El requerimiento se produce; no “aparece”."
  },

  {
    clase: "Clase 2",
    pregunta: "¿Quién es un stakeholder?",
    opciones: [
      { texto: "Solo quien firmó el contrato o paga el desarrollo.", ok: false },
      { texto: "Quien influye en los requerimientos o es impactado por el sistema, aunque no lo haya pedido.", ok: true },
      { texto: "Solo los usuarios que van a tocar la pantalla.", ok: false },
      { texto: "Solo el equipo de desarrollo.", ok: false }
    ],
    porque: "Wieringa y Glinz: stakeholder es quien influye o es impactado. Puede ganar o perder con el cambio sin haber sido consultado."
  },
  {
    clase: "Clase 2",
    pregunta: "Un gap semántico es:",
    opciones: [
      { texto: "Un conflicto de prioridades entre dos sectores.", ok: false },
      { texto: "La misma palabra con dos significados distintos según quién habla.", ok: true },
      { texto: "Un requerimiento que todavía no se escribió.", ok: false },
      { texto: "La distancia geográfica entre equipos.", ok: false }
    ],
    porque: "Hay que construir un acuerdo de significados. El usuario habla dominio; el analista tiende a hablar tecnología."
  },
  {
    clase: "Clase 2",
    pregunta: "En el hospital, “urgente” para administración es “llegó sin turno” y para el médico es “no puede esperar”. Eso es:",
    opciones: [
      { texto: "Un deseo.", ok: false },
      { texto: "Un requerimiento de sistema.", ok: false },
      { texto: "Un gap semántico.", ok: true },
      { texto: "Un RFN de rendimiento.", ok: false }
    ],
    porque: "Una sola palabra, dos mundos. Si no se pregunta, el sistema implementa una sola de las dos."
  },
  {
    clase: "Clase 2",
    pregunta: "Brooks marca dificultades esenciales del software. Una de ellas es:",
    opciones: [
      { texto: "Que el lenguaje de programación sea viejo.", ok: false },
      { texto: "Complejidad, conformidad, modificabilidad e invisibilidad: no se “ven” como un edificio.", ok: true },
      { texto: "Que el equipo no use inteligencia artificial.", ok: false },
      { texto: "Que no haya suficientes licencias de IDE.", ok: false }
    ],
    porque: "Esas dificultades no se eliminan con una herramienta nueva. El analista las vuelve explícitas en los requerimientos."
  },
  {
    clase: "Clase 2",
    pregunta: "El “contrato social” de los requerimientos sirve para:",
    opciones: [
      { texto: "Reemplazar la entrevista por un documento legal.", ok: false },
      { texto: "Dejar claros derechos y deberes del usuario y del analista (explicar, elegir, respetar el proceso).", ok: true },
      { texto: "Fijar el precio del sistema antes de entender el dominio.", ok: false },
      { texto: "Evitar que el usuario hable del negocio.", ok: false }
    ],
    porque: "Si nadie elige entre alternativas, no hay requerimiento: hay una frase decorativa. El contrato social ordena esa relación."
  },
  {
    clase: "Clase 2",
    pregunta: "La conformidad, como dificultad esencial, significa que:",
    opciones: [
      { texto: "El software debe copiar exactamente a la competencia.", ok: false },
      { texto: "Llega último y debe adaptarse a instituciones, leyes y sistemas ya existentes; mucha complejidad es arbitraria.", ok: true },
      { texto: "Hay que usar el mismo lenguaje de programación en todo el país.", ok: false },
      { texto: "Los usuarios deben conformarse con lo que hay.", ok: false }
    ],
    porque: "Gran parte de la complejidad es “así lo hace Contaduría”, no una ley de la naturaleza."
  },
  {
    clase: "Clase 2",
    pregunta: "Un modelo útil en ingeniería de software:",
    opciones: [
      { texto: "Debe ser una maqueta exacta a escala, sin simplificar nada.", ok: false },
      { texto: "Es una proyección con un propósito: simplifica y asume imprecisión controlada. El original puede no existir todavía.", ok: true },
      { texto: "Solo sirve si el sistema ya está en producción.", ok: false },
      { texto: "Reemplaza hablar con stakeholders.", ok: false }
    ],
    porque: "Se modela para entender lo que existe y para imaginar lo que se quiere construir. Abstracción silencia lo que no importa para ese propósito."
  },
  {
    clase: "Clase 2",
    pregunta: "Según Brooks, lo más difícil de construir un sistema es:",
    opciones: [
      { texto: "Elegir el color de la interfaz.", ok: false },
      { texto: "Decidir con precisión qué construir; el error se paga caro y cuesta rectificarlo.", ok: true },
      { texto: "Instalar el entorno de desarrollo.", ok: false },
      { texto: "Escribir los comentarios del código.", ok: false }
    ],
    porque: "Ninguna otra parte del trabajo conceptual es tan dañina si se hace mal. El problema de fondo es adquirir conocimiento."
  },
  {
    clase: "Clase 2",
    pregunta: "Macaulay agrupa stakeholders, entre otros, por interés de:",
    opciones: [
      { texto: "Solo “amigos” y “enemigos” del proyecto.", ok: false },
      { texto: "Construcción, financiero, introducción/operación y uso.", ok: true },
      { texto: "Front-end y back-end.", ok: false },
      { texto: "Nacionales y extranjeros.", ok: false }
    ],
    porque: "No alcanza con el usuario de pantalla. Quien compra, quien mantiene y quien opera también influyen o son impactados."
  },
  {
    clase: "Clase 2",
    pregunta: "Un deber del usuario en el contrato social es:",
    opciones: [
      { texto: "Hablar solo en jerga técnica.", ok: false },
      { texto: "Destinar tiempo, ser específico, priorizar y comunicar los cambios.", ok: true },
      { texto: "Aprobar cualquier diseño que traiga el programador.", ok: false },
      { texto: "No revisar documentos para no perder tiempo.", ok: false }
    ],
    porque: "El usuario también tiene deberes: educar al analista en el negocio, decidir a tiempo y respetar el proceso."
  },
  {
    clase: "Clase 2",
    pregunta: "Un derecho del usuario es esperar que el analista:",
    opciones: [
      { texto: "Hable solo en entidades y casos de uso, sin explicar.", ok: false },
      { texto: "Hable su lenguaje, aprenda el negocio y ofrezca alternativas, no un único diseño.", ok: true },
      { texto: "Empiece a programar en la primera reunión.", ok: false },
      { texto: "No documente nada para ir más rápido.", ok: false }
    ],
    porque: "No es “el técnico manda”. Si el analista habla solo en jerga, está incumpliendo su parte."
  },
  {
    clase: "Clase 2",
    pregunta: "La invisibilidad del software implica que:",
    opciones: [
      { texto: "No se puede hacer ningún diagrama.", ok: false },
      { texto: "No tiene un mapa geográfico: hay vistas (flujo, datos, dependencias), pero no se “ve” como un edificio.", ok: true },
      { texto: "Los usuarios no existen.", ok: false },
      { texto: "No hace falta acordar entre varias mentes.", ok: false }
    ],
    porque: "Por eso cuesta pensar y acordar. Los modelos son ayudas, no la realidad."
  },
  {
    clase: "Clase 2",
    pregunta: "Los desarrolladores se traban en requerimientos cuando:",
    opciones: [
      { texto: "Escuchan demasiado al usuario.", ok: false },
      { texto: "Se orientan demasiado pronto a la solución (“yo ya sé cómo lo armo”).", ok: true },
      { texto: "Piden un glosario.", ok: false },
      { texto: "Detectan un conflicto.", ok: false }
    ],
    porque: "“Necesitamos ordenar los turnos” todavía no dice si el problema es sobreasignación, ausentes o mostrador saturado."
  },
  {
    clase: "Clase 2",
    pregunta: "En la práctica de este laboratorio, un conflicto entre stakeholders hay que:",
    opciones: [
      { texto: "Esconderlo para que el dominio quede limpio.", ok: false },
      { texto: "Detectar al menos uno y dejarlo escrito, sacado del chat.", ok: true },
      { texto: "Resolverlo eligiendo siempre al que paga.", ok: false },
      { texto: "Convertirlo de inmediato en un RFN.", ok: false }
    ],
    porque: "Hacer visible el conflicto es trabajo del analista. No se pide diseñar acá la solución del conflicto; sí detectarlo."
  },
  {
    clase: "Clase 2",
    pregunta: "Blum resume el desarrollo, entre otros pasos, como pasar de:",
    opciones: [
      { texto: "Código a marketing.", ok: false },
      { texto: "Modelo conceptual (solución entendida) a modelo formal y luego a implementación.", ok: true },
      { texto: "Hardware a firmware.", ok: false },
      { texto: "Test a requerimiento.", ok: false }
    ],
    porque: "Es una secuencia de transformaciones desde lo informal mental hasta lo formal ejecutable."
  },

  {
    clase: "Clase 3",
    pregunta: "Estudios de IBM y Bell Labs sobre defectos indican que:",
    opciones: [
      { texto: "La mayoría de los defectos se insertan al programar.", ok: false },
      { texto: "Una parte muy grande se inserta en la fase de requerimientos, y corregirlos tarde cuesta mucho más.", ok: true },
      { texto: "Los defectos de requerimientos casi no se pueden detectar hasta producción.", ok: false },
      { texto: "Casi todos los defectos vienen del hardware.", ok: false }
    ],
    porque: "Cerca del 80% se insertan en requerimientos. Corregir en un producto ya liberado puede costar entre 100 y 200 veces más."
  },
  {
    clase: "Clase 3",
    pregunta: "Standish (calidad / éxito de proyectos) destaca, entre otros, que predice el éxito:",
    opciones: [
      { texto: "Usar el framework más nuevo.", ok: false },
      { texto: "Input del usuario y enunciados claros de requerimientos.", ok: true },
      { texto: "Congelar el alcance el día uno y no hablar más con el cliente.", ok: false },
      { texto: "Tener el doble de programadores.", ok: false }
    ],
    porque: "En los que fallan aparecen falta de input del usuario, requerimientos incompletos, cambios constantes y expectativas irreales."
  },
  {
    clase: "Clase 3",
    pregunta: "Un método ágil, respecto de los requerimientos:",
    opciones: [
      { texto: "Los elimina: no hace falta escribir lo pedido.", ok: false },
      { texto: "Cambia cuándo y con qué formalidad aparecen; no elimina descubrir qué se desea.", ok: true },
      { texto: "Solo sirve si ya existe una SRS IEEE completa.", ok: false },
      { texto: "Prohíbe hablar con el usuario después del sprint 1.", ok: false }
    ],
    porque: "Gause y Weinberg: los requerimientos son la parte en la que la gente intenta descubrir qué se desea. El método no reemplaza eso."
  },
  {
    clase: "Clase 3",
    pregunta: "En el modelo en V, un RF mal escrito se nota sobre todo porque:",
    opciones: [
      { texto: "El código no compila.", ok: false },
      { texto: "No se puede trazar a una prueba del mismo nivel.", ok: true },
      { texto: "El usuario no sabe usar git.", ok: false },
      { texto: "El sprint dura más de dos semanas.", ok: false }
    ],
    porque: "Baja por especificación y diseño, y sube por verificación. Si no hay prueba, el requerimiento no está bien escrito."
  },
  {
    clase: "Clase 3",
    pregunta: "En un ciclo predictivo (cascada), respecto del alcance:",
    opciones: [
      { texto: "Se fijan recursos y tiempo, y el alcance se va ajustando.", ok: false },
      { texto: "Se fijan los requerimientos y después se formula el plan (costo y tiempo).", ok: true },
      { texto: "No hay requerimientos en ningún momento.", ok: false },
      { texto: "Solo hay backlog, nunca documento.", ok: false }
    ],
    porque: "En adaptativo (ágil) se fijan recursos y tiempo, y el alcance se estima. Ninguno elimina los requerimientos."
  },
  {
    clase: "Clase 3",
    pregunta: "En SCRUM, los requerimientos viven sobre todo como:",
    opciones: [
      { texto: "Un único documento firmado que no se toca.", ok: false },
      { texto: "Ítems de backlog (historias, criterios de aceptación) que se refinan de a poco.", ok: true },
      { texto: "Solo diagramas de clases.", ok: false },
      { texto: "Tickets de bugs de producción.", ok: false }
    ],
    porque: "El cambio se espera. La dificultad: si nadie prioriza, el backlog se vuelve una lista infinita de deseos."
  },
  {
    clase: "Clase 3",
    pregunta: "RUP se caracteriza, entre otras cosas, por:",
    opciones: [
      { texto: "No tener disciplina de requerimientos.", ok: false },
      { texto: "Fases (concepción, elaboración, construcción, transición) y una disciplina formal de requerimientos.", ok: true },
      { texto: "Ser exactamente igual a una cascada de un solo paso.", ok: false },
      { texto: "Prohibir casos de uso.", ok: false }
    ],
    porque: "Ventaja: estructura en sistemas grandes. Dificultad: se puede burocratizar. El caso de uso no reemplaza entender el dominio."
  },
  {
    clase: "Clase 3",
    pregunta: "La cascada encaja peor cuando:",
    opciones: [
      { texto: "El problema es estable y se puede especificar pronto.", ok: false },
      { texto: "El dominio todavía se está descubriendo.", ok: true },
      { texto: "Hay que trazar cada RF a una prueba.", ok: false },
      { texto: "El club de barrio ya cerró el alcance con criterios de aceptación.", ok: false }
    ],
    porque: "Es secuencial y predictivo. Se rompe si fingís que el problema ya está cerrado."
  },
  {
    clase: "Clase 3",
    pregunta: "Según IEEE, calidad no es solo “cumplir la spec” porque:",
    opciones: [
      { texto: "La spec siempre está perfecta.", ok: false },
      { texto: "También hay que satisfacer necesidades y expectativas del usuario; si la especificación está mal, cumplirla no alcanza.", ok: true },
      { texto: "Calidad es únicamente ausencia de bugs de código.", ok: false },
      { texto: "IEEE no habla de calidad.", ok: false }
    ],
    porque: "Juran mira satisfacción y ausencia de deficiencias. Deming: lo difícil es traducir necesidades futuras a características medibles."
  },
  {
    clase: "Clase 3",
    pregunta: "Dorfman marca como beneficio de buenos requerimientos:",
    opciones: [
      { texto: "No hace falta estimar ni acordar.", ok: false },
      { texto: "Acuerdo sobre la tarea y el criterio de aceptación, base para estimar, menos retrabajo.", ok: true },
      { texto: "Que el código se escriba solo.", ok: false },
      { texto: "Eliminar a los stakeholders.", ok: false }
    ],
    porque: "Esas ventajas crecen con el tamaño y la complejidad."
  },
  {
    clase: "Clase 3",
    pregunta: "Los errores de requerimientos suelen ser, entre otros:",
    opciones: [
      { texto: "Solo fallos del compilador.", ok: false },
      { texto: "Hechos incorrectos, omisiones, inconsistencias y ambigüedades; se pueden detectar con inspecciones.", ok: true },
      { texto: "Únicamente problemas de red.", ok: false },
      { texto: "Errores que nunca se pueden revisar antes del código.", ok: false }
    ],
    porque: "Si la especificación está mal, el diseño “correcto” y el programa “correcto” siguen resolviendo el problema equivocado."
  },
  {
    clase: "Clase 3",
    pregunta: "Los RFN (rendimiento, seguridad, disponibilidad) empujan sobre todo:",
    opciones: [
      { texto: "El color del logo.", ok: false },
      { texto: "La forma arquitectónica del sistema.", ok: true },
      { texto: "La cantidad de reuniones de stand-up.", ok: false },
      { texto: "El nombre de las tablas.", ok: false }
    ],
    porque: "El plano arquitectónico no es una metodología de gestión: es estructura. Un analista que ignora eso escribe RFN que nadie puede cumplir."
  },
  {
    clase: "Clase 3",
    pregunta: "En equipos distribuidos, el ciclo de vida suele necesitar:",
    opciones: [
      { texto: "Menos explicitación, porque “todos se entienden”.", ok: false },
      { texto: "Más explicitación: glosario, decisiones, trazas. Hay más gap semántico y más vías de comunicación.", ok: true },
      { texto: "Eliminar los requerimientos escritos.", ok: false },
      { texto: "Solo videollamadas, nunca documentos.", ok: false }
    ],
    porque: "Más distancia = más deseconomía de escala. Lo escrito deja de ser “papel” y pasa a ser el suelo común."
  },
  {
    clase: "Clase 3",
    pregunta: "SCRUM frente a RUP, para el analista, es sobre todo elegir:",
    opciones: [
      { texto: "La moda del año.", ok: false },
      { texto: "El nivel de formalidad según el riesgo del dominio.", ok: true },
      { texto: "Si hay usuarios o no.", ok: false },
      { texto: "Si se programa en Java o en Python.", ok: false }
    ],
    porque: "SCRUM optimiza aprendizaje corto. RUP optimiza explicitación y control de artefactos."
  },
  {
    clase: "Clase 3",
    pregunta: "En el congreso de metodologías de la práctica, cada método se explica preguntando, entre otras cosas:",
    opciones: [
      { texto: "Solo el nombre del autor.", ok: false },
      { texto: "Qué es, cómo funciona, qué lugar ocupan los requerimientos, ventaja, dificultad y un ejemplo.", ok: true },
      { texto: "Cuántas líneas de código produce.", ok: false },
      { texto: "Si viene incluida en Windows.", ok: false }
    ],
    porque: "No se copia una definición: se explica con ejemplo. Un método formal no reemplaza entender el dominio."
  },

  {
    clase: "Clase 4",
    pregunta: "Una necesidad, en este laboratorio, se escribe:",
    opciones: [
      { texto: "Como “El sistema debe…” con verbo y condición observable.", ok: false },
      { texto: "Contando el problema de fondo: de qué dependen hoy y por qué eso motiva el proyecto.", ok: true },
      { texto: "Como historia de usuario con criterio de aceptación.", ok: false },
      { texto: "Como un RFN de usabilidad.", ok: false }
    ],
    porque: "Necesidad, deseo y expectativa se cuentan como el dominio, no como un RF."
  },
  {
    clase: "Clase 4",
    pregunta: "Un deseo se diferencia de una necesidad porque:",
    opciones: [
      { texto: "El deseo es un RFN medible y la necesidad es un RF.", ok: false },
      { texto: "El deseo suma valor (fomenta adopción), pero el proyecto podría arrancar sin él.", ok: true },
      { texto: "El deseo lo pide el gerente y la necesidad el usuario final.", ok: false },
      { texto: "El deseo siempre es más urgente que la necesidad.", ok: false }
    ],
    porque: "Sin la necesidad el proyecto no cumple su razón de ser. El deseo es extra atractivo, no indispensable."
  },
  {
    clase: "Clase 4",
    pregunta: "Una expectativa, en la práctica de este laboratorio, es:",
    opciones: [
      { texto: "Un RFN escrito “El sistema debe responder en menos de 3 segundos”.", ok: false },
      { texto: "Qué esperan, en prosa: experiencia, costo, seguridad, no quedar atrás.", ok: true },
      { texto: "Un botón o una pantalla que el usuario imagina.", ok: false },
      { texto: "Un caso de uso de RUP.", ok: false }
    ],
    porque: "En los casilleros se cuenta el dominio. El RFN medible es una especificación posterior."
  },
  {
    clase: "Clase 4",
    pregunta: "En esta práctica de laboratorio, los requerimientos de usuario y de sistema:",
    opciones: [
      { texto: "Se escriben dos de cada uno, con “El usuario quiere” y “El sistema debe”.", ok: false },
      { texto: "No se piden: acá se trabaja el dominio, el interés, el conflicto y el gap si aparece.", ok: true },
      { texto: "Se piden solo si el caso es el hospital.", ok: false },
      { texto: "Reemplazan a necesidad, deseo y expectativa.", ok: false }
    ],
    porque: "La pestaña Práctica no es para listar RF. Primero el mundo del problema."
  },
  {
    clase: "Clase 4",
    pregunta: "Un RFN (cuando más adelante se especifica) no puede quedar en:",
    opciones: [
      { texto: "“El sistema debe estar disponible durante el horario de atención.”", ok: false },
      { texto: "“El sistema debe ser rápido, amigable y seguro.”", ok: true },
      { texto: "“El sistema debe mostrar el resultado de una consulta en menos de 3 segundos.”", ok: false },
      { texto: "“El sistema debe identificar al usuario antes de asociarlo a un préstamo.”", ok: false }
    ],
    porque: "Rápido, amigable y seguro no se prueban. Hace falta una cualidad medible: número, horario o prueba."
  },
  {
    clase: "Clase 4",
    pregunta: "Según IEEE, un requerimiento es (en distintos estados):",
    opciones: [
      { texto: "Solo el renglón escrito en la SRS.", ok: false },
      { texto: "Lo que necesita el usuario, lo que debe satisfacer el sistema, y su representación documentada.", ok: true },
      { texto: "Cualquier idea que alguien dijo en una reunión.", ok: false },
      { texto: "Únicamente un caso de uso con actor.", ok: false }
    ],
    porque: "Las tres son el mismo requerimiento en distintos estados: necesidad del usuario, lo que el sistema satisface, y lo escrito."
  },
  {
    clase: "Clase 4",
    pregunta: "Un requerimiento de usuario, frente a uno de sistema, es:",
    opciones: [
      { texto: "Más técnico y con fechas de implementación.", ok: false },
      { texto: "De alto nivel, en lenguaje natural, sin detalle técnico: describe la necesidad de una persona.", ok: true },
      { texto: "El mismo texto, pero en inglés.", ok: false },
      { texto: "Una historia de SCRUM con puntos de esfuerzo.", ok: false }
    ],
    porque: "El de sistema traduce con precisión el comportamiento y sirve de base para diseño. Ambos nacen de la misma conversación."
  },
  {
    clase: "Clase 4",
    pregunta: "Los RF dicen qué hace el sistema. Los RFN dicen:",
    opciones: [
      { texto: "Qué color tiene cada botón.", ok: false },
      { texto: "Qué tan bien, bajo qué condiciones de calidad (tiempo, disponibilidad, seguridad…).", ok: true },
      { texto: "Quién programa cada módulo.", ok: false },
      { texto: "El presupuesto del proyecto.", ok: false }
    ],
    porque: "Formato: El sistema debe + acción/cualidad + objeto + condiciones observables. Atómico, claro, verificable y acordado."
  },
  {
    clase: "Clase 4",
    pregunta: "Elicitar, etimológicamente y en esta clase, es:",
    opciones: [
      { texto: "Pedirle al stakeholder “pasame los requerimientos” en un formulario y listo.", ok: false },
      { texto: "Obtener, hacer salir: trasladar ideas del usuario a requerimientos. Es un proceso social, no un formulario.", ok: true },
      { texto: "Dibujar la arquitectura antes de hablar con nadie.", ok: false },
      { texto: "Copiar la SRS de un sistema parecido sin preguntar.", ok: false }
    ],
    porque: "Las palabras del stakeholder no son automáticamente un requerimiento. “Que sea fácil” es una pista, no un enunciado."
  },
  {
    clase: "Clase 4",
    pregunta: "La SRS sirve, entre otras cosas, para:",
    opciones: [
      { texto: "Diseñar la base de datos al detalle.", ok: false },
      { texto: "Modelizar lo que se necesita, comunicar (a menudo como contrato) y ser base para testear.", ok: true },
      { texto: "Reemplazar a los usuarios en las pruebas.", ok: false },
      { texto: "Documentar solo el logo y el hosting.", ok: false }
    ],
    porque: "Si solo lista funciones (entrada-proceso-salida) deja afuera objetivos, restricciones y RFN. El propósito excede la lista de funciones."
  },
  {
    clase: "Clase 4",
    pregunta: "La perspectiva organizacional pide que el sistema:",
    opciones: [
      { texto: "Tenga todos los botones que alguien imaginó.", ok: false },
      { texto: "Baje costos de proceso, se alinee al negocio y sirva a distintos stakeholders; no solo “automatizar”.", ok: true },
      { texto: "Ignore reglamentos y sindicatos.", ok: false },
      { texto: "Se pida “porque sí”, sin proceso detrás.", ok: false }
    ],
    porque: "Un RF puede estar bien escrito y, aun así, no servirle a la organización si no achica el costo ni le sirve al mostrador."
  },
  {
    clase: "Clase 4",
    pregunta: "Para separar necesidad de deseo, una pregunta útil al entrevistar es:",
    opciones: [
      { texto: "¿Qué color les gusta más?", ok: false },
      { texto: "Si esto no existiera el primer día, ¿el sector podría trabajar?", ok: true },
      { texto: "¿Qué framework prefieren?", ok: false },
      { texto: "¿Cuántos programadores hay?", ok: false }
    ],
    porque: "Si el sector no puede trabajar sin eso, es necesidad. Si suma adopción o comodidad, es deseo."
  },
  {
    clase: "Clase 4",
    pregunta: "“El sistema debe ser rápido” se vuelve un RFN medible, por ejemplo, así:",
    opciones: [
      { texto: "El sistema debe ser bastante rápido.", ok: false },
      { texto: "El sistema debe mostrar el resultado de una consulta de disponibilidad en menos de 3 segundos en horario de atención.", ok: true },
      { texto: "El sistema debe ser instantáneo siempre.", ok: false },
      { texto: "El sistema debe ser al toque.", ok: false }
    ],
    porque: "Rendimiento se pregunta: ¿en cuánto tiempo? Palabras que no cierran: rápido, instantáneo, al toque."
  },
  {
    clase: "Clase 4",
    pregunta: "Un buen requerimiento (cuando sí se especifica) debería ser, entre otras cosas:",
    opciones: [
      { texto: "Largo, con varios “y” para abarcar todo.", ok: false },
      { texto: "Atómico, claro, verificable y acordado.", ok: true },
      { texto: "Técnico: que nombre la base de datos.", ok: false },
      { texto: "Vago, para dejar margen al programador.", ok: false }
    ],
    porque: "Si hay un “y”, casi siempre hay dos requerimientos. Si no se puede imaginar una prueba, no está bien escrito."
  },
  {
    clase: "Clase 4",
    pregunta: "El rol de los requerimientos incluye, según la clase:",
    opciones: [
      { texto: "Solo decorar la carpeta del proyecto.", ok: false },
      { texto: "Acuerdo, contrato, base de diseño, menos defectos, verificación y evolución.", ok: true },
      { texto: "Reemplazar las pruebas.", ok: false },
      { texto: "Fijar el sueldo del equipo.", ok: false }
    ],
    porque: "Ingeniería de requerimientos es el proceso sistemático de desarrollarlos: cooperativo e iterativo, no solo un documento."
  },
  {
    clase: "Clase 4",
    pregunta: "Observación, entrevista y prototipo se eligen según:",
    opciones: [
      { texto: "Cuál queda más linda en el informe.", ok: false },
      { texto: "El acceso a la gente, si el conocimiento es tácito o explícito, y el riesgo.", ok: true },
      { texto: "Lo que pida el framework.", ok: false },
      { texto: "Siempre se usa solo encuesta.", ok: false }
    ],
    porque: "La observación sirve cuando el usuario no puede explicar lo que hace. El prototipo, cuando la idea es vaga. La entrevista, para repreguntar."
  },

  {
    clase: "Clase 5",
    pregunta: "Elicitar, en este curso, es sobre todo:",
    opciones: [
      { texto: "Pedirle al stakeholder “pasame los requerimientos” en un formulario.", ok: false },
      { texto: "Un proceso social: obtener, interpretar, acordar; las palabras del stakeholder no son automáticamente un requerimiento.", ok: true },
      { texto: "Dibujar la arquitectura antes de hablar con nadie.", ok: false },
      { texto: "Copiar pantallas de un competidor.", ok: false }
    ],
    porque: "“Que sea fácil” es una pista, no un enunciado. Hay que preguntar, interpretar y volver a preguntar."
  },
  {
    clase: "Clase 5",
    pregunta: "El enunciado del dominio (etapa 1) tiene que dejar en claro, entre otras cosas:",
    opciones: [
      { texto: "La lista completa de RF y RFN numerados.", ok: false },
      { texto: "Contexto, organización, necesidad, cómo se hace hoy, objetivo y lo que todavía no se sabe.", ok: true },
      { texto: "El stack tecnológico y las pantallas.", ok: false },
      { texto: "El diagrama de clases final.", ok: false }
    ],
    porque: "En esta etapa el objetivo es comprender. No se espera definir todos los requerimientos."
  },
  {
    clase: "Clase 5",
    pregunta: "“Queremos transferencias rápidas y seguras” todavía no es un requerimiento porque:",
    opciones: [
      { texto: "Falta el logo de la empresa.", ok: false },
      { texto: "No se sabe qué es rápido, qué es seguro, quién lo define ni qué pasa si falla.", ok: true },
      { texto: "Las transferencias siempre son un deseo, nunca una necesidad.", ok: false },
      { texto: "Hace falta firmarlo ante escribano.", ok: false }
    ],
    porque: "Hay que preguntar y recién después escribir un enunciado verificable."
  },
  {
    clase: "Clase 5",
    pregunta: "Un buen requerimiento (cuando sí se especifica) debería ser, entre otras cosas:",
    opciones: [
      { texto: "Largo, con varios “y” para abarcar todo.", ok: false },
      { texto: "Claro, preciso, consistente, verificable y factible.", ok: true },
      { texto: "Técnico: que nombre la base de datos.", ok: false },
      { texto: "Ambiguo a propósito, para negociar después.", ok: false }
    ],
    porque: "“Rápido”, “seguro”, “fácil”, “etc.” son banderas rojas. Si admite dos lecturas, todavía no está listo."
  },
  {
    clase: "Clase 5",
    pregunta: "Los procesos centrales de RE según Loucopoulos son:",
    opciones: [
      { texto: "Programar, desplegar y vender.", ok: false },
      { texto: "Elicitación, especificación, validación y gestión.", ok: true },
      { texto: "Stand-up, retro y demo.", ok: false },
      { texto: "Análisis, diseño y coding solamente.", ok: false }
    ],
    porque: "Los productos de un proceso alimentan al otro. Si la validación falla, se vuelve a elicitar."
  },
  {
    clase: "Clase 5",
    pregunta: "El analista, en RE, no empieza:",
    opciones: [
      { texto: "Comprendiendo el problema.", ok: false },
      { texto: "Escribiendo la lista de RF. Primero: comprender → preguntar → escuchar → interpretar → analizar → especificar → validar.", ok: true },
      { texto: "Preguntando.", ok: false },
      { texto: "Escuchando.", ok: false }
    ],
    porque: "Deming: si no podés describir lo que hacés como un proceso, no sabés lo que estás haciendo. No es “anotar lo que dijo el cliente”."
  },
  {
    clase: "Clase 5",
    pregunta: "Validar, en RE, es sobre todo:",
    opciones: [
      { texto: "Verificar que el código cumple la spec.", ok: false },
      { texto: "Certificar que se ataca el problema correcto: el modelo contra las intenciones de clientes y usuarios.", ok: true },
      { texto: "Pasar el linter.", ok: false },
      { texto: "Firmar el contrato de hosting.", ok: false }
    ],
    porque: "No es lo mismo que verificar implementación. Técnicas: revisiones, prototipos, casos de uso, validación con usuarios."
  },
  {
    clase: "Clase 5",
    pregunta: "Especificar, en esta mirada, define:",
    opciones: [
      { texto: "Cómo se va a implementar (tablas, clases, APIs).", ok: false },
      { texto: "El comportamiento deseado y otras propiedades, sin decir cómo se implementa: un contrato del problema.", ok: true },
      { texto: "Solo el color de la interfaz.", ok: false },
      { texto: "El cronograma de vacaciones.", ok: false }
    ],
    porque: "El input lo da la elicitación. Si falta información, se pide más elicitación. Cada parte dispara validación."
  },
  {
    clase: "Clase 5",
    pregunta: "La elicitación, como producto, crea sobre todo:",
    opciones: [
      { texto: "El contrato legal final.", ok: false },
      { texto: "Modelos cada vez más precisos, no todavía una especificación formal. El propósito es volverse experto del dominio.", ok: true },
      { texto: "El código de producción.", ok: false },
      { texto: "El manual de marketing.", ok: false }
    ],
    porque: "Empieza con modelos mentales del dominio y se va acercando al software. Corre en paralelo con especificar y validar."
  },
  {
    clase: "Clase 5",
    pregunta: "Un requerimiento es rastreable (trazabilidad) si se sabe, entre otras cosas:",
    opciones: [
      { texto: "Solo el color del botón asociado.", ok: false },
      { texto: "Quién lo sugirió, por qué existe, con qué otros se relaciona y cómo llega a diseño y pruebas.", ok: true },
      { texto: "En qué servidor está el repo.", ok: false },
      { texto: "Cuántos likes tuvo en la reunión.", ok: false }
    ],
    porque: "Hacia atrás: de la SRS a la fuente. Hacia adelante: al diseño y a las pruebas. Sin eso, “agregar pago online” es un salto a ciegas."
  },
  {
    clase: "Clase 5",
    pregunta: "Los requerimientos cambian porque, entre otras razones:",
    opciones: [
      { texto: "El analista nunca debería gestionar cambios.", ok: false },
      { texto: "Hay errores, el usuario entiende mejor su problema, aparecen límites técnicos, prioridades nuevas o cambia el entorno.", ok: true },
      { texto: "Solo cambian si el código tiene bugs.", ok: false },
      { texto: "IEEE prohíbe cambiarlos.", ok: false }
    ],
    porque: "Hay más estables (esencia) y más volátiles (instanciación en un ambiente). Un pedido de cambio se identifica, se analiza e impacto, y recién después se implementa."
  },
  {
    clase: "Clase 5",
    pregunta: "“Necesitamos que los clientes puedan pagar fácilmente” se vuelve requerimiento cuando:",
    opciones: [
      { texto: "Se copia textual a la SRS.", ok: false },
      { texto: "Se pregunta qué es “fácilmente” y queda, por ejemplo: pagar con medios ya registrados.", ok: true },
      { texto: "Se agrega la palabra “ágil”.", ok: false },
      { texto: "Se pone en negrita.", ok: false }
    ],
    porque: "Eso ya se puede discutir, priorizar y probar. La frase original admite mil lecturas."
  },
  {
    clase: "Clase 5",
    pregunta: "En el laboratorio, el contexto del enunciado del dominio es:",
    opciones: [
      { texto: "Un PDF inventado en el escritorio.", ok: false },
      { texto: "El chat con quien quiere la aplicación.", ok: true },
      { texto: "La documentación del framework.", ok: false },
      { texto: "Las pantallas de un competidor.", ok: false }
    ],
    porque: "No se inventa el dominio. Se entrevista. Si no está en el chat o no lo preguntaste, no lo des por sabido."
  },
  {
    clase: "Clase 5",
    pregunta: "Al cerrar una exploración de dominio conviene sintetizar, entre otras cosas:",
    opciones: [
      { texto: "Solo el stack elegido.", ok: false },
      { texto: "Stakeholders e interés, al menos un conflicto, y un gap semántico si aparece.", ok: true },
      { texto: "La lista de librerías npm.", ok: false },
      { texto: "El diagrama de despliegue.", ok: false }
    ],
    porque: "Preguntas que sí sirven: ¿quién pierde si sale mal? ¿Qué hacen hoy? ¿Qué significa “urgente”? ¿Quién decide si dos sectores piden lo contrario?"
  },
  {
    clase: "Clase 5",
    pregunta: "Gestión de requerimientos no es “un botón más”: si se agrega el pago online de un turno hay que:",
    opciones: [
      { texto: "Ignorar agenda, cancelación y obra social.", ok: false },
      { texto: "Ver qué RF de agenda, cancelación y obra social se tocan (impacto y dependencias).", ok: true },
      { texto: "Borrar la SRS y empezar de cero.", ok: false },
      { texto: "Pedírselo solo al diseñador visual.", ok: false }
    ],
    porque: "Se gestionan cambios acordados y relaciones entre requerimientos. Sin rastreo no se sabe qué se rompe."
  },

  {
    clase: "Clase 6",
    pregunta: "Loucopoulos define la elicitación como:",
    opciones: [
      { texto: "Traducir lo que dijo el usuario a casos de uso y listo.", ok: false },
      { texto: "Adquirir o sonsacar todo el conocimiento relevante para modelar el dominio del problema.", ok: true },
      { texto: "Validar la interfaz con un prototipo clickeable.", ok: false },
      { texto: "Escribir la arquitectura de software.", ok: false }
    ],
    porque: "El objetivo es entender el dominio. Sin ese conocimiento no hay especificación consistente ni completa."
  },
  {
    clase: "Clase 6",
    pregunta: "Si al especificar aparece un hueco (nadie dijo qué es “urgente”), ¿qué hay que hacer?",
    opciones: [
      { texto: "Inventar un número razonable para no frenar.", ok: false },
      { texto: "Volver a elicitar: hay necesidad de más conocimiento.", ok: true },
      { texto: "Pasar el hueco a un RFN de usabilidad.", ok: false },
      { texto: "Cerrar el requerimiento como “a definir”.", ok: false }
    ],
    porque: "Especificación y elicitación se alimentan. El hueco obliga a volver a preguntar."
  },
  {
    clase: "Clase 6",
    pregunta: "El efecto Hawthorne, en elicitación, es que:",
    opciones: [
      { texto: "El analista se enamora de su propio modelo.", ok: false },
      { texto: "La presencia del observador deforma lo que se observa.", ok: true },
      { texto: "El usuario copia los requerimientos de un competidor.", ok: false },
      { texto: "El dominio no existe.", ok: false }
    ],
    porque: "Si mirás la ventanilla, ese día pueden atender “como corresponde”. Lo observado no es necesariamente el día a día."
  },
  {
    clase: "Clase 6",
    pregunta: "En el gráfico de Loucopoulos, el dominio del problema alimenta:",
    opciones: [
      { texto: "Solo la programación.", ok: false },
      { texto: "La elicitación y también la validación (conocimiento del dominio).", ok: true },
      { texto: "Solo al usuario, nunca a la validación.", ok: false },
      { texto: "Únicamente el diseño de pantallas.", ok: false }
    ],
    porque: "Validar no es solo “¿le gusta al usuario?”. También: ¿esto es coherente con el mundo del problema?"
  },
  {
    clase: "Clase 6",
    pregunta: "Si tuvieras 60 minutos para un problema del que depende tu vida, Loucopoulos sugiere (aprox.):",
    opciones: [
      { texto: "50 minutos programando y 10 preguntando.", ok: false },
      { texto: "40 para estudiarlo, 15 para revisarlo, 5 para resolverlo.", ok: true },
      { texto: "30 de brainstorming y 30 de diseño de pantallas.", ok: false },
      { texto: "60 minutos eligiendo el framework.", ok: false }
    ],
    porque: "Primero el dominio; la “solución” al final es corta si el problema se entendió."
  },
  {
    clase: "Clase 6",
    pregunta: "El conflicto entre stakeholders, en la práctica de este laboratorio, hay que:",
    opciones: [
      { texto: "Resolverlo eligiendo al que paga.", ok: false },
      { texto: "Detectar al menos uno y dejarlo escrito, sacado del chat.", ok: true },
      { texto: "Evitarlo para que el dominio quede limpio.", ok: false },
      { texto: "Mandarlo a legal y no anotarlo.", ok: false }
    ],
    porque: "Hacer visible el conflicto es trabajo del analista. No se pide diseñar la solución del conflicto acá, sí detectarlo."
  },
  {
    clase: "Clase 6",
    pregunta: "Si en el chat no apareció un gap semántico, en el casillero correspondiente:",
    opciones: [
      { texto: "Hay que inventar uno típico del dominio (por ejemplo “urgente”).", ok: false },
      { texto: "Se deja vacío: solo se anota si aparece.", ok: true },
      { texto: "Se copia el ejemplo de la teoría para que no quede en blanco.", ok: false },
      { texto: "Se pone “no hay stakeholders”.", ok: false }
    ],
    porque: "No se inventan hechos. El gap es “si aparece”."
  },
  {
    clase: "Clase 6",
    pregunta: "Sin conocer el dominio, Loucopoulos marca que no se puede:",
    opciones: [
      { texto: "Elegir un color de marca.", ok: false },
      { texto: "Entender la terminología ni testear consistencia y completitud de una especificación.", ok: true },
      { texto: "Abrir un editor de código.", ok: false },
      { texto: "Hacer una reunión de kickoff.", ok: false }
    ],
    porque: "El producto de IR, en esta mirada, es conocimiento del dominio, no “la lista de botones”."
  },
  {
    clase: "Clase 6",
    pregunta: "El conocimiento del dominio, como problema de elicitación, suele estar:",
    opciones: [
      { texto: "En un único cajón, limpio y sin conflictos.", ok: false },
      { texto: "Distribuido en fuentes distintas, a menudo conflictivo, y en parte en expertos humanos.", ok: true },
      { texto: "Solo en el código del sistema viejo.", ok: false },
      { texto: "Únicamente en el contrato de compra.", ok: false }
    ],
    porque: "Personas, planillas, reglamentos, el sistema viejo. Administración y profesionales pueden no contar el mismo “turno”."
  },
  {
    clase: "Clase 6",
    pregunta: "Un sesgo típico del usuario al elicitar es:",
    opciones: [
      { texto: "Pedir siempre un glosario.", ok: false },
      { texto: "Quedar pegado al sistema actual (“la nueva app tiene que tener las mismas pantallas”).", ok: true },
      { texto: "Hablar demasiado del dominio.", ok: false },
      { texto: "Validar los modelos que le muestran.", ok: false }
    ],
    porque: "El ingeniero también sesga: pregunta lo que ya espera oír o traduce demasiado pronto a diseño."
  },
  {
    clase: "Clase 6",
    pregunta: "Los stakeholders, al elicitar, a menudo:",
    opciones: [
      { texto: "Traen la SRS lista y sin huecos.", ok: false },
      { texto: "No saben qué desean obtener; saben qué les duele. Se expresan con sus términos y conocimiento implícito.", ok: true },
      { texto: "Tienen todos el mismo requerimiento, dicho igual.", ok: false },
      { texto: "Ignoran la política del sector.", ok: false }
    ],
    porque: "Hay factores políticos y el ambiente de negocios cambia: lo elicitado ayer puede no valer igual mañana."
  },
  {
    clase: "Clase 6",
    pregunta: "Loucopoulos lista técnicas de elicitación. Esta clase se centra en:",
    opciones: [
      { texto: "Solo el análisis de código.", ok: false },
      { texto: "Partir del usuario: entrevistas, cuestionarios, surveys, brainstorming.", ok: true },
      { texto: "Únicamente reuso de requerimientos de otro país.", ok: false },
      { texto: "Diseño de base de datos.", ok: false }
    ],
    porque: "También hay objetivos/metas, escenarios, formularios, lenguaje natural, reuso y análisis de tareas. No hay técnica universal."
  },
  {
    clase: "Clase 6",
    pregunta: "El análisis de formularios, como técnica, sirve porque:",
    opciones: [
      { texto: "Los formularios son siempre RFN.", ok: false },
      { texto: "Lo que ya se anota en papel o Excel es conocimiento del dominio.", ok: true },
      { texto: "Reemplaza hablar con el usuario.", ok: false },
      { texto: "Garantiza que no hay Hawthorne.", ok: false }
    ],
    porque: "Escenarios recorren un día de punta a punta. Lenguaje natural hay que interpretarlo, no copiarlo como RF."
  },
  {
    clase: "Clase 6",
    pregunta: "Una entrevista, según el proceso de la clase, incluye al final:",
    opciones: [
      { texto: "Empezar a programar lo acordado en voz alta.", ok: false },
      { texto: "Validar lo obtenido: seguimiento para confirmar supuestos y devolver feedback (“esto entendí; ¿es así?”).", ok: true },
      { texto: "No tomar notas, para no sesgar.", ok: false },
      { texto: "Imponer la solución que el analista ya traía.", ok: false }
    ],
    porque: "Planeamiento, conducción (sin prejuicios), consolidar minutas y validar. Si nunca se les devolvió lo escrito, no se elicitó en serio."
  },
  {
    clase: "Clase 6",
    pregunta: "En el gráfico, la flecha de especificación hacia elicitación se etiqueta como:",
    opciones: [
      { texto: "Feedback del usuario.", ok: false },
      { texto: "Necesidad de más conocimiento.", ok: true },
      { texto: "Modelos a validar.", ok: false },
      { texto: "Conocimiento del dominio.", ok: false }
    ],
    porque: "No es un pipeline de una sola pasada. Al especificar aparecen huecos y hay que volver a preguntar."
  },
  {
    clase: "Clase 6",
    pregunta: "Partir del usuario es el medio más directo, pero resbala porque:",
    opciones: [
      { texto: "El usuario siempre entrega RF listos.", ok: false },
      { texto: "No siempre puede transmitir, puede no querer el sistema y su tiempo es limitado.", ok: true },
      { texto: "Está prohibido por Loucopoulos.", ok: false },
      { texto: "Solo funciona con prototipos clickeables.", ok: false }
    ],
    porque: "Hay entrevistas abiertas y estructuradas, cuestionarios, surveys y brainstorming. Pide habilidades del analista."
  },

  {
    clase: "Clase 1",
    pregunta: "Además de programas, el software es también:",
    opciones: [
      { texto: "Solo el hardware que lo ejecuta.", ok: false },
      { texto: "Información, conocimiento del área de aplicación y la documentación del desarrollo.", ok: true },
      { texto: "Únicamente las pantallas que ve el usuario.", ok: false },
      { texto: "El contrato de compra del servidor.", ok: false }
    ],
    porque: "Es corporización de las funciones de un sistema y conocimiento capturado. Si solo miramos el ejecutable, ese saber se pierde."
  },
  {
    clase: "Clase 1",
    pregunta: "La robustez, como cualidad, responde a:",
    opciones: [
      { texto: "¿Se libera a tiempo?", ok: false },
      { texto: "¿Se comporta de forma razonable ante lo no previsto?", ok: true },
      { texto: "¿Corre en distintos ambientes?", ok: false },
      { texto: "¿El proceso de construcción es eficiente?", ok: false }
    ],
    porque: "No es lo mismo corrección (hace lo especificado) que robustez (ante lo que no estaba previsto)."
  },
  {
    clase: "Clase 1",
    pregunta: "La oportunidad, como cualidad de proceso, pregunta:",
    opciones: [
      { texto: "¿El usuario puede depender del sistema?", ok: false },
      { texto: "¿Se libera a tiempo?", ok: true },
      { texto: "¿Se entiende el código por dentro?", ok: false },
      { texto: "¿Convive con otros sistemas?", ok: false }
    ],
    porque: "El project manager mira productividad, visibilidad y oportunidad. El usuario mira corrección y usabilidad. No es el mismo criterio."
  },
  {
    clase: "Clase 1",
    pregunta: "Las cualidades internas las perciben sobre todo:",
    opciones: [
      { texto: "El usuario final, al usar la pantalla.", ok: false },
      { texto: "Quienes construyen el sistema (verificabilidad, estructura, claridad del código).", ok: true },
      { texto: "El área de marketing.", ok: false },
      { texto: "Solo el compilador.", ok: false }
    ],
    porque: "Las externas las percibe el usuario. Las internas ayudan a conseguirlas, pero no las reemplazan."
  },
  {
    clase: "Clase 1",
    pregunta: "El ingeniero o desarrollador, frente a las cualidades, suele priorizar:",
    opciones: [
      { texto: "Solo que la interfaz sea amistosa.", ok: false },
      { texto: "Reusabilidad, portabilidad, comprensibilidad, interoperabilidad y mantenibilidad.", ok: true },
      { texto: "Únicamente la fecha de entrega.", ok: false },
      { texto: "Que no haya documentación.", ok: false }
    ],
    porque: "Ninguna mirada está equivocada. El analista hace visibles los conflictos entre usuario, desarrollo y manager."
  },
  {
    clase: "Clase 1",
    pregunta: "Con 10 personas que se comunican todas con todas, las vías son:",
    opciones: [
      { texto: "10", ok: false },
      { texto: "20", ok: false },
      { texto: "45", ok: true },
      { texto: "100", ok: false }
    ],
    porque: "n(n−1)/2. Con 10 hay 45 vías. Por eso un documento de requerimientos no es burocracia: evita esas conversaciones informales."
  },
  {
    clase: "Clase 1",
    pregunta: "La ingeniería de requerimientos, respecto del proceso de software, se piensa como:",
    opciones: [
      { texto: "Un trámite legal ajeno al proceso.", ok: false },
      { texto: "Un subproceso: elicitación, análisis, especificación y validación, con productos intermedios.", ok: true },
      { texto: "Solo la fase de programación.", ok: false },
      { texto: "Un reemplazo de las pruebas.", ok: false }
    ],
    porque: "Un requerimiento no “aparece”: se produce, con criterios de entrada y de salida, igual que el resto del proceso."
  },
  {
    clase: "Clase 1",
    pregunta: "Que no haya frontera clara entre investigación y producción en software implica que:",
    opciones: [
      { texto: "No se puede estimar nada.", ok: false },
      { texto: "A menudo se diseña e implementa al mismo tiempo; el “plano” y el “edificio” se confunden.", ok: true },
      { texto: "Hay que investigar siempre en un laboratorio aparte.", ok: false },
      { texto: "El código no se puede cambiar.", ok: false }
    ],
    porque: "En ingeniería clásica el plano y el edificio son cosas distintas. En software esa separación se borra, y eso multiplica el problema de la comunicación."
  },
  {
    clase: "Clase 1",
    pregunta: "La mantenibilidad responde a:",
    opciones: [
      { texto: "¿Hace lo que dice la especificación?", ok: false },
      { texto: "¿Se puede reparar y hacer evolucionar?", ok: true },
      { texto: "¿El usuario puede depender de él hoy?", ok: false },
      { texto: "¿Se libera este mes?", ok: false }
    ],
    porque: "Un sistema puede “funcionar” y aun así ser imposible de cambiar. El analista tiene que poder exigir esa cualidad, no solo las funciones."
  },
  {
    clase: "Clase 1",
    pregunta: "El ejecutable, en la cadena de representaciones, es:",
    opciones: [
      { texto: "El único software que importa.", ok: false },
      { texto: "El final de la cadena: si nos quedamos solo con él, el conocimiento se evapora.", ok: true },
      { texto: "El reemplazo de los requerimientos.", ok: false },
      { texto: "Igual que el plano de un edificio.", ok: false }
    ],
    porque: "El software es conocimiento empaquetado. Requerimientos, diseños y decisiones son parte de esa cadena."
  },

  {
    clase: "Clase 2",
    pregunta: "Brooks distingue dificultades esenciales de las accidentales. Las esenciales:",
    opciones: [
      { texto: "Desaparecen si se cambia de lenguaje o de framework.", ok: false },
      { texto: "Son de la naturaleza del software y no se “arreglan” con una herramienta nueva.", ok: true },
      { texto: "Son solo la falta de un IDE moderno.", ok: false },
      { texto: "Las inventa el analista para justificar documentos.", ok: false }
    ],
    porque: "Las accidentales son de cómo producimos hoy. Complejidad, conformidad, modificabilidad e invisibilidad son de la esencia."
  },
  {
    clase: "Clase 2",
    pregunta: "La complejidad, como dificultad esencial, implica que agrandar un sistema:",
    opciones: [
      { texto: "Es copiar los mismos módulos como ladrillos.", ok: false },
      { texto: "No se escala repitiendo el mismo ladrillo: aparecen interacciones nuevas y cuesta la visión global.", ok: true },
      { texto: "Siempre baja el costo por unidad.", ok: false },
      { texto: "Solo afecta al hardware.", ok: false }
    ],
    porque: "La rotación de personal se vuelve un desastre porque el aprendizaje es enorme. El analista no elimina esa complejidad: la vuelve explícita."
  },
  {
    clase: "Clase 2",
    pregunta: "La modificabilidad, como dificultad esencial, dice que:",
    opciones: [
      { texto: "El software exitoso se deja quieto para siempre.", ok: false },
      { texto: "El software exitoso se sigue cambiando: más funciones y una cultura (leyes, usuarios) que no para de moverse.", ok: true },
      { texto: "Solo se puede cambiar el color de la interfaz.", ok: false },
      { texto: "Los cambios no tienen costo de diseño.", ok: false }
    ],
    porque: "Está embebido en instituciones que cambian. Pedir “que no se toque más” choca con la naturaleza del producto."
  },
  {
    clase: "Clase 2",
    pregunta: "Se construyen modelos con dos motivos. ¿Cuáles?",
    opciones: [
      { texto: "Marketing y ventas.", ok: false },
      { texto: "Representación (entender lo que ya existe) y construcción (describir el artefacto que queremos).", ok: true },
      { texto: "Compilar y desplegar.", ok: false },
      { texto: "Cobrar y facturar.", ok: false }
    ],
    porque: "El “original” puede no existir todavía. Un modelo útil simplifica con un propósito; una maqueta exacta no aporta esa ventaja."
  },
  {
    clase: "Clase 2",
    pregunta: "Abstracción, en esta clase, es:",
    opciones: [
      { texto: "Copiar la realidad sin omitir nada.", ok: false },
      { texto: "Examinar algunos aspectos y silenciar otros; el propósito dice qué no importa.", ok: true },
      { texto: "Usar solo diagramas UML.", ok: false },
      { texto: "Dejar de hablar con el usuario.", ok: false }
    ],
    porque: "Booch: enfoca lo esencial relativo a la perspectiva del observador. El mismo objeto admite varias abstracciones."
  },
  {
    clase: "Clase 2",
    pregunta: "El problema de fondo al obtener requerimientos es, según la clase:",
    opciones: [
      { texto: "Elegir el color de la marca.", ok: false },
      { texto: "Adquirir conocimiento de usuarios y otras fuentes, que a veces no está en forma usable.", ok: true },
      { texto: "Instalar el servidor de pruebas.", ok: false },
      { texto: "Traducir todo a código el primer día.", ok: false }
    ],
    porque: "A veces está en la cabeza de un experto que no puede explicitarlo. Los requerimientos solo tienen sentido en un contexto organizacional."
  },
  {
    clase: "Clase 2",
    pregunta: "Las caricaturas “el usuario no sabe lo que quiere” y “el técnico no entiende el negocio”:",
    opciones: [
      { texto: "Son la verdad científica del proyecto.", ok: false },
      { texto: "Son parte del problema; el analista las reconoce para no caer en ellas.", ok: true },
      { texto: "Justifican no entrevistar.", ok: false },
      { texto: "Solo aparecen en equipos grandes.", ok: false }
    ],
    porque: "Cómo nos vemos importa. Si el analista adopta esas caricaturas, la entrevista se vuelve un juicio, no una elicitación."
  },
  {
    clase: "Clase 2",
    pregunta: "En la comunicación, el mensaje puede fallar en:",
    opciones: [
      { texto: "Solo en el correo electrónico.", ok: false },
      { texto: "El emisor (omite o erra), el receptor (malinterpreta) y el medio (deforma).", ok: true },
      { texto: "Únicamente si no hay Wi-Fi.", ok: false },
      { texto: "Nunca: las palabras bastan.", ok: false }
    ],
    porque: "Lo que A quiso decir no es automáticamente lo que B entendió. Cada malentendido se amplifica a lo largo del proyecto."
  },
  {
    clase: "Clase 2",
    pregunta: "Un derecho del usuario en el contrato social es recibir:",
    opciones: [
      { texto: "Un único diseño, sin alternativas.", ok: false },
      { texto: "Estimaciones de buena fe del costo de los cambios y un sistema que cubra necesidades funcionales y de calidad.", ok: true },
      { texto: "Solo el código fuente, sin explicación.", ok: false },
      { texto: "La obligación de hablar en jerga técnica.", ok: false }
    ],
    porque: "También tiene derecho a que el analista hable su lenguaje, aprenda el negocio y ofrezca alternativas, no un único diseño."
  },
  {
    clase: "Clase 2",
    pregunta: "Un deber del usuario es, entre otros:",
    opciones: [
      { texto: "No revisar documentos para no perder tiempo.", ok: false },
      { texto: "Revisar documentos, evaluar prototipos y seguir el proceso de cambios acordado.", ok: true },
      { texto: "Aprobar todo lo que traiga el programador el mismo día.", ok: false },
      { texto: "Hablar solo de pantallas, nunca del negocio.", ok: false }
    ],
    porque: "Educar al analista en el negocio, destinar tiempo, ser específico y priorizar también son deberes. Sin eso la entrevista es un monólogo."
  },
  {
    clase: "Clase 2",
    pregunta: "En la biblioteca, “reserva” para el alumno es “me lo guardan mañana” y para el bibliotecario “queda bloqueado 48 horas”. Eso es:",
    opciones: [
      { texto: "Un RFN de disponibilidad.", ok: false },
      { texto: "Un gap semántico: la misma palabra, dos significados.", ok: true },
      { texto: "Un conflicto de presupuesto.", ok: false },
      { texto: "Un error de programación.", ok: false }
    ],
    porque: "Si el analista no pregunta, el sistema implementa una de las dos y la otra parte dirá que “no hace lo que pedimos”."
  },

  {
    clase: "Clase 3",
    pregunta: "Gause y Weinberg dicen que los requerimientos son la parte del desarrollo en la que:",
    opciones: [
      { texto: "Se elige el framework.", ok: false },
      { texto: "La gente intenta descubrir qué se desea.", ok: true },
      { texto: "Se escribe únicamente el código.", ok: false },
      { texto: "Se firma el contrato de hardware.", ok: false }
    ],
    porque: "No son un capítulo suelto al inicio: sostienen el plan y recorren diseño, construcción, prueba y mantenimiento."
  },
  {
    clase: "Clase 3",
    pregunta: "En un ciclo predictivo (cascada) se fijan primero los requerimientos y después el plan. En uno adaptativo (ágil):",
    opciones: [
      { texto: "No hay requerimientos.", ok: false },
      { texto: "Se fijan recursos y tiempo, y el alcance se estima y se va ajustando.", ok: true },
      { texto: "Se programa sin hablar con nadie.", ok: false },
      { texto: "Se elimina la validación.", ok: false }
    ],
    porque: "Ninguno elimina los requerimientos. Cambian cuándo se cierran y con qué formalidad se escriben."
  },
  {
    clase: "Clase 3",
    pregunta: "La cascada se rompe sobre todo cuando:",
    opciones: [
      { texto: "El problema es estable y se puede especificar pronto.", ok: false },
      { texto: "El dominio todavía se está descubriendo.", ok: true },
      { texto: "Hay pocos stakeholders.", ok: false },
      { texto: "Se usa un glosario.", ok: false }
    ],
    porque: "Es secuencial y predictivo. Encaja si el problema es estable. Si nadie sabe aún qué es el sistema, fingir un cierre de seis meses no sirve."
  },
  {
    clase: "Clase 3",
    pregunta: "En el modelo en V, cada nivel de especificación tiene:",
    opciones: [
      { texto: "Un color de interfaz distinto.", ok: false },
      { texto: "Su nivel de prueba: si un RF no se puede trazar a una prueba, está mal escrito.", ok: true },
      { texto: "Un sprint de dos días.", ok: false },
      { texto: "La obligación de no documentar.", ok: false }
    ],
    porque: "Baja por especificación y diseño, y sube por verificación. Fuerza trazabilidad. Encaja mal si el dominio aún se descubre."
  },
  {
    clase: "Clase 3",
    pregunta: "RUP organiza el trabajo en fases. Una de ellas, donde más se profundizan los requerimientos, es:",
    opciones: [
      { texto: "Solo “producción continua”, sin fases.", ok: false },
      { texto: "Elaboración (además de concepción, construcción y transición), con visión, casos de uso y especificaciones suplementarias.", ok: true },
      { texto: "Únicamente el día del deploy.", ok: false },
      { texto: "La fase de marketing.", ok: false }
    ],
    porque: "Hay una disciplina formal de requerimientos. El caso de uso no reemplaza entender el dominio: lo organiza. El riesgo es burocratizar."
  },
  {
    clase: "Clase 3",
    pregunta: "Un analista elige el nivel de formalidad entre SCRUM y RUP según:",
    opciones: [
      { texto: "La moda del año.", ok: false },
      { texto: "El riesgo del dominio, no según la moda.", ok: true },
      { texto: "Cuántos likes tiene cada método.", ok: false },
      { texto: "Si el cliente pidió “ágil” en el mail.", ok: false }
    ],
    porque: "SCRUM optimiza el aprendizaje corto. RUP optimiza la explicitación y el control de artefactos. El dominio manda."
  },
  {
    clase: "Clase 3",
    pregunta: "Los RFN de rendimiento, seguridad y disponibilidad empujan sobre todo:",
    opciones: [
      { texto: "El logo.", ok: false },
      { texto: "La forma arquitectónica del software.", ok: true },
      { texto: "El color de las pantallas.", ok: false },
      { texto: "La cantidad de reuniones de stand-up.", ok: false }
    ],
    porque: "No es una metodología de gestión: es la estructura (partes, relaciones, cualidades). Un analista que ignora la arquitectura escribe RFN que nadie puede cumplir."
  },
  {
    clase: "Clase 3",
    pregunta: "Juran mira la calidad de dos lados:",
    opciones: [
      { texto: "Precio y descuento.", ok: false },
      { texto: "Lo que satisface al usuario y la ausencia de deficiencias (menos retrabajo y reclamos).", ok: true },
      { texto: "Solo “cero bugs en el compilador”.", ok: false },
      { texto: "Solo la velocidad del servidor.", ok: false }
    ],
    porque: "Deming insiste en traducir necesidades futuras a características medibles. Esas necesidades cambian."
  },
  {
    clase: "Clase 3",
    pregunta: "En los proyectos que se traban o fallan, Standish suele encontrar, entre otros:",
    opciones: [
      { texto: "Demasiado involucramiento de los usuarios.", ok: false },
      { texto: "Falta de input del usuario, requerimientos incompletos, cambios constantes y expectativas irreales.", ok: true },
      { texto: "Un enunciado demasiado claro.", ok: false },
      { texto: "Apoyo excesivo de la dirección.", ok: false }
    ],
    porque: "En los que salen bien aparecen involucramiento, apoyo de dirección, enunciado claro, planificación y expectativas realistas."
  },
  {
    clase: "Clase 3",
    pregunta: "Dorfman marca como beneficio de buenos requerimientos, entre otros:",
    opciones: [
      { texto: "Poder no hablar nunca con el usuario.", ok: false },
      { texto: "Acuerdo entre stakeholders sobre la tarea y el criterio de aceptación, y base para estimar.", ok: true },
      { texto: "Eliminar las pruebas.", ok: false },
      { texto: "Congelar el dominio para siempre.", ok: false }
    ],
    porque: "También: mejor usabilidad y mantenibilidad, menos retrabajo y menos omisiones. Esas ventajas crecen con el tamaño."
  },
  {
    clase: "Clase 3",
    pregunta: "Los errores de requerimientos suelen ser, entre otros:",
    opciones: [
      { texto: "Solo fallas del compilador.", ok: false },
      { texto: "Hechos incorrectos, omisiones, inconsistencias y ambigüedades; las inspecciones ayudan a detectarlos.", ok: true },
      { texto: "Únicamente errores de red.", ok: false },
      { texto: "Imposibles de detectar hasta producción.", ok: false }
    ],
    porque: "Si la especificación está mal, el diseño “correcto” y el programa “correcto” siguen resolviendo el problema equivocado."
  },
  {
    clase: "Clase 3",
    pregunta: "Reparar un error de requerimientos en un producto ya liberado puede costar, respecto de detectarlo en esa fase:",
    opciones: [
      { texto: "Más o menos lo mismo.", ok: false },
      { texto: "Entre 100 y 200 veces más.", ok: true },
      { texto: "Siempre menos, porque ya hay usuarios.", ok: false },
      { texto: "Cero, porque el código ya está.", ok: false }
    ],
    porque: "Estudios de IBM y Bell Labs: cerca del 80% de los defectos se insertan en requerimientos. Cuanto más tarde, más caro."
  },
  {
    clase: "Clase 3",
    pregunta: "En equipos distribuidos, el ciclo de vida suele necesitar:",
    opciones: [
      { texto: "Menos papeles, porque “ya se habló por chat”.", ok: false },
      { texto: "Más explicitación: glosario, decisiones y trazas; más distancia es más gap semántico.", ok: true },
      { texto: "Eliminar los requerimientos escritos.", ok: false },
      { texto: "Solo videollamadas, sin acuerdos.", ok: false }
    ],
    porque: "Más distancia = más vías de comunicación (deseconomía de escala). Lo escrito deja de ser burocracia y pasa a ser el suelo común."
  },

  {
    clase: "Clase 4",
    pregunta: "Si un requerimiento solo queda en la cabeza del usuario:",
    opciones: [
      { texto: "Alcanza: el usuario ya lo sabe.", ok: false },
      { texto: "No hay acuerdo: falta la representación documentada (la tercera lectura de IEEE 610).", ok: true },
      { texto: "Es mejor, porque no se puede cambiar.", ok: false },
      { texto: "Reemplaza a la SRS.", ok: false }
    ],
    porque: "IEEE: necesidad del usuario, capacidad del sistema y texto. Las tres importan. Sin documento no se verifica ni se cambia con control."
  },
  {
    clase: "Clase 4",
    pregunta: "Si un requerimiento solo queda en un contrato, sin usuario:",
    opciones: [
      { texto: "Es el caso ideal de IEEE.", ok: false },
      { texto: "Se construye lo firmado y no necesariamente lo necesario.", ok: true },
      { texto: "Garantiza que el dominio está entendido.", ok: false },
      { texto: "Elimina la elicitación.", ok: false }
    ],
    porque: "Las tres lecturas a la vez. Un contrato sin usuario no alcanza; una necesidad sin texto tampoco."
  },
  {
    clase: "Clase 4",
    pregunta: "La ingeniería de requerimientos, como proceso, es:",
    opciones: [
      { texto: "Solo un documento que se firma una vez.", ok: false },
      { texto: "Cooperativa e iterativa: analizar, documentar en distintos formatos y chequear que la comprensión sea precisa.", ok: true },
      { texto: "Un reemplazo de la programación.", ok: false },
      { texto: "Pedirle al usuario “pasame los requerimientos”.", ok: false }
    ],
    porque: "Elicitar no es un formulario. Es un proceso social: comunicación, acuerdos, negociación."
  },
  {
    clase: "Clase 4",
    pregunta: "La perspectiva organizacional pide que el sistema, entre otras cosas:",
    opciones: [
      { texto: "Tenga la mayor cantidad de botones posible.", ok: false },
      { texto: "Baje costos de un proceso, se alinee con el negocio y sirva a distintos stakeholders.", ok: true },
      { texto: "Ignore el reglamento y el sindicato.", ok: false },
      { texto: "Automatice sin preguntar para qué.", ok: false }
    ],
    porque: "Un RF puede estar bien escrito y, aun así, no servirle a la organización. Hay que preguntar quién gana, quién pierde y qué no se puede tocar."
  },
  {
    clase: "Clase 4",
    pregunta: "La SRS (especificación) sirve, entre otras cosas, para:",
    opciones: [
      { texto: "Reemplazar hablar con el usuario.", ok: false },
      { texto: "Modelizar lo que se necesita, comunicar y servir de base para testear.", ok: true },
      { texto: "Fijar el color del logo.", ok: false },
      { texto: "Evitar la validación.", ok: false }
    ],
    porque: "Es la representación documentada. Relación con la arquitectura: los RFN empujan la forma del sistema."
  },
  {
    clase: "Clase 4",
    pregunta: "“Quiere registrar préstamo de forma rápida” frente a “debe registrar préstamo con usuario, ejemplar y fechas” es la diferencia entre:",
    opciones: [
      { texto: "RF y RFN.", ok: false },
      { texto: "Requerimiento de usuario (alto nivel, lenguaje natural) y de sistema (preciso, base de diseño).", ok: true },
      { texto: "Deseo y expectativa.", ok: false },
      { texto: "Elicitación y Hawthorne.", ok: false }
    ],
    porque: "Ambos nacen de la misma conversación. El analista decide el perfil de cada enunciado."
  },
  {
    clase: "Clase 4",
    pregunta: "Un buen requerimiento escrito, en este curso, debería ser atómico. Eso significa:",
    opciones: [
      { texto: "Que use la palabra “átomo”.", ok: false },
      { texto: "Una idea por enunciado: si hay un “y” que mezcla dos problemas, casi siempre hay dos requerimientos.", ok: true },
      { texto: "Que ocupe una sola línea en el chat.", ok: false },
      { texto: "Que no se pueda probar.", ok: false }
    ],
    porque: "También claro (sin “rápido” suelto), verificable y acordado. Formato: El sistema debe + acción + objeto + condiciones observables."
  },
  {
    clase: "Clase 4",
    pregunta: "“El sistema debe estar siempre disponible (24/7)” falla como RFN de disponibilidad si:",
    opciones: [
      { texto: "El número 24 es par.", ok: false },
      { texto: "En el dominio no es cierto: hay que atarlo al horario de atención real.", ok: true },
      { texto: "Usa la palabra “sistema”.", ok: false },
      { texto: "El usuario no es programador.", ok: false }
    ],
    porque: "Disponibilidad se pregunta: ¿en qué horario no puede fallar? Palabras que no cierran: siempre, 24/7 (si no es cierto), sin caídas."
  },
  {
    clase: "Clase 4",
    pregunta: "Usabilidad se vuelve medible, por ejemplo, así:",
    opciones: [
      { texto: "“La interfaz debe ser amigable e intuitiva.”", ok: false },
      { texto: "Quién tiene que usarlo sin curso, o “completa X en N minutos”.", ok: true },
      { texto: "“Que se vea moderno.”", ok: false },
      { texto: "“Que guste al gerencia.”", ok: false }
    ],
    porque: "Palabras que no cierran: amigable, intuitivo, simple. Hay que nombrar el rol y una prueba observable."
  },
  {
    clase: "Clase 4",
    pregunta: "Seguridad, como RFN, se pregunta sobre todo:",
    opciones: [
      { texto: "¿El logo está protegido por copyright?", ok: false },
      { texto: "¿Quién ve qué? Identificación, roles, dato que no se muestra.", ok: true },
      { texto: "¿El sistema es “seguro” en general?", ok: false },
      { texto: "¿Hay antivirus en la PC del analista?", ok: false }
    ],
    porque: "“Seguro” y “protegido” no cierran. Un ejemplo medible: identificar al usuario antes de asociarlo a un préstamo."
  },
  {
    clase: "Clase 4",
    pregunta: "En la práctica de este laboratorio, las expectativas se escriben primero:",
    opciones: [
      { texto: "Como RFN con “el sistema debe”.", ok: false },
      { texto: "En prosa del dominio (experiencia, costo, seguridad, no quedar atrás), no como especificación.", ok: true },
      { texto: "Como casos de uso UML.", ok: false },
      { texto: "Como historias de usuario con puntos.", ok: false }
    ],
    porque: "Cuando más adelante se especifica un RFN, ahí sí: una cualidad medible. Acá no se piden requerimientos de usuario ni de sistema."
  },
  {
    clase: "Clase 4",
    pregunta: "La observación, como técnica de elicitación, sirve sobre todo cuando:",
    opciones: [
      { texto: "El usuario ya entregó un listado de RF.", ok: false },
      { texto: "El usuario no puede explicar lo que hace (conocimiento tácito).", ok: true },
      { texto: "Hay que concrear una idea vaga con una pantalla.", ok: false },
      { texto: "Se quiere evitar hablar con la gente.", ok: false }
    ],
    porque: "El prototipo sirve cuando la idea es vaga. La entrevista sirve para profundizar y repreguntar. No hay una técnica única “correcta”."
  },
  {
    clase: "Clase 4",
    pregunta: "“Que sea fácil” dicho por un stakeholder es:",
    opciones: [
      { texto: "Un requerimiento de sistema listo.", ok: false },
      { texto: "Una pista, no un enunciado: las palabras del stakeholder no son automáticamente un requerimiento.", ok: true },
      { texto: "Un RFN de rendimiento.", ok: false },
      { texto: "La SRS completa.", ok: false }
    ],
    porque: "Elicitar no es pedirle “pasame los requerimientos”. Hay que trasladar ideas a enunciados que se puedan acordar, diseñar y probar."
  },
  {
    clase: "Clase 4",
    pregunta: "Precisión, como cualidad de un RFN, se vuelve medible por ejemplo con:",
    opciones: [
      { texto: "“El stock debe ser preciso.”", ok: false },
      { texto: "Decimales, coincidencia con el stock real, sin duplicar el mismo ejemplar.", ok: true },
      { texto: "“Exacto” y “preciso” en la misma frase.", ok: false },
      { texto: "Un porcentaje inventado por el programador.", ok: false }
    ],
    porque: "La pregunta es: ¿qué tan exacto tiene que ser? Palabras que no cierran: preciso, exacto, sin más."
  },

  {
    clase: "Clase 5",
    pregunta: "La frase de Deming que toma RE es:",
    opciones: [
      { texto: "“Si compila, está listo.”", ok: false },
      { texto: "Si no podés describir lo que estás haciendo como un proceso, no sabés lo que estás haciendo.", ok: true },
      { texto: "“El usuario siempre tiene razón.”", ok: false },
      { texto: "“Primero el código, después el dominio.”", ok: false }
    ],
    porque: "En RE no es “anotar lo que dijo el cliente”. Hay que comprender, describir y acordar."
  },
  {
    clase: "Clase 5",
    pregunta: "Los tres aspectos que se entrelazan en RE son:",
    opciones: [
      { texto: "Diseñar, programar y vender.", ok: false },
      { texto: "Comprender el problema, describirlo y acordar su naturaleza.", ok: true },
      { texto: "Front, back y DevOps.", ok: false },
      { texto: "Stand-up, demo y retro.", ok: false }
    ],
    porque: "De ahí elicitación (ganar conocimiento), especificación (organizarlo en un modelo) y validación (chequear que represente lo que se quería). Loucopoulos suma gestión."
  },
  {
    clase: "Clase 5",
    pregunta: "El propósito de la elicitación, al cerrar la RE, es que el analista:",
    opciones: [
      { texto: "Haya elegido el framework.", ok: false },
      { texto: "Pueda hablar el idioma del dominio: volverse, al final, un experto de ese problema.", ok: true },
      { texto: "Haya escrito todo el código.", ok: false },
      { texto: "Haya evitado hablar con usuarios.", ok: false }
    ],
    porque: "El producto de elicitar no es un contrato formal: son modelos cada vez más precisos. Corre en paralelo con especificar y validar."
  },
  {
    clase: "Clase 5",
    pregunta: "El conocimiento del dominio puede salir, entre otras fuentes, de:",
    opciones: [
      { texto: "Solo la imaginación del programador.", ok: false },
      { texto: "Expertos, literatura del rubro, software que ya usan, sistemas parecidos, normas y otros stakeholders.", ok: true },
      { texto: "Únicamente el README de una librería.", ok: false },
      { texto: "El color de la marca.", ok: false }
    ],
    porque: "Hay que identificar fuentes, decidir qué es relevante y entender el impacto. Una buena pregunta genera otra pregunta."
  },
  {
    clase: "Clase 5",
    pregunta: "Especificar, en esta mirada, define el comportamiento deseado:",
    opciones: [
      { texto: "Y también cómo se va a implementar, clase por clase.", ok: false },
      { texto: "Sin decir cómo se va a implementar: es un acuerdo del problema, no el diseño.", ok: true },
      { texto: "Solo el hardware.", ok: false },
      { texto: "Únicamente el logo.", ok: false }
    ],
    porque: "Se la puede ver como contrato entre usuarios y desarrolladores. Si falta información, se pide más elicitación."
  },
  {
    clase: "Clase 5",
    pregunta: "Validar no es lo mismo que verificar. Validar es:",
    opciones: [
      { texto: "Chequear que el código cumple la spec.", ok: false },
      { texto: "Certificar que se ataca el problema correcto: el modelo contra las intenciones de clientes y usuarios.", ok: true },
      { texto: "Correr la suite de tests unitarios.", ok: false },
      { texto: "Firmar el contrato de compra.", ok: false }
    ],
    porque: "Técnicas: revisiones, prototipos, casos de uso, validación con usuarios. El producto es un compromiso entre lo deseado y lo factible."
  },
  {
    clase: "Clase 5",
    pregunta: "Hay requerimientos más estables y más volátiles. Los estables suelen ser:",
    opciones: [
      { texto: "El color del botón de esta semana.", ok: false },
      { texto: "La esencia del sistema; los volátiles son la instanciación en un ambiente concreto.", ok: true },
      { texto: "Los que nadie pidió.", ok: false },
      { texto: "Solo los RFN de color.", ok: false }
    ],
    porque: "Cambian desde el primer día: el usuario entiende mejor su problema, hay límites técnicos, prioridades nuevas, el entorno se mueve."
  },
  {
    clase: "Clase 5",
    pregunta: "Un pedido de cambio, en gestión, se:",
    opciones: [
      { texto: "Implementa apenas alguien lo dice en el pasillo.", ok: false },
      { texto: "Identifica, se analiza (impacto y costo) y recién después se implementa.", ok: true },
      { texto: "Ignora siempre, para no tocar la SRS.", ok: false },
      { texto: "Convierte en un bug de interfaz.", ok: false }
    ],
    porque: "Se gestionan cambios acordados y relaciones entre requerimientos. Sin eso, “agregar pago online” es un salto a ciegas."
  },
  {
    clase: "Clase 5",
    pregunta: "Trazabilidad hacia atrás y hacia adelante significa:",
    opciones: [
      { texto: "Solo guardar versions de Git.", ok: false },
      { texto: "Hacia atrás: de la SRS a la fuente. Hacia adelante: de la SRS al diseño y a las pruebas.", ok: true },
      { texto: "Imprimir el documento dos veces.", ok: false },
      { texto: "Que el usuario firme sin leer.", ok: false }
    ],
    porque: "Un requerimiento es rastreable si se sabe quién lo sugirió, por qué existe, con qué otros se relaciona y cómo llega a diseño, pruebas y operación."
  },
  {
    clase: "Clase 5",
    pregunta: "“Rápido”, “seguro”, “fácil” y “etc.” en un enunciado son:",
    opciones: [
      { texto: "Señales de un RFN medible.", ok: false },
      { texto: "Banderas rojas: el requerimiento admite dos lecturas y todavía no está listo.", ok: true },
      { texto: "Obligatorios en IEEE 610.", ok: false },
      { texto: "Suficientes para testear.", ok: false }
    ],
    porque: "Claro, preciso, consistente, verificable y factible. Si admite dos lecturas, hay que preguntar qué es “fácil” y reescribir."
  },
  {
    clase: "Clase 5",
    pregunta: "El enunciado del dominio (etapa 1) NO espera todavía:",
    opciones: [
      { texto: "Contexto, organización, cómo se hace hoy y qué aún no se conoce.", ok: false },
      { texto: "La lista completa de requerimientos de usuario y de sistema.", ok: true },
      { texto: "La situación o necesidad que da origen al proyecto.", ok: false },
      { texto: "El objetivo general del sistema.", ok: false }
    ],
    porque: "En esta etapa el objetivo es comprender. No se espera definir todavía todos los requerimientos."
  },

  {
    clase: "Clase 6",
    pregunta: "El objetivo de la ingeniería de requerimientos, en la mirada de Loucopoulos de esta clase, es:",
    opciones: [
      { texto: "Entregar la lista de botones lo antes posible.", ok: false },
      { texto: "Entender el dominio: el producto es conocimiento del dominio, no “la lista de botones”.", ok: true },
      { texto: "Elegir el framework de la solución.", ok: false },
      { texto: "Reemplazar al usuario por un documento.", ok: false }
    ],
    porque: "Elicitar es sonsacar todo el conocimiento relevante para producir un modelo de los requerimientos del dominio de un problema."
  },
  {
    clase: "Clase 6",
    pregunta: "En el gráfico hay cinco cajas. Se agrupan así:",
    opciones: [
      { texto: "Cinco círculos de programación.", ok: false },
      { texto: "Tres círculos de proceso (elicitación, especificación, validación) y dos rectángulos (usuario y dominio del problema).", ok: true },
      { texto: "Solo usuario y sistema.", ok: false },
      { texto: "Cuatro fases de RUP más el logo.", ok: false }
    ],
    porque: "Usuario y dominio son “quién / de dónde sale el conocimiento”. Los tres círculos son el ciclo de proceso. No es una línea recta."
  },
  {
    clase: "Clase 6",
    pregunta: "El usuario, en el gráfico de Loucopoulos:",
    opciones: [
      { texto: "Es el analista con otro nombre.", ok: false },
      { texto: "Quien vive el dominio: trae necesidades, da feedback y valida modelos. No es el analista.", ok: true },
      { texto: "Solo firma el contrato al final.", ok: false },
      { texto: "Es el servidor donde corre el sistema.", ok: false }
    ],
    porque: "El analista elicita; el usuario es fuente y validador. Confundirlos es diseñar en el vacío."
  },
  {
    clase: "Clase 6",
    pregunta: "La flecha Dominio del problema → Validación lleva:",
    opciones: [
      { texto: "Código fuente.", ok: false },
      { texto: "Conocimiento del dominio: validar también es “¿esto es coherente con el mundo del problema?”.", ok: true },
      { texto: "Solo el gusto estético del usuario.", ok: false },
      { texto: "El plan de marketing.", ok: false }
    ],
    porque: "Un modelo puede gustar y ser falso respecto de cómo trabaja el sector. El dominio alimenta elicitación y validación."
  },
  {
    clase: "Clase 6",
    pregunta: "Usuario ↔ Elicitación se etiqueta como:",
    opciones: [
      { texto: "Modelos de requerimientos formales.", ok: false },
      { texto: "Requerimientos del usuario: ida y vuelta, todavía en su lenguaje, no la especificación formal.", ok: true },
      { texto: "Feedback de las pruebas de código.", ok: false },
      { texto: "Necesidad de más conocimiento.", ok: false }
    ],
    porque: "El usuario cuenta; el analista elicita y vuelve a preguntar. “Necesitamos ordenar los turnos” entra por acá. Todavía no es un RF."
  },
  {
    clase: "Clase 6",
    pregunta: "Especificación → Usuario se etiqueta como:",
    opciones: [
      { texto: "Conocimiento del dominio.", ok: false },
      { texto: "Especificación de requerimientos: se le muestra al usuario; tiene que reconocer su problema en esos enunciados.", ok: true },
      { texto: "El código en producción.", ok: false },
      { texto: "Hawthorne.", ok: false }
    ],
    porque: "No se esconde en un documento técnico. Si el usuario no la ve, no puede validar."
  },
  {
    clase: "Clase 6",
    pregunta: "Especificación → Validación lleva:",
    opciones: [
      { texto: "La idea en la cabeza del analista, sin escribirla.", ok: false },
      { texto: "Modelos de requerimientos (artefactos): dominio escrito, lista de RF, escenarios.", ok: true },
      { texto: "Solo el presupuesto.", ok: false },
      { texto: "El framework elegido.", ok: false }
    ],
    porque: "No se valida “lo que el analista se imagina”: se validan artefactos."
  },
  {
    clase: "Clase 6",
    pregunta: "Si la validación no cierra, la flecha Validación → Especificación hace que:",
    opciones: [
      { texto: "Se siga diseñando como si nada.", ok: false },
      { texto: "El resultado vuelva a la especificación: se corrige, se parte un requerimiento o se tira uno inventado.", ok: true },
      { texto: "Se elimine al usuario del proceso.", ok: false },
      { texto: "Se pase directo a programación.", ok: false }
    ],
    porque: "Etiqueta: resultados de la validación. El ciclo no es un pipeline de una sola pasada."
  },
  {
    clase: "Clase 6",
    pregunta: "Validar sin mostrarle nada al usuario, según la clase:",
    opciones: [
      { texto: "Es más ágil.", ok: false },
      { texto: "Es teatro: hay que llevarle modelos concretos (lista, escenario, resumen de dominio).", ok: true },
      { texto: "Reemplaza la elicitación.", ok: false },
      { texto: "Es lo que pide IEEE 610.", ok: false }
    ],
    porque: "La flecha de modelos a validar por el usuario existe por eso. El feedback del usuario es insumo de la validación, no un comentario al margen."
  },
  {
    clase: "Clase 6",
    pregunta: "Si cortás una flecha del gráfico, el proceso se vuelve:",
    opciones: [
      { texto: "Más científico.", ok: false },
      { texto: "Anotar lo que dijo uno y darlo por cerrado.", ok: true },
      { texto: "Automáticamente un modelo en V.", ok: false },
      { texto: "Una cascada perfecta.", ok: false }
    ],
    porque: "Dominio y usuario alimentan elicitación y validación. Elicitación y especificación se prestan conocimiento. Especificación y validación se prestan modelos y resultados."
  },
  {
    clase: "Clase 6",
    pregunta: "El conocimiento del dominio, además de estar distribuido, a menudo es:",
    opciones: [
      { texto: "Idéntico en todas las fuentes.", ok: false },
      { texto: "Conflictivo: administración y profesionales no cuentan el mismo “turno”.", ok: true },
      { texto: "Siempre escrito en un reglamento único.", ok: false },
      { texto: "Irrelevante para validar.", ok: false }
    ],
    porque: "Una parte importante reside en expertos humanos, que no siempre pueden o quieren explicarlo."
  },
  {
    clase: "Clase 6",
    pregunta: "Un sesgo típico del ingeniero al elicitar es:",
    opciones: [
      { texto: "Preguntar demasiado el significado de las palabras del dominio.", ok: false },
      { texto: "Preguntar lo que ya espera oír, o traducir demasiado pronto a diseño.", ok: true },
      { texto: "Tomar notas.", ok: false },
      { texto: "Devolver un resumen al entrevistado.", ok: false }
    ],
    porque: "El usuario también sesga (queda pegado al sistema actual). Hawthorne: la presencia del observador deforma lo observado."
  },
  {
    clase: "Clase 6",
    pregunta: "Al elicitar hay factores políticos. Eso significa que:",
    opciones: [
      { texto: "Solo importa el partido del gobierno.", ok: false },
      { texto: "Quién gana y quién pierde poder con el sistema influye en lo que se dice y en lo que se oculta.", ok: true },
      { texto: "No hay que entrevistar gerentes.", ok: false },
      { texto: "Los requerimientos no cambian nunca.", ok: false }
    ],
    porque: "Distintos stakeholders tienen distintos requerimientos. El ambiente de negocios además cambia durante el desarrollo."
  },
  {
    clase: "Clase 6",
    pregunta: "Los escenarios, como técnica de Loucopoulos, sirven para:",
    opciones: [
      { texto: "Elegir el color de la app.", ok: false },
      { texto: "Recorrer un día, un turno o un préstamo de punta a punta.", ok: true },
      { texto: "Reemplazar al usuario.", ok: false },
      { texto: "Firmar el contrato sin hablar.", ok: false }
    ],
    porque: "Otras técnicas: análisis de objetivo y meta, formularios, lenguaje natural, reuso, análisis de tareas. Esta clase se centra en partir del usuario."
  },
  {
    clase: "Clase 6",
    pregunta: "El análisis de tareas, como técnica, mira:",
    opciones: [
      { texto: "Solo el organigrama.", ok: false },
      { texto: "Qué pasos hace hoy la persona, en qué orden y con qué excepciones.", ok: true },
      { texto: "El código del sistema viejo, línea por línea.", ok: false },
      { texto: "Las redes sociales de los usuarios.", ok: false }
    ],
    porque: "Es conocimiento del dominio de cómo se trabaja hoy, no de cómo el analista imagina la pantalla."
  },
  {
    clase: "Clase 6",
    pregunta: "El proceso de una entrevista, según la clase, incluye en este orden:",
    opciones: [
      { texto: "Programar, testear, desplegar.", ok: false },
      { texto: "Planeamiento y preparación, conducción, consolidar y representar, validación de lo obtenido.", ok: true },
      { texto: "Solo brainstorming, sin notas.", ok: false },
      { texto: "Grabar y no volver a hablar.", ok: false }
    ],
    porque: "Preparar objetivos y preguntas, adquirir conocimiento del tema antes de sentarte, tomar notas sin imponer, unir minutas y devolver “esto entendí; ¿es así?”."
  },
  {
    clase: "Clase 6",
    pregunta: "En la conducción de la entrevista hay que tomar notas:",
    opciones: [
      { texto: "Imponiendo la solución que el analista ya trajo.", ok: false },
      { texto: "Sin imponer ideas subjetivas ni prejuicios.", ok: true },
      { texto: "Solo si el usuario lo pide.", ok: false },
      { texto: "En código, para ir más rápido.", ok: false }
    ],
    porque: "Conversar en modo profesional, una cosa por vez. El último paso (validar lo obtenido) es la flecha de feedback y modelos a validar."
  },
  {
    clase: "Clase 6",
    pregunta: "El análisis de objetivo y meta, frente a partir del usuario, se pregunta:",
    opciones: [
      { texto: "Qué pantalla pidió en el mail.", ok: false },
      { texto: "Qué quiere lograr la organización, no solo qué pantalla pide.", ok: true },
      { texto: "Cuántos sprints hay.", ok: false },
      { texto: "Qué framework usa la competencia.", ok: false }
    ],
    porque: "Loucopoulos lista varias técnicas; no hay un método único aceptado por todos. El curso sigue esa mirada."
  }
];

const PUNTOS_CLASE6 = [
  {
    titulo: "Dominio del problema → Elicitación",
    etiqueta: "conocimiento del dominio",
    guia: "El analista no inventa el problema. El dominio alimenta la elicitación: cómo se trabaja hoy, quién atiende, qué planilla se usa. Si no entra este conocimiento, la entrevista habla en vacío."
  },
  {
    titulo: "Dominio del problema → Validación",
    etiqueta: "conocimiento del dominio",
    guia: "Validar no es solo “¿le gusta al usuario?”. También: ¿esto es coherente con el mundo del problema? Un modelo puede gustar y ser falso respecto de cómo trabaja el sector."
  },
  {
    titulo: "Usuario ↔ Elicitación",
    etiqueta: "requerimientos del usuario",
    guia: "Flecha de ida y vuelta. El usuario cuenta (necesidades, dolores, reglas). El analista elicita y vuelve a preguntar. Lo que sale todavía no es la especificación formal: son requerimientos del usuario, en su lenguaje."
  },
  {
    titulo: "Elicitación → Especificación",
    etiqueta: "conocimiento",
    guia: "Lo elicitedo se transforma en modelos: contexto, organización, enunciados. Es el paso de “me contaron” a “queda escrito de forma verificable”."
  },
  {
    titulo: "Especificación → Elicitación",
    etiqueta: "necesidad de más conocimiento",
    guia: "Al especificar aparecen huecos. Eso obliga a volver a elicitar. Por eso la flecha es doble: no es un pipeline de una sola pasada."
  },
  {
    titulo: "Especificación → Usuario",
    etiqueta: "especificación de requerimientos",
    guia: "La especificación se le muestra al usuario. Tiene que poder reconocer su problema en esos enunciados. No se esconde en un documento técnico."
  },
  {
    titulo: "Especificación → Validación",
    etiqueta: "modelos de requerimientos",
    guia: "Los modelos (dominio + requerimientos) entran a validación. Se validan artefactos, no la idea en la cabeza del analista."
  },
  {
    titulo: "Validación → Especificación",
    etiqueta: "resultados de la validación",
    guia: "Si el usuario o el dominio no cierran, el resultado vuelve a la especificación: se corrige, se parte un requerimiento o se tira uno inventado."
  },
  {
    titulo: "Especificación / Validación → Usuario",
    etiqueta: "modelos a validar",
    guia: "Se le llevan modelos concretos (lista, escenario, resumen de dominio) para que los mire. Validar sin mostrar nada es teatro."
  },
  {
    titulo: "Usuario → Validación",
    etiqueta: "feedback del usuario",
    guia: "El usuario responde: esto sí, esto no, esto no se entendió, esto falta. Ese feedback es insumo de la validación, no un comentario al margen."
  }
];

window.PREGUNTAS_TEORIA = PREGUNTAS_TEORIA;
window.PUNTOS_CLASE6 = PUNTOS_CLASE6;
