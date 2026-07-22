export type CriterionDef = {
  key:
    | "clarityProblem"
    | "scope"
    | "decisions"
    | "aiUse"
    | "antiFrankenstein";
  label: string;
  hint1: string;
  hint3: string;
  hint5: string;
};

/** Cap. 1 — CHAPTER_01 §8 */
export const CAPABILITY_CRITERIA_CH1: CriterionDef[] = [
  {
    key: "clarityProblem",
    label: "Claridad del problema",
    hint1: "Solo menciona tecnología",
    hint3: "Problem statement coherente",
    hint5: "Statement resiste preguntas difíciles",
  },
  {
    key: "scope",
    label: "Scope",
    hint1: "Infinito o ausente",
    hint3: "in/out/non-goals presentes",
    hint5: "Scope priorizado; non-goals defienden foco",
  },
  {
    key: "decisions",
    label: "Decisiones",
    hint1: "Ninguna documentada",
    hint3: "≥ 3 con razón",
    hint5: "Alternativas y trade-offs explícitos",
  },
  {
    key: "aiUse",
    label: "Uso de IA",
    hint1: "Codegen / copy-paste",
    hint3: "Preguntas de planificación",
    hint5: "Itera artefactos con validación crítica",
  },
  {
    key: "antiFrankenstein",
    label: "Anti-Frankenstein",
    hint1: "No reconoce el patrón",
    hint3: "Identifica riesgos propios",
    hint5: "Cambia hábitos concretos declarados",
  },
];

/** Cap. 2 — CHAPTER_02 §11 (mapeado a los mismos campos de storage) */
export const CAPABILITY_CRITERIA_CH2: CriterionDef[] = [
  {
    key: "clarityProblem",
    label: "FRs verificables",
    hint1: "Vagos o con stack",
    hint3: "FR Must claros",
    hint5: "Sin ambigüedad; casos límite anticipados",
  },
  {
    key: "scope",
    label: "ACs testeables",
    hint1: "Ausentes o subjetivos",
    hint3: "Happy path + 1 inválido por FR Must",
    hint5: "Cobertura límite; sin implementación en AC",
  },
  {
    key: "decisions",
    label: "NFRs",
    hint1: "Ausentes",
    hint3: "3+ con alguna métrica",
    hint5: "Ligados a success criteria y seguridad Cap.1",
  },
  {
    key: "aiUse",
    label: "Trazabilidad",
    hint1: "No hay",
    hint3: "Scope → FR → AC",
    hint5: "+ success criteria y decisiones",
  },
  {
    key: "antiFrankenstein",
    label: "Uso de IA",
    hint1: "Pegó lista de FRs",
    hint3: "Iteró con prompts de revisión",
    hint5: "Detectó y corrigió creep/contradicciones",
  },
];

/** Cap. 3 — CHAPTER_03 §12 */
export const CAPABILITY_CRITERIA_CH3: CriterionDef[] = [
  {
    key: "clarityProblem",
    label: "Alineación a requirements",
    hint1: "Diseño ignora FR",
    hint3: "Cubre FR Must",
    hint5: "Trazabilidad FR → componente",
  },
  {
    key: "scope",
    label: "Trade-offs",
    hint1: "Stack sin razón",
    hint3: "ADR con alternativas",
    hint5: "Consecuencias honestas",
  },
  {
    key: "decisions",
    label: "Simplicidad",
    hint1: "Over-engineering",
    hint3: "Monolito modular claro",
    hint5: "Mínimo que cumple NFR",
  },
  {
    key: "aiUse",
    label: "Incremento 1",
    hint1: "Ausente o gigante",
    hint3: "Vertical slice definido",
    hint5: "ACs + DoD preview Cap.4",
  },
  {
    key: "antiFrankenstein",
    label: "Uso de IA",
    hint1: '"Codeá todo"',
    hint3: "Revisión de componentes/ADR",
    hint5: "Corrigió complejidad innecesaria",
  },
];

export function criteriaForChapter(chapter: number): CriterionDef[] {
  if (chapter === 2) return CAPABILITY_CRITERIA_CH2;
  if (chapter === 3) return CAPABILITY_CRITERIA_CH3;
  return CAPABILITY_CRITERIA_CH1;
}

/** @deprecated usar criteriaForChapter(1) */
export const CAPABILITY_CRITERIA = CAPABILITY_CRITERIA_CH1;

export type CriterionKey = CriterionDef["key"];

export function averageScore(scores: Record<CriterionKey, number>) {
  const values = CAPABILITY_CRITERIA_CH1.map((c) => scores[c.key]);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const hasOne = values.some((v) => v === 1);
  const passes = avg >= 3 && !hasOne;
  return { avg: Math.round(avg * 10) / 10, passes, hasOne };
}
