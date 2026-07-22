import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/modules/identity/auth";
import {
  getOrCreateJourney,
  progressSummary,
} from "@/modules/learning/journey";

const statusLabel: Record<string, string> = {
  not_started: "Pendiente",
  in_progress: "En curso",
  completed: "Completado",
};

export default async function PathPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const journey = await getOrCreateJourney(session.user.id);
  const summary = progressSummary(journey.path.modules, journey.progress);

  return (
    <div className="space-y-8">
      <section>
        <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
          Learning Path
        </p>
        <h1 className="mb-2 text-3xl font-semibold">{journey.path.title}</h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          {journey.path.description}
        </p>
      </section>

      <section className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span>Progreso del capítulo</span>
          <span>
            {summary.completed}/{summary.total} · {summary.percent}%
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-deep)]">
          <div
            className="h-full bg-[var(--accent)] transition-all"
            style={{ width: `${summary.percent}%` }}
          />
        </div>
        {journey.status === "completed" ? (
          <p className="mt-3 text-sm text-[var(--accent)]">
            Capítulo completado. Llevá tus artefactos al Practice Project y al
            Capítulo 2 cuando esté en la app.
          </p>
        ) : null}
      </section>

      <ol className="space-y-3">
        {journey.path.modules.map((mod) => {
          const progress = journey.progress.find((p) => p.moduleId === mod.id);
          const status = progress?.status ?? "not_started";
          const isCurrent = journey.currentModuleId === mod.id;

          return (
            <li key={mod.id}>
              <Link
                href={`/app/path/${mod.slug}`}
                className={`block rounded-lg border bg-[var(--surface)] p-4 hover:border-[var(--accent)] ${
                  isCurrent
                    ? "border-[var(--accent)]"
                    : "border-[var(--line)]"
                }`}
              >
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h2 className="font-medium">{mod.title}</h2>
                  <span className="rounded-full bg-[var(--bg-deep)] px-2 py-0.5 text-xs text-[var(--ink-muted)]">
                    {statusLabel[status] ?? status}
                  </span>
                  {isCurrent && journey.status !== "completed" ? (
                    <span className="text-xs text-[var(--accent)]">Actual</span>
                  ) : null}
                </div>
                <p className="text-sm text-[var(--ink-muted)]">{mod.summary}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
