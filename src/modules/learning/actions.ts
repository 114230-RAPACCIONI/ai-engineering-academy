"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/modules/identity/auth";
import { completeModule, startModule } from "@/modules/learning/journey";

export async function markModuleStarted(moduleId: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("No autenticado");
  await startModule(session.user.id, moduleId);
  revalidatePath("/app/path");
  revalidatePath("/app");
}

export async function markModuleCompleted(moduleId: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("No autenticado");
  await completeModule(session.user.id, moduleId);
  revalidatePath("/app/path");
  revalidatePath("/app");
}
