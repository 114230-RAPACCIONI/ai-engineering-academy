"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/modules/identity/auth";

const projectSchema = z.object({
  title: z.string().min(2).max(120),
  domain: z.string().max(200),
  problemStatement: z.string().max(4000),
  scopeIn: z.string().max(2000),
  scopeOut: z.string().max(2000),
  nonGoals: z.string().max(2000),
  successCriteria: z.string().max(2000),
  functionalReqs: z.string().max(8000),
  nonFunctionalReqs: z.string().max(4000),
  acceptanceCriteria: z.string().max(8000),
  traceability: z.string().max(4000),
  status: z.enum(["planning", "requirements", "active", "done"]),
});

export type ProjectActionResult = { ok: boolean; error?: string };

export async function savePracticeProject(
  projectId: string,
  _prev: ProjectActionResult | null,
  formData: FormData,
): Promise<ProjectActionResult> {
  const session = await auth();
  if (!session?.user?.id) return { ok: false, error: "No autenticado" };

  const parsed = projectSchema.safeParse({
    title: formData.get("title"),
    domain: formData.get("domain") || "",
    problemStatement: formData.get("problemStatement") || "",
    scopeIn: formData.get("scopeIn") || "",
    scopeOut: formData.get("scopeOut") || "",
    nonGoals: formData.get("nonGoals") || "",
    successCriteria: formData.get("successCriteria") || "",
    functionalReqs: formData.get("functionalReqs") || "",
    nonFunctionalReqs: formData.get("nonFunctionalReqs") || "",
    acceptanceCriteria: formData.get("acceptanceCriteria") || "",
    traceability: formData.get("traceability") || "",
    status: formData.get("status") || "planning",
  });

  if (!parsed.success) {
    return { ok: false, error: "Revisá los campos del proyecto." };
  }

  const owned = await prisma.practiceProject.findFirst({
    where: { id: projectId, userId: session.user.id },
  });
  if (!owned) return { ok: false, error: "Proyecto no encontrado." };

  await prisma.practiceProject.update({
    where: { id: projectId },
    data: parsed.data,
  });

  revalidatePath("/app/projects");
  revalidatePath("/app/progress");
  revalidatePath("/app");
  return { ok: true };
}
