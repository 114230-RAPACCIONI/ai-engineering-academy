import Link from "next/link";

type NextStep = {
  href: string;
  label: string;
  hint: string;
};

type ModuleNextStepsProps = {
  moduleSlug: string;
  status: string;
  nextModuleSlug?: string | null;
  nextModuleTitle?: string | null;
  relatedConceptSlug?: string | null;
  isPracticeModule?: boolean;
};

export function ModuleNextSteps({
  moduleSlug,
  status,
  nextModuleSlug,
  nextModuleTitle,
  relatedConceptSlug,
  isPracticeModule,
}: ModuleNextStepsProps) {
  const steps: NextStep[] = [];

  if (relatedConceptSlug) {
    steps.push({
      href: `/app/knowledge/${relatedConceptSlug}`,
      label: "Ver concepto en Knowledge",
      hint: "Profundidad conceptual del módulo",
    });
  }

  if (moduleSlug.includes("mentor") || moduleSlug.includes("1-5")) {
    steps.push({
      href: "/app/mentor",
      label: "Abrir Mentor",
      hint: "Pedí clarificación, no código",
    });
  }

  if (isPracticeModule || moduleSlug.includes("1-2") || moduleSlug.includes("1-3") || moduleSlug.includes("1-4")) {
    steps.push({
      href: "/app/projects",
      label: "Escribir en Practice Project",
      hint: "Dejá evidencia, no solo lectura",
    });
  }

  if (status === "completed" && nextModuleSlug) {
    steps.unshift({
      href: `/app/path/${nextModuleSlug}`,
      label: nextModuleTitle
        ? `Siguiente: ${nextModuleTitle}`
        : "Siguiente módulo",
      hint: "Seguí el viaje",
    });
  } else if (status !== "completed" && nextModuleSlug === null) {
    // last module incomplete — still show project
  }

  if (steps.length === 0) {
    steps.push({
      href: "/app/path",
      label: "Volver al Path",
      hint: "Ver tu viaje completo",
    });
  }

  return (
    <section className="space-y-3">
      <h2 className="text-sm font-medium tracking-wide text-[var(--ink-muted)] uppercase">
        Siguiente paso
      </h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {steps.slice(0, 3).map((s) => (
          <li key={s.href + s.label}>
            <Link
              href={s.href}
              className="block rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 hover:border-[var(--accent)]"
            >
              <span className="block text-sm font-medium">{s.label}</span>
              <span className="text-xs text-[var(--ink-muted)]">{s.hint}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
