import { PrismaClient } from "@prisma/client";

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

  console.log(
    `Seed OK: path=${path.slug}, modules=${chapter1Modules.length}, concepts=${concepts.length}`,
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
