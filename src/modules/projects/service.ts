import { prisma } from "@/lib/prisma";

export async function getOrCreateProject(userId: string) {
  const existing = await prisma.practiceProject.findFirst({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
  if (existing) return existing;

  return prisma.practiceProject.create({
    data: {
      userId,
      title: "Mi Practice Project",
      status: "planning",
    },
  });
}

export async function getProjectForUser(userId: string, projectId: string) {
  return prisma.practiceProject.findFirst({
    where: { id: projectId, userId },
  });
}

export function buildPracticeMarkdown(project: {
  title: string;
  domain: string;
  problemStatement: string;
  scopeIn: string;
  scopeOut: string;
  nonGoals: string;
  successCriteria: string;
  functionalReqs?: string;
  nonFunctionalReqs?: string;
  acceptanceCriteria?: string;
  traceability?: string;
  status: string;
}) {
  return `# ${project.title}

## Estado
${project.status}

## Dominio
${project.domain || "(sin definir)"}

## 1. Problem statement
${project.problemStatement || "(pendiente)"}

## 2. Scope in
${project.scopeIn || "(pendiente)"}

## 3. Scope out
${project.scopeOut || "(pendiente)"}

## 4. Non-goals
${project.nonGoals || "(pendiente)"}

## 5. Success criteria
${project.successCriteria || "(pendiente)"}
`;
}

export function buildRequirementsMarkdown(project: {
  title: string;
  functionalReqs: string;
  nonFunctionalReqs: string;
  acceptanceCriteria: string;
  traceability: string;
  status: string;
}) {
  return `# ${project.title} — Requirements V1

## Estado
Fase: ${project.status}
Prerrequisito: Capítulo 1

## 2. Requirements funcionales
${project.functionalReqs || "(pendiente)"}

## 3. Requirements no funcionales
${project.nonFunctionalReqs || "(pendiente)"}

## 4. Criterios de aceptación
${project.acceptanceCriteria || "(pendiente)"}

## 6. Matriz de trazabilidad
${project.traceability || "(pendiente)"}
`;
}

export function buildDesignMarkdown(project: {
  title: string;
  designDoc: string;
  adrs: string;
  incrementPlan: string;
  status: string;
}) {
  return `# ${project.title} — Design V1

## Estado
Fase: ${project.status}
Requisitos: REQUIREMENTS.md

## 1–6. Diseño
${project.designDoc || "(pendiente)"}

## 7. ADRs
${project.adrs || "(pendiente)"}

## 8. Plan de incrementos
${project.incrementPlan || "(pendiente)"}
`;
}

export function buildImplementMarkdown(project: {
  title: string;
  i1Log: string;
  acValidation: string;
  codeReviewNotes: string;
  status: string;
}) {
  return `# ${project.title} — Implement I1

## Estado
Fase: ${project.status}
Prerrequisito: DESIGN.md + I1 del Cap. 3
Nota: el código vive fuera de ZUZU; esto es bitácora y evidencia.

## 1. Bitácora Incremento 1
${project.i1Log || "(pendiente)"}

## 2. Validación de ACs (pass/fail)
${project.acValidation || "(pendiente)"}

## 3. Review de código (IA + humano)
${project.codeReviewNotes || "(pendiente)"}
`;
}
