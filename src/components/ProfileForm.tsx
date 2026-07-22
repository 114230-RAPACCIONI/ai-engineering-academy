"use client";

import { useActionState } from "react";
import {
  updateProfile,
  type ActionResult,
} from "@/modules/identity/actions";

type ProfileFormProps = {
  userId: string;
  name: string;
  experience: string;
  objectives: string;
  email: string;
};

const initial: ActionResult | null = null;

export function ProfileForm({
  userId,
  name,
  experience,
  objectives,
  email,
}: ProfileFormProps) {
  const boundUpdate = updateProfile.bind(null, userId);
  const [state, formAction, pending] = useActionState(boundUpdate, initial);

  return (
    <form action={formAction} className="flex max-w-lg flex-col gap-4">
      <p className="text-sm text-[var(--ink-muted)]">Email: {email}</p>
      <label className="flex flex-col gap-1 text-sm">
        Nombre
        <input
          name="name"
          defaultValue={name}
          required
          minLength={2}
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Experiencia
        <select
          name="experience"
          defaultValue={experience}
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        >
          <option value="beginner">Principiante</option>
          <option value="experienced">Developer con experiencia</option>
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Objetivos
        <textarea
          name="objectives"
          rows={4}
          defaultValue={objectives}
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        />
      </label>
      {state?.ok ? (
        <p className="text-sm text-[var(--accent)]">Perfil actualizado.</p>
      ) : null}
      {state?.error ? (
        <p className="text-sm text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="w-fit rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {pending ? "Guardando…" : "Guardar"}
      </button>
    </form>
  );
}
