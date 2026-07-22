"use client";

import { useActionState } from "react";
import {
  saveCapabilityAssessment,
  type AssessmentResult,
} from "@/modules/progress/actions";
import { criteriaForChapter } from "@/modules/progress/rubric";

type Props = {
  kind: "pre" | "post";
  chapter?: number;
};

const initial: AssessmentResult | null = null;

export function CapabilityForm({ kind, chapter = 1 }: Props) {
  const [state, formAction, pending] = useActionState(
    saveCapabilityAssessment,
    initial,
  );
  const criteria = criteriaForChapter(chapter);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="kind" value={kind} />
      <input type="hidden" name="chapter" value={String(chapter)} />
      <p className="text-sm text-[var(--ink-muted)]">
        Escala 1–5 (rúbrica Cap. {chapter}). Mínimo para aprobar: promedio ≥ 3 y
        ningún criterio en 1.
      </p>
      {criteria.map((c) => (
        <label key={c.key} className="flex flex-col gap-1 text-sm">
          <span className="font-medium">{c.label}</span>
          <span className="text-xs text-[var(--ink-muted)]">
            1: {c.hint1} · 3: {c.hint3} · 5: {c.hint5}
          </span>
          <select
            name={c.key}
            required
            defaultValue="3"
            className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      ))}
      <label className="flex flex-col gap-1 text-sm">
        Nota breve (opcional)
        <textarea
          name="note"
          rows={2}
          placeholder={
            kind === "pre"
              ? "¿Dónde sentís que estás hoy?"
              : "¿Qué capability ganaste — en una oración?"
          }
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        />
      </label>
      {state?.ok ? (
        <p className="text-sm text-[var(--accent)]">Autoevaluación guardada.</p>
      ) : null}
      {state?.error ? (
        <p className="text-sm text-red-700">{state.error}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {pending
          ? "Guardando…"
          : kind === "pre"
            ? `Guardar baseline Cap. ${chapter} (pre)`
            : `Guardar cierre Cap. ${chapter} (post)`}
      </button>
    </form>
  );
}
