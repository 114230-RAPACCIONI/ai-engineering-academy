"use client";

import { useActionState } from "react";
import Link from "next/link";
import {
  loginUser,
  type ActionResult,
} from "@/modules/identity/actions";

const initial: ActionResult | null = null;

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginUser, initial);

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-12">
      <Link href="/" className="mb-8 text-sm text-[var(--ink-muted)]">
        ← ZUZU
      </Link>
      <h1 className="mb-2 text-3xl font-semibold">Iniciar sesión</h1>
      <p className="mb-8 text-[var(--ink-muted)]">
        Continuá tu Learning Path donde lo dejaste.
      </p>
      <form action={formAction} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Contraseña
          <input
            name="password"
            type="password"
            required
            minLength={6}
            className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
          />
        </label>
        {state?.error ? (
          <p className="text-sm text-red-700" role="alert">
            {state.error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white disabled:opacity-60"
        >
          {pending ? "Entrando…" : "Entrar"}
        </button>
      </form>
      <p className="mt-6 text-sm text-[var(--ink-muted)]">
        ¿No tenés cuenta?{" "}
        <Link href="/register" className="underline">
          Registrate
        </Link>
      </p>
    </main>
  );
}
