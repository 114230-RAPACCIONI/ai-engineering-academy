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

export function checklistSummary(items: ChecklistItem[]) {
  const done = items.filter((i) => i.done).length;
  return { done, total: items.length, percent: Math.round((done / items.length) * 100) };
}
