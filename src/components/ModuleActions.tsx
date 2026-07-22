"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  markModuleCompleted,
  markModuleStarted,
} from "@/modules/learning/actions";

type ModuleActionsProps = {
  moduleId: string;
  status: string;
  feedback?: string;
};

export function ModuleActions({
  moduleId,
  status,
  feedback,
}: ModuleActionsProps) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        {status === "not_started" ? (
          <button
            type="button"
            disabled={pending}
            onClick={() =>
              startTransition(async () => {
                await markModuleStarted(moduleId);
                router.refresh();
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
                router.refresh();
              })
            }
            className="rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
          >
            {pending ? "Guardando…" : "Marcar completado"}
          </button>
        ) : (
          <p className="rounded-md bg-[var(--accent-soft)] px-3 py-2 text-sm text-[var(--accent)]">
            Módulo completado. Buen paso.
          </p>
        )}
      </div>
      {status === "completed" && feedback ? (
        <p className="rounded-lg border border-[var(--accent)]/30 bg-[var(--accent-soft)]/40 px-4 py-3 text-sm text-[var(--ink)]">
          {feedback}
        </p>
      ) : null}
    </div>
  );
}
