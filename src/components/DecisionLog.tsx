"use client";

import { useActionState } from "react";
import {
  addDecision,
  type MentorActionResult,
} from "@/modules/mentor/actions";

type Decision = {
  id: string;
  decision: string;
  reason: string;
  createdAt: string;
};

const initial: MentorActionResult | null = null;

export function DecisionLog({ decisions }: { decisions: Decision[] }) {
  const [state, formAction, pending] = useActionState(addDecision, initial);

  return (
    <section className="space-y-4">
      <div>
        <h2 className="mb-1 text-xl font-semibold">Decision log</h2>
        <p className="text-sm text-[var(--ink-muted)]">
          Registrá decisiones con razón. El Mentor las usa como contexto.
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-3">
        <input
          name="decision"
          required
          minLength={3}
          placeholder="Decisión"
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm"
        />
        <textarea
          name="reason"
          required
          minLength={3}
          rows={2}
          placeholder="Razón"
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm"
        />
        {state?.error ? (
          <p className="text-sm text-red-700">{state.error}</p>
        ) : null}
        {state?.ok ? (
          <p className="text-sm text-[var(--accent)]">Decisión guardada.</p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="w-fit rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm disabled:opacity-60"
        >
          {pending ? "Guardando…" : "Agregar decisión"}
        </button>
      </form>

      <ul className="space-y-3">
        {decisions.map((d) => (
          <li
            key={d.id}
            className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3 text-sm"
          >
            <p className="font-medium">{d.decision}</p>
            <p className="mt-1 text-[var(--ink-muted)]">{d.reason}</p>
            <p className="mt-2 text-xs text-[var(--ink-muted)]">
              {new Date(d.createdAt).toLocaleString("es-AR")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
