import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ModuleActions } from "@/components/ModuleActions";
import { ModuleNextSteps } from "@/components/ModuleNextSteps";
import { auth } from "@/modules/identity/auth";
import { getModuleForUser } from "@/modules/learning/journey";
import { prisma } from "@/lib/prisma";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function renderBody(body: string) {
  return body
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, i) => (
      <p
        key={i}
        className="whitespace-pre-line leading-relaxed text-[var(--ink-muted)]"
      >
        {block}
      </p>
    ));
}

export default async function ModulePage({ params }: PageProps) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { slug } = await params;
  const data = await getModuleForUser(session.user.id, slug);
  if (!data) notFound();

  const { journey, module: mod, progress } = data;
  const status = progress?.status ?? "not_started";

  const concepts = await prisma.knowledgeConcept.findMany({
    where: { moduleId: mod.id },
    orderBy: { order: "asc" },
  });

  const index = journey.path.modules.findIndex((m) => m.id === mod.id);
  const next = journey.path.modules[index + 1] ?? null;
  const prev = journey.path.modules[index - 1] ?? null;

  return (
    <article className="mx-auto max-w-2xl space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-[var(--ink-muted)]">
        <Link href="/app/path">← Learning Path</Link>
        <span>
          Paso {mod.order} de {journey.path.modules.length}
        </span>
      </div>

      <header>
        <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
          {mod.context}
        </p>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight">
          {mod.title}
        </h1>
        <p className="text-lg text-[var(--ink-muted)]">{mod.summary}</p>
      </header>

      <dl className="grid gap-4 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 text-sm sm:grid-cols-2">
        <div>
          <dt className="mb-1 font-medium">Goal</dt>
          <dd className="text-[var(--ink-muted)]">{mod.goal}</dd>
        </div>
        <div>
          <dt className="mb-1 font-medium">Resultado esperado</dt>
          <dd className="text-[var(--ink-muted)]">{mod.expectedOutcome}</dd>
        </div>
      </dl>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Contenido</h2>
        {mod.body ? (
          <div className="space-y-4">{renderBody(mod.body)}</div>
        ) : (
          <p className="text-sm text-[var(--ink-muted)]">
            Contenido pendiente de seed. Corré `npm run db:seed`.
          </p>
        )}
      </section>

      {concepts.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-lg font-medium">Knowledge relacionado</h2>
          <ul className="space-y-2">
            {concepts.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/app/knowledge/${c.slug}`}
                  className="text-sm text-[var(--accent)] underline"
                >
                  {c.title}
                </Link>
                <p className="text-xs text-[var(--ink-muted)]">{c.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="rounded-lg border border-dashed border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink-muted)]">
        Marcá el módulo cuando <strong>demuestres</strong> el resultado — no
        cuando solo lo leíste.
      </p>

      <ModuleActions moduleId={mod.id} status={status} />

      <ModuleNextSteps
        moduleSlug={mod.slug}
        status={status}
        nextModuleSlug={next?.slug}
        nextModuleTitle={next?.title}
        relatedConceptSlug={concepts[0]?.slug}
        isPracticeModule={mod.slug === "1-practice"}
      />

      <div className="flex justify-between text-sm text-[var(--ink-muted)]">
        {prev ? (
          <Link href={`/app/path/${prev.slug}`}>← {prev.title}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/app/path/${next.slug}`}>{next.title} →</Link>
        ) : (
          <Link href="/app/projects">Practice Project →</Link>
        )}
      </div>
    </article>
  );
}
