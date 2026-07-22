"use server";

import { hash } from "bcryptjs";
import { AuthError } from "next-auth";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { signIn, signOut } from "@/modules/identity/auth";

const registerSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  password: z.string().min(6).max(100),
  experience: z.enum(["beginner", "experienced"]),
  objectives: z.string().max(500).optional(),
});

export type ActionResult = {
  ok: boolean;
  error?: string;
};

export async function registerUser(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const parsed = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    experience: formData.get("experience"),
    objectives: formData.get("objectives") || "",
  });

  if (!parsed.success) {
    return { ok: false, error: "Revisá los datos del formulario." };
  }

  const email = parsed.data.email.toLowerCase();
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { ok: false, error: "Ya existe una cuenta con ese email." };
  }

  const passwordHash = await hash(parsed.data.password, 10);
  await prisma.user.create({
    data: {
      name: parsed.data.name,
      email,
      passwordHash,
      experience: parsed.data.experience,
      objectives: parsed.data.objectives ?? "",
    },
  });

  try {
    await signIn("credentials", {
      email,
      password: parsed.data.password,
      redirectTo: "/app",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { ok: false, error: "Cuenta creada, pero falló el inicio de sesión." };
    }
    throw error;
  }

  return { ok: true };
}

export async function loginUser(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const email = String(formData.get("email") ?? "").toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || password.length < 6) {
    return { ok: false, error: "Email o contraseña inválidos." };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/app",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { ok: false, error: "Email o contraseña incorrectos." };
    }
    throw error;
  }

  return { ok: true };
}

export async function logoutUser() {
  await signOut({ redirectTo: "/" });
}

const profileSchema = z.object({
  name: z.string().min(2).max(80),
  experience: z.enum(["beginner", "experienced"]),
  objectives: z.string().max(500),
});

export async function updateProfile(
  userId: string,
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const parsed = profileSchema.safeParse({
    name: formData.get("name"),
    experience: formData.get("experience"),
    objectives: formData.get("objectives") || "",
  });

  if (!parsed.success) {
    return { ok: false, error: "Revisá los datos del perfil." };
  }

  await prisma.user.update({
    where: { id: userId },
    data: parsed.data,
  });

  return { ok: true };
}
