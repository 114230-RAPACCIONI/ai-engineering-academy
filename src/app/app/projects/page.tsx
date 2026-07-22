import { redirect } from "next/navigation";
import { PracticeProjectForm } from "@/components/PracticeProjectForm";
import { auth } from "@/modules/identity/auth";
import { getOrCreateProject } from "@/modules/projects/service";

export default async function ProjectsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const project = await getOrCreateProject(session.user.id);

  return (
    <div className="space-y-6">
      <section>
        <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
          Practice Project
        </p>
        <h1 className="mb-2 text-3xl font-semibold">Laboratorio de práctica</h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          Fase Planning del Capítulo 1. El dominio lo elegís vos. Todavía no es
          momento de código de producto.
        </p>
      </section>
      <PracticeProjectForm project={project} />
    </div>
  );
}
