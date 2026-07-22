import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ModuleActions } from "@/components/ModuleActions";
import { auth } from "@/modules/identity/auth";
import { getModuleForUser } from "@/modules/learning/journey";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ModulePage({ params }: PageProps) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { slug } = await params;
  const data = await getModuleForUser(session.user.id, slug);
  if (!data) notFound();

  const { module: mod, progress } = data;
  const status = progress?.status ?? "not_started";

  return (
    <article className="max-w-2xl space-y-6">
      <Link href="/app/path" className="text-sm text-[var(--ink-muted)]">
        ← Learning Path
      </Link>
      <header>
        <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
          {mod.context}
        </p>
        <h1 className="mb-3 text-3xl font-semibold">{mod.title}</h1>
        <p className="text-[var(--ink-muted)]">{mod.summary}</p>
      </header>

      <dl className="space-y-4 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 text-sm">
        <div>
          <dt className="mb-1 font-medium">Goal</dt>
          <dd className="text-[var(--ink-muted)]">{mod.goal}</dd>
        </div>
        <div>
          <dt className="mb-1 font-medium">Resultado esperado</dt>
          <dd className="text-[var(--ink-muted)]">{mod.expectedOutcome}</dd>
        </div>
      </dl>

      <p className="text-sm text-[var(--ink-muted)]">
        Trabajá el concepto con el Mentor o en tu Practice Project. Marcá el
        módulo cuando demuestres el resultado — no cuando solo lo leíste.
      </p>

      <ModuleActions moduleId={mod.id} status={status} />
    </article>
  );
}
