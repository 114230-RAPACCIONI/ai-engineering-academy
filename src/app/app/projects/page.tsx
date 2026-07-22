import Link from "next/link";
import { redirect } from "next/navigation";
import { DefinitionChecklist } from "@/components/DefinitionChecklist";
import { PracticeProjectForm } from "@/components/PracticeProjectForm";
import { auth } from "@/modules/identity/auth";
import {
  CHAPTER_01,
  CHAPTER_02,
  CHAPTER_03,
  CHAPTER_04,
  getOrCreateJourney,
  isChapter2Unlocked,
  isChapter3Unlocked,
  isChapter4Unlocked,
  progressSummary,
} from "@/modules/learning/journey";
import { prisma } from "@/lib/prisma";
import {
  buildChapter1Checklist,
  buildChapter2Checklist,
  buildChapter3Checklist,
  buildChapter4Checklist,
} from "@/modules/projects/checklist";
import { getOrCreateProject } from "@/modules/projects/service";

export default async function ProjectsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const project = await getOrCreateProject(session.user.id);
  const decisionsCount = await prisma.decisionLogEntry.count({
    where: { userId: session.user.id },
  });

  const unlockedCh2 = await isChapter2Unlocked(session.user.id);
  const unlockedCh3 = await isChapter3Unlocked(session.user.id);
  const unlockedCh4 = await isChapter4Unlocked(session.user.id);

  let pathPercentCh1 = 0;
  let pathPercentCh2 = 0;
  let pathPercentCh3 = 0;
  let pathPercentCh4 = 0;
  try {
    const j1 = await getOrCreateJourney(session.user.id, CHAPTER_01);
    pathPercentCh1 = progressSummary(j1.path.modules, j1.progress).percent;
  } catch {
    pathPercentCh1 = 0;
  }
  if (unlockedCh2) {
    try {
      const j2 = await getOrCreateJourney(session.user.id, CHAPTER_02);
      pathPercentCh2 = progressSummary(j2.path.modules, j2.progress).percent;
    } catch {
      pathPercentCh2 = 0;
    }
  }
  if (unlockedCh3) {
    try {
      const j3 = await getOrCreateJourney(session.user.id, CHAPTER_03);
      pathPercentCh3 = progressSummary(j3.path.modules, j3.progress).percent;
    } catch {
      pathPercentCh3 = 0;
    }
  }
  if (unlockedCh4) {
    try {
      const j4 = await getOrCreateJourney(session.user.id, CHAPTER_04);
      pathPercentCh4 = progressSummary(j4.path.modules, j4.progress).percent;
    } catch {
      pathPercentCh4 = 0;
    }
  }

  const checklistCh1 = buildChapter1Checklist({
    project,
    decisionsCount,
    pathPercent: pathPercentCh1,
  });
  const checklistCh2 = unlockedCh2
    ? buildChapter2Checklist({
        project,
        decisionsCount,
        pathPercent: pathPercentCh2,
      })
    : [];
  const checklistCh3 = unlockedCh3
    ? buildChapter3Checklist({ project, pathPercent: pathPercentCh3 })
    : [];
  const checklistCh4 = unlockedCh4
    ? buildChapter4Checklist({ project, pathPercent: pathPercentCh4 })
    : [];

  return (
    <div className="space-y-8">
      <section>
        <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
          Practice Project
        </p>
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">
          Laboratorio de práctica
        </h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          Cap. 1 Planning → Cap. 2 Requirements → Cap. 3 Design → Cap. 4
          Implement I1 (código fuera de ZUZU).
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link href="/app/path" className="text-[var(--accent)] underline">
            Learning Path
          </Link>
          <Link href="/app/mentor" className="text-[var(--ink-muted)] underline">
            Mentor
          </Link>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <PracticeProjectForm
          project={project}
          showChapter2Fields={unlockedCh2}
          showChapter3Fields={unlockedCh3}
          showChapter4Fields={unlockedCh4}
        />
        <div className="space-y-6">
          <DefinitionChecklist items={checklistCh1} />
          {unlockedCh2 ? (
            <DefinitionChecklist
              items={checklistCh2}
              title="Definition of Done — Cap. 2"
              subtitle="FR · NFR · AC · trazabilidad."
            />
          ) : (
            <p className="rounded-xl border border-dashed border-[var(--line)] p-4 text-sm text-[var(--ink-muted)]">
              Cap. 2 se habilita al cerrar el Path del Capítulo 1.
            </p>
          )}
          {unlockedCh3 ? (
            <DefinitionChecklist
              items={checklistCh3}
              title="Definition of Done — Cap. 3"
              subtitle="Diseño · ADRs · Incremento 1."
            />
          ) : unlockedCh2 ? (
            <p className="rounded-xl border border-dashed border-[var(--line)] p-4 text-sm text-[var(--ink-muted)]">
              Cap. 3 se habilita al cerrar el Path del Capítulo 2.
            </p>
          ) : null}
          {unlockedCh4 ? (
            <DefinitionChecklist
              items={checklistCh4}
              title="Definition of Done — Cap. 4"
              subtitle="Bitácora I1 · ACs · review (código fuera de ZUZU)."
            />
          ) : unlockedCh3 ? (
            <p className="rounded-xl border border-dashed border-[var(--line)] p-4 text-sm text-[var(--ink-muted)]">
              Cap. 4 se habilita al cerrar el Path del Capítulo 3.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
