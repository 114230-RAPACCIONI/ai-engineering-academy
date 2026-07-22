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
    order: 1,
  },
  {
    slug: "1-2-problem-statement",
    title: "1.2 — Problema antes que solución",
    summary: "Escribí un problem statement claro, sin disfrazar la solución.",
    goal: "Formular el problema real en 3–5 oraciones.",
    context: "Capítulo 1 · Specify.",
    expectedOutcome: "Problem statement validable (no lista de features).",
    order: 2,
  },
  {
    slug: "1-3-scope",
    title: "1.3 — Scope, límites y non-goals",
    summary: "Acotá V1: scope in, scope out y non-goals explícitos.",
    goal: "Definir qué entra, qué sale y qué no es el proyecto.",
    context: "Capítulo 1 · Specify.",
    expectedOutcome: "Scope con ≤5 ítems in y non-goals escritos.",
    order: 3,
  },
  {
    slug: "1-4-artifacts",
    title: "1.4 — Artefactos livianos de planeamiento",
    summary: "Decision log y spec mínimo — sin burocracia.",
    goal: "Documentar al menos 3 decisiones iniciales con razón.",
    context: "Capítulo 1 · Clarify.",
    expectedOutcome: "Decision log usable en la próxima sesión con el Mentor.",
    order: 4,
  },
  {
    slug: "1-5-mentor-planning",
    title: "1.5 — Usar IA para planear sin perder el hilo",
    summary: "El Mentor enseña y pregunta; no construye por vos.",
    goal: "Planear con IA sin delegar el criterio.",
    context: "Capítulo 1 · Mentor.",
    expectedOutcome: "Notas de sesión donde vos decidís y la IA desafía.",
    order: 5,
  },
  {
    slug: "1-practice",
    title: "Practice — Guía del Capítulo 1",
    summary: "Completá el Practice Project en fase Planning (sin código de producto).",
    goal: "Cerrar Definition of Done del Capítulo 1 con artefactos mínimos.",
    context: "Capítulo 1 · Practice Project.",
    expectedOutcome: "PRACTICE_PROJECT.md con problem, scope, decisions y notas Mentor.",
    order: 6,
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
        order: mod.order,
      },
      create: {
        pathId: path.id,
        ...mod,
      },
    });
  }

  console.log(`Seed OK: path=${path.slug}, modules=${chapter1Modules.length}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
