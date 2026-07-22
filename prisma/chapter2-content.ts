/** Módulos Cap. 2 — alineados a CHAPTER_02_REQUIREMENTS_BEFORE_CODE.md */
export const chapter2Modules = [
  {
    slug: "2-1-scope-to-reqs",
    title: "2.1 — De scope a requirements",
    summary: "Traducí cada ítem de scope in en requisitos verificables.",
    goal: "Entender la diferencia entre scope y requirement.",
    context: "Capítulo 2 · Specify — requirements.",
    expectedOutcome: "Podés explicar por qué el scope solo no alcanza para implementar.",
    feedback: "Bien: el scope dice qué entra; el requirement dice qué debe pasar.",
    order: 1,
    body: `El Capítulo 1 definió qué problema resolvés y qué entra en V1.
El Capítulo 2 escribe la receta verificable: qué debe hacer el sistema, con resultado observable — sin codear.

Si le pedís a la IA “implementá el scope”, rellena huecos con supuestos que vos no aprobaste. Eso es Frankenstein en requirements.

Regla: cada ítem Must de scope in debe mapear a al menos un requirement funcional (FR).`,
  },
  {
    slug: "2-2-functional-reqs",
    title: "2.2 — Requirements funcionales",
    summary: "Escribí FRs claros, sin stack ni UI detallada prematura.",
    goal: "Redactar FRs Must trazados al scope.",
    context: "Capítulo 2 · FR.",
    expectedOutcome: "Lista FR-00x con prioridad, origen de scope y descripción verificable.",
    feedback: "Si el FR nombra React/Postgres, volvé a comportamiento.",
    order: 2,
    body: `Un FR describe comportamiento del sistema, no tecnología.

Mal: “Usar React Query para cachear gastos.”
Bien: “El usuario puede registrar un gasto con monto positivo, categoría y fecha.”

Plantilla mínima:
• ID (FR-001)
• Prioridad (Must/Should)
• Origen scope (#1)
• Descripción
• Notas / reglas de negocio`,
  },
  {
    slug: "2-3-nfrs",
    title: "2.3 — Requirements no funcionales",
    summary: "NFRs mínimos de V1: usabilidad, seguridad, rendimiento — medibles.",
    goal: "Definir ≥3 NFRs con métrica o verificación.",
    context: "Capítulo 2 · NFR.",
    expectedOutcome: "NFRs con enunciado + métrica/verificación, ligados a V1.",
    feedback: "NFR sin métrica es deseo. Poné umbral o forma de verificar.",
    order: 3,
    body: `Los NFR acotan calidad de V1 sin abrir el scope.

Ejemplos Cap. 2:
• Usabilidad: crear gasto ≤ 15 s (usuario familiarizado)
• Privacidad: datos no salen por red en V1
• Rendimiento liviano: lista del mes responde en tiempo percibido aceptable

No hace falta enterprise SLA. Sí hace falta verificación explícita (aunque sea manual en Cap. 4+).`,
  },
  {
    slug: "2-4-acceptance",
    title: "2.4 — Criterios de aceptación",
    summary: "ACs testeables: Given / When / Then — sin implementación.",
    goal: "Escribir ACs happy path + casos límite por FR Must.",
    context: "Capítulo 2 · AC.",
    expectedOutcome: "Cada FR Must tiene ≥1 AC claro (sí/no observable).",
    feedback: "AC subjetivo (“fácil de usar”) no sirve. Hacelo observable.",
    order: 4,
    body: `Given … When … Then …

Happy path + al menos un caso inválido o límite por FR Must.

Mal: “El usuario se siente cómodo.”
Bien: “Given monto ≤ 0, When confirma, Then no guarda y muestra error.”

Los ACs no eligen framework. Describen comportamiento observable.`,
  },
  {
    slug: "2-5-stories-vs-reqs",
    title: "2.5 — User stories vs requirements",
    summary: "Las stories no reemplazan FRs verificables.",
    goal: "Usar stories como apoyo, no como única spec.",
    context: "Capítulo 2 · Clarify.",
    expectedOutcome: "Sabés cuándo una story es insuficiente para implementar con IA.",
    feedback: "Story ≠ FR. La IA necesita criterios, no solo “como usuario quiero”.",
    order: 5,
    body: `Una user story comunica intención. Un FR + AC comunica verificación.

En ZUZU, con Mentor/IA, la story sola invita a inventar. Preferí FR + AC como contrato.

Podés tener stories como resumen, pero el Definition of Done del Cap. 2 exige FRs y ACs.`,
  },
  {
    slug: "2-6-traceability",
    title: "2.6 — Trazabilidad y spec liviano",
    summary: "Matriz scope → FR → AC (y success criteria).",
    goal: "Completar trazabilidad Must sin documento waterfall.",
    context: "Capítulo 2 · Spec liviano.",
    expectedOutcome: "Matriz llena para ítems Must de V1.",
    feedback: "Trazabilidad corta el creep: si no está en la matriz, no entra.",
    order: 6,
    body: `| Scope | FR | AC | Success criterion |

Spec liviano ZUZU: suficiente para no Frankenstein, insuficiente para burocracia.

Si un FR no traza a scope, o es creep o falta actualizar scope conscientemente.`,
  },
  {
    slug: "2-7-design-decisions",
    title: "2.7 — Decisiones de diseño y ADRs",
    summary: "Profundizá el decision log (≥2 entradas nuevas Cap. 2).",
    goal: "Documentar decisiones de comportamiento/diseño con alternativas.",
    context: "Capítulo 2 · Decision log.",
    expectedOutcome: "≥2 decisiones nuevas con razón (aún sin stack de implementación).",
    feedback: "Decidir “fecha por defecto = hoy” es diseño. Decidir “usar Nest” es Cap. 3.",
    order: 7,
    body: `En Cap. 2 las decisiones son de comportamiento y reglas — no de framework.

Ejemplo: categorías fijas vs libres; qué pasa con gastos sin categoría; moneda única.

ADR formal completo es Cap. 3. Acá alcanza decision log con alternativas y razón.`,
  },
  {
    slug: "2-8-ai-requirements",
    title: "2.8 — IA para requirements sin Frankenstein",
    summary: "Pedile al Mentor revisión, no que invente el producto.",
    goal: "Usar IA para detectar ambigüedad, creep y contradicciones.",
    context: "Capítulo 2 · Mentor.",
    expectedOutcome: "Notas de sesión donde la IA desafía FRs/ACs y vos decidís.",
    feedback: "Si la IA agregó 10 FRs que no pediste, eso es creep. Rechazalo.",
    order: 8,
    body: `Prompts útiles:
• “¿Qué FRs no trazan a scope?”
• “¿Qué ACs son subjetivos?”
• “¿Dónde inventaste stack?”

Prompts tóxicos:
• “Generame todos los requirements de una app de X”

Vos aprobás. La IA señala huecos.`,
  },
  {
    slug: "2-practice",
    title: "Practice — Requirements Cap. 2",
    summary: "Cerrá REQUIREMENTS.md / fase Requirements sin código.",
    goal: "Completar Definition of Done del Capítulo 2.",
    context: "Capítulo 2 · Practice Project.",
    expectedOutcome: "Spec verificable V1 + matriz + ≥2 decisiones nuevas.",
    feedback: "Planning → Requirements. Todavía sin implementación. Correcto.",
    order: 9,
    body: `Definition of Done — Capítulo 2:
• Cada scope in Must tiene ≥1 FR
• Cada FR Must tiene ≥1 AC happy path + límites relevantes
• ≥3 NFRs con métrica o verificación
• Matriz de trazabilidad Must completa
• ≥2 decisiones nuevas en el log
• Sin tecnologías de implementación en FR/AC
• Sin código de implementación

Actualizá el Practice Project a estado Requirements y exportá el ZIP.`,
  },
] as const;
