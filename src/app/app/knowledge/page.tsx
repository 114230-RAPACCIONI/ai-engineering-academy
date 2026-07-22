import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/modules/identity/auth";
import { listConcepts } from "@/modules/knowledge/queries";

type PageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function KnowledgePage({ searchParams }: PageProps) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const { q } = await searchParams;
  const concepts = await listConcepts(q);

  return (
    <div className="space-y-8">
      <section>
        <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
          Knowledge
        </p>
        <h1 className="mb-2 text-3xl font-semibold">Base de conocimiento</h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          Conceptos del Capítulo 1. Leé para entender; practicá en el Path y con
          el Mentor.
        </p>
      </section>

      <form className="flex max-w-lg gap-2">
        <input
          name="q"
          defaultValue={q ?? ""}
          placeholder="Buscar conceptos…"
          className="flex-1 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
        >
          Buscar
        </button>
      </form>

      {concepts.length === 0 ? (
        <p className="text-sm text-[var(--ink-muted)]">
          No hay resultados{q ? ` para “${q}”` : ""}.
        </p>
      ) : (
        <ul className="space-y-3">
          {concepts.map((c) => (
            <li key={c.id}>
              <Link
                href={`/app/knowledge/${c.slug}`}
                className="block rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 hover:border-[var(--accent)]"
              >
                <h2 className="mb-1 font-medium">{c.title}</h2>
                <p className="text-sm text-[var(--ink-muted)]">{c.summary}</p>
                {c.module ? (
                  <p className="mt-2 text-xs text-[var(--accent)]">
                    {c.module.title}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
