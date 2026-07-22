/**
 * Cap. 4 — Construcción incremental con IA
 * Fuente canónica: CHAPTER_04_INCREMENTAL_BUILD_WITH_AI.md (+ puente CHAPTER_03 §9.4 / §14.2).
 */
export const chapter4Modules = [
  {
    slug: "4-1-spec-before-code",
    title: "4.1 — Spec antes del teclado",
    summary: "Releé REQUIREMENTS, DESIGN, ADRs e I1 antes de pedir código.",
    goal: "Arrancar I1 con el contrato claro — sin reinterpretar el objetivo.",
    context: "Capítulo 4 · Implement — Constitution del incremento.",
    expectedOutcome: "Checklist mental: FRs/ACs/ADRs/I1 a mano en la sesión.",
    feedback: "Si no podés decir qué ACs cerrás hoy, no abras el IDE todavía.",
    order: 1,
    body: `Cap. 3 definió I1. Cap. 4 lo construye.

Antes de prompt-first:
• REQUIREMENTS.md (FRs/ACs del slice)
• DESIGN.md + ADRs
• Plan de Incremento 1

El código vive fuera de ZUZU (Cursor/tu IDE). Acá registrás evidencia y criterio.

Mal: “implementá la app”.
Bien: “Implementá solo I1 según estos ACs; no toques I2.”`,
  },
  {
    slug: "4-2-workspace-outside",
    title: "4.2 — Workspace fuera de ZUZU",
    summary: "Repo local, stack del ADR, sin editor integrado en la plataforma.",
    goal: "Tener un lugar concreto donde vive I1 (fuera de esta app).",
    context: "Capítulo 4 · Entorno.",
    expectedOutcome: "Repo/carpeta lista según ADR de stack — sin secretos en git.",
    feedback: "ZUZU no es tu IDE. El Practice Project acá es bitácora + DoD.",
    order: 2,
    body: `FOUNDER_DECISIONS: sin editor integrado en el MVP.

Tu loop:
1. Spec en ZUZU / markdown exportado
2. Implementación en tu herramienta
3. Volvés a ZUZU a registrar avances, dudas al Mentor y validación de ACs

Preparate: .gitignore, no pegar API keys, README mínimo del repo de práctica.`,
  },
  {
    slug: "4-3-mentor-agreement",
    title: "4.3 — Mentor como colaborador, no autor",
    summary: "Reglas de sesión: vos dirigís; la IA propone bajo el spec.",
    goal: "Definir working agreement anti-Frankenstein para I1.",
    context: "Capítulo 4 · Mentor.",
    expectedOutcome: "Notas de acuerdo: scope de prompts, qué rechazás, cómo revisás.",
    feedback: "Si no revisás el diff, la IA es autora. Eso viola la tesis.",
    order: 3,
    body: `Working agreement sugerido:
• Pegá ACs + ADR relevantes en cada sesión
• Pedí un archivo/función a la vez, no “toda la app”
• Vos corrés, probás y decidís merge
• Si el output contradice non-goals o ADRs → rechazar

Prompt útil:
“Dado AC-001.1–3 y ADR-001, proponé el cambio mínimo. No agregues features de I2.”`,
  },
  {
    slug: "4-4-build-i1",
    title: "4.4 — Construir el slice I1",
    summary: "UI → lógica → persistencia del Incremento 1 — nada más.",
    goal: "Avanzar I1 vertical hasta poder demostrar el flujo.",
    context: "Capítulo 4 · Build.",
    expectedOutcome: "Flujo I1 usable localmente (aunque imperfecto).",
    feedback: "Vertical slice > capas horizontales sin valor de usuario.",
    order: 4,
    body: `I1 (definido en Cap. 3) debe atravesar el stack elegido en el ADR.

Disciplina:
• Un AC a la vez si hace falta
• No “mientras tanto” agregues I2
• Si el diseño no alcanza, volvé a Cap. 3 (ADR/DESIGN) — no parches silenciosos

Registrá en Practice Project qué partes ya existen y qué falta.`,
  },
  {
    slug: "4-5-review-ai-code",
    title: "4.5 — Revisar código generado",
    summary: "Diff vs spec: drift, complejidad, secretos, nombres.",
    goal: "Demostrar revisión humana del output de IA.",
    context: "Capítulo 4 · Review.",
    expectedOutcome: "Notas de review: qué aceptaste, qué reescribiste, por qué.",
    feedback: "Pegar sin leer es Cap. 1 Frankenstein en fase Build.",
    order: 5,
    body: `Checklist de review:
• ¿Cumple el AC pedido o inventó comportamiento?
• ¿Respeta ADRs (persistencia, capas)?
• ¿Hay secretos, logs de datos sensibles, deps innecesarias?
• ¿Podés explicar cada cambio en voz alta?

Si no podés explicarlo, no está listo — aunque “funcione”.`,
  },
  {
    slug: "4-6-validate-acs",
    title: "4.6 — Validar ACs de I1",
    summary: "Ejecutá Given/When/Then — evidencia sí/no.",
    goal: "Marcar ACs de I1 con evidencia observable.",
    context: "Capítulo 4 · Validate.",
    expectedOutcome: "Lista AC I1 con pass/fail y notas (DoD preview Cap. 3 §9.4).",
    feedback: "Sin ACs en verde, I1 no está cerrado — aunque haya mucho código.",
    order: 6,
    body: `DoD Incremento 1 (preview Cap. 3):
• ACs del slice verificados manualmente
• Persistencia tras reload (si aplica NFR)
• Sin filtrar datos sensibles por red si era non-goal/NFR
• Código revisado por vos
• Sin contradecir ADRs

Anotá fallos → fix → re-validar. No pases a I2 con ACs rojos.`,
  },
  {
    slug: "4-7-safe-ai-habits",
    title: "4.7 — Hábitos seguros con IA",
    summary: "Secretos, prompts con PII, dependencias — hilo DevSecOps.",
    goal: "Evitar leaks y deuda obvia en el primer incremento.",
    context: "Capítulo 4 · Security ligero.",
    expectedOutcome: "Checklist: keys fuera del repo, .env ignorado, deps conscientes.",
    feedback: "Velocidad sin higiene de secretos no es ingeniería.",
    order: 7,
    body: `Mínimo Cap. 4:
• API keys solo en env local / secret manager — nunca en chat público ni commit
• No pegues datos reales de usuarios en prompts
• Revisá package.json / deps que la IA agregó
• Si hay duda de licencia o supply chain, pausá

LEARNING_CURRICULUM: en Build aparecen revisiones, secretos y validación de IA.`,
  },
  {
    slug: "4-8-close-i1",
    title: "4.8 — Cerrar I1 antes de I2",
    summary: "Definition of Done del incremento — luego el siguiente slice.",
    goal: "Declarar I1 cerrado con evidencia, sin scope creep.",
    context: "Capítulo 4 · Cierre.",
    expectedOutcome: "I1 done; I2 explícitamente pendiente.",
    feedback: "Aburrido-predecible es el éxito del Cap. 3 bien hecho.",
    order: 8,
    body: `Cierre I1:
• ACs en verde
• Review hecha
• Notas de sesión / decisiones de implementación si cambiaron algo (¿hace falta ADR?)
• Export / bitácora actualizada en ZUZU

Solo entonces mirás I2. Si “casi” está — no está.`,
  },
  {
    slug: "4-practice",
    title: "Practice — Implementar I1",
    summary: "Evidencia de I1 fuera de ZUZU + bitácora acá.",
    goal: "Cerrar Definition of Done Cap. 4 para I1.",
    context: "Capítulo 4 · Practice Project.",
    expectedOutcome: "I1 validado, review documentada, sin V1 completa obligatoria.",
    feedback: "Cap. 4 = al menos I1. No es “terminar la app”.",
    order: 9,
    body: `Definition of Done — Capítulo 4 (I1):
• Workspace fuera de ZUZU según ADR
• I1 implementado como slice vertical
• ACs de I1 verificados (evidencia escrita)
• Review de código IA documentada
• Sin secretos en repo
• I2 no empezado (o explícitamente aparcado)

Estado Practice: Implementing → Done (Cap. 4) cuando I1 cierra.`,
  },
] as const;
