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
