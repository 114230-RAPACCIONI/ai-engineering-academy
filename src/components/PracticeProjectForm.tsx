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

const fieldClass =
  "rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2";

const initial: ProjectActionResult | null = null;

export function PracticeProjectForm({ project }: ProjectFormProps) {
  const bound = savePracticeProject.bind(null, project.id);
  const [state, formAction, pending] = useActionState(bound, initial);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <label className="flex flex-col gap-1 text-sm">
        Título
        <input
          name="title"
          defaultValue={project.title}
          required
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Dominio (lo elegís vos)
        <input
          name="domain"
          defaultValue={project.domain}
          placeholder="Ej: gastos personales, hábitos de estudio, inventario de cocina…"
          className={fieldClass}
        />
        <span className="text-xs text-[var(--ink-muted)]">
          No copies Gastos Hormiga: es solo referencia.
        </span>
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Estado
        <select name="status" defaultValue={project.status} className={fieldClass}>
          <option value="planning">Planning</option>
          <option value="active">Active</option>
          <option value="done">Done (Cap. 1)</option>
        </select>
      </label>

      <Field
        name="problemStatement"
        label="Problem statement"
        hint="Quién sufre el problema, qué falla hoy, por qué importa. Sin stack ni features."
        placeholder="Ej: Las personas pierden de vista gastos chicos repetidos y no saben en qué se va el dinero a fin de mes…"
        defaultValue={project.problemStatement}
        rows={4}
      />

      <Field
        name="scopeIn"
        label="Scope in (máx. 5 ítems)"
        hint="Solo lo que entra en V1."
        placeholder={"- Registrar un gasto\n- Listar gastos del mes\n- Ver total"}
        defaultValue={project.scopeIn}
        rows={4}
      />

      <Field
        name="scopeOut"
        label="Scope out"
        hint="Qué queda explícitamente para después."
        placeholder={"- Presupuestos\n- Integración bancaria\n- Multi-usuario"}
        defaultValue={project.scopeOut}
        rows={3}
      />

      <Field
        name="nonGoals"
        label="Non-goals"
        hint="Qué no es este proyecto, aunque suene tentador."
        placeholder={"- No es un banco\n- No es un ERP\n- No es una red social"}
        defaultValue={project.nonGoals}
        rows={3}
      />

      <Field
        name="successCriteria"
        label="Success criteria"
        hint="Cómo sabés que V1 está terminada (medible)."
        placeholder={"- Puedo registrar un gasto en <30s\n- Veo el total del mes actual"}
        defaultValue={project.successCriteria}
        rows={3}
      />

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

function Field({
  name,
  label,
  hint,
  placeholder,
  defaultValue,
  rows,
}: {
  name: string;
  label: string;
  hint: string;
  placeholder: string;
  defaultValue: string;
  rows: number;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label}
      <span className="text-xs text-[var(--ink-muted)]">{hint}</span>
      <textarea
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={fieldClass}
      />
    </label>
  );
}
