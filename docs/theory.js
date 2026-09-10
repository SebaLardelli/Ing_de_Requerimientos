const TEORIA_INICIAL = [
  {
    slug: "resumen-clase-1",
    clase: "Clase 1",
    titulo: "Resumen de la clase 1",
    orden: 0,
    resumen: "Software como producto y proceso: no son solo programas. Evolución, características, cualidades, deseconomía de escala y la idea de proceso.",
    contenido: `## De qué trata esta clase

**Software como producto y proceso.** Se mira el software desde la ingeniería de requerimientos: qué es, cómo evolucionó la idea, por qué es único, qué cualidades se le pueden exigir y qué es un proceso.

Puntos que recorre el material:

- Turing (1935) y Tukey (1958): es mejor resolver de forma aproximada el problema correcto que resolver de forma exacta el equivocado.
- El software es información: programas, diseños, requerimientos, documentación. Si solo miramos el ejecutable, el conocimiento se pierde.
- Es producto y conocimiento empaquetado.
- Es intangible, intelectual, maleable y se desarrolla por proyectos.
- Cualidades (corrección, confiabilidad, usabilidad, mantenibilidad, etc.) y quién las mira (usuario, desarrollador, jefe de proyecto).
- Deseconomía de escala: más gente, más vías de comunicación.
- Proceso (IEEE / Pfleeger): pasos con propósito, recursos, restricciones y productos.

## Idea para llevarse

Reducir el software a “lo que corre” es útil para la máquina y peligroso para quien lo construye. Los requerimientos son parte del software, no un trámite previo.`
  },
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
    slug: "resumen-clase-2",
    clase: "Clase 2",
    titulo: "Resumen de la clase 2",
    orden: 8,
    resumen: "Dificultades esenciales, modelos y stakeholders: complejidad, conformidad, modificabilidad, invisibilidad, gap semántico y contrato social.",
    contenido: `## De qué trata esta clase

**Dificultades esenciales, modelos y stakeholders.** Objetivos de la clase:

- Reconocer las dificultades esenciales del software (complejidad, conformidad, modificabilidad, invisibilidad).
- Diferenciar modelos, representaciones y realidad.
- Analizar por qué es tan difícil obtener requerimientos.
- Identificar stakeholders y problemas de comunicación.
- Comprender el gap semántico y el contrato social.

Esas dificultades impactan en cómo entendemos lo que nos piden, en la volatilidad de lo pedido y en que el producto no se puede “ver”.

La actividad típica: sistema de turnos en un hospital, cinco stakeholders, conflictos y un gap semántico.

## Idea para llevarse

El usuario habla negocio; el analista tiende a hablar tecnología. El trabajo no es traducir palabras: es construir un acuerdo de significados.`
  },
  {
    slug: "dificultades-esenciales",
    clase: "Clase 2",
    titulo: "Dificultades esenciales del software",
    orden: 9,
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
    orden: 10,
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
    orden: 11,
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
    orden: 12,
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
    orden: 13,
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
    orden: 14,
    resumen: "Usuarios y analistas tienen derechos y deberes. Sin ese acuerdo, la entrevista se vuelve un monólogo.",
    contenido: `## Derechos del usuario

1. Esperar que el analista hable su lenguaje.
2. Que el analista aprenda el negocio y sus objetivos.
3. Que escriba una especificación de requerimientos de software.
4. Recibir explicaciones de los productos del proceso de requerimientos.
5. Un trato respetuoso de parte de desarrolladores.
6. Ideas y alternativas para los requerimientos y su implementación.
7. Describir características que hagan el producto simple y agradable de usar.
8. Poder ajustar requerimientos para reutilizar componentes ya existentes.
9. Recibir estimaciones de buena fe del costo de los cambios.
10. Recibir un sistema que cubra necesidades funcionales y de calidad.

## Deberes del usuario

1. Educar a analistas y desarrolladores en el negocio.
2. Destinar tiempo a proveer y clarificar.
3. Ser específico y preciso.
4. Tomar decisiones a tiempo.
5. Respetar evaluaciones de costo y factibilidad.
6. Establecer prioridades.
7. Revisar documentos y evaluar prototipos.
8. Comunicar los cambios.
9. Seguir el proceso de cambios acordado.
10. Respetar el proceso de ingeniería de requerimientos que usa el analista.

## Para el analista

No es “el cliente siempre tiene razón” ni “el técnico manda”. Es una relación con reglas. Si nadie prioriza, hay que pedirlo. Si el analista habla solo en jerga, está incumpliendo su parte.

## Ejemplo sencillo

El gerente dice “quiero algo moderno”. El analista traduce eso a alternativas concretas (y costos). El gerente tiene el deber de elegir. Si nadie elige, no hay requerimiento: hay una frase decorativa.`
  },
  {
    slug: "resumen-clase-3",
    clase: "Clase 3",
    titulo: "Resumen de la clase 3",
    orden: 15,
    resumen: "Requerimientos y ciclo de vida: los requerimientos descubren qué se desea, sostienen el plan y, si salen mal, explican gran parte de los fracasos.",
    contenido: `## De qué trata esta clase

**Requerimientos y ciclo de vida.** Los requerimientos son la parte del desarrollo en la que se intenta descubrir qué se desea. Sirven de base para estimaciones y planificación e impactan en todas las fases posteriores.

Se miran modelos de ciclo de vida (cascada, ágil/SCRUM, modelo en V, RUP), el giro de “alcance fijo” a “alcance estimado”, calidad, el informe Standish y el costo de detectar un error tarde.

La actividad del congreso pide explicar cada método en tres minutos: qué es, cómo funciona, qué lugar ocupan los requerimientos, ventaja, dificultad, por qué le importa al analista y un ejemplo.

## Idea para llevarse

Un método ágil no significa “no hay requerimientos”. Un método formal no significa que el documento reemplace entender el dominio. Lo que no se acuerda al principio se paga después, y sale mucho más caro.`
  },
  {
    slug: "necesidades-deseos-expectativas",
    clase: "Clase 4",
    titulo: "Necesidades, deseos y expectativas",
    orden: 26,
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
    slug: "resumen-clase-4",
    clase: "Clase 4",
    titulo: "Resumen de la clase 4",
    orden: 21,
    resumen: "Perspectiva organizacional y análisis: qué es elicitación, cómo se define un requerimiento y para qué sirve una SRS.",
    contenido: `## De qué trata esta clase

**Perspectiva organizacional y análisis.** Se trabaja:

- Qué es **elicitación**: obtener, no inventar. Es un proceso social (comunicación, acuerdos, negociación).
- La definición de **requerimiento** (IEEE): lo que necesita el usuario, lo que debe satisfacer el sistema, y su representación documentada.
- El **rol** de los requerimientos: acuerdo, contrato, base de diseño, menos defectos, verificación y evolución.
- La mirada **organizacional**: alinear el sistema con el negocio, no solo “automatizar”.
- La **SRS**: modeliza lo que se necesita, comunica y sirve para testear.
- **Funcionales vs no funcionales**, y en la práctica: necesidades, deseos, expectativas, usuario y sistema.

## Idea para llevarse

Elicitar no es pedirle a alguien “pasame los requerimientos”. Es trasladar ideas del usuario a enunciados que se puedan acordar, diseñar y probar.`
  },
  {
    slug: "usuario-vs-sistema",
    clase: "Clase 4",
    titulo: "Requerimientos de usuario y de sistema",
    orden: 27,
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
    clase: "Clase 4",
    titulo: "Requerimientos funcionales y no funcionales",
    orden: 28,
    resumen: "Los funcionales dicen qué hace el sistema. Los no funcionales dicen qué tan bien, bajo qué condiciones de calidad.",
    contenido: `## Cómo se escriben en este curso

Formato recomendado:

> **RFx / RFNx:** El sistema debe + acción + objeto + condiciones observables.

- **RF (funcional):** una función o servicio. Se puede señalar un flujo: registrar, consultar, cancelar, notificar.
- **RFN (no funcional):** una cualidad. Rendimiento, disponibilidad, usabilidad, seguridad, precisión. Debe ser lo más medible posible. El apartado siguiente lista cómo medir cada una.

Un buen requerimiento es **atómico** (una idea), **claro** (sin “rápido”, “amigable”, “etc.” sueltos), **verificable** (se puede imaginar una prueba) y **acordado** con quien corresponde.

## Ejemplo sencillo

Débil: “El sistema debe ser rápido y fácil.”

Mejor:
- RF7: El sistema debe permitir al paciente cancelar un turno hasta 12 horas antes del horario reservado.
- RFN4: El sistema debe mostrar el resultado de una búsqueda de turnos libres en menos de 3 segundos en condiciones normales de uso.

La segunda versión se puede discutir, priorizar y testear.`
  },
  {
    slug: "rfn-cualidades-medibles",
    clase: "Clase 4",
    titulo: "Cualidades medibles de los no funcionales",
    orden: 28.5,
    resumen: "Una expectativa (RFN) no es “rápido” ni “amigable”. Es una cualidad con número, horario o prueba. Así se escribe en la práctica.",
    contenido: `## Qué es un RFN en este curso

Los **requerimientos no funcionales** (expectativas, código RFN) no dicen *qué hace* el sistema. Dicen **qué tan bien** tiene que hacerlo: tiempo, disponibilidad, claridad, seguridad, precisión.

En la práctica se piden **dos expectativas**. Si queda “el sistema debe ser rápido y fácil”, no se puede corregir ni probar. Hay que elegir **una cualidad** y hacerla **medible**.

Formato:

> El sistema debe + cualidad + objeto + condición observable (número, horario, rol o prueba).

## Cualidades que se usan en la práctica

| Cualidad | Pregunta al stakeholder | Cómo se vuelve medible | Palabras que no cierran |
|---|---|---|---|
| **Rendimiento** | ¿En cuánto tiempo lo necesitás? | Segundos (o minutos) para una operación concreta | rápido, instantáneo, al toque |
| **Disponibilidad** | ¿En qué horario no puede fallar? | Horario de atención, días, porcentaje de tiempo en pie | siempre, 24/7 (si no es cierto), sin caídas |
| **Usabilidad** | ¿Quién tiene que usarlo sin curso? | Sin capacitación previa, o “completa X en N minutos” | amigable, intuitivo, simple |
| **Seguridad** | ¿Quién ve qué? | Identificación de usuario, roles, dato que no se muestra | seguro, protegido |
| **Precisión** | ¿Qué tan exacto tiene que ser? | Decimales, coincidencia con el stock real, sin duplicados | preciso, exacto |
| **Confiabilidad** | ¿Cada cuánto se puede equivocar? | Operaciones que no se pierden, reintento, registro de error | confiable, estable |
| **Capacidad** | ¿Cuántos a la vez? | Cantidad de usuarios o turnos concurrentes | mucha gente, todos juntos |
| **Mantenibilidad** | ¿Se puede cambiar sin romper? | Tiempo o pasos para un cambio acordado (si el dominio lo pide) | fácil de mantener |

No hace falta usar las ocho. En la entrevista aparecen dos o tres. Se escriben esas, no un catálogo copiado.

## Cómo pasar de vago a medible

| Débil (no se prueba) | Medible (sí se prueba) |
|---|---|
| El sistema debe ser rápido. | El sistema debe mostrar el resultado de una consulta de disponibilidad en **menos de 3 segundos** en horario de atención. |
| El sistema debe estar siempre disponible. | El sistema debe estar disponible **durante el horario de atención** de la biblioteca (o del hospital), de lunes a viernes. |
| La interfaz debe ser intuitiva. | El sistema debe permitir al personal registrar un préstamo **sin capacitación previa** (un bibliotecario nuevo completa la operación guiado por la pantalla). |
| El sistema debe ser seguro. | El sistema debe identificar a cada usuario (alumno, docente, no docente) **antes** de asociarlo a un préstamo. |
| El stock debe ser preciso. | El sistema debe dejar el ejemplar en estado **disponible o prestado** al instante de registrar la operación, sin duplicar el mismo ejemplar. |

## Biblioteca (como en la práctica de clase 4)

Las expectativas del ejercicio eran rendimiento, disponibilidad y usabilidad. Así se vuelven RFN verificables:

- **RFN1 (rendimiento).** El sistema debe responder una consulta de disponibilidad de un libro en menos de 3 segundos.
- **RFN2 (disponibilidad).** El sistema debe estar disponible durante todo el horario de atención de la biblioteca.
- **RFN3 (usabilidad).** El sistema debe permitir al personal registrar un préstamo sin capacitación previa.

“Prácticamente instantáneo” y “sin caídas frecuentes” todavía son blandos. El número o el horario es lo que el corrector puede mirar.

## Hospital (caso de la pestaña Práctica)

- **Rendimiento.** El sistema debe listar los turnos libres de un profesional en menos de 3 segundos.
- **Disponibilidad.** El sistema debe estar disponible en el horario de ventanilla (por ejemplo 7 a 20, días hábiles).
- **Usabilidad.** El sistema debe permitir a un administrativo dar un turno con los datos del paciente, sin un instructivo aparte.
- **Seguridad.** El sistema debe mostrar la agenda de un profesional solo al personal autorizado de ese consultorio.

## Cómo preguntarlo en el chat

No preguntes “¿qué RFN quieren?”. Preguntá la cualidad en idioma de dominio:

- ¿Cuánto pueden esperar frente a la pantalla cuando buscan si hay turno o libro?
- Si el sistema se cae a las 10 de la mañana, ¿qué pasa en la ventanilla?
- ¿Alguien nuevo del sector podría usarlo el primer día, o hace falta un curso?
- ¿Hay datos que no puede ver todo el mundo?

La respuesta se traduce a **una** cualidad + **una** medida. Eso es la expectativa.`
  },
  {
    slug: "resumen-clase-5",
    clase: "Clase 5",
    titulo: "Resumen de la clase 5",
    orden: 29,
    resumen: "Procesos de RE y elicitación: comprender, preguntar, escuchar, interpretar, especificar y validar. Las palabras del stakeholder no son automáticamente un requerimiento.",
    contenido: `## De qué trata esta clase

**Procesos de RE y elicitación.** El analista no empieza escribiendo. Primero: comprender → preguntar → escuchar → interpretar → analizar → especificar → validar. Y, muchas veces, volver a preguntar.

Los procesos centrales (Loucopoulos) son **elicitación**, **especificación**, **validación** y **gestión**. Un requerimiento bueno es claro, preciso, consistente, verificable y factible. Los requerimientos cambian: hay que rastrearlos.

En la práctica se entrevista (acá, a la IA) para conocer necesidades, expectativas, problemas y reglas del negocio. Una buena pregunta genera otra pregunta.

## Idea para llevarse

“Queremos transferencias rápidas y seguras” no es un requerimiento. ¿Qué es rápido? ¿Qué es seguro? ¿Quién lo define? ¿Qué pasa si falla? Recién después se escribe el enunciado.`
  },
  {
    slug: "dominio-del-problema",
    clase: "Clase 5",
    titulo: "Dominio del problema",
    orden: 35,
    resumen: "Antes de listar requerimientos hay que entender el mundo en el que vive el problema. Esa es la etapa 1 del trabajo práctico.",
    contenido: `## Qué tiene que permitir comprender el enunciado

1. El **contexto** en el que se encuentra el problema.
2. La **organización**, institución o ámbito involucrado.
3. La **situación o necesidad** que da origen al proyecto.
4. **Cómo se realizan hoy** las actividades relacionadas.
5. El **objetivo general** del sistema que se pretende desarrollar.
6. La información que **aún no se conoce** y habría que obtener.

En esta etapa el objetivo es comprender. **No** se espera definir todavía todos los requerimientos.

## Cómo se obtiene (práctica)

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
    clase: "Clase 3",
    titulo: "Metodologías y el lugar de los requerimientos",
    orden: 20,
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
  },
  {
    slug: "reqs-en-ciclo-vida",
    clase: "Clase 3",
    titulo: "Requerimientos en el ciclo de vida",
    orden: 16,
    resumen: "Son la parte del desarrollo en la que se intenta descubrir qué se desea. Sostienen el plan y atraviesan todas las fases.",
    contenido: `## Qué lugar ocupan

Gause y Weinberg lo dicen así: los requerimientos son la parte del desarrollo en la que **la gente intenta descubrir qué se desea**.

En el ciclo de vida no son un capítulo suelto al inicio. Son:

- la base para **estimar** esfuerzo y plazos;
- el criterio para **aceptar** el sistema;
- el hilo que recorre diseño, construcción, prueba y mantenimiento.

Si el requerimiento está mal, el diseño “correcto” resuelve el problema equivocado. El error viaja en cascada.

## Predictivo y adaptativo

En un ciclo **predictivo** (cascada) se fijan los requerimientos y después se formula el plan (costo y tiempo). En un ciclo **adaptativo** (ágil) se fijan recursos y tiempo, y el alcance se estima y se va ajustando.

Ninguno elimina los requerimientos. Cambian *cuándo* se cierran y *con qué formalidad* se escriben.

## Ejemplo sencillo

Si en un hospital no está escrito qué es un “turno urgente”, el plan de tres meses no sirve: cada área imagina otro sistema. El ciclo de vida arranca desfasado aunque el Gantt se vea prolijo.`
  },
  {
    slug: "modelos-ciclo-vida",
    clase: "Clase 3",
    titulo: "Modelos de ciclo de vida",
    orden: 17,
    resumen: "Cascada, ágil, modelo en V y RUP organizan el mismo problema: cuándo se acuerda qué construir y cuándo se comprueba.",
    contenido: `## Cascada (waterfall)

Secuencial y predictivo: requerimientos → diseño → construcción → prueba → entrega. Encaja cuando el problema es estable y se puede especificar pronto. Se rompe cuando el dominio todavía se está descubriendo.

## Ágil (SCRUM)

Iterativo y adaptativo. El alcance se va aprendiendo. Los requerimientos viven como ítems de backlog, no como un único acto de “firmar el documento y no tocarlo”. El giro: dados el tiempo y las personas, se elige qué entra en el incremento.

## Modelo en V

Baja por especificación y diseño, y sube por verificación. Cada nivel de requerimiento tiene su nivel de prueba. Si un RF no se puede trazar a una prueba, está mal escrito.

## RUP

Iterativo e incremental, con fases (concepción, elaboración, construcción, transición) y una disciplina formal de requerimientos (visión, casos de uso, especificaciones suplementarias).

## Equipos distribuidos

Más distancia cultural y geográfica: más gap semántico. El ciclo de vida necesita más explicitación (glosario, decisiones, trazas), no menos.

## Ejemplo sencillo

Un club de barrio que todavía no sabe si la app es para socios, para la tesorería o para ambos no debería “cerrar” una cascada de seis meses. Un backlog corto, con criterios de aceptación, permite aprender el dominio sin fingir que ya está cerrado.`
  },
  {
    slug: "calidad-y-standish",
    clase: "Clase 3",
    titulo: "Calidad y por qué fallan los proyectos",
    orden: 18,
    resumen: "La calidad no es solo “sin bugs”. Standish y Dorfman muestran que los requerimientos claros y el usuario adentro predicen el éxito.",
    contenido: `## Qué se entiende por calidad

Juran la mira de dos lados: lo que satisface al usuario y la ausencia de deficiencias (menos retrabajo y reclamos). Deming insiste en que lo difícil es traducir necesidades futuras a características medibles. Esas necesidades cambian.

IEEE: calidad es el grado en que un sistema satisface **los requerimientos especificados** y también las **necesidades y expectativas** del usuario. Si la especificación está mal, “cumplirla” no alcanza.

## Standish: factores de éxito

En proyectos que salen bien suelen aparecer:

- involucramiento de los usuarios;
- apoyo de la dirección;
- enunciado claro de requerimientos;
- planificación adecuada;
- expectativas realistas.

En los que se traban o fallan: falta de input del usuario, requerimientos incompletos, cambios constantes, expectativas irreales, falta de apoyo.

## Beneficios de buenos requerimientos (Dorfman)

1. Acuerdo entre stakeholders sobre la tarea y el criterio de aceptación.
2. Base para estimar recursos y tiempos.
3. Mejor usabilidad y mantenibilidad.
4. Menos retrabajo y menos omisiones.

Esas ventajas crecen con el tamaño y la complejidad.

## Ejemplo sencillo

Un municipio pide “modernizar turnos”. Sin usuarios en la mesa y sin enunciados claros, el equipo entrega una app linda que nadie usa: las expectativas no eran realistas y el requerimiento nunca se acordó.`
  },
  {
    slug: "costo-de-errores",
    clase: "Clase 3",
    titulo: "El costo de detectar un error tarde",
    orden: 19,
    resumen: "La mayoría de los defectos se insertan en requerimientos. Corregirlos en producción puede costar 100 o 200 veces más.",
    contenido: `## La evidencia que usa la materia

Estudios de IBM y Bell Labs: cerca del **80% de los defectos se insertan en la fase de requerimientos**. En proyectos de la USAF, una parte grande de los defectos venía de **traducir mal** lo pedido. En las naves Voyager y Galileo, casi todos los defectos serios de integración no eran de programación: eran de requerimientos.

Cuanto más tarde se detecta un error, más cuesta. Repararlo en un producto ya liberado puede costar **entre 100 y 200 veces** más que hacerlo en la fase de requerimientos.

## Qué tipo de error es

Los errores de requerimientos suelen ser: hechos incorrectos, omisiones, inconsistencias y ambigüedades. Se pueden detectar: las inspecciones y las revisiones sirven.

El problema real no aparece recién en el código. Si la especificación está mal, el diseño “correcto” y el programa “correcto” siguen resolviendo el problema equivocado.

## Ejemplo sencillo

Si “reserva” en la biblioteca no se definió, el equipo programa 48 horas de bloqueo. Recién en producción el alumno dice que “reserva” era “me lo guardan hasta la tarde”. El arreglo toca datos, mails, reglamento y capacitación. Eso es el costo de llegar tarde.`
  },
  {
    slug: "que-es-elicitacion",
    clase: "Clase 4",
    titulo: "Qué es la elicitación",
    orden: 22,
    resumen: "Elicit viene de obtener. No es que el usuario “entregue” requerimientos: hay que sacarlos con un proceso social.",
    contenido: `## La palabra

Del inglés *elicit*: obtener, hacer salir. La elicitación **traslada ideas del usuario a requerimientos de software**. No es un formulario. Es un proceso social: comunicación, acuerdos, negociación.

## Técnicas habituales

Entrevistas, encuestas, observación, prototipos, análisis de documentación, brainstorming. No hay una técnica “correcta”: se elige según el acceso a la gente, el tipo de conocimiento (explícito o tácito) y el riesgo.

La observación sirve cuando el usuario no puede explicar lo que hace. El prototipo sirve cuando hay que concrear una idea vaga. La entrevista sirve para profundizar y repreguntar.

## Qué no es

No es pedirle “pasame los requerimientos”. Las palabras del stakeholder no son automáticamente un requerimiento. “Que sea fácil” es una pista, no un enunciado.

## Ejemplo sencillo

La jefa de administración dice “necesitamos ordenar los turnos”. Eso no se elicitó todavía. Hay que preguntar: ¿ordenar para quién? ¿Hoy se pierde gente, se duplican turnos o se satura el mostrador? Recién después hay algo que se puede escribir.`
  },
  {
    slug: "definicion-ieee",
    clase: "Clase 4",
    titulo: "Qué es un requerimiento (IEEE)",
    orden: 23,
    resumen: "Tres lecturas a la vez: lo que necesita el usuario, lo que debe cumplir el sistema, y el texto que lo documenta.",
    contenido: `## Definición de trabajo (IEEE 610)

Un requerimiento es:

1. Una **condición o capacidad que necesita el usuario** para resolver un problema o alcanzar un objetivo.
2. Una **condición o capacidad que debe satisfacer un sistema** para cumplir un contrato, estándar o especificación.
3. Una **representación documentada** de esas condiciones o capacidades.

Las tres importan. Si solo queda en la cabeza del usuario, no hay acuerdo. Si solo queda en un contrato sin usuario, se construye lo firmado y no lo necesario. Si no se documenta, no se puede verificar ni cambiar con control.

## Rol de los requerimientos

- Acuerdo entre desarrolladores, clientes y usuarios.
- Aspecto contractual.
- Base para el diseño.
- Menos defectos (si están bien).
- Soporte para verificación y validación.
- Soporte para la evolución del sistema.

## Ingeniería de requerimientos

Es el proceso sistemático de desarrollar requerimientos: analizar el problema, documentar lo observado en distintos formatos y chequear que la comprensión sea precisa. Es cooperativo e iterativo. No es solo un documento.

## Ejemplo sencillo

“El alumno quiere saber si el libro está” es la necesidad del usuario. “El sistema debe mostrar el estado del ejemplar (disponible / prestado / reservado) al consultar el código” es lo que el sistema debe satisfacer. El renglón escrito en la SRS es la representación. Las tres son el mismo requerimiento en distintos estados.`
  },
  {
    slug: "perspectiva-organizacional",
    clase: "Clase 4",
    titulo: "Perspectiva organizacional",
    orden: 24,
    resumen: "El sistema no se pide “porque sí”: debería bajar costos de proceso, alinear al negocio y servir a los stakeholders.",
    contenido: `## Para qué se pide un sistema

Desde la organización, los requerimientos no son una lista de pantallas. Apuntan a:

- automatizar para **reducir costos** de un proceso que ya existe;
- **alinear** el sistema con la estrategia del negocio;
- **satisfacer** necesidades de distintos stakeholders;
- transformar la información en una **herramienta** (no en un archivo más).

Si el analista solo pregunta “qué botones quieren”, pierde esta capa. Un RF puede ser correcto y, aun así, no servirle a la organización.

## El analista en esa mesa

Hay que preguntar quién gana, quién pierde, qué proceso se quiere achicar y qué no se puede tocar (reglamento, sindicato, horario de guardia). Eso no reemplaza los RF: les da sentido.

## Ejemplo sencillo

Un comercio quiere “una app de pedidos”. Organizacionalmente el objetivo puede ser dejar de anotar en WhatsApp y no perder encargos. Si la app no baja ese costo ni le sirve al mostrador, el requerimiento “registrar pedido” está bien escrito y mal apuntado.`
  },
  {
    slug: "srs",
    clase: "Clase 4",
    titulo: "La especificación (SRS)",
    orden: 25,
    resumen: "La SRS modeliza lo que se necesita, comunica y sirve de contrato. También es la base para testear el producto.",
    contenido: `## Para qué existe

La Especificación de Requerimientos de Software (SRS):

- **modeliza** lo que se necesita y formula el problema;
- es medio de **comunicación** y, a menudo, **contrato**;
- es base para **evaluar y testear** el producto final.

Puede escribirse en lenguaje natural, modelos o estándares. Tradicionalmente se la pensó solo como especificación funcional (entrada, proceso, salida). Eso deja afuera objetivos, restricciones y requerimientos no funcionales. El propósito del sistema **excede** la lista de funciones.

## Relación con la arquitectura

Hay un límite entre el *qué* y el *cómo*. La SRS no debería diseñar la solución, pero los RFN (rendimiento, seguridad, disponibilidad) empujan la forma del sistema. Si se ignoran, el “qué” queda incompleto.

## Ejemplo sencillo

Una SRS de biblioteca que solo dice “registrar préstamo” y no dice disponibilidad en horario de atención, ni quién puede reservar, permite construir tres sistemas distintos. Todos “cumplen” el renglón funcional. Ninguno se puede testear igual.`
  },
  {
    slug: "procesos-re",
    clase: "Clase 5",
    titulo: "Procesos de la ingeniería de requerimientos",
    orden: 30,
    resumen: "Si no podés describir lo que hacés como un proceso, no sabés lo que estás haciendo. Elicitar, especificar, validar y gestionar.",
    contenido: `## La frase de Deming

“Si no podés describir lo que estás haciendo como un proceso, no sabés lo que estás haciendo.” En RE eso se toma en serio: no es “anotar lo que dijo el cliente”.

## Tres aspectos

Hay que **comprender** el problema, **describirlo** y **acordar** su naturaleza. De ahí tres procesos que se entrelazan:

1. **Elicitación**: ganar conocimiento del dominio y de las necesidades.
2. **Especificación**: organizar ese conocimiento en un modelo acordado.
3. **Validación**: chequear que el modelo represente lo que se quería.

Loucopoulos suma la **gestión**: planear, controlar cambios, organizar. Los productos de un proceso alimentan al otro. Si la validación falla, se vuelve a elicitar.

## El analista no empieza escribiendo

Comprender → preguntar → escuchar → interpretar → analizar → especificar → validar. Y muchas veces, volver a preguntar.

## Ejemplo sencillo

Antes de listar RF de una billetera virtual hay que saber qué sabe la empresa y qué no: ¿quién es el cliente? ¿Hay límites del Banco Central? ¿Qué hacen hoy por ventanilla? Eso es proceso, no inspiración.`
  },
  {
    slug: "elicitacion-proceso",
    clase: "Clase 5",
    titulo: "El proceso de elicitación",
    orden: 31,
    resumen: "El propósito es volverse, al final, un experto del dominio. El producto no es un documento formal: son modelos cada vez más precisos.",
    contenido: `## Propósito

Ganar conocimiento relevante del problema para poder especificar el software que lo resuelve. Al cerrar la RE, el analista debería poder hablar el idioma del dominio.

## De dónde sale el conocimiento

Expertos, literatura del rubro, software que ya usan, sistemas parecidos, normas, otros stakeholders. Hay que identificar fuentes, decidir qué es relevante y entender el impacto.

## Técnicas

Entrevistas, observación, prototipos, reutilización de conocimiento, cuestionarios, análisis de documentación, brainstorming. Para una billetera virtual, por ejemplo: entrevistar a tesorería y a un cliente, observar cómo pagan hoy, mirar la app de un banco, preguntar por reglas que no están escritas.

## Productos

La elicitación crea modelos, no un contrato. Empieza con modelos mentales del dominio y se va acercando al software, **sin** volverse todavía una especificación formal. Corre en paralelo con especificar y validar: si falta saber, se vuelve a elicitar.

## Ejemplo sencillo

“Queremos que las transferencias sean rápidas y seguras.” Eso no cierra. ¿Qué es rápida? ¿Qué es segura? ¿Quién lo define? ¿Qué ocurre si falla? Cada respuesta abre otra pregunta. Una buena pregunta genera otra pregunta.`
  },
  {
    slug: "especificacion-y-validacion",
    clase: "Clase 5",
    titulo: "Especificación y validación",
    orden: 32,
    resumen: "Especificar es acordar el problema (no el diseño). Validar es certificar que se ataca el problema correcto.",
    contenido: `## Especificación

Se la puede ver como un **contrato** entre usuarios y desarrolladores: define el comportamiento deseado y otras propiedades (performance, confiabilidad) **sin** decir cómo se va a implementar.

El input lo da la elicitación. El analista analiza, organiza y produce modelos: unos orientados al usuario, otros al desarrollador. Si falta información, se pide más elicitación. Cada parte de la especificación dispara validación.

## Validación

Certifica que se ataca el **problema correcto**. No es lo mismo que verificar que el código cumple la spec. Se valida el modelo contra las intenciones de clientes y usuarios.

Técnicas: revisiones, prototipos, casos de uso, validación con usuarios. El producto no es “el modelo perfecto”: es un compromiso entre lo deseado y lo factible.

## Ejemplo sencillo

Se especifica: “El sistema debe transferir en menos de 10 segundos en horario hábil.” Se valida con tesorería: ¿10 segundos es lo que necesitaban o era “que no se caiga a la noche”? Si no se valida, se construye un número que nadie pidió de verdad.`
  },
  {
    slug: "gestion-y-trazabilidad",
    clase: "Clase 5",
    titulo: "Gestión, cambios y trazabilidad",
    orden: 33,
    resumen: "Los requerimientos cambian. Sin rastreo no se puede saber qué se rompe si se toca uno.",
    contenido: `## Por qué hay que gestionarlos

Cambian desde el primer día y después de la puesta en marcha. Razones: errores e inconsistencias, el usuario entiende mejor su problema, límites técnicos o de calendario, prioridades nuevas, cambios del entorno o de la organización.

Hay requerimientos más **estables** (la esencia del sistema) y más **volátiles** (la instanciación en un ambiente concreto).

## Qué se gestiona

Cambios acordados, relaciones entre requerimientos, dependencias de la SRS con el resto de los documentos. Un pedido de cambio se identifica, se analiza (impacto y costo) y recién después se implementa.

## Trazabilidad (rastreo)

Un requerimiento es rastreable si se sabe:

- quién lo sugirió;
- por qué existe;
- con qué otros se relaciona;
- cómo se relaciona con diseño, pruebas y operación.

Hacia atrás: de la SRS a la fuente. Hacia adelante: de la SRS al diseño y a las pruebas. Sin eso, “agregar pago online de turnos” es un salto a ciegas.

## Ejemplo sencillo

Si se agrega el pago online de un turno, hay que ver qué RF de agenda, cancelación y obra social se tocan. Eso es gestión, no “un botón más”.`
  },
  {
    slug: "buen-requerimiento",
    clase: "Clase 5",
    titulo: "Qué hace bueno a un requerimiento",
    orden: 34,
    resumen: "Claro, preciso, consistente, verificable y factible. Si admite dos lecturas, todavía no está listo.",
    contenido: `## Criterios

Un buen requerimiento es:

- **claro**: se entiende sin adivinar;
- **preciso**: no sobra ni falta lo importante;
- **consistente**: no choca con otro;
- **verificable**: se puede imaginar una prueba;
- **factible**: se puede construir con lo que hay.

Un enunciado ambiguo genera interpretaciones distintas. “Rápido”, “seguro”, “fácil”, “etc.” son banderas rojas.

## De la frase al enunciado

Stakeholder: “Necesitamos que los clientes puedan pagar fácilmente.”

El analista pregunta qué es “fácilmente”. Obtienen: no quieren volver a cargar la tarjeta.

Requerimiento: *El sistema debe permitir al cliente pagar usando medios de pago ya registrados.*

Eso ya se puede discutir, priorizar y probar.

## Ejemplo sencillo

Débil: “Las transferencias deben ser rápidas y seguras.”

Mejor, dos enunciados:
- El sistema debe completar una transferencia entre cuentas propias en menos de 10 segundos en horario hábil.
- El sistema debe pedir un segundo factor antes de transferir a un destinatario nuevo.`
  },
  {
    slug: "practica-como-se-trabaja",
    clase: "Práctica",
    titulo: "Cómo se trabaja la práctica",
    orden: 40,
    resumen: "El chat es el contexto. De ahí sale el dominio y, después, dos requerimientos de cada tipo. Corregir revisa formato, coherencia y qué mejorar.",
    contenido: `## Qué se practica acá

En la pestaña **Práctica** no se diseña ni se programa. Se hace el trabajo del analista: preguntar, interpretar y escribir.

1. Se abre un caso (Hospital, Biblioteca o uno nuevo).
2. Se entrevista a la IA. Habla como la persona que **quiere desarrollar una aplicación**.
3. Ese chat **es el contexto**. No se inventa el dominio en el escritorio.
4. Se completa el dominio (organización, cómo se hace hoy, objetivo, lo que falta saber).
5. Se escriben **dos requerimientos de cada tipo**: necesidad, deseo, expectativa, usuario y sistema.
6. **Corregir** revisa el formato, si es coherente con el chat y aconseja qué mejorar. El trabajo queda en **Trabajos**, cerrado, para que cada compañero abra el que le interesa.

## Relación con las clases

- **Clase 2:** stakeholders, conflictos, gap semántico. Salen de la entrevista.
- **Clase 3:** el método no reemplaza escribir bien lo pedido.
- **Clase 4:** necesidades, deseos, expectativas, usuario vs sistema.
- **Clase 5:** primero el dominio; después los requerimientos.

## Idea para llevarse

Si no está en el chat o no lo preguntaste, no lo des por sabido. Una buena pregunta genera otra pregunta.`
  },
  {
    slug: "practica-entrevista-dominio",
    clase: "Práctica",
    titulo: "Entrevistar el dominio (clase 2)",
    orden: 41,
    resumen: "Antes de listar requerimientos hay que entender quién interviene, qué necesita y dónde se rompe el lenguaje.",
    contenido: `## La consigna de la práctica

Actuás como analista. El interlocutor (acá, la IA) cuenta situaciones, no te entrega un listado técnico. No asumas que toda la información está desde el principio.

Durante la conversación tenés que poder:

- identificar **stakeholders** potenciales;
- comprender el **interés o necesidad** de cada uno;
- detectar al menos un **conflicto** entre ellos;
- detectar un **gap semántico**: la misma palabra, dos significados.

## Síntesis que se espera

Al cerrar la entrevista, dejá por escrito:

1. Cinco stakeholders y el interés principal de cada uno.
2. Un conflicto posible.
3. Un ejemplo de gap semántico.

Eso se puede anotar en “lo que todavía no sabemos” o en la síntesis del contexto. El objetivo no es diseñar el sistema.

## Cómo preguntar

Si preguntás por una necesidad, la persona suele contar primero la situación. Hay que interpretar y volver a preguntar.

Preguntas que sirven:

- ¿Quién pierde si esto sale mal?
- ¿Qué hacen hoy cuando no hay sistema, o cuando el actual falla?
- ¿Qué significa para ustedes “urgente”, “alumno regular”, “stock”?
- Si dos sectores pidieran lo contrario, ¿quién decide?

## Ejemplo sencillo

En turnos de un hospital, “urgente” para administración puede ser “llegó sin turno”. Para el médico, “no puede esperar”. Si no se pregunta, el sistema implementa una sola de las dos.`
  },
  {
    slug: "practica-congreso-metodos",
    clase: "Práctica",
    titulo: "Congreso de metodologías (clase 3)",
    orden: 42,
    resumen: "Cada método se explica en tres minutos: qué es, cómo funciona y qué lugar ocupan los requerimientos.",
    contenido: `## La consigna

Imaginen que son especialistas invitados al Congreso de Ingeniería de Requerimientos. Tienen tres minutos. Hay que convencer al resto de que entiendan el tema.

Para SCRUM, modelo en V, RUP, plano arquitectónico, SCRUM vs RUP o equipos distribuidos, responder:

1. ¿Qué es?
2. ¿Cómo funciona?
3. ¿Qué lugar ocupan los requerimientos?
4. ¿Qué ventaja presenta?
5. ¿Qué dificultad presenta?
6. ¿Por qué debería importarle a un analista?
7. Un ejemplo sencillo.

## Teoría que hay que usar

Los requerimientos descubren qué se desea y atraviesan el ciclo de vida. Un método ágil no los elimina. Un método formal no reemplaza entender el dominio.

La teoría de la **clase 3** (ciclo de vida, Standish, costo de corregir tarde) es la base. Acá se practica *explicarla* con un ejemplo, no copiar definiciones.

## Ejemplo sencillo

“Como bibliotecario quiero registrar una devolución para liberar el ejemplar el mismo día.” Eso es un requerimiento en forma de historia. El criterio de aceptación es lo que lo vuelve verificable.`
  },
  {
    slug: "practica-escribir-reqs",
    clase: "Práctica",
    titulo: "Escribir dos de cada tipo (clase 4)",
    orden: 43,
    resumen: "La práctica pide dos necesidades, dos deseos, dos expectativas, dos de usuario y dos de sistema, sacados del chat.",
    contenido: `## Qué hay que entregar

En este laboratorio se piden **dos de cada uno**, no tres como en algunas evaluaciones. Salen del chat, no se inventan.

### Necesidades (RF)

Sin esto el sistema no cumple su razón de ser.

Ejemplo (biblioteca): *El sistema debe permitir registrar el préstamo y la devolución de material bibliográfico.*

### Deseos (RF)

Mejoras. El sistema podría arrancar sin ellas.

Ejemplo: *El sistema debe permitir reservar un libro en línea antes de ir a la biblioteca.*

### Expectativas (RFN)

Calidad que a veces nadie nombra: tiempo, disponibilidad, usabilidad, seguridad, precisión. **Una cualidad por casillero, con número, horario o prueba.**

No sirven: rápido, amigable, intuitivo, siempre, seguro, etc.

Sí sirven:

- Rendimiento: *El sistema debe responder una consulta de disponibilidad en menos de 3 segundos.*
- Disponibilidad: *El sistema debe estar disponible durante el horario de atención.*
- Usabilidad: *El sistema debe permitir registrar un préstamo sin capacitación previa.*

La teoría de clase 4 (“Cualidades medibles de los no funcionales”) tiene la tabla completa.

### Requerimientos de usuario

Alto nivel, lenguaje de negocio: *El usuario quiere…*

Ejemplo: *El usuario quiere consultar si un libro está disponible antes de acercarse.*

### Requerimientos de sistema

Precisos, verificables: *El sistema debe…* con dato, estado o condición observable.

Ejemplo: *El sistema debe actualizar el estado del ejemplar a disponible o prestado al registrar la operación.*

## Cómo se escribe

> El sistema debe + verbo + objeto + condición observable.

Un casillero, una idea. Si hay un “y”, casi siempre hay dos requerimientos.

Usuario y sistema pueden hablar de lo mismo en distinto nivel. Eso no es repetir: es traducir.`
  },
  {
    slug: "practica-enunciado-dominio",
    clase: "Práctica",
    titulo: "El enunciado del dominio (clase 5)",
    orden: 44,
    resumen: "La entrega 1 pide comprender el problema. Todavía no se pide la lista completa de requerimientos.",
    contenido: `## Qué tiene que permitir comprender

El enunciado del dominio (etapa 1 del trabajo práctico) tiene que dejar en claro:

1. El **contexto**. Acá el contexto es el **chat** con quien quiere la aplicación.
2. La **organización**, institución o ámbito.
3. La **situación o necesidad** que da origen al proyecto.
4. **Cómo se hacen hoy** las actividades.
5. El **objetivo general** del sistema.
6. Lo que **todavía no se sabe** y habría que obtener.

En esta etapa el objetivo es comprender. **No** se espera definir todos los requerimientos.

## Cómo se obtiene en el laboratorio

Se entrevista. La IA no suelta todo de una vez. Se pregunta, se interpreta, se vuelve a preguntar. Después se completa el formulario de dominio y recién ahí se escriben los dos de cada tipo.

## De la frase al requerimiento (después)

Stakeholder: “Queremos transferencias rápidas y seguras.”

Eso todavía no es un requerimiento. Hay que preguntar qué es rápido, qué es seguro, quién lo define y qué pasa si falla. Recién después se escribe el enunciado.

## Idea para llevarse

Si el dominio está flojo, los diez casilleros de requerimientos van a estar flojos. Primero el mundo del problema; después la especificación.`
  }
];
