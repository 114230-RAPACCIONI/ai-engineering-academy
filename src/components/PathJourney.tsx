import Link from "next/link";

const statusLabel: Record<string, string> = {
  not_started: "Pendiente",
  in_progress: "En curso",
  completed: "Completado",
};

type PathModule = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  order: number;
};

type PathProgress = {
  moduleId: string;
  status: string;
};

type PathJourneyProps = {
  modules: PathModule[];
  progress: PathProgress[];
  currentModuleId: string | null;
  journeyStatus: string;
  percent: number;
  completed: number;
  total: number;
  pathTitle: string;
  pathDescription: string;
  chapter?: number;
};

export function PathJourney({
  modules,
  progress,
  currentModuleId,
  journeyStatus,
  percent,
  completed,
  total,
  pathTitle,
  pathDescription,
  chapter = 1,
}: PathJourneyProps) {
  const current = modules.find((m) => m.id === currentModuleId);
  const isDone = journeyStatus === "completed";

  return (
    <div className="space-y-8">
      <section>
        <p className="mb-2 text-xs tracking-[0.18em] text-[var(--ink-muted)] uppercase">
          Learning Path · Cap. {chapter}
        </p>
        <h1 className="mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
          {pathTitle}
        </h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">{pathDescription}</p>
      </section>

      {isDone ? (
        <section className="rounded-xl border border-[var(--accent)] bg-[var(--accent-soft)] px-5 py-5">
          <p className="text-lg font-medium text-[var(--accent)]">
            Capítulo {chapter} cerrado en el Path
          </p>
          {chapter === 1 ? (
            <>
              <blockquote className="mt-3 border-l-2 border-[var(--accent)] pl-4 text-sm italic text-[var(--ink)]">
                “Todavía no construí la app — pero por primera vez sé qué estoy
                construyendo y qué no. Quiero seguir.”
              </blockquote>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                Completá el DoD Cap. 1, exportá el ZIP y desbloqueá el Capítulo 2
                (Requirements).
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/app/projects"
                  className="font-medium text-[var(--accent)] underline"
                >
                  Practice Project
                </Link>
                <Link
                  href="/app/path/c/chapter-02"
                  className="text-[var(--ink-muted)] underline"
                >
                  Ir al Capítulo 2
                </Link>
              </div>
            </>
          ) : chapter === 2 ? (
            <>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                Spec verificable listo. Seguí a Design (Cap. 3) — todavía sin
                código de producto.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/app/projects"
                  className="font-medium text-[var(--accent)] underline"
                >
                  Revisar Requirements
                </Link>
                <Link
                  href="/app/path/c/chapter-03"
                  className="text-[var(--ink-muted)] underline"
                >
                  Ir al Capítulo 3
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                Diseño e I1 definidos. El Cap. 4 (Implement) llega después —
                todavía no es “codear toda la V1”.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/app/projects"
                  className="font-medium text-[var(--accent)] underline"
                >
                  Revisar Design
                </Link>
                <Link href="/app/progress" className="text-[var(--ink-muted)] underline">
                  Progress
                </Link>
              </div>
            </>
          )}
        </section>
      ) : null}

      <section className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]">
        <div className="border-b border-[var(--line)] px-5 py-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-[var(--ink-muted)]">Tu viaje</span>
            <span className="font-medium">
              {completed}/{total} · {percent}%
            </span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-[var(--bg-deep)]">
            <div
              className="h-full rounded-full bg-[var(--accent)] transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          {!isDone && current ? (
            <p className="mt-3 text-sm text-[var(--ink-muted)]">
              Estás en:{" "}
              <Link
                href={`/app/path/${current.slug}`}
                className="font-medium text-[var(--accent)] underline"
              >
                {current.title}
              </Link>
            </p>
          ) : null}
        </div>

        <ol className="relative px-5 py-2">
          {modules.map((mod, index) => {
            const status =
              progress.find((p) => p.moduleId === mod.id)?.status ??
              "not_started";
            const isCurrent = currentModuleId === mod.id && !isDone;
            const isCompleted = status === "completed";
            const isLast = index === modules.length - 1;

            return (
              <li key={mod.id} className="relative flex gap-4 py-4">
                {!isLast ? (
                  <span
                    className={`absolute top-12 bottom-0 left-[15px] w-0.5 ${
                      isCompleted ? "bg-[var(--accent)]" : "bg-[var(--line)]"
                    }`}
                    aria-hidden
                  />
                ) : null}
                <div
                  className={`relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    isCompleted
                      ? "bg-[var(--accent)] text-white"
                      : isCurrent
                        ? "border-2 border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "border border-[var(--line)] bg-[var(--bg)] text-[var(--ink-muted)]"
                  }`}
                >
                  {isCompleted ? "✓" : mod.order}
                </div>
                <Link
                  href={`/app/path/${mod.slug}`}
                  className={`min-w-0 flex-1 rounded-lg border px-4 py-3 transition-colors ${
                    isCurrent
                      ? "border-[var(--accent)] bg-[var(--accent-soft)]/40"
                      : "border-[var(--line)] bg-[var(--bg)]/40 hover:border-[var(--accent)]"
                  }`}
                >
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h2 className="font-medium">{mod.title}</h2>
                    <span className="rounded-full bg-[var(--surface)] px-2 py-0.5 text-xs text-[var(--ink-muted)]">
                      {statusLabel[status] ?? status}
                    </span>
                    {isCurrent ? (
                      <span className="text-xs font-medium text-[var(--accent)]">
                        Estás acá
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-[var(--ink-muted)]">{mod.summary}</p>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
