import { PrismaClient } from "@prisma/client";
import { chapter2Modules } from "./chapter2-content";
import { chapter3Modules } from "./chapter3-content";
import { chapter4Modules } from "./chapter4-content";

const prisma = new PrismaClient();

const chapter1Modules = [
  {
    slug: "1-1-frankenstein",
    title: "1.1 — El problema del Frankenstein",
    summary: "Reconocé el patrón de fallo cuando la IA acelera sin plan.",
    goal: "Explicar qué es un proyecto Frankenstein y por qué la IA lo empeora.",
    context: "Capítulo 1 · Specify — antes de pedir código.",
    expectedOutcome: "Podés describir el anti-patrón con un ejemplo propio.",
    feedback:
      "Buen paso: ya podés nombrar el anti-patrón. Eso es criterio, no código.",
    order: 1,
    body: `Un proyecto Frankenstein es software donde la idea original ya no coincide con lo construido, distintas partes asumen cosas distintas, y cada sesión (humana o con IA) reinterpreta el objetivo.

No es un insulto al developer: es un patrón de fallo del proceso. Con IA es más frecuente, no menos — porque la generación es rápida y el contexto se pierde entre prompts.

Señales típicas:
• Hay mucha actividad, pero nada “termina” de forma útil.
• No podés explicar con coherencia por qué existe cada parte.
• Pedís “haceme X”, después “agregá Y”, después “mejor como Z”, sin scope escrito.

Práctica: pensá un proyecto propio (o uno que abandonaste). Escribí en una frase dónde se rompió el hilo. Eso es tu ejemplo de Frankenstein.`,
  },
  {
    slug: "1-2-problem-statement",
    title: "1.2 — Problema antes que solución",
    summary: "Escribí un problem statement claro, sin disfrazar la solución.",
    goal: "Formular el problema real en 3–5 oraciones.",
    context: "Capítulo 1 · Specify.",
    expectedOutcome: "Problem statement validable (no lista de features).",
    feedback:
      "Si tu statement resiste “¿qué feature escondés?”, vas bien.",
    order: 2,
    body: `Un problem statement nombra a quién le duele, qué falla hoy y por qué importa. No lista features. No elige stack.

Mal (solución disfrazada): “Necesito una app React con dashboard de gastos y login OAuth.”
Bien (problema): “Las personas pierden de vista gastos chicos repetidos y no saben en qué se va el dinero a fin de mes — sin una forma simple de registrarlos al momento.”

Plantilla mental:
1. Quién sufre el problema
2. Qué pasa hoy (comportamiento / fricción)
3. Por qué importa (costo, tiempo, riesgo)
4. Qué quedaría mejor si se resolviera (sin decir cómo)

Pedile al Mentor que busque soluciones escondidas, no que reescriba el producto.`,
  },
  {
    slug: "1-3-scope",
    title: "1.3 — Scope, límites y non-goals",
    summary: "Acotá V1: scope in, scope out y non-goals explícitos.",
    goal: "Definir qué entra, qué sale y qué no es el proyecto.",
    context: "Capítulo 1 · Specify.",
    expectedOutcome: "Scope con ≤5 ítems in y non-goals escritos.",
    feedback:
      "Scope con non-goals es defensa contra Frankenstein futuro. Bien.",
    order: 3,
    body: `Scope in: qué entra en V1 (máximo 5 ítems).
Scope out: qué queda explícitamente para después.
Non-goals: qué no es este proyecto (aunque suene tentador).

Sin non-goals, cada conversación con IA reabre el borde del producto.

Ejemplo:
• In: registrar gasto, listar del mes, ver total
• Out: presupuestos, bancos, multi-usuario
• Non-goal: no es un banco ni un ERP

Regla: si la IA sugiere una feature, clasificala in / out / non-goal antes de aceptarla.`,
  },
  {
    slug: "1-4-artifacts",
    title: "1.4 — Artefactos livianos de planeamiento",
    summary: "Decision log y spec mínimo — sin burocracia.",
    goal: "Documentar al menos 3 decisiones iniciales con razón.",
    context: "Capítulo 1 · Clarify.",
    expectedOutcome: "Decision log usable en la próxima sesión con el Mentor.",
    feedback:
      "Decisiones con razón = memoria entre sesiones. El Mentor te lo va a agradecer.",
    order: 4,
    body: `Los artefactos del Capítulo 1 no son burocracia: son memoria entre sesiones.

Mínimo útil:
• PRACTICE_PROJECT.md (problema, scope, criterios)
• Decision log (decisión + razón + fecha)

Ejemplo de entrada:
“Decisión: V1 solo carga manual de gastos. Razón: validar el hábito antes de integrar bancos.”

Antes de hablar con el Mentor, pegá las últimas 3–5 decisiones. Pedí que desafíe inconsistencias — no que invente un stack.`,
  },
  {
    slug: "1-5-mentor-planning",
    title: "1.5 — Usar IA para planear sin perder el hilo",
    summary: "El Mentor enseña y pregunta; no construye por vos.",
    goal: "Planear con IA sin delegar el criterio.",
    context: "Capítulo 1 · Mentor.",
    expectedOutcome: "Notas de sesión donde vos decidís y la IA desafía.",
    feedback:
      "Usar IA para clarificar (no para autoría) es el hábito ZUZU.",
    order: 5,
    body: `En ZUZU el Mentor amplifica criterio. Enseña antes de responder, pregunta antes de asumir, y admite incertidumbre.

Mal: “Generame el PRACTICE_PROJECT completo.”
Bien: “¿Mi problem statement esconde una solución? Señalá ambigüedades.”

Si la respuesta suena a plan de implementación prematuro, frená y volvé al scope.

En este capítulo no se espera código de producto. Se espera criterio documentado.`,
  },
  {
    slug: "1-practice",
    title: "Practice — Guía del Capítulo 1",
    summary: "Completá el Practice Project en fase Planning (sin código de producto).",
    goal: "Cerrar Definition of Done del Capítulo 1 con artefactos mínimos.",
    context: "Capítulo 1 · Practice Project.",
    expectedOutcome: "PRACTICE_PROJECT.md con problem, scope, decisions y notas Mentor.",
    feedback:
      "Capítulo 1 se cierra con artefactos, no con app. Exportá el ZIP cuando el DoD esté sólido.",
    order: 6,
    body: `Definition of Done — Capítulo 1:
• Problem statement de 3–5 oraciones
• Usuario objetivo V1
• Scope in (≤5), scope out y non-goals
• Success criteria medibles
• Al menos 3 entradas en decision log
• Notas de al menos una sesión con el Mentor (o reflexión escrita si aún no tenés API key)
• Estado del proyecto: Planning (sin código de producto)

El dominio lo elegís vos. Gastos Hormiga es solo ejemplo de referencia.

Cuando cierres esto, exportá el ZIP desde Projects y marcá este módulo completado.`,
  },
];

async function main() {
  const path = await prisma.learningPath.upsert({
    where: { slug: "chapter-01" },
    update: {
      title: "Capítulo 1 — De la idea al scope",
      description:
        "Primer arco del Learning Path: claridad sobre qué y por qué, antes de construir. Sin Frankenstein.",
      chapter: 1,
      order: 1,
    },
    create: {
      slug: "chapter-01",
      title: "Capítulo 1 — De la idea al scope",
      description:
        "Primer arco del Learning Path: claridad sobre qué y por qué, antes de construir. Sin Frankenstein.",
      chapter: 1,
      order: 1,
    },
  });

  for (const mod of chapter1Modules) {
    await prisma.module.upsert({
      where: {
        pathId_slug: { pathId: path.id, slug: mod.slug },
      },
      update: {
        title: mod.title,
        summary: mod.summary,
        goal: mod.goal,
        context: mod.context,
        expectedOutcome: mod.expectedOutcome,
        body: mod.body,
        feedback: mod.feedback,
        order: mod.order,
      },
      create: {
        pathId: path.id,
        ...mod,
      },
    });
  }

  const modules = await prisma.module.findMany({
    where: { pathId: path.id },
  });
  const bySlug = Object.fromEntries(modules.map((m) => [m.slug, m.id]));

  const concepts = [
    {
      slug: "frankenstein-pattern",
      title: "Proyecto Frankenstein",
      summary: "Patrón de fallo: idea muta, partes no encajan, nada cierra.",
      explanation:
        "Un proyecto Frankenstein aparece cuando cada sesión (humana o con IA) reinterpreta el objetivo. Hay actividad, pero no coherencia. Con IA es más frecuente porque la generación es rápida y el contexto se pierde entre prompts.",
      example:
        "Pedís 'haceme una app de finanzas', después 'agregá social', después 'mejor estilo Uber' — sin scope escrito. Al final hay pantallas sueltas y ningún V1 usable.",
      practicalUse:
        "Antes de pedir código, escribí problema + scope. Si no podés explicar el objetivo en 5 oraciones, no pedís implementación.",
      relatedSlugs: "problem-statement,scope-in-out",
      moduleId: bySlug["1-1-frankenstein"],
      order: 1,
    },
    {
      slug: "problem-statement",
      title: "Problem statement",
      summary: "Descripción corta del problema real, no de la solución.",
      explanation:
        "Un problem statement nombra a quién le duele, qué falla hoy, y por qué importa. No lista features. Sirve de ancla compartida entre vos y el Mentor.",
      example:
        "Las personas pierden de vista gastos chicos repetidos y no saben en qué se va el dinero a fin de mes — sin una forma simple de registrarlos al momento.",
      practicalUse:
        "Escribí 3–5 oraciones. Pedile al Mentor que busque soluciones disfrazadas, no que reescriba el producto.",
      relatedSlugs: "frankenstein-pattern,scope-in-out",
      moduleId: bySlug["1-2-problem-statement"],
      order: 2,
    },
    {
      slug: "scope-in-out",
      title: "Scope in / out y non-goals",
      summary: "Límites explícitos de V1 para no inflar el proyecto.",
      explanation:
        "Scope in: qué entra ahora (pocos ítems). Scope out: qué queda para después. Non-goals: qué no es este proyecto. Sin non-goals, cada conversación con IA reabre el borde.",
      example:
        "V1: registrar gasto, listar del mes, total. Out: presupuestos, bancos, multi-usuario. Non-goal: no es un banco ni un ERP.",
      practicalUse:
        "Máximo 5 ítems in. Cada vez que la IA sugiera una feature, preguntate: ¿está in, out o non-goal?",
      relatedSlugs: "problem-statement,decision-log",
      moduleId: bySlug["1-3-scope"],
      order: 3,
    },
    {
      slug: "decision-log",
      title: "Decision log",
      summary: "Registro breve de decisiones con razón — memoria del proyecto.",
      explanation:
        "El decision log evita reabrir debates y da contexto al Mentor. No es burocracia: es continuidad entre sesiones. Cada entrada: decisión, razón, fecha.",
      example:
        "Decisión: V1 solo carga manual de gastos. Razón: validar hábito antes de integrar bancos. Fecha: sesión 2.",
      practicalUse:
        "Antes de cada sesión con el Mentor, pegá las últimas 3–5 decisiones. Pedí que desafíe inconsistencias, no que invente un stack.",
      relatedSlugs: "scope-in-out,mentor-as-teacher",
      moduleId: bySlug["1-4-artifacts"],
      order: 4,
    },
    {
      slug: "mentor-as-teacher",
      title: "Mentor como docente, no como reemplazo",
      summary: "La IA enseña y pregunta; el learner decide.",
      explanation:
        "En ZUZU el Mentor amplifica criterio. Enseña antes de responder, pregunta antes de asumir, y admite incertidumbre. No escribe el producto por vos en el Capítulo 1.",
      example:
        "Mal: 'generame el PRACTICE_PROJECT completo'. Bien: '¿mi problem statement esconde una solución? Señalá ambigüedades.'",
      practicalUse:
        "Usá prompts de clarificación y feedback. Si la respuesta suena a plan de implementación prematuro, frená y volvé al scope.",
      relatedSlugs: "frankenstein-pattern,decision-log",
      moduleId: bySlug["1-5-mentor-planning"],
      order: 5,
    },
    {
      slug: "sdd-intro",
      title: "Spec-Driven Development (intro)",
      summary: "Alinear intent en un spec antes de que la IA implemente.",
      explanation:
        "SDD dice: la calidad del output de la IA sigue la calidad del spec. En ZUZU, la capability del learner es la calidad del spec que escribe. Cap. 1 arranca Specify.",
      example:
        "Ciclo: Constitution → Specify → Clarify → Plan → Tasks → Implement → Validate. Cap. 1 cubre Specify/Clarify liviano.",
      practicalUse:
        "No saltees a código. Cerrá problem + scope + decisions antes del Cap. 4 (Implement).",
      relatedSlugs: "problem-statement,decision-log",
      moduleId: bySlug["1-practice"],
      order: 6,
    },
  ];

  for (const c of concepts) {
    await prisma.knowledgeConcept.upsert({
      where: { slug: c.slug },
      update: { ...c },
      create: { ...c },
    });
  }

  const path2 = await prisma.learningPath.upsert({
    where: { slug: "chapter-02" },
    update: {
      title: "Capítulo 2 — Requirements antes del código",
      description:
        "Traducir scope en FRs, NFRs y ACs verificables. Todavía sin implementación. Prerrequisito: Cap. 1 cerrado.",
      chapter: 2,
      order: 2,
    },
    create: {
      slug: "chapter-02",
      title: "Capítulo 2 — Requirements antes del código",
      description:
        "Traducir scope en FRs, NFRs y ACs verificables. Todavía sin implementación. Prerrequisito: Cap. 1 cerrado.",
      chapter: 2,
      order: 2,
    },
  });

  for (const mod of chapter2Modules) {
    await prisma.module.upsert({
      where: {
        pathId_slug: { pathId: path2.id, slug: mod.slug },
      },
      update: {
        title: mod.title,
        summary: mod.summary,
        goal: mod.goal,
        context: mod.context,
        expectedOutcome: mod.expectedOutcome,
        body: mod.body,
        feedback: mod.feedback,
        order: mod.order,
      },
      create: {
        pathId: path2.id,
        ...mod,
      },
    });
  }

  const modules2 = await prisma.module.findMany({
    where: { pathId: path2.id },
  });
  const bySlug2 = Object.fromEntries(modules2.map((m) => [m.slug, m.id]));

  const concepts2 = [
    {
      slug: "functional-requirement",
      title: "Requirement funcional (FR)",
      summary: "Comportamiento verificable del sistema, sin stack.",
      explanation:
        "Un FR describe qué debe hacer el sistema de forma observable. No elige framework. Traza a un ítem de scope.",
      example:
        "FR-001: El usuario puede registrar un gasto con monto positivo, categoría y fecha.",
      practicalUse:
        "Si el FR nombra React o Postgres, reescribilo como comportamiento.",
      relatedSlugs: "acceptance-criteria,traceability-matrix",
      moduleId: bySlug2["2-2-functional-reqs"],
      order: 10,
    },
    {
      slug: "nfr-measurable",
      title: "NFR medible",
      summary: "Calidad de V1 con métrica o verificación explícita.",
      explanation:
        "Usabilidad, privacidad y rendimiento liviano necesitan umbral o forma de verificar. Sin eso son deseos.",
      example:
        "NFR-001: Crear gasto ≤ 15 s, usuario familiarizado, 3 intentos cronometrados.",
      practicalUse: "Escribí ≥3 NFRs para V1 antes de Cap. 3.",
      relatedSlugs: "functional-requirement,acceptance-criteria",
      moduleId: bySlug2["2-3-nfrs"],
      order: 11,
    },
    {
      slug: "acceptance-criteria",
      title: "Criterios de aceptación (AC)",
      summary: "Escenarios Given/When/Then observables.",
      explanation:
        "Los ACs permiten decir sí/no sin subjetividad. Incluí happy path y límites. No describen implementación.",
      example:
        "Given monto ≤ 0, When confirma, Then no guarda y muestra error.",
      practicalUse: "Cada FR Must necesita ≥1 AC testeable.",
      relatedSlugs: "functional-requirement,traceability-matrix",
      moduleId: bySlug2["2-4-acceptance"],
      order: 12,
    },
    {
      slug: "traceability-matrix",
      title: "Trazabilidad scope → FR → AC",
      summary: "Matriz liviana que corta scope creep.",
      explanation:
        "Si un FR no traza a scope, o es creep o falta actualizar el Cap. 1 conscientemente.",
      example: "| Scope #1 | FR-001 | AC-001.1 | Success #1 |",
      practicalUse: "Completá la matriz Must antes de cerrar Cap. 2.",
      relatedSlugs: "functional-requirement,acceptance-criteria",
      moduleId: bySlug2["2-6-traceability"],
      order: 13,
    },
  ];

  for (const c of concepts2) {
    await prisma.knowledgeConcept.upsert({
      where: { slug: c.slug },
      update: { ...c },
      create: { ...c },
    });
  }

  const path3 = await prisma.learningPath.upsert({
    where: { slug: "chapter-03" },
    update: {
      title: "Capítulo 3 — Diseño mínimo y trade-offs",
      description:
        "Diseño V1, ADRs e Incremento 1. Prerrequisito: Cap. 2 cerrado. Sin implementar V1 completa.",
      chapter: 3,
      order: 3,
    },
    create: {
      slug: "chapter-03",
      title: "Capítulo 3 — Diseño mínimo y trade-offs",
      description:
        "Diseño V1, ADRs e Incremento 1. Prerrequisito: Cap. 2 cerrado. Sin implementar V1 completa.",
      chapter: 3,
      order: 3,
    },
  });

  for (const mod of chapter3Modules) {
    await prisma.module.upsert({
      where: {
        pathId_slug: { pathId: path3.id, slug: mod.slug },
      },
      update: {
        title: mod.title,
        summary: mod.summary,
        goal: mod.goal,
        context: mod.context,
        expectedOutcome: mod.expectedOutcome,
        body: mod.body,
        feedback: mod.feedback,
        order: mod.order,
      },
      create: {
        pathId: path3.id,
        ...mod,
      },
    });
  }

  const modules3 = await prisma.module.findMany({
    where: { pathId: path3.id },
  });
  const bySlug3 = Object.fromEntries(modules3.map((m) => [m.slug, m.id]));

  const concepts3 = [
    {
      slug: "minimal-design",
      title: "Diseño mínimo viable",
      summary: "Lo mínimo que cumple FR Must y NFR de V1.",
      explanation:
        "Over-engineering es Frankenstein de arquitectura. El diseño debe trazarse a requirements, no a moda.",
      example: "Monolito modular local > microservicios para un tracker personal V1.",
      practicalUse: "Antes de agregar una capa, preguntá qué FR/NFR la exige.",
      relatedSlugs: "adr-practice,vertical-slice",
      moduleId: bySlug3["3-2-minimal-vs-enterprise"],
      order: 20,
    },
    {
      slug: "adr-practice",
      title: "Architecture Decision Record",
      summary: "Decisión técnica con alternativas y consecuencias.",
      explanation:
        "Un ADR documenta por qué elegiste X y qué descartaste. Es memoria para Cap. 4+.",
      example: "ADR-001 Persistencia local: SQLite vs localStorage — elegimos… porque…",
      practicalUse: "≥2 ADRs en Cap. 3 (stack/estructura y persistencia son típicos).",
      relatedSlugs: "minimal-design,vertical-slice",
      moduleId: bySlug3["3-7-adrs"],
      order: 21,
    },
    {
      slug: "vertical-slice",
      title: "Incremento vertical (I1)",
      summary: "Slice usable UI→lógica→datos, no capa horizontal gigante.",
      explanation:
        "I1 debe cerrar ACs concretos. Arquitectura sin UI no es incremento de aprendizaje útil en Cap. 4.",
      example: "Crear + listar gastos con validación y persistencia = I1.",
      practicalUse: "Definí I1 en Cap. 3; implementalo en Cap. 4.",
      relatedSlugs: "minimal-design,adr-practice",
      moduleId: bySlug3["3-8-increment-1"],
      order: 22,
    },
  ];

  for (const c of concepts3) {
    await prisma.knowledgeConcept.upsert({
      where: { slug: c.slug },
      update: { ...c },
      create: { ...c },
    });
  }

  const path4 = await prisma.learningPath.upsert({
    where: { slug: "chapter-04" },
    update: {
      title: "Capítulo 4 — Construcción incremental con IA",
      description:
        "Implementá I1 fuera de ZUZU. Bitácora, review y ACs acá. Prerrequisito: Cap. 3 cerrado.",
      chapter: 4,
      order: 4,
    },
    create: {
      slug: "chapter-04",
      title: "Capítulo 4 — Construcción incremental con IA",
      description:
        "Implementá I1 fuera de ZUZU. Bitácora, review y ACs acá. Prerrequisito: Cap. 3 cerrado.",
      chapter: 4,
      order: 4,
    },
  });

  for (const mod of chapter4Modules) {
    await prisma.module.upsert({
      where: {
        pathId_slug: { pathId: path4.id, slug: mod.slug },
      },
      update: {
        title: mod.title,
        summary: mod.summary,
        goal: mod.goal,
        context: mod.context,
        expectedOutcome: mod.expectedOutcome,
        body: mod.body,
        feedback: mod.feedback,
        order: mod.order,
      },
      create: {
        pathId: path4.id,
        ...mod,
      },
    });
  }

  const modules4 = await prisma.module.findMany({
    where: { pathId: path4.id },
  });
  const bySlug4 = Object.fromEntries(modules4.map((m) => [m.slug, m.id]));

  const concepts4 = [
    {
      slug: "spec-before-code",
      title: "Spec antes del teclado",
      summary: "Releer FR/AC/ADR/I1 antes de pedir código.",
      explanation:
        "Sin contrato a mano, el prompt reinterpretará el objetivo. Cap. 4 arranca con el spec del Cap. 3, no con “implementá la app”.",
      example: "Pegá AC-001.1–3 + ADR-001 en el prompt; pedí solo ese slice.",
      practicalUse: "Checklist de apertura de sesión IDE antes del primer prompt.",
      relatedSlugs: "ai-code-review,ac-validation",
      moduleId: bySlug4["4-1-spec-before-code"],
      order: 30,
    },
    {
      slug: "ai-code-review",
      title: "Review de código generado",
      summary: "Diff vs spec: drift, secretos, complejidad.",
      explanation:
        "Si no podés explicar el cambio, no está listo — aunque “funcione”. La IA propone; vos aprobás.",
      example: "Reescribiste una función porque violaba el ADR de persistencia.",
      practicalUse: "Documentá en Practice Project qué aceptaste y qué rechazaste.",
      relatedSlugs: "spec-before-code,ac-validation",
      moduleId: bySlug4["4-5-review-ai-code"],
      order: 31,
    },
    {
      slug: "ac-validation",
      title: "Validación de ACs (I1)",
      summary: "Given/When/Then con evidencia pass/fail.",
      explanation:
        "DoD del Incremento 1: ACs en verde, no “mucho código”. Fallos → fix → re-validar.",
      example: "AC-001.2 fail tras reload → corregir persistencia → pass.",
      practicalUse: "Lista AC I1 en Practice Project antes de declarar I1 cerrado.",
      relatedSlugs: "spec-before-code,ai-code-review",
      moduleId: bySlug4["4-6-validate-acs"],
      order: 32,
    },
  ];

  for (const c of concepts4) {
    await prisma.knowledgeConcept.upsert({
      where: { slug: c.slug },
      update: { ...c },
      create: { ...c },
    });
  }

  console.log(
    `Seed OK: ch1=${chapter1Modules.length}, ch2=${chapter2Modules.length}, ch3=${chapter3Modules.length}, ch4=${chapter4Modules.length}, concepts=${concepts.length + concepts2.length + concepts3.length + concepts4.length}`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
