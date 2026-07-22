import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/modules/identity/auth";
import { prisma } from "@/lib/prisma";
import {
  getOrCreateJourney,
  progressSummary,
} from "@/modules/learning/journey";
import { getOrCreateProject } from "@/modules/projects/service";

const statusLabel: Record<string, string> = {
  planning: "Planning",
  active: "Active",
  done: "Done",
};

export default async function ProgressPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const journey = await getOrCreateJourney(session.user.id);
  const summary = progressSummary(journey.path.modules, journey.progress);
  const project = await getOrCreateProject(session.user.id);
  const decisions = await prisma.decisionLogEntry.count({
    where: { userId: session.user.id },
  });

  const current = journey.path.modules.find(
    (m) => m.id === journey.currentModuleId,
  );

  return (
    <div className="space-y-8">
      <section>
        <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
          Progress
        </p>
        <h1 className="mb-2 text-3xl font-semibold">Tu avance</h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          Señales de capability — sin rankings ni castigos. Volvés porque
          progresás.
        </p>
      </section>

      <section className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5">
        <h2 className="mb-2 font-medium">{journey.path.title}</h2>
        <p className="mb-3 text-sm text-[var(--ink-muted)]">
          {summary.completed}/{summary.total} módulos · {summary.percent}%
        </p>
        <div className="mb-3 h-2 overflow-hidden rounded-full bg-[var(--bg-deep)]">
          <div
            className="h-full bg-[var(--accent)]"
            style={{ width: `${summary.percent}%` }}
          />
        </div>
        {current && journey.status !== "completed" ? (
          <p className="text-sm text-[var(--ink-muted)]">
            Actual: {current.title}
          </p>
        ) : null}
        {journey.status === "completed" ? (
          <p className="text-sm text-[var(--accent)]">Capítulo completado.</p>
        ) : null}
        <Link
          href="/app/path"
          className="mt-3 inline-block text-sm text-[var(--accent)] underline"
        >
          Ir al Learning Path
        </Link>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5">
          <h2 className="mb-2 font-medium">Practice Project</h2>
          <p className="text-sm text-[var(--ink-muted)]">{project.title}</p>
          <p className="mt-2 text-sm">
            Estado: {statusLabel[project.status] ?? project.status}
          </p>
          <Link
            href="/app/projects"
            className="mt-3 inline-block text-sm text-[var(--accent)] underline"
          >
            Editar proyecto
          </Link>
        </div>
        <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5">
          <h2 className="mb-2 font-medium">Decision log</h2>
          <p className="text-sm text-[var(--ink-muted)]">
            {decisions} decisión{decisions === 1 ? "" : "es"} registrada
            {decisions === 1 ? "" : "s"}
          </p>
          <Link
            href="/app/mentor"
            className="mt-3 inline-block text-sm text-[var(--accent)] underline"
          >
            Ver en Mentor
          </Link>
        </div>
      </section>
    </div>
  );
}
