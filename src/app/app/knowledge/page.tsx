import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/modules/identity/auth";
import { listConcepts } from "@/modules/knowledge/queries";
import { getOrCreateJourney } from "@/modules/learning/journey";

type PageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function KnowledgePage({ searchParams }: PageProps) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { q } = await searchParams;
  const concepts = await listConcepts(q);

  let currentModule: { slug: string; title: string } | null = null;
  try {
    const journey = await getOrCreateJourney(session.user.id);
    const current = journey.path.modules.find(
      (m) => m.id === journey.currentModuleId,
    );
    if (current) {
      currentModule = { slug: current.slug, title: current.title };
    }
  } catch {
    currentModule = null;
  }

  return (
    <div className="space-y-8">
      <section>
        <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
          Knowledge
        </p>
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">
          Base de conocimiento
        </h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          Conceptos del Capítulo 1. Leé para entender; practicá en el Path y con
          el Mentor.
        </p>
        {currentModule ? (
          <p className="mt-3 text-sm text-[var(--ink-muted)]">
            Estás en el Path:{" "}
            <Link
              href={`/app/path/${currentModule.slug}`}
              className="text-[var(--accent)] underline"
            >
              {currentModule.title}
            </Link>
          </p>
        ) : null}
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
        <ul className="grid gap-3 sm:grid-cols-2">
          {concepts.map((c) => (
            <li key={c.id}>
              <Link
                href={`/app/knowledge/${c.slug}`}
                className="block h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 hover:border-[var(--accent)]"
              >
                <h2 className="mb-1 font-medium">{c.title}</h2>
                <p className="text-sm text-[var(--ink-muted)]">{c.summary}</p>
                {c.module ? (
                  <p className="mt-3 text-xs text-[var(--accent)]">
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
