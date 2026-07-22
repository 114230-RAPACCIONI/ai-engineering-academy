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
