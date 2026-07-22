export type MentorPrompt = {
  id: string;
  label: string;
  text: string;
};

const DEFAULT_PROMPTS: MentorPrompt[] = [
  {
    id: "hide-solution",
    label: "¿Esconde una solución?",
    text: "Leé mi problem statement y decime si esconde una solución o un stack. Señalá ambigüedades concretas.",
  },
  {
    id: "challenge-scope",
    label: "Desafiar scope",
    text: "Revisá mi scope in / out / non-goals. ¿Qué está inflado o poco claro para un V1?",
  },
  {
    id: "decision-gaps",
    label: "Decisiones faltantes",
    text: "Mirando mi decision log, ¿qué decisiones importantes todavía no tomé para el Capítulo 1?",
  },
];

const BY_MODULE: Record<string, MentorPrompt[]> = {
  "1-1-frankenstein": [
    {
      id: "frankenstein-example",
      label: "Mi Frankenstein",
      text: "Te cuento un proyecto que se me fue de las manos. Ayudame a nombrar dónde se rompió el hilo, sin proponerme un stack.",
    },
    {
      id: "ai-worsens",
      label: "Por qué la IA empeora",
      text: "Explicame con un ejemplo por qué pedir código a la IA sin scope produce un Frankenstein.",
    },
  ],
  "1-2-problem-statement": [
    {
      id: "hide-solution",
      label: "¿Esconde una solución?",
      text: "Este es mi problem statement:\n\n[pegá acá]\n\n¿Esconde una solución? ¿Qué le falta para ser validable?",
    },
    {
      id: "who-suffers",
      label: "¿Quién sufre?",
      text: "Ayudame a formular quién sufre el problema y qué falla hoy, sin listar features.",
    },
  ],
  "1-3-scope": [
    {
      id: "cut-scope",
      label: "Cortar a 5",
      text: "Tengo demasiadas ideas. Ayudame a dejar Scope in en máximo 5 ítems y mover el resto a out/non-goals.",
    },
    {
      id: "non-goals",
      label: "Non-goals flojos",
      text: "Revisá mis non-goals. ¿Cuáles son de verdad y cuáles son scope out disfrazado?",
    },
  ],
  "1-4-artifacts": [
    {
      id: "decision-quality",
      label: "Calidad de decisiones",
      text: "Estas son mis decisiones:\n\n[pegá acá]\n\n¿Falta la razón? ¿Hay contradicciones?",
    },
    {
      id: "minimum-spec",
      label: "Spec mínimo",
      text: "¿Qué debería tener sí o sí mi PRACTICE_PROJECT.md antes de cerrar el Capítulo 1?",
    },
  ],
  "1-5-mentor-planning": [
    {
      id: "good-vs-bad",
      label: "Buen vs mal prompt",
      text: "Compará este mal prompt: “generame el proyecto completo” con uno bueno de clarificación. No escribas código.",
    },
    {
      id: "keep-thread",
      label: "No perder el hilo",
      text: "¿Qué contexto debo pegarte al inicio de cada sesión para no reinterpretar el objetivo?",
    },
  ],
  "1-practice": [
    {
      id: "dod-review",
      label: "Revisar DoD",
      text: "Voy a cerrar el Capítulo 1. Preguntame uno por uno los criterios del Definition of Done y desafiá evidencias flojas.",
    },
    {
      id: "export-ready",
      label: "¿Listo para exportar?",
      text: "Según lo que sabés de mi Practice Project y decision log, ¿estoy listo para exportar el ZIP o qué falta?",
    },
  ],
  "2-1-scope-to-reqs": [
    {
      id: "scope-gaps",
      label: "Huecos scope→FR",
      text: "Este es mi scope in. ¿Qué ítems no tienen todavía un FR claro?\n\n[pegá scope]",
    },
  ],
  "2-2-functional-reqs": [
    {
      id: "fr-stack",
      label: "¿Hay stack escondido?",
      text: "Revisá mis FRs y señalá cualquier tecnología o UI prematura:\n\n[pegá FRs]",
    },
  ],
  "2-4-acceptance": [
    {
      id: "ac-subjective",
      label: "ACs subjetivos",
      text: "¿Cuáles de estos ACs no son observables Given/When/Then?\n\n[pegá ACs]",
    },
  ],
  "2-6-traceability": [
    {
      id: "orphan-fr",
      label: "FRs huérfanos",
      text: "Compará scope vs FRs. ¿Hay FRs sin origen en scope (creep)?",
    },
  ],
  "2-8-ai-requirements": [
    {
      id: "no-invent",
      label: "No inventes producto",
      text: "Revisá mi borrador de requirements. Solo señalá ambigüedades, contradicciones y creep. No agregues features nuevas.",
    },
  ],
  "2-practice": [
    {
      id: "dod-ch2",
      label: "DoD Cap. 2",
      text: "Recorré conmigo el Definition of Done del Capítulo 2 y desafiá evidencias flojas. Sin pedirme código.",
    },
  ],
  "3-2-minimal-vs-enterprise": [
    {
      id: "over-eng",
      label: "¿Over-engineering?",
      text: "Revisá este diseño y señalá capas o servicios que no exige ningún FR/NFR Must:\n\n[pegá diseño]",
    },
  ],
  "3-7-adrs": [
    {
      id: "adr-alts",
      label: "Alternativas flojas",
      text: "En este ADR, ¿las alternativas son reales o strawman? ¿Faltan consecuencias?\n\n[pegá ADR]",
    },
  ],
  "3-8-increment-1": [
    {
      id: "i1-scope",
      label: "I1 demasiado grande",
      text: "Este es mi I1. ¿Es un vertical slice o metí I2 disfrazado?\n\n[pegá plan I1]",
    },
  ],
  "3-practice": [
    {
      id: "dod-ch3",
      label: "DoD Cap. 3",
      text: "Recorré el DoD Cap. 3 (diseño, ADRs, I1). No me pidas implementar todavía.",
    },
  ],
  "4-1-spec-before-code": [
    {
      id: "session-contract",
      label: "Contrato de sesión",
      text: "Voy a abrir el IDE. Ayudame a listar qué FRs/ACs/ADRs debo pegar para no reinterpretar I1. Sin generar código.",
    },
  ],
  "4-3-mentor-agreement": [
    {
      id: "working-agreement",
      label: "Working agreement",
      text: "Proponé reglas de sesión anti-Frankenstein para I1 (vos preguntás/revisás; yo no te dejo ser autor del producto).",
    },
  ],
  "4-5-review-ai-code": [
    {
      id: "review-diff",
      label: "Revisar diff",
      text: "Te resumo un cambio que generó la IA. Señalá drift vs ACs/ADRs y qué reescribiría. No reescribas el código completo:\n\n[descripción]",
    },
  ],
  "4-6-validate-acs": [
    {
      id: "ac-evidence",
      label: "Evidencia floja",
      text: "Estos son mis resultados de ACs I1. ¿Cuáles no son observables o faltan?\n\n[pegá pass/fail]",
    },
  ],
  "4-practice": [
    {
      id: "dod-ch4",
      label: "DoD Cap. 4",
      text: "Recorré el DoD Cap. 4 para I1 (bitácora, ACs, review, sin I2). Desafiá evidencias flojas.",
    },
  ],
};

export function promptsForModule(moduleSlug?: string | null): MentorPrompt[] {
  if (moduleSlug && BY_MODULE[moduleSlug]) {
    return [...BY_MODULE[moduleSlug], ...DEFAULT_PROMPTS.slice(0, 1)];
  }
  return DEFAULT_PROMPTS;
}
