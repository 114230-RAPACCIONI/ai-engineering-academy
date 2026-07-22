"use client";

import { useActionState } from "react";
import {
  savePracticeProject,
  type ProjectActionResult,
} from "@/modules/projects/actions";

type ProjectFormProps = {
  project: {
    id: string;
    title: string;
    domain: string;
    problemStatement: string;
    scopeIn: string;
    scopeOut: string;
    nonGoals: string;
    successCriteria: string;
    status: string;
  };
};

const initial: ProjectActionResult | null = null;

export function PracticeProjectForm({ project }: ProjectFormProps) {
  const bound = savePracticeProject.bind(null, project.id);
  const [state, formAction, pending] = useActionState(bound, initial);

  return (
    <form action={formAction} className="flex max-w-2xl flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm">
        Título
        <input
          name="title"
          defaultValue={project.title}
          required
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Dominio (lo elegís vos)
        <input
          name="domain"
          defaultValue={project.domain}
          placeholder="Ej: gastos personales, hábitos, inventario chico…"
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Estado
        <select
          name="status"
          defaultValue={project.status}
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        >
          <option value="planning">Planning</option>
          <option value="active">Active</option>
          <option value="done">Done (Cap. 1)</option>
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Problem statement
        <textarea
          name="problemStatement"
          rows={4}
          defaultValue={project.problemStatement}
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Scope in
        <textarea
          name="scopeIn"
          rows={3}
          defaultValue={project.scopeIn}
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Scope out
        <textarea
          name="scopeOut"
          rows={3}
          defaultValue={project.scopeOut}
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Non-goals
        <textarea
          name="nonGoals"
          rows={3}
          defaultValue={project.nonGoals}
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Success criteria
        <textarea
          name="successCriteria"
          rows={3}
          defaultValue={project.successCriteria}
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
        />
      </label>

      {state?.ok ? (
        <p className="text-sm text-[var(--accent)]">Proyecto guardado.</p>
      ) : null}
      {state?.error ? (
        <p className="text-sm text-red-700">{state.error}</p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
        >
          {pending ? "Guardando…" : "Guardar"}
        </button>
        <a
          href={`/api/projects/${project.id}/export`}
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-sm"
        >
          Exportar ZIP
        </a>
      </div>
    </form>
  );
}
