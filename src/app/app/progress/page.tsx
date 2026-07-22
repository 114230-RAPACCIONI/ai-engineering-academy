import Link from "next/link";
import { redirect } from "next/navigation";
import { CapabilityForm } from "@/components/CapabilityForm";
import { DefinitionChecklist } from "@/components/DefinitionChecklist";
import { auth } from "@/modules/identity/auth";
import { prisma } from "@/lib/prisma";
import {
  getOrCreateJourney,
  progressSummary,
} from "@/modules/learning/journey";
import {
  buildChapter1Checklist,
  checklistSummary,
} from "@/modules/projects/checklist";
import { getOrCreateProject } from "@/modules/projects/service";
import { averageScore } from "@/modules/progress/rubric";

const statusLabel: Record<string, string> = {
  planning: "Planning",
  active: "Active",
  done: "Done",
  not_started: "Pendiente",
  in_progress: "En curso",
  completed: "Completado",
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

  const checklist = buildChapter1Checklist({
    project,
    decisionsCount: decisions,
    pathPercent: summary.percent,
  });
  const dod = checklistSummary(checklist);

  const current = journey.path.modules.find(
    (m) => m.id === journey.currentModuleId,
  );

  const pre = await prisma.capabilityAssessment.findFirst({
    where: { userId: session.user.id, kind: "pre" },
    orderBy: { createdAt: "desc" },
  });
  const post = await prisma.capabilityAssessment.findFirst({
    where: { userId: session.user.id, kind: "post" },
    orderBy: { createdAt: "desc" },
  });

  const scoreOf = (a: typeof pre) =>
    a
      ? averageScore({
          clarityProblem: a.clarityProblem,
          scope: a.scope,
          decisions: a.decisions,
          aiUse: a.aiUse,
          antiFrankenstein: a.antiFrankenstein,
        })
      : null;

  const preScore = scoreOf(pre);
  const postScore = scoreOf(post);

  return (
    <div className="space-y-8">
      <section>
        <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
          Progress
        </p>
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">Tu avance</h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          Señales de capability — sin rankings ni castigos. Volvés porque
          progresás.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Stat
          label="Learning Path"
          value={`${summary.percent}%`}
          hint={`${summary.completed}/${summary.total} módulos`}
        />
        <Stat
          label="Definition of Done"
          value={`${dod.percent}%`}
          hint={`${dod.done}/${dod.total} criterios`}
        />
        <Stat
          label="Decision log"
          value={`${decisions}`}
          hint={decisions >= 3 ? "Meta Cap. 1 alcanzada" : "Meta: 3+"}
        />
      </section>

      <section className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="font-medium">{journey.path.title}</h2>
            {current && journey.status !== "completed" ? (
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                Actual: {current.title}
              </p>
            ) : null}
            {journey.status === "completed" ? (
              <p className="mt-1 text-sm text-[var(--accent)]">
                Capítulo completado.
              </p>
            ) : null}
          </div>
          <Link
            href={
              current && journey.status !== "completed"
                ? `/app/path/${current.slug}`
                : "/app/path"
            }
            className="text-sm text-[var(--accent)] underline"
          >
            Continuar Path
          </Link>
        </div>
        <div className="mb-4 h-2.5 overflow-hidden rounded-full bg-[var(--bg-deep)]">
          <div
            className="h-full rounded-full bg-[var(--accent)]"
            style={{ width: `${summary.percent}%` }}
          />
        </div>
        <ul className="space-y-2">
          {journey.path.modules.map((mod) => {
            const status =
              journey.progress.find((p) => p.moduleId === mod.id)?.status ??
              "not_started";
            return (
              <li key={mod.id}>
                <Link
                  href={`/app/path/${mod.slug}`}
                  className="flex items-center justify-between gap-3 rounded-lg border border-[var(--line)] bg-[var(--bg)]/40 px-3 py-2 text-sm hover:border-[var(--accent)]"
                >
                  <span>{mod.title}</span>
                  <span className="shrink-0 text-xs text-[var(--ink-muted)]">
                    {statusLabel[status] ?? status}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
          <h2 className="mb-2 font-medium">Practice Project</h2>
          <p className="text-sm text-[var(--ink-muted)]">{project.title}</p>
          <p className="mt-2 text-sm">
            Estado: {statusLabel[project.status] ?? project.status}
          </p>
          {project.domain ? (
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              Dominio: {project.domain}
            </p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link href="/app/projects" className="text-[var(--accent)] underline">
              Editar proyecto
            </Link>
            <a
              href={`/api/projects/${project.id}/export`}
              className="text-[var(--ink-muted)] underline"
            >
              Exportar ZIP
            </a>
          </div>
        </section>

        <DefinitionChecklist
          items={checklist}
          subtitle="Evidencia de capability del Capítulo 1."
        />
      </div>

      <section className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
        <h2 className="mb-1 font-medium">Rúbrica de capability (Cap. 1)</h2>
        <p className="mb-4 text-sm text-[var(--ink-muted)]">
          Instrumento de validación (MVP_SCOPE §9). Escala 1–5 · aprobar: promedio
          ≥ 3 sin criterio en 1.
        </p>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--bg)]/40 p-3 text-sm">
            <p className="text-xs text-[var(--ink-muted)] uppercase">Pre</p>
            {preScore ? (
              <p className="mt-1">
                Promedio {preScore.avg}
                {preScore.passes ? " · baseline ok" : " · hay huecos"}
              </p>
            ) : (
              <p className="mt-1 text-[var(--ink-muted)]">Sin baseline</p>
            )}
          </div>
          <div className="rounded-lg border border-[var(--line)] bg-[var(--bg)]/40 p-3 text-sm">
            <p className="text-xs text-[var(--ink-muted)] uppercase">Post</p>
            {postScore ? (
              <p className="mt-1">
                Promedio {postScore.avg}
                {postScore.passes ? " · Cap. 1 ok" : " · aún no aprueba"}
                {preScore
                  ? ` · Δ ${(postScore.avg - preScore.avg).toFixed(1)}`
                  : ""}
              </p>
            ) : (
              <p className="mt-1 text-[var(--ink-muted)]">Pendiente de cierre</p>
            )}
          </div>
        </div>

        {!pre ? <CapabilityForm kind="pre" /> : null}
        {pre && !post ? (
          <div className="mt-4">
            <p className="mb-3 text-sm text-[var(--ink-muted)]">
              Cuando cierres Path + DoD, registrá el post.
            </p>
            <CapabilityForm kind="post" />
          </div>
        ) : null}
        {pre && post ? (
          <p className="text-sm text-[var(--accent)]">
            Pre y post guardados. Eso permite validar la hipótesis de
            transformación.
          </p>
        ) : null}
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
      <p className="text-xs tracking-wide text-[var(--ink-muted)] uppercase">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-[var(--ink-muted)]">{hint}</p>
    </div>
  );
}
