export type ChecklistItem = {
  id: string;
  label: string;
  done: boolean;
  href?: string;
};

type ProjectLike = {
  title: string;
  domain: string;
  problemStatement: string;
  scopeIn: string;
  scopeOut: string;
  nonGoals: string;
  successCriteria: string;
  status: string;
  functionalReqs?: string;
  nonFunctionalReqs?: string;
  acceptanceCriteria?: string;
  traceability?: string;
};

function hasText(value: string, min = 20) {
  return value.trim().length >= min;
}

/** Definition of Done — Capítulo 1 (MVP). */
export function buildChapter1Checklist(input: {
  project: ProjectLike;
  decisionsCount: number;
  pathPercent: number;
}): ChecklistItem[] {
  const { project, decisionsCount, pathPercent } = input;

  return [
    {
      id: "problem",
      label: "Problem statement (3–5 oraciones, sin solución disfrazada)",
      done: hasText(project.problemStatement, 40),
      href: "/app/projects",
    },
    {
      id: "domain",
      label: "Dominio elegido",
      done: hasText(project.domain, 3),
      href: "/app/projects",
    },
    {
      id: "scope-in",
      label: "Scope in acotado",
      done: hasText(project.scopeIn, 15),
      href: "/app/projects",
    },
    {
      id: "scope-out",
      label: "Scope out explícito",
      done: hasText(project.scopeOut, 10),
      href: "/app/projects",
    },
    {
      id: "non-goals",
      label: "Non-goals escritos",
      done: hasText(project.nonGoals, 10),
      href: "/app/projects",
    },
    {
      id: "success",
      label: "Success criteria medibles",
      done: hasText(project.successCriteria, 15),
      href: "/app/projects",
    },
    {
      id: "decisions",
      label: "Al menos 3 decisiones en el decision log",
      done: decisionsCount >= 3,
      href: "/app/mentor",
    },
    {
      id: "path",
      label: "Avance sustancial del Learning Path (≥50%)",
      done: pathPercent >= 50,
      href: "/app/path",
    },
    {
      id: "status",
      label: "Proyecto en Planning o Done (Cap. 1), sin código de producto",
      done: project.status === "planning" || project.status === "done",
      href: "/app/projects",
    },
  ];
}

/** Definition of Done — Capítulo 2 (CHAPTER_02 §10.3). */
export function buildChapter2Checklist(input: {
  project: ProjectLike;
  decisionsCount: number;
  pathPercent: number;
}): ChecklistItem[] {
  const { project, decisionsCount, pathPercent } = input;

  return [
    {
      id: "fr",
      label: "FRs Must escritos (trazables a scope)",
      done: hasText(project.functionalReqs ?? "", 40),
      href: "/app/projects",
    },
    {
      id: "nfr",
      label: "≥3 NFRs con métrica o verificación",
      done: hasText(project.nonFunctionalReqs ?? "", 40),
      href: "/app/projects",
    },
    {
      id: "ac",
      label: "ACs Given/When/Then por FR Must",
      done: hasText(project.acceptanceCriteria ?? "", 40),
      href: "/app/projects",
    },
    {
      id: "trace",
      label: "Matriz de trazabilidad Must",
      done: hasText(project.traceability ?? "", 20),
      href: "/app/projects",
    },
    {
      id: "decisions-ch2",
      label: "Decision log con evidencia (≥5 total sugiere Cap.2)",
      done: decisionsCount >= 5,
      href: "/app/mentor",
    },
    {
      id: "path-ch2",
      label: "Avance Path Cap. 2 (≥50%)",
      done: pathPercent >= 50,
      href: "/app/path/c/chapter-02",
    },
    {
      id: "status-req",
      label: "Estado Requirements (sin código de implementación)",
      done:
        project.status === "requirements" || project.status === "done",
      href: "/app/projects",
    },
  ];
}

export function checklistSummary(items: ChecklistItem[]) {
  const done = items.filter((i) => i.done).length;
  return { done, total: items.length, percent: Math.round((done / items.length) * 100) };
}
