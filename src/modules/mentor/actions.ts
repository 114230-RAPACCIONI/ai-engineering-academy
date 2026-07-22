"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/modules/identity/auth";
import { createConversation } from "@/modules/mentor/service";

const decisionSchema = z.object({
  decision: z.string().min(3).max(300),
  reason: z.string().min(3).max(800),
});

export type MentorActionResult = { ok: boolean; error?: string };

export async function addDecision(
  _prev: MentorActionResult | null,
  formData: FormData,
): Promise<MentorActionResult> {
  const session = await auth();
  if (!session?.user?.id) return { ok: false, error: "No autenticado" };

  const parsed = decisionSchema.safeParse({
    decision: formData.get("decision"),
    reason: formData.get("reason"),
  });
  if (!parsed.success) {
    return { ok: false, error: "Completá decisión y razón (mín. 3 caracteres)." };
  }

  await prisma.decisionLogEntry.create({
    data: {
      userId: session.user.id,
      decision: parsed.data.decision,
      reason: parsed.data.reason,
    },
  });

  revalidatePath("/app/mentor");
  return { ok: true };
}

export async function startNewMentorSession() {
  const session = await auth();
  if (!session?.user?.id) throw new Error("No autenticado");
  await createConversation(session.user.id);
  revalidatePath("/app/mentor");
}

/** Guarda una nota de reflexión cuando el Mentor (API) no está disponible. */
export async function saveMentorReflection(
  conversationId: string,
  note: string,
) {
  const session = await auth();
  if (!session?.user?.id) {
    return { ok: false as const, error: "No autenticado" };
  }

  const content = note.trim();
  if (content.length < 10) {
    return { ok: false as const, error: "Escribí al menos una nota breve." };
  }

  const conversation = await prisma.conversation.findFirst({
    where: { id: conversationId, userId: session.user.id },
  });
  if (!conversation) {
    return { ok: false as const, error: "Conversación no encontrada." };
  }

  await prisma.message.create({
    data: { conversationId, role: "user", content },
  });

  await prisma.message.create({
    data: {
      conversationId,
      role: "assistant",
      content:
        "Nota de reflexión guardada. Cuando configures ANTHROPIC_API_KEY, el Mentor podrá responderte en vivo. Esta nota ya cuenta como evidencia de sesión del Capítulo 1.",
    },
  });

  await prisma.conversation.update({
    where: { id: conversationId },
    data: { updatedAt: new Date() },
  });

  revalidatePath("/app/mentor");
  return { ok: true as const };
}
