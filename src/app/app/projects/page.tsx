import Link from "next/link";
import { redirect } from "next/navigation";
import { DefinitionChecklist } from "@/components/DefinitionChecklist";
import { PracticeProjectForm } from "@/components/PracticeProjectForm";
import { auth } from "@/modules/identity/auth";
import {
  getOrCreateJourney,
  progressSummary,
} from "@/modules/learning/journey";
import { prisma } from "@/lib/prisma";
import { buildChapter1Checklist } from "@/modules/projects/checklist";
import { getOrCreateProject } from "@/modules/projects/service";

export default async function ProjectsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const project = await getOrCreateProject(session.user.id);
  const decisionsCount = await prisma.decisionLogEntry.count({
    where: { userId: session.user.id },
  });

  let pathPercent = 0;
  try {
    const journey = await getOrCreateJourney(session.user.id);
    pathPercent = progressSummary(journey.path.modules, journey.progress).percent;
  } catch {
    pathPercent = 0;
  }

  const checklist = buildChapter1Checklist({
    project,
    decisionsCount,
    pathPercent,
  });

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
          Fase Planning del Capítulo 1. El dominio lo elegís vos. Todavía no es
          momento de código de producto.
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link href="/app/path" className="text-[var(--accent)] underline">
            Volver al Path
          </Link>
          <Link href="/app/mentor" className="text-[var(--ink-muted)] underline">
            Pedir feedback al Mentor
          </Link>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <PracticeProjectForm project={project} />
        <DefinitionChecklist items={checklist} />
      </div>
    </div>
  );
}
