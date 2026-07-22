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
    functionalReqs: string;
    nonFunctionalReqs: string;
    acceptanceCriteria: string;
    traceability: string;
    status: string;
  };
  showChapter2Fields?: boolean;
};

const fieldClass =
  "rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2";

const initial: ProjectActionResult | null = null;

export function PracticeProjectForm({
  project,
  showChapter2Fields = false,
}: ProjectFormProps) {
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
          placeholder="Ej: gastos personales, hábitos de estudio…"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Estado
        <select name="status" defaultValue={project.status} className={fieldClass}>
          <option value="planning">Planning (Cap. 1)</option>
          <option value="requirements">Requirements (Cap. 2)</option>
          <option value="active">Active</option>
          <option value="done">Done</option>
        </select>
      </label>

      <p className="text-xs font-medium tracking-wide text-[var(--ink-muted)] uppercase">
        Capítulo 1 — Scope
      </p>

      <Field
        name="problemStatement"
        label="Problem statement"
        hint="Quién sufre el problema, qué falla hoy, por qué importa."
        placeholder="Ej: Las personas pierden de vista gastos chicos…"
        defaultValue={project.problemStatement}
        rows={4}
      />
      <Field
        name="scopeIn"
        label="Scope in (máx. 5)"
        hint="Solo V1."
        placeholder={"- Registrar un gasto\n- Listar del mes"}
        defaultValue={project.scopeIn}
        rows={3}
      />
      <Field
        name="scopeOut"
        label="Scope out"
        hint="Para después."
        placeholder={"- Presupuestos\n- Bancos"}
        defaultValue={project.scopeOut}
        rows={2}
      />
      <Field
        name="nonGoals"
        label="Non-goals"
        hint="Qué no es este proyecto."
        placeholder={"- No es un banco"}
        defaultValue={project.nonGoals}
        rows={2}
      />
      <Field
        name="successCriteria"
        label="Success criteria"
        hint="Cómo sabés que V1 está terminada."
        placeholder={"- Registrar gasto en <30s"}
        defaultValue={project.successCriteria}
        rows={2}
      />

      {showChapter2Fields ? (
        <>
          <p className="pt-2 text-xs font-medium tracking-wide text-[var(--ink-muted)] uppercase">
            Capítulo 2 — Requirements
          </p>
          <Field
            name="functionalReqs"
            label="Requirements funcionales (FR)"
            hint="FR-00x · prioridad · origen scope · descripción sin stack."
            placeholder={"### FR-001 — …\n- Prioridad: Must\n- Origen scope: #1\n- Descripción: …"}
            defaultValue={project.functionalReqs}
            rows={6}
          />
          <Field
            name="nonFunctionalReqs"
            label="Requirements no funcionales (NFR)"
            hint="≥3 con métrica o verificación."
            placeholder={"### NFR-001 — Usabilidad\n- Métrica: …\n- Verificación: …"}
            defaultValue={project.nonFunctionalReqs}
            rows={5}
          />
          <Field
            name="acceptanceCriteria"
            label="Criterios de aceptación (AC)"
            hint="Given / When / Then por FR Must."
            placeholder={"### FR-001\n**AC-001.1** Given … When … Then …"}
            defaultValue={project.acceptanceCriteria}
            rows={6}
          />
          <Field
            name="traceability"
            label="Matriz de trazabilidad"
            hint="Scope → FR → AC → success criterion."
            placeholder={"| Scope | FR | AC | Success |\n| #1 | FR-001 | AC-001.1 | #1 |"}
            defaultValue={project.traceability}
            rows={4}
          />
        </>
      ) : (
        <>
          <input type="hidden" name="functionalReqs" value={project.functionalReqs} />
          <input
            type="hidden"
            name="nonFunctionalReqs"
            value={project.nonFunctionalReqs}
          />
          <input
            type="hidden"
            name="acceptanceCriteria"
            value={project.acceptanceCriteria}
          />
          <input type="hidden" name="traceability" value={project.traceability} />
        </>
      )}

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
