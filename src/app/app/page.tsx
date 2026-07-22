import Link from "next/link";
import { auth } from "@/modules/identity/auth";
import { prisma } from "@/lib/prisma";

export default async function AppHomePage() {
  const session = await auth();
  const user = session?.user?.id
    ? await prisma.user.findUnique({ where: { id: session.user.id } })
    : null;

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

      <p className="text-sm text-[var(--ink-muted)]">
        Las secciones Path, Knowledge, Mentor, Projects y Progress se completan en
        las próximas fases. La navegación ya está lista.
      </p>
    </div>
  );
}
