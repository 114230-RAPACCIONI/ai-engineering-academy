import Link from "next/link";
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

type NextAction = {
  title: string;
  hint: string;
  href: string;
  cta: string;
};

function pickNextAction(input: {
  pathPercent: number;
  currentSlug?: string;
  currentTitle?: string;
  completed: boolean;
  decisions: number;
  problemReady: boolean;
  dodPercent: number;
}): NextAction {
  if (input.completed && input.dodPercent >= 80) {
    return {
      title: "Capítulo 1 casi cerrado",
      hint: "Revisá Progress, exportá el ZIP y celebrá el criterio ganado.",
      href: "/app/progress",
      cta: "Ver Progress",
    };
  }

  if (input.pathPercent < 20) {
    return {
      title: input.currentTitle ?? "Empezá el Path",
      hint: "Primero entendé el anti-patrón Frankenstein. Todavía no codees.",
      href: input.currentSlug
        ? `/app/path/${input.currentSlug}`
        : "/app/path",
      cta: "Continuar módulo",
    };
  }

  if (!input.problemReady) {
    return {
      title: "Escribí tu problem statement",
      hint: "Sin problema claro, el Mentor y el Path no tienen ancla.",
      href: "/app/projects",
      cta: "Abrir Practice Project",
    };
  }

  if (input.decisions < 3) {
    return {
      title: "Sumá decisiones al log",
      hint: `Tenés ${input.decisions}/3. El Cap. 1 pide al menos tres con razón.`,
      href: "/app/mentor",
      cta: "Ir al Mentor",
    };
  }

  if (input.pathPercent < 100) {
    return {
      title: input.currentTitle ?? "Seguí el Path",
      hint: "Completá módulos cuando demuestres el outcome, no solo al leer.",
      href: input.currentSlug
        ? `/app/path/${input.currentSlug}`
        : "/app/path",
      cta: "Continuar Path",
    };
  }

  return {
    title: "Cerrá el Definition of Done",
    hint: "Path completo: terminá evidencia en Projects y Progress.",
    href: "/app/progress",
    cta: "Ver checklist",
  };
}

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

  let nextAction: NextAction | null = null;
  let dodPercent = 0;
  let dodDone = 0;
  let dodTotal = 0;

  if (session?.user?.id) {
    try {
      const journey = await getOrCreateJourney(session.user.id);
      const summary = progressSummary(journey.path.modules, journey.progress);
      const current = journey.path.modules.find(
        (m) => m.id === journey.currentModuleId,
      );
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
      dodPercent = dod.percent;
      dodDone = dod.done;
      dodTotal = dod.total;

      pathSummary = {
        percent: summary.percent,
        title: journey.path.title,
        currentSlug: current?.slug,
        currentTitle: current?.title,
        completed: journey.status === "completed",
      };

      nextAction = pickNextAction({
        pathPercent: summary.percent,
        currentSlug: current?.slug,
        currentTitle: current?.title,
        completed: journey.status === "completed",
        decisions,
        problemReady: project.problemStatement.trim().length >= 40,
        dodPercent: dod.percent,
      });
    } catch {
      pathSummary = null;
    }
  }

  const isNew =
    pathSummary !== null &&
    pathSummary.percent === 0 &&
    !pathSummary.completed;

  return (
    <div className="space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">
          Hola{user?.name ? `, ${user.name}` : ""}
        </h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          {isNew
            ? "Tu viaje arranca ahora. Un paso a la vez: Path → evidencia → Mentor."
            : "Seguí formando criterio. La IA acompaña; no reemplaza tu decisión."}
        </p>
        {isNew ? (
          <Link
            href="/app/onboarding"
            className="mt-3 inline-block text-sm text-[var(--accent)] underline"
          >
            Ver guía de bienvenida
          </Link>
        ) : null}
      </section>

      {nextAction ? (
        <section className="rounded-xl border border-[var(--accent)] bg-[var(--surface)] p-5">
          <p className="mb-1 text-xs tracking-wide text-[var(--ink-muted)] uppercase">
            Próximo paso recomendado
          </p>
          <h2 className="mb-2 text-xl font-medium">{nextAction.title}</h2>
          <p className="mb-4 text-sm text-[var(--ink-muted)]">{nextAction.hint}</p>
          <Link
            href={nextAction.href}
            className="inline-block rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white"
          >
            {nextAction.cta}
          </Link>
        </section>
      ) : null}

      {pathSummary ? (
        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
            <p className="text-xs tracking-wide text-[var(--ink-muted)] uppercase">
              Learning Path
            </p>
            <p className="mt-2 text-2xl font-semibold">{pathSummary.percent}%</p>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              {pathSummary.title}
            </p>
            <Link
              href="/app/path"
              className="mt-3 inline-block text-sm text-[var(--accent)] underline"
            >
              Ver viaje
            </Link>
          </div>
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
            <p className="text-xs tracking-wide text-[var(--ink-muted)] uppercase">
              Definition of Done
            </p>
            <p className="mt-2 text-2xl font-semibold">{dodPercent}%</p>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              {dodDone}/{dodTotal} criterios Cap. 1
            </p>
            <Link
              href="/app/progress"
              className="mt-3 inline-block text-sm text-[var(--accent)] underline"
            >
              Ver checklist
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
          href="/app/projects"
          className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
        >
          <h2 className="mb-1 font-medium">Practice Project</h2>
          <p className="text-sm text-[var(--ink-muted)]">
            Laboratorio de planning con Definition of Done.
          </p>
        </Link>
      </section>
    </div>
  );
}
