const TEORIA_INICIAL = [
  {
    slug: "que-es-el-software",
    clase: "Clase 1",
    titulo: "Qué es el software",
    orden: 1,
    resumen: "El software no son solo programas: es información, conocimiento y la corporización de las funciones de un sistema.",
    contenido: `## Idea central

Reducir el software a “programas que corren en una computadora” es útil para la máquina, pero insuficiente para quien lo construye. El software es un **conjunto de partes interrelacionadas que alcanzan un objetivo**. Es, ante todo, información.

Tukey lo resumió con una frase que guía toda la ingeniería de requerimientos:

> Es mejor resolver de forma aproximada el problema correcto que resolver de forma exacta el problema equivocado.

## El software es varias cosas a la vez

- Alma y cerebro de una computadora.
- Corporización de las funciones de un sistema.
- El conocimiento capturado sobre un área de aplicación.
- Programas y datos que convierten una máquina de propósito general en una de propósito especial.
- La documentación producida durante el desarrollo.

Si llamamos software solo al ejecutable, perdemos diseños, requerimientos, decisiones y pruebas. Esa información, si no se trata con el mismo rigor, se pierde o se altera y aparecen errores.

## Ejemplo sencillo

Un sistema de turnos médicos no es “unas pantallas”. Es también: las reglas de la guardia, el significado de “urgencia”, los formularios, los casos borde (“el paciente llegó tarde”) y las decisiones que el hospital ya toma hoy. Todo eso es software, aunque todavía no haya una línea de código.`
  },
  {
    slug: "producto-y-conocimiento",
    clase: "Clase 1",
    titulo: "Software como producto y como conocimiento",
    orden: 2,
    resumen: "El software es conocimiento empaquetado. El ejecutable es solo el final de una cadena de representaciones.",
    contenido: `## Producto y objeto técnico

Desde los años 60 el software se constituyó como producto, pero no dejó de ser conocimiento. Un programa contiene saber sobre el dominio. El ejecutable es el **final de una cadena de representaciones**. Si nos quedamos solo con el ejecutable, ese saber se evapora.

La IEEE lo define como conocimiento acumulado: programas + procedimientos + documentación + datos de operación.

## Representaciones y conocimiento

En el ambiente de desarrollo conviven tres familias de información:

1. **Representaciones del software**: programas, arquitecturas, especificaciones, requerimientos.
2. **Conocimiento de ingeniería**: métodos, técnicas, lecciones de sistemas parecidos, cómo testear.
3. **Conocimiento del dominio**: cómo funciona realmente el hospital, la biblioteca o el comercio.

El analista trabaja justo en esa intersección. Un requerimiento mal escrito no es “un detalle de documentación”: es conocimiento del dominio que se está perdiendo.

## Ejemplo sencillo

Dos equipos entregan un sistema de préstamos de biblioteca. Uno deja solo el código. El otro deja además por qué un docente puede renovar y un alumno no. Seis meses después cambia el reglamento. El segundo equipo sabe *qué* cambiar y *por qué*. El primero redescubre el negocio desde cero.`
  },
  {
    slug: "software-unico",
    clase: "Clase 1",
    titulo: "Por qué el software es único",
    orden: 3,
    resumen: "Es intangible, intelectual, maleable y se desarrolla por proyectos. Eso multiplica el problema de la comunicación.",
    contenido: `## Características que lo distinguen

- **Intangible**: cuesta controlarlo y medirlo. No se “ve” como un puente.
- **Alto contenido intelectual**: el valor está en decisiones, no en materia prima.
- **Mano de obra intensiva y por proyectos**: el trabajo es de equipos. Cada persona nueva agrega vías de comunicación.
- **No hay frontera clara entre investigación y producción**: diseñamos e implementamos al mismo tiempo.
- **Modificable hasta el infinito**: el software exitoso se sigue cambiando.
- **Maleable**: existe la idea errónea de que “cambiar software es fácil”. Un cambio es un cambio de *diseño*, no solo de código.

En la ingeniería clásica, el plano y el edificio son cosas distintas. En software, a menudo el “plano” y el “edificio” se confunden.

## Ejemplo sencillo

Pedir “agreguemos un botón de urgente” parece menor. En un hospital ese botón puede alterar prioridades de agenda, responsabilidades legales y el trabajo de tres sectores. El costo no está en el botón: está en entender y rediseñar el acuerdo entre personas.`
  },
  {
    slug: "cualidades-del-software",
    clase: "Clase 1",
    titulo: "Cualidades del software",
    orden: 4,
    resumen: "Un sistema no se juzga solo por “si funciona”. Hay cualidades funcionales, de uso, de evolución y de proceso.",
    contenido: `## Catálogo que debe poder exigir un analista

| Cualidad | Pregunta que responde |
|---|---|
| Corrección funcional | ¿Hace lo que dice la especificación? |
| Confiabilidad | ¿El usuario puede depender de él? |
| Robustez | ¿Se comporta razonable ante lo no previsto? |
| Performance | ¿Usa los recursos con economía? |
| Amistosidad | ¿Es fácil de usar? |
| Verificabilidad | ¿Se puede comprobar lo que promete? |
| Mantenibilidad | ¿Se puede reparar y hacer evolucionar? |
| Reusabilidad | ¿Sus partes sirven en otro sistema? |
| Portabilidad | ¿Corre en distintos ambientes? |
| Comprensibilidad | ¿Se entiende (también por dentro)? |
| Interoperatividad | ¿Convive y coopera con otros sistemas? |
| Productividad | ¿El proceso de construcción es eficiente? |
| Oportunidad | ¿Se libera a tiempo? |
| Visibilidad | ¿El estado del trabajo está documentado? |

## Ejemplo sencillo

En la biblioteca, “el préstamo se registra” es corrección funcional. “La consulta de disponibilidad responde al instante” es performance. “Un bibliotecario nuevo entiende la pantalla sin curso” es amistosidad. Si solo listamos funciones, esas cualidades quedan implícitas… y luego nadie las construye.`
  },
  {
    slug: "cualidades-roles",
    clase: "Clase 1",
    titulo: "Cualidades internas, externas y según el rol",
    orden: 5,
    resumen: "Lo que ve el usuario no es lo mismo que lo que necesita el desarrollador o el jefe de proyecto.",
    contenido: `## Internas y externas

Las **externas** las percibe el usuario (confiabilidad, facilidad de uso, corrección). Las **internas** las perciben los desarrolladores (verificabilidad, estructura, claridad del código). Las externas no “salen solas” de las internas, pero las internas ayudan a conseguirlas.

Ejemplo: sin verificabilidad (interna) es muy difícil garantizar confiabilidad (externa).

## Tres miradas sobre el mismo sistema

- **Usuario final**: que sea correcto, confiable, robusto y fácil de usar.
- **Ingeniero / desarrollador**: que sea reusable, portable, comprensible, interoperable y mantenible.
- **Project manager**: productividad, visibilidad y oportunidad (entregar a tiempo y ver el avance).

Ninguna mirada está “equivocada”. El analista tiene que hacer visibles los conflictos: el usuario quiere todo ahora; el manager quiere fecha; el desarrollador quiere no hipotecar el mantenimiento.

## Ejemplo sencillo

El director del hospital pide “que esté para el mes que viene” (oportunidad). Los médicos piden “que nunca asigne dos pacientes al mismo slot” (corrección y confiabilidad). Desarrollo pide tiempo para que el calendario se pueda cambiar el año próximo (mantenibilidad). El analista no elige un bando: registra las tres demandas y las hace negociar.`
  },
  {
    slug: "deseconomia-de-escala",
    clase: "Clase 1",
    titulo: "Deseconomía de escala",
    orden: 6,
    resumen: "En software, agrandar el proyecto no abarata la unidad: encarece, porque crecen las vías de comunicación.",
    contenido: `## La intuición que falla

En una fábrica, producir más suele bajar el costo por unidad (economía de escala). En software ocurre lo contrario. Un sistema diez veces más grande casi nunca cuesta diez veces más: cuesta **más que proporcionalmente**.

La razón principal es humana. Con 2 personas hay 1 vía de comunicación. Con 3 hay 3. Con 4 hay 6. Con 5 hay 10. Con 10 hay 45. Las vías crecen de forma cuadrática.

Más gente implica más acuerdos, más malentendidos y más coordinación. Eso se llama **deseconomía de escala**.

## Qué implica para requerimientos

Un documento de requerimientos no es burocracia: es una forma de **no depender de 45 conversaciones informales**. Cuanto más grande el proyecto, más caro es que cada uno “crea que entendió”.

## Ejemplo sencillo

Tres analistas se ponen de acuerdo en el pasillo sobre qué es un “turno urgente”. Diez analistas, en dos turnos, ya no. Si “urgente” no está escrito, cada uno implementará otra cosa.`
  },
  {
    slug: "proceso-de-software",
    clase: "Clase 1",
    titulo: "El proceso de software",
    orden: 7,
    resumen: "Un proceso es una secuencia de pasos con propósito, recursos, restricciones y productos intermedios.",
    contenido: `## Definiciones útiles

IEEE: una secuencia de pasos ejecutados para un propósito. Pfleeger: un conjunto ordenado de tareas con actividades, restricciones y recursos que producen una salida esperada.

Un proceso no es “hacer tareas”. Tiene:

- actividades en secuencia, con criterios de entrada y salida;
- recursos y restricciones (tiempo, gente, tecnología);
- productos intermedios y un producto final;
- subprocesos encadenados;
- principios guía que explican el *para qué* de cada actividad.

## El proceso de requerimientos es un subproceso

La ingeniería de requerimientos se piensa igual: actividades (elicitar, analizar, especificar, validar), productos intermedios (actas, glosarios, borradores) y un producto final (la especificación). Un requerimiento no “aparece”: se produce.

## Ejemplo sencillo

Antes de testear un programa se exige que cumpla los casos de prueba y el diseño (criterio de entrada). Antes de dar por cerrado un requerimiento se exige que sea claro, verificable y acordado con el stakeholder. Sin criterio de salida, el trabajo nunca termina o se da por terminado demasiado pronto.`
  },
  {
    slug: "dificultades-esenciales",
    clase: "Clase 2",
    titulo: "Dificultades esenciales del software",
    orden: 8,
    resumen: "Complejidad, conformidad, modificabilidad e invisibilidad no se “arreglan” con una herramienta nueva.",
    contenido: `## Esenciales versus accidentales

Brooks distingue dificultades **esenciales** (de la naturaleza del software) y **accidentales** (de cómo lo producimos hoy). Las esenciales no desaparecen con un lenguaje o un framework.

La esencia del software es abstracta: datos, relaciones, algoritmos e invocaciones. De ahí cuatro propiedades:

### Complejidad
No se escala repitiendo el mismo ladrillo. Agrandar un sistema no es copiar módulos: aparecen interacciones nuevas. Consecuencia: cuesta comunicar, extender y tener visión global. La rotación de personal se vuelve un desastre porque el aprendizaje es enorme.

### Conformidad
El software llega último y debe adaptarse a instituciones, leyes y sistemas ya existentes. Gran parte de su complejidad es *arbitraria*: “así lo hace Contaduría”.

### Modificabilidad
El software exitoso se cambia: le piden más funciones y sobrevive a la máquina original. Está embebido en una cultura (usuarios, leyes, equipos) que no para de moverse.

### Invisibilidad
No tiene mapa geográfico. Hay diagramas (flujo de control, de datos, dependencias), pero el software no se “ve”. Eso dificulta pensar y acordar entre varias mentes.

## Ejemplo sencillo

Un sistema de becas debe *conformar* al reglamento de la facultad (conformidad), crece cada vez que aparece una nueva categoría de beca (complejidad y modificabilidad) y nadie puede “mirar el sistema” como se mira un edificio (invisibilidad). El analista no elimina esas dificultades: las vuelve explícitas.`
  },
  {
    slug: "modelos-y-abstraccion",
    clase: "Clase 2",
    titulo: "Modelos, representación y abstracción",
    orden: 9,
    resumen: "Un modelo no es la realidad. Se construye para entender lo que existe y para imaginar lo que queremos construir.",
    contenido: `## Qué es un modelo (y qué no)

Una maqueta exacta a escala no es un modelo útil: no aporta la ventaja (simplificar) ni asume la desventaja (imprecisión controlada). En ingeniería de software nos interesa el modelo como **proyección de un sistema posible**. El “original” puede no existir todavía.

Construimos modelos con dos motivos:

- **Representación**: entender lo que ya existe (el hospital tal como opera hoy).
- **Construcción**: describir el artefacto que queremos (el sistema de turnos que aún no está).

Blum resume el desarrollo en tres pasos: modelo conceptual (la solución entendida), modelo formal (la solución prescrita con rigor) e implementación que satisface ese modelo formal. El proceso es una secuencia de transformaciones desde lo informal mental hasta lo formal ejecutable.

## Abstracción

Abstracción es examinar algunos aspectos y silenciar otros. Siempre tiene un *propósito*: ese propósito dice qué no importa. Un mismo objeto admite varias abstracciones.

Booch: la abstracción enfoca lo esencial **relativo a la perspectiva del observador**.

## Ejemplo sencillo

El mismo gato lo ve distinto el veterinario, el dueño y el diseñador de una app de mascotas. El veterinario modela síntomas; el dueño, horarios de comida; la app, un perfil. Si el analista toma una sola mirada, el modelo queda sesgado.`
  },
  {
    slug: "dificultad-requerimientos",
    clase: "Clase 2",
    titulo: "Por qué es tan difícil obtener requerimientos",
    orden: 10,
    resumen: "Decidir qué construir es la parte más difícil del trabajo conceptual. El error se paga caro y cuesta rectificarlo.",
    contenido: `## La advertencia de Brooks

Lo más difícil de construir un sistema no es programarlo: es decidir con precisión *qué* construir. Ninguna otra parte del trabajo conceptual es tan difícil, tan dañina si se hace mal, ni tan costosa de corregir después.

El problema de fondo es **adquirir conocimiento** de usuarios y otras fuentes. Ese conocimiento a veces no está en forma usable, o está en la cabeza de un experto que no puede explicitarlo.

Los requerimientos:

- solo tienen sentido en un contexto organizacional;
- son producto de la interacción entre usuario y técnico.

## Dónde se traban las cosas

**Usuarios:** no hay consenso, tienen poco tiempo, hay política y poder, cuesta comunicarse.

**Usuarios y desarrolladores:** lenguajes distintos, formaciones distintas.

**Desarrolladores:** se orientan demasiado pronto a la solución (“yo ya sé cómo lo armo”).

## Ejemplo sencillo

La jefa de administración dice “necesitamos ordenar los turnos”. El desarrollador ya imagina un calendario web. Todavía no sabemos si el problema es la sobreasignación, los ausentes o el mostrador saturado. Si se diseña antes de entender, se construye una solución elegante al problema equivocado.`
  },
  {
    slug: "stakeholders",
    clase: "Clase 2",
    titulo: "Stakeholders",
    orden: 11,
    resumen: "Stakeholder es quien influye en los requerimientos o es impactado por el sistema, aunque no lo haya pedido.",
    contenido: `## Definición de trabajo

Un stakeholder es una persona u organización que **influye** en los requerimientos o **es impactada** por el sistema (Wieringa y Glinz). Gana o pierde con el cambio, a veces sin haber sido consultada.

Macaulay los agrupa por interés:

- **Construcción**: project managers, diseñadores, expertos técnicos.
- **Financiero**: quien compra, vende o justifica la inversión.
- **Introducción y operación**: soporte, instalación, mantenimiento, entrenamiento.
- **Uso**: usuarios directos e indirectos, gerentes usuarios.

## Cómo nos vemos (y por qué importa)

Los desarrolladores suelen ver al usuario como alguien que “no sabe lo que quiere”, pide todo ya y no prioriza. El usuario suele ver al equipo técnico como alguien que “no entiende el negocio”, dice que no, se atrasa y habla en jerga. Esas caricaturas **son parte del problema**. El analista las reconoce para no caer en ellas.

## Ejemplo sencillo

En turnos de un hospital: pacientes, médicos, administrativos, jefatura, sistemas, auditoría y, a veces, la obra social. El médico quiere menos carga de agenda; administración quiere menos huecos vacíos; el paciente quiere elegir horario. Si solo entrevistamos a uno, el sistema “sale bien” para ese uno y mal para el resto.`
  },
  {
    slug: "comunicacion-y-gap",
    clase: "Clase 2",
    titulo: "Comunicación y gap semántico",
    orden: 12,
    resumen: "Usuarios y analistas no hablan el mismo idioma. El gap semántico es esa distancia de significados.",
    contenido: `## El mensaje nunca es solo palabras

Hay problemas en el emisor (omite o erra), en el receptor (no recibe o malinterpreta) y en el medio (deforma). Además existe lo no verbal y el espacio compartido: lo que A quiso decir no es automáticamente lo que B entendió.

La comunicación entre stakeholders se multiplica: cada malentendido se amplifica a lo largo del proyecto.

## Gap semántico

Las aspiraciones, la formación y la experiencia de usuarios y analistas difieren. El usuario habla el idioma del dominio (“guardia”, “cupo”, “legajo”). El analista habla el de la computación (“entidad”, “estado”, “caso de uso”). El trabajo del analista es **construir un esquema de comprensión común**: un contrato social, no un diccionario improvisado.

## Ejemplo sencillo

En la biblioteca, “reserva” para el alumno significa “el libro me espera mañana”. Para el bibliotecario puede significar “queda bloqueado 48 horas y si no se retira se libera”. Si el analista no pregunta, el sistema implementará una de las dos y la otra parte dirá que “no hace lo que pedimos”.`
  },
  {
    slug: "contrato-social",
    clase: "Clase 2",
    titulo: "Contrato social de los requerimientos",
    orden: 13,
    resumen: "Usuarios y analistas tienen derechos y deberes. Sin ese acuerdo, la entrevista se vuelve un monólogo.",
    contenido: `## Derechos del usuario (selección)

Esperar que el analista hable su lenguaje y aprenda el negocio. Recibir una especificación y que se la expliquen. Ser tratado con respeto. Conocer alternativas. Pedir un producto simple de usar. Recibir estimaciones honestas de cambios. Obtener un sistema que cubra funciones y calidad.

## Deberes del usuario (selección)

Educar al analista en el negocio. Dedicar tiempo. Ser específico. Decidir a tiempo. Priorizar. Respetar costos y factibilidad. Revisar documentos y prototipos. Comunicar cambios por el proceso acordado. Respetar el proceso de ingeniería de requerimientos.

## Para el analista, en la práctica

No es “el cliente siempre tiene razón” ni “el técnico manda”. Es una relación con reglas. Si el gerente no prioriza, el analista debe pedirlo. Si el analista habla solo en jerga, está incumpliendo su parte.

## Ejemplo sencillo

El gerente dice “quiero algo moderno”. El analista tiene derecho a traducir eso a alternativas concretas (y costos). El gerente tiene el deber de elegir. Si nadie elige, no hay requerimiento: hay una frase decorativa.`
  },
  {
    slug: "necesidades-deseos-expectativas",
    clase: "Práctica",
    titulo: "Necesidades, deseos y expectativas",
    orden: 14,
    resumen: "No todo lo que se pide pesa igual. Distinguir estos tres evita tratar un lujo como si fuera el corazón del sistema.",
    contenido: `## Las tres capas

- **Necesidad**: sin esto el sistema no cumple su razón de ser. Suele volverse un requerimiento funcional indispensable.
- **Deseo**: mejora notable, pero el sistema podría arrancar sin ello. A menudo es automatización o comodidad.
- **Expectativa**: muchas veces ni se dice. Aparece como calidad: velocidad, disponibilidad, que “se entienda solo”. Si no se pregunta, el usuario la da por obvia.

En la práctica de la biblioteca se usó esta distinción con códigos RF (funcionales) y RFN (no funcionales).

## Ejemplo: biblioteca de la facultad

**Necesidades**
- RF1: El sistema debe permitir registrar el préstamo y la devolución de material bibliográfico.
- RF2: El sistema debe llevar un registro actualizado del stock disponible de cada material.
- RF3: El sistema debe identificar a cada usuario (alumno, docente, no docente) y asociarlo a sus préstamos.

**Deseos**
- RF4: El sistema debe enviar un correo recordando el vencimiento del préstamo.
- RF5: El sistema debe permitir reservar un libro en línea.
- RF6: El sistema debe sugerir material relacionado según el historial.

**Expectativas**
- RFN1: Una consulta de disponibilidad debe responderse de forma prácticamente instantánea (rendimiento).
- RFN2: El sistema debe estar disponible en el horario de atención, sin caídas frecuentes (disponibilidad).
- RFN3: La interfaz debe ser simple e intuitiva, sin capacitación previa (usabilidad).

Al entrevistar a un gerente, preguntá: *si esto no existiera el primer día, ¿el sector podría trabajar?* Eso separa necesidad de deseo.`
  },
  {
    slug: "usuario-vs-sistema",
    clase: "Práctica",
    titulo: "Requerimientos de usuario y de sistema",
    orden: 15,
    resumen: "El de usuario dice qué necesita una persona, en su lenguaje. El de sistema dice con precisión cómo debe comportarse el software.",
    contenido: `## La diferencia

**Requerimiento del usuario:** enunciado de alto nivel, en lenguaje natural, sin detalle técnico. Describe la necesidad de una persona.

**Requerimiento del sistema:** traducción técnica y detallada. Especifica el comportamiento con precisión y sirve de base para diseño y desarrollo.

Ambos nacen de la misma conversación con stakeholders. El analista es quien decide el *perfil* de cada enunciado: si queda en el nivel del usuario o se precisa como especificación de sistema.

## Ejemplo: biblioteca

**Usuario**
- Quiere registrar préstamo y devolución de forma rápida.
- Quiere consultar si un libro está disponible antes de ir.
- Quiere un aviso antes del vencimiento para evitar sanciones.

**Sistema**
- Debe registrar cada préstamo con usuario, ejemplar, fecha de préstamo y fecha límite de devolución.
- Debe actualizar automáticamente el estado del ejemplar (disponible o prestado).
- Debe notificar por correo al usuario 48 horas antes del vencimiento.

El primero se entiende en una reunión. El segundo ya se puede diseñar y probar.`
  },
  {
    slug: "funcionales-y-no-funcionales",
    clase: "Práctica",
    titulo: "Requerimientos funcionales y no funcionales",
    orden: 16,
    resumen: "Los funcionales dicen qué hace el sistema. Los no funcionales dicen qué tan bien, bajo qué condiciones de calidad.",
    contenido: `## Cómo se escriben en este curso

Formato recomendado:

> **RFx / RFNx:** El sistema debe + acción + objeto + condiciones observables.

- **RF (funcional):** una función o servicio. Se puede señalar un flujo: registrar, consultar, cancelar, notificar.
- **RFN (no funcional):** una cualidad. Rendimiento, disponibilidad, usabilidad, seguridad, precisión. Debe ser lo más medible posible.

Un buen requerimiento es **atómico** (una idea), **claro** (sin “rápido”, “amigable”, “etc.” sueltos), **verificable** (se puede imaginar una prueba) y **acordado** con quien corresponde.

## Ejemplo sencillo

Débil: “El sistema debe ser rápido y fácil.”

Mejor:
- RF7: El sistema debe permitir al paciente cancelar un turno hasta 12 horas antes del horario reservado.
- RFN4: El sistema debe mostrar el resultado de una búsqueda de turnos libres en menos de 3 segundos en condiciones normales de uso.

La segunda versión se puede discutir, priorizar y testear.`
  },
  {
    slug: "dominio-del-problema",
    clase: "Práctica",
    titulo: "Dominio del problema",
    orden: 17,
    resumen: "Antes de listar requerimientos hay que entender el mundo en el que vive el problema. Esa es la etapa 1 del trabajo práctico.",
    contenido: `## Qué tiene que permitir comprender el enunciado

1. El **contexto** en el que se encuentra el problema.
2. La **organización**, institución o ámbito involucrado.
3. La **situación o necesidad** que da origen al proyecto.
4. **Cómo se realizan hoy** las actividades relacionadas.
5. El **objetivo general** del sistema que se pretende desarrollar.
6. La información que **aún no se conoce** y habría que obtener.

En esta etapa el objetivo es comprender. **No** se espera definir todavía todos los requerimientos.

## Cómo se obtiene (taller)

No se inventa el dominio en el escritorio. Se entrevista. El interlocutor (en clase, la IA en rol de gerente) no entrega todo de una vez: describe situaciones. El analista pregunta, interpreta y vuelve a preguntar.

Al cerrar una exploración conviene sintetizar:

- stakeholders potenciales y el interés de cada uno;
- al menos un conflicto entre ellos;
- un gap semántico (la misma palabra, dos significados).

## Ejemplo de preguntas que sí sirven

- ¿Quién pierde si este sistema sale mal?
- ¿Qué hacen hoy cuando no hay sistema, o cuando el actual falla?
- ¿Qué significa para ustedes “urgente” / “alumno regular” / “stock”?
- Si dos sectores pidieran lo contrario, ¿quién decide?
- ¿Qué información no me están pudiendo dar todavía?`
  },
  {
    slug: "metodologias",
    clase: "Práctica",
    titulo: "Metodologías y el lugar de los requerimientos",
    orden: 18,
    resumen: "SCRUM, RUP y el modelo en V no eliminan los requerimientos: cambian cuándo, cómo y con qué formalidad aparecen.",
    contenido: `## Preguntas que un analista le hace a cualquier método

1. ¿Qué es?
2. ¿Cómo funciona?
3. ¿Qué lugar ocupan los requerimientos?
4. ¿Qué ventaja presenta?
5. ¿Qué dificultad presenta?
6. ¿Por qué debería importarle a un analista?
7. Un ejemplo sencillo.

## SCRUM (ágil)

**Qué es.** Marco iterativo e incremental. Se trabaja en sprints cortos, con un Product Backlog priorizado.

**Requerimientos.** Viven como ítems de backlog (historias, criterios de aceptación). Se refinan de a poco. No hay un “gran documento único” como único acto.

**Ventaja.** El cambio se espera. Se valida pronto con incrementos.
**Dificultad.** Si nadie prioriza ni cierra alcance, el backlog se vuelve una lista infinita de deseos.
**Al analista.** Tiene que saber escribir historias verificables y detectar cuando una historia esconde un conflicto de stakeholders.

**Ejemplo.** “Como bibliotecario quiero registrar una devolución para liberar el ejemplar el mismo día.” Criterio: el estado pasa a disponible y queda el historial del usuario.

## Modelo en V

**Qué es.** El desarrollo baja por especificación y diseño, y sube por verificación. Cada nivel de especificación tiene su nivel de prueba.

**Requerimientos.** Están arriba a la izquierda. Cada RF/RFN debería poder trazarse a una prueba a la derecha.

**Ventaja.** Fuerza trazabilidad: si no se puede probar, el requerimiento está mal escrito.
**Dificultad.** Encaja mal cuando el dominio todavía se está descubriendo.
**Al analista.** Escribe pensando en “¿cómo sabremos que se cumplió?”.

**Ejemplo.** RFN2 (disponibilidad en horario de atención) se prueba con un plan de caídas y horarios, no con una demo de pantalla.

## RUP (Rational Unified Process)

**Qué es.** Proceso iterativo organizado en fases (concepción, elaboración, construcción, transición) y disciplinas (una de ellas, requerimientos).

**Requerimientos.** Hay una disciplina formal: visión, casos de uso, especificaciones suplementarias. Se profundizan sobre todo en elaboración.

**Ventaja.** Estructura y artefactos claros cuando el sistema es grande.
**Dificultad.** Se puede burocratizar: documentos que nadie lee.
**Al analista.** El caso de uso no reemplaza entender el dominio; lo organiza.

**Ejemplo.** Caso de uso “Reservar material”: actor alumno, precondición estar habilitado, flujo básico y flujos alternativos (cupo en espera, sanción).

## Plano arquitectónico del software

No es una metodología de gestión: es la representación de la estructura (partes, relaciones, cualidades). Los RFN (rendimiento, seguridad, disponibilidad) son los que más empujan esa forma. Un analista que ignora la arquitectura escribe RFN que después nadie puede cumplir.

## SCRUM frente a RUP

SCRUM optimiza el aprendizaje corto y la conversación continua. RUP optimiza la explicitación y el control de artefactos. Un analista elige el *nivel de formalidad* según el riesgo del dominio, no según la moda.

## Equipos distribuidos

Más distancia = más gap semántico y más vías de comunicación (deseconomía de escala). Los requerimientos escritos, el glosario y las decisiones registradas dejan de ser “papeles” y pasan a ser el único suelo común.`
  }
];
