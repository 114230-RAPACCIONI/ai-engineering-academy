/** Rúbrica Capítulo 1 — docs/knowledge/curriculum/chapters/CHAPTER_01 §8 */
export const CAPABILITY_CRITERIA = [
  {
    key: "clarityProblem" as const,
    label: "Claridad del problema",
    hint1: "Solo menciona tecnología",
    hint3: "Problem statement coherente",
    hint5: "Statement resiste preguntas difíciles",
  },
  {
    key: "scope" as const,
    label: "Scope",
    hint1: "Infinito o ausente",
    hint3: "in/out/non-goals presentes",
    hint5: "Scope priorizado; non-goals defienden foco",
  },
  {
    key: "decisions" as const,
    label: "Decisiones",
    hint1: "Ninguna documentada",
    hint3: "≥ 3 con razón",
    hint5: "Alternativas y trade-offs explícitos",
  },
  {
    key: "aiUse" as const,
    label: "Uso de IA",
    hint1: "Codegen / copy-paste",
    hint3: "Preguntas de planificación",
    hint5: "Itera artefactos con validación crítica",
  },
  {
    key: "antiFrankenstein" as const,
    label: "Anti-Frankenstein",
    hint1: "No reconoce el patrón",
    hint3: "Identifica riesgos propios",
    hint5: "Cambia hábitos concretos declarados",
  },
] as const;

export type CriterionKey = (typeof CAPABILITY_CRITERIA)[number]["key"];

export function averageScore(scores: Record<CriterionKey, number>) {
  const values = CAPABILITY_CRITERIA.map((c) => scores[c.key]);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const hasOne = values.some((v) => v === 1);
  const passes = avg >= 3 && !hasOne;
  return { avg: Math.round(avg * 10) / 10, passes, hasOne };
}
