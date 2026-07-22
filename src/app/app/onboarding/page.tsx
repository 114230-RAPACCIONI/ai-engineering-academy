import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/modules/identity/auth";
import { getOrCreateJourney } from "@/modules/learning/journey";
import { getOrCreateProject } from "@/modules/projects/service";

export default async function OnboardingPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const journey = await getOrCreateJourney(session.user.id);
  await getOrCreateProject(session.user.id);
  const first = journey.path.modules[0];

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <section>
        <p className="mb-2 text-xs tracking-[0.18em] text-[var(--ink-muted)] uppercase">
          Bienvenida
        </p>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Empezás el Capítulo 1
        </h1>
        <p className="text-lg text-[var(--ink-muted)]">
          ZUZU no te pide código todavía. Te pide criterio: problema, scope y
          decisiones — con un Mentor que pregunta, no que reemplaza.
        </p>
      </section>

      <ol className="space-y-4">
        <Step
          n={1}
          title="Recorré el Learning Path"
          body="Seis módulos. Leé, practicá y marcá cuando demuestres el outcome."
        />
        <Step
          n={2}
          title="Escribí tu Practice Project"
          body="El dominio lo elegís vos. Dejá evidencia: problem statement, scope, non-goals."
        />
        <Step
          n={3}
          title="Usá el Mentor (o notas de reflexión)"
          body="Pedí clarificación. Si aún no tenés API key, guardá notas: también cuentan."
        />
      </ol>

      <section className="rounded-xl border border-[var(--accent)] bg-[var(--surface)] p-5">
        <p className="text-sm text-[var(--ink-muted)]">Primer paso</p>
        <h2 className="mt-1 font-medium">
          {first?.title ?? "Módulo 1.1 — El problema del Frankenstein"}
        </h2>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">
          {first?.summary ??
            "Reconocé el patrón de fallo cuando la IA acelera sin plan."}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={first ? `/app/path/${first.slug}` : "/app/path"}
            className="rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white"
          >
            Empezar módulo 1.1
          </Link>
          <Link
            href="/app"
            className="rounded-md border border-[var(--line)] px-4 py-2.5 text-sm"
          >
            Ir al inicio
          </Link>
        </div>
      </section>
    </div>
  );
}

function Step({
  n,
  title,
  body,
}: {
  n: number;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-4 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent)]">
        {n}
      </span>
      <div>
        <h2 className="font-medium">{title}</h2>
        <p className="mt-1 text-sm text-[var(--ink-muted)]">{body}</p>
      </div>
    </li>
  );
}
