"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/modules/identity/auth";

const score = z.coerce.number().int().min(1).max(5);

const assessmentSchema = z.object({
  chapter: z.coerce.number().int().min(1).max(3),
  kind: z.enum(["pre", "post"]),
  clarityProblem: score,
  scope: score,
  decisions: score,
  aiUse: score,
  antiFrankenstein: score,
  note: z.string().max(1000).optional(),
});

export type AssessmentResult = { ok: boolean; error?: string };

export async function saveCapabilityAssessment(
  _prev: AssessmentResult | null,
  formData: FormData,
): Promise<AssessmentResult> {
  const session = await auth();
  if (!session?.user?.id) return { ok: false, error: "No autenticado" };

  const parsed = assessmentSchema.safeParse({
    chapter: formData.get("chapter") || "1",
    kind: formData.get("kind"),
    clarityProblem: formData.get("clarityProblem"),
    scope: formData.get("scope"),
    decisions: formData.get("decisions"),
    aiUse: formData.get("aiUse"),
    antiFrankenstein: formData.get("antiFrankenstein"),
    note: formData.get("note") || "",
  });

  if (!parsed.success) {
    return { ok: false, error: "Completá todos los criterios (1–5)." };
  }

  await prisma.capabilityAssessment.create({
    data: {
      userId: session.user.id,
      ...parsed.data,
      note: parsed.data.note ?? "",
    },
  });

  revalidatePath("/app/progress");
  revalidatePath("/app");
  revalidatePath("/app/onboarding");
  return { ok: true };
}

export async function setProjectDomain(domain: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("No autenticado");

  const trimmed = domain.trim().slice(0, 200);
  const project = await prisma.practiceProject.findFirst({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
  });

  if (project) {
    await prisma.practiceProject.update({
      where: { id: project.id },
      data: { domain: trimmed },
    });
  } else {
    await prisma.practiceProject.create({
      data: {
        userId: session.user.id,
        title: "Mi Practice Project",
        domain: trimmed,
        status: "planning",
      },
    });
  }

  revalidatePath("/app/projects");
  revalidatePath("/app/onboarding");
  revalidatePath("/app");
}
