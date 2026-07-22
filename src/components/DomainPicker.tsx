"use client";

import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { setProjectDomain } from "@/modules/progress/actions";

export function DomainPicker({ initialDomain }: { initialDomain: string }) {
  const [domain, setDomain] = useState(initialDomain);
  const [pending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  return (
    <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
      <h2 className="font-medium">Dominio de tu Practice Project</h2>
      <p className="mt-1 text-sm text-[var(--ink-muted)]">
        Lo elegís vos (FOUNDER_DECISIONS). Gastos Hormiga es solo ejemplo — no
        es obligatorio.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          value={domain}
          onChange={(e) => {
            setDomain(e.target.value);
            setSaved(false);
          }}
          placeholder="Ej: gastos personales, hábitos, inventario chico…"
          className="flex-1 rounded-md border border-[var(--line)] bg-[var(--bg)] px-3 py-2 text-sm"
        />
        <button
          type="button"
          disabled={pending || domain.trim().length < 2}
          onClick={() =>
            startTransition(async () => {
              await setProjectDomain(domain);
              setSaved(true);
              router.refresh();
            })
          }
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          {pending ? "…" : "Guardar dominio"}
        </button>
      </div>
      {saved ? (
        <p className="mt-2 text-sm text-[var(--accent)]">Dominio guardado.</p>
      ) : null}
    </div>
  );
}
