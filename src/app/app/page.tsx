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

  let pathSummary: { percent: number; title: string } | null = null;
  if (session?.user?.id) {
    try {
      const journey = await getOrCreateJourney(session.user.id);
      const summary = progressSummary(journey.path.modules, journey.progress);
      pathSummary = { percent: summary.percent, title: journey.path.title };
    } catch {
      pathSummary = null;
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-semibold">
          Hola{user?.name ? `, ${user.name}` : ""}
        </h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          Este es tu espacio de aprendizaje. El objetivo no es generar código: es
          aprender a pensar, diseñar y construir con un Mentor de IA.
        </p>
      </section>

      {pathSummary ? (
        <section className="rounded-lg border border-[var(--accent)] bg-[var(--surface)] p-5">
          <p className="mb-1 text-sm text-[var(--ink-muted)]">Tu viaje actual</p>
          <h2 className="mb-2 font-medium">{pathSummary.title}</h2>
          <p className="mb-3 text-sm text-[var(--ink-muted)]">
            {pathSummary.percent}% del capítulo
          </p>
          <Link
            href="/app/path"
            className="text-sm font-medium text-[var(--accent)] underline"
          >
            Continuar Learning Path
          </Link>
        </section>
      ) : null}

      <section className="grid gap-4 md:grid-cols-2">
        <Link
          href="/app/path"
          className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
        >
          <h2 className="mb-1 font-medium">Learning Path</h2>
          <p className="text-sm text-[var(--ink-muted)]">
            Empezá por el Capítulo 1: de la idea al scope.
          </p>
        </Link>
        <Link
          href="/app/mentor"
          className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
        >
          <h2 className="mb-1 font-medium">Mentor</h2>
          <p className="text-sm text-[var(--ink-muted)]">
            Preguntá, aclará ambigüedades y pedí feedback — no soluciones listas.
          </p>
        </Link>
        <Link
          href="/app/projects"
          className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
        >
          <h2 className="mb-1 font-medium">Practice Project</h2>
          <p className="text-sm text-[var(--ink-muted)]">
            Tu laboratorio de práctica. El dominio lo elegís vos.
          </p>
        </Link>
        <Link
          href="/app/profile"
          className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
        >
          <h2 className="mb-1 font-medium">Perfil</h2>
          <p className="text-sm text-[var(--ink-muted)]">
            Objetivos y experiencia — contexto para el Mentor.
          </p>
        </Link>
      </section>
    </div>
  );
}
