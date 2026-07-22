import { prisma } from "@/lib/prisma";
import { getOrCreateJourney } from "@/modules/learning/journey";

export const MENTOR_SYSTEM_PROMPT = `Sos el Mentor de ZUZU, una plataforma de aprendizaje AI-Native.

Tu propósito: ayudar al learner a pensar como ingeniero de software colaborando con IA.
NO sos un generador de código. NO reemplazás el criterio del learner.

Reglas:
1. Enseñá antes de responder con una solución.
2. Preguntá antes de asumir requisitos o stack.
3. Preferí clarificar ambigüedades, scope y decisiones.
4. Si hay incertidumbre, decilo con honestidad.
5. En el Capítulo 1 (Specify), NO empujes a escribir código de producto.
6. Respondé en español. Términos técnicos pueden quedar en inglés.
7. Sé conciso y concreto. Máximo unas pocas preguntas por turno.
8. Si el learner pide "haceme el proyecto", redirigí a problem statement, scope y decision log.`;

export async function buildMentorContext(userId: string): Promise<string> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return "";

  let pathBlock = "Learning Path: aún no iniciado.";
  try {
    const journey = await getOrCreateJourney(userId);
    const current = journey.path.modules.find(
      (m) => m.id === journey.currentModuleId,
    );
    const completed = journey.progress.filter((p) => p.status === "completed")
      .length;
    pathBlock = [
      `Path: ${journey.path.title}`,
      `Estado journey: ${journey.status}`,
      `Progreso: ${completed}/${journey.path.modules.length} módulos`,
      current ? `Módulo actual: ${current.title} — ${current.goal}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  } catch {
    // seed missing — ignore
  }

  const decisions = await prisma.decisionLogEntry.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const decisionBlock =
    decisions.length === 0
      ? "Decision log: vacío."
      : decisions
          .map(
            (d, i) =>
              `${i + 1}. ${d.decision} — Razón: ${d.reason}`,
          )
          .join("\n");

  const project = await prisma.practiceProject.findFirst({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });

  const projectBlock = project
    ? [
        `Practice Project: ${project.title} (${project.status})`,
        project.domain ? `Dominio: ${project.domain}` : null,
        project.problemStatement
          ? `Problem: ${project.problemStatement.slice(0, 400)}`
          : "Problem statement: (vacío)",
      ]
        .filter(Boolean)
        .join("\n")
    : "Practice Project: aún no creado.";

  return [
    `Learner: ${user.name}`,
    `Experiencia: ${user.experience}`,
    `Objetivos: ${user.objectives || "(sin definir)"}`,
    pathBlock,
    projectBlock,
    decisionBlock,
  ].join("\n");
}

export async function getOrCreateConversation(userId: string) {
  const existing = await prisma.conversation.findFirst({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    include: {
      messages: { orderBy: { createdAt: "asc" }, take: 40 },
    },
  });
  if (existing) return existing;

  return prisma.conversation.create({
    data: { userId, title: "Sesión con el Mentor" },
    include: { messages: true },
  });
}

export async function createConversation(userId: string) {
  return prisma.conversation.create({
    data: { userId, title: `Sesión ${new Date().toLocaleDateString("es-AR")}` },
    include: { messages: true },
  });
}

export async function listDecisions(userId: string) {
  return prisma.decisionLogEntry.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}
