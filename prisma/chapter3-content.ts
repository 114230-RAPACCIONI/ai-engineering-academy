/** Cap. 3 — CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md */
export const chapter3Modules = [
  {
    slug: "3-1-reqs-to-design",
    title: "3.1 — De requirements a diseño",
    summary: "Pasá de qué debe hacer el sistema a cómo se estructura V1.",
    goal: "Explicar la frontera requirements → diseño sin codear V1 entera.",
    context: "Capítulo 3 · Plan.",
    expectedOutcome: "Sabés qué preguntas responde el diseño vs los FRs.",
    feedback: "Diseño alinea componentes a FR Must. No es elegir framework primero.",
    order: 1,
    body: `Cap. 1 = qué/por qué. Cap. 2 = qué debe hacer (verificable). Cap. 3 = diseño mínimo para cumplir esos FRs/NFRs.

Todavía no implementás V1 completa. Sí podés spikear ≤2 h throwaway.

Pregunta guía: ¿qué componentes y responsabilidades cubren cada FR Must?`,
  },
  {
    slug: "3-2-minimal-vs-enterprise",
    title: "3.2 — Diseño mínimo vs enterprise",
    summary: "Evitá over-engineering: lo mínimo que cumple NFR de V1.",
    goal: "Reconocer cuándo un diseño es excesivo para V1.",
    context: "Capítulo 3 · Simplicidad.",
    expectedOutcome: "Podés justificar un monolito modular simple vs microservicios.",
    feedback: "Si no tenés multi-equipo ni escala, no inventes plataforma.",
    order: 2,
    body: `ZUZU sigue ADR-006: simplicidad primero.

Mal: event bus + 5 servicios para un tracker personal.
Bien: pocas capas claras que cumplan FR Must y NFR de V1.

El diseño “enterprise” se gana con evidencia, no con moda.`,
  },
  {
    slug: "3-3-components",
    title: "3.3 — Componentes y responsabilidades",
    summary: "Tabla componente → responsabilidad → FR/NFR.",
    goal: "Nombrar 3–7 componentes lógicos de V1.",
    context: "Capítulo 3 · Componentes.",
    expectedOutcome: "Cada FR Must traza a al menos un componente.",
    feedback: "Si un FR no tiene dueño, el diseño está incompleto.",
    order: 3,
    body: `| Componente | Responsabilidad | FR/NFR |

Ejemplo: FormularioGasto | captura y valida input | FR-001, NFR-usabilidad
Repositorio | persiste y lista | FR-001, FR-002

Sin detalle de carpetas de framework todavía — eso puede ir al ADR de stack.`,
  },
  {
    slug: "3-4-flows-states",
    title: "3.4 — Flujos de usuario y estados",
    summary: "Flujos Must + estados de la app (sin wireframes premium).",
    goal: "Documentar flujos principales y estados relevantes.",
    context: "Capítulo 3 · UX lógica.",
    expectedOutcome: "Al menos los flujos Must de V1 escritos paso a paso.",
    feedback: "Estado vacío/error/éxito evita Frankenstein de UI después.",
    order: 4,
    body: `Flujo: crear gasto
1. Usuario abre form
2. Ingresa monto/categoría/fecha
3. Valida → guarda → ve lista actualizada

Estados: vacío, cargando (si aplica), error de validación, lista con ítems.

No hace falta Figma. Sí hace falta no olvidar el camino feliz y el error.`,
  },
  {
    slug: "3-5-data-model",
    title: "3.5 — Persistencia y modelo de datos",
    summary: "Modelo lógico (entidades/campos) alineado a FRs.",
    goal: "Definir entidades V1 sin atarte aún al motor concreto.",
    context: "Capítulo 3 · Datos.",
    expectedOutcome: "Entidades y campos necesarios para FR Must.",
    feedback: "Modelo lógico primero; SQLite/Postgres es decisión de ADR.",
    order: 5,
    body: `Entidad Gasto: id, monto, categoría, fecha, createdAt
Reglas: monto > 0; categoría de lista fija (si así lo decidiste en Cap. 2)

El ADR de persistencia elige localStorage / SQLite / etc. con trade-offs.`,
  },
  {
    slug: "3-6-stack-criteria",
    title: "3.6 — Elegir stack con criterio",
    summary: "Stack al servicio de V1 y NFR — no al revés.",
    goal: "Proponer stack con criterios explícitos.",
    context: "Capítulo 3 · Stack.",
    expectedOutcome: "Candidatos + criterios (DX, NFR, tiempo) documentados.",
    feedback: "Elegir React “porque sí” es Cap. 1 Frankenstein con otro disfraz.",
    order: 6,
    body: `Criterios típicos V1: velocidad de aprendizaje, NFR locales, un solo deployable, export/portable.

Documentá 2–3 alternativas. La decisión formal va en ADR.`,
  },
  {
    slug: "3-7-adrs",
    title: "3.7 — ADRs — decisiones técnicas formales",
    summary: "≥2 ADRs: contexto, decisión, alternativas, consecuencias.",
    goal: "Escribir ADRs aceptados para V1.",
    context: "Capítulo 3 · ADR.",
    expectedOutcome: "Al menos 2 ADRs (ej. persistencia + estructura/stack).",
    feedback: "ADR sin alternativas es propaganda. Incluí trade-offs.",
    order: 7,
    body: `Plantilla mínima:
## Contexto
## Decisión
## Alternativas consideradas
## Consecuencias

No es burocracia: es memoria para vos y el Mentor en Cap. 4.`,
  },
  {
    slug: "3-8-increment-1",
    title: "3.8 — Primer incremento (vertical slice)",
    summary: "I1 pequeño que atraviesa UI → lógica → persistencia.",
    goal: "Definir Incremento 1 con FRs/ACs y DoD preview.",
    context: "Capítulo 3 · Tasks.",
    expectedOutcome: "I1 vertical, no capa horizontal gigante.",
    feedback: "I1 = slice usable. No “toda la arquitectura sin UI”.",
    order: 8,
    body: `Incremento 1 ejemplo: crear + listar gastos de la semana con validación y persistencia.

DoD preview Cap. 4: ACs del slice en verde; nada más.

Plan I2+ puede existir, pero I1 debe ser cerrable.`,
  },
  {
    slug: "3-9-ai-design",
    title: "3.9 — IA en diseño sin Frankenstein",
    summary: "Pedí revisión de complejidad; no “diseñame todo el sistema”.",
    goal: "Usar el Mentor para desafiar over-engineering.",
    context: "Capítulo 3 · Mentor.",
    expectedOutcome: "Notas donde la IA señala complejidad innecesaria y vos cortás.",
    feedback: "Si la IA agregó Kafka, rechazalo con tus NFR de V1.",
    order: 9,
    body: `Prompts útiles:
• “¿Qué componentes sobran para FR Must?”
• “¿Este ADR justifica la complejidad?”
• “¿I1 es demasiado grande?”

No: “Generame la arquitectura completa enterprise.”`,
  },
  {
    slug: "3-practice",
    title: "Practice — Design Cap. 3",
    summary: "Cerrá DESIGN.md + ADRs + plan de incrementos.",
    goal: "Definition of Done Cap. 3 sin implementar V1 completa.",
    context: "Capítulo 3 · Practice Project.",
    expectedOutcome: "Diseño cubre FR Must, ≥2 ADRs, I1 definido.",
    feedback: "Design listo. Cap. 4 es Implement — todavía no es este capítulo.",
    order: 10,
    body: `Definition of Done — Capítulo 3:
• Diseño cubre todos los FR Must
• ≥ 2 ADRs aceptados
• Incremento 1 definido con ACs
• Stack elegido con justificación en ADR
• Sin implementación completa de V1 (correcto)

Actualizá el Practice Project a estado Design y exportá el ZIP.`,
  },
] as const;
