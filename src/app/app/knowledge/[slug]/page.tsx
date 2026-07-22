import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/modules/identity/auth";
import {
  getConceptBySlug,
  getRelatedConcepts,
} from "@/modules/knowledge/queries";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ConceptPage({ params }: PageProps) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const { slug } = await params;
  const concept = await getConceptBySlug(slug);
  if (!concept) notFound();

  const related = await getRelatedConcepts(concept.relatedSlugs);

  return (
    <article className="max-w-2xl space-y-8">
      <Link href="/app/knowledge" className="text-sm text-[var(--ink-muted)]">
        ← Knowledge
      </Link>

      <header>
        <h1 className="mb-3 text-3xl font-semibold">{concept.title}</h1>
        <p className="text-[var(--ink-muted)]">{concept.summary}</p>
        {concept.module ? (
          <Link
            href={`/app/path/${concept.module.slug}`}
            className="mt-3 inline-block text-sm text-[var(--accent)] underline"
          >
            Ir al módulo: {concept.module.title}
          </Link>
        ) : null}
      </header>

      <section>
        <h2 className="mb-2 text-lg font-medium">Explicación</h2>
        <p className="leading-relaxed text-[var(--ink-muted)]">
          {concept.explanation}
        </p>
      </section>

      <section className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5">
        <h2 className="mb-2 text-lg font-medium">Ejemplo</h2>
        <p className="leading-relaxed text-[var(--ink-muted)]">
          {concept.example}
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-medium">Uso práctico</h2>
        <p className="leading-relaxed text-[var(--ink-muted)]">
          {concept.practicalUse}
        </p>
      </section>

      {related.length > 0 ? (
        <section>
          <h2 className="mb-3 text-lg font-medium">Relacionados</h2>
          <ul className="space-y-2">
            {related.map((r) => (
              <li key={r.id}>
                <Link
                  href={`/app/knowledge/${r.slug}`}
                  className="text-sm text-[var(--accent)] underline"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="grid gap-2 sm:grid-cols-2">
        {concept.module ? (
          <Link
            href={`/app/path/${concept.module.slug}`}
            className="rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm hover:border-[var(--accent)]"
          >
            <span className="block font-medium">Aplicar en el Path</span>
            <span className="text-xs text-[var(--ink-muted)]">
              {concept.module.title}
            </span>
          </Link>
        ) : null}
        <Link
          href="/app/projects"
          className="rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm hover:border-[var(--accent)]"
        >
          <span className="block font-medium">Escribir en Practice Project</span>
          <span className="text-xs text-[var(--ink-muted)]">
            Dejá evidencia, no solo lectura
          </span>
        </Link>
      </section>
    </article>
  );
}
