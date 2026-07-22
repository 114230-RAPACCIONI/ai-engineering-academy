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
};

export function promptsForModule(moduleSlug?: string | null): MentorPrompt[] {
  if (moduleSlug && BY_MODULE[moduleSlug]) {
    return [...BY_MODULE[moduleSlug], ...DEFAULT_PROMPTS.slice(0, 1)];
  }
  return DEFAULT_PROMPTS;
}
