import Link from "next/link";
import { auth } from "@/modules/identity/auth";
import { prisma } from "@/lib/prisma";
import {
  getOrCreateJourney,
  progressSummary,
} from "@/modules/learning/journey";

export default async function AppHomePage() {
  const session = await auth();
  const user = session?.user?.id
    ? await prisma.user.findUnique({ where: { id: session.user.id } })
    : null;

  let pathSummary: {
    percent: number;
    title: string;
    currentSlug?: string;
    currentTitle?: string;
    completed: boolean;
  } | null = null;

  if (session?.user?.id) {
    try {
      const journey = await getOrCreateJourney(session.user.id);
      const summary = progressSummary(journey.path.modules, journey.progress);
      const current = journey.path.modules.find(
        (m) => m.id === journey.currentModuleId,
      );
      pathSummary = {
        percent: summary.percent,
        title: journey.path.title,
        currentSlug: current?.slug,
        currentTitle: current?.title,
        completed: journey.status === "completed",
      };
    } catch {
      pathSummary = null;
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">
          Hola{user?.name ? `, ${user.name}` : ""}
        </h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          Este es tu espacio de aprendizaje. El objetivo no es generar código: es
          aprender a pensar, diseñar y construir con un Mentor de IA.
        </p>
      </section>

      {pathSummary ? (
        <section className="rounded-xl border border-[var(--accent)] bg-[var(--surface)] p-5">
          <p className="mb-1 text-sm text-[var(--ink-muted)]">Tu viaje actual</p>
          <h2 className="mb-2 font-medium">{pathSummary.title}</h2>
          <p className="mb-1 text-sm text-[var(--ink-muted)]">
            {pathSummary.percent}% del capítulo
          </p>
          {!pathSummary.completed && pathSummary.currentTitle ? (
            <p className="mb-4 text-sm">
              Ahora: <span className="font-medium">{pathSummary.currentTitle}</span>
            </p>
          ) : (
            <p className="mb-4 text-sm text-[var(--accent)]">Capítulo completado.</p>
          )}
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href={
                pathSummary.currentSlug && !pathSummary.completed
                  ? `/app/path/${pathSummary.currentSlug}`
                  : "/app/path"
              }
              className="rounded-md bg-[var(--accent)] px-4 py-2 font-medium text-white"
            >
              {pathSummary.completed ? "Ver Path" : "Continuar módulo"}
            </Link>
            <Link
              href="/app/projects"
              className="rounded-md border border-[var(--line)] px-4 py-2"
            >
              Practice Project
            </Link>
          </div>
        </section>
      ) : null}

      <section className="grid gap-4 md:grid-cols-2">
        <Link
          href="/app/path"
          className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
        >
          <h2 className="mb-1 font-medium">Learning Path</h2>
          <p className="text-sm text-[var(--ink-muted)]">
            Viaje del Capítulo 1: de la idea al scope.
          </p>
        </Link>
        <Link
          href="/app/knowledge"
          className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
        >
          <h2 className="mb-1 font-medium">Knowledge</h2>
          <p className="text-sm text-[var(--ink-muted)]">
            Conceptos del capítulo, listos para consultar.
          </p>
        </Link>
        <Link
          href="/app/mentor"
          className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
        >
          <h2 className="mb-1 font-medium">Mentor</h2>
          <p className="text-sm text-[var(--ink-muted)]">
            Preguntá y pedí feedback — no soluciones listas.
          </p>
        </Link>
        <Link
          href="/app/progress"
          className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
        >
          <h2 className="mb-1 font-medium">Progress</h2>
          <p className="text-sm text-[var(--ink-muted)]">
            Avance del Path y del Practice Project.
          </p>
        </Link>
      </section>
    </div>
  );
}
