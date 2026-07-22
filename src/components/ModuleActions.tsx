"use client";

import { useTransition } from "react";
import {
  markModuleCompleted,
  markModuleStarted,
} from "@/modules/learning/actions";

type ModuleActionsProps = {
  moduleId: string;
  status: string;
};

export function ModuleActions({ moduleId, status }: ModuleActionsProps) {
  const [pending, startTransition] = useTransition();

  return (
    <div className="flex flex-wrap gap-3">
      {status === "not_started" ? (
        <button
          type="button"
          disabled={pending}
          onClick={() =>
            startTransition(async () => {
              await markModuleStarted(moduleId);
            })
          }
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-sm disabled:opacity-60"
        >
          Empezar módulo
        </button>
      ) : null}
      {status !== "completed" ? (
        <button
          type="button"
          disabled={pending}
          onClick={() =>
            startTransition(async () => {
              await markModuleCompleted(moduleId);
            })
          }
          className="rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
        >
          {pending ? "Guardando…" : "Marcar completado"}
        </button>
      ) : (
        <p className="text-sm text-[var(--accent)]">Módulo completado.</p>
      )}
    </div>
  );
}
