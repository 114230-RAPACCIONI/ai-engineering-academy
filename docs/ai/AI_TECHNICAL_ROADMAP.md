---
artifact:
  id: ART-024
  type: AI Technical Roadmap
  status: Draft
  version: 0.3.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - artificial-intelligence
    - roadmap
    - learning
---

# Roadmap técnico de IA

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md) — [ADR-007](../architecture/adr/ADR-007-product-identity-learning-first.md)
>
> Validar un Mentor antes de cualquier narrativa multi-agent o de autonomy.
> Las fases 4–5 siguientes son **Future** (ver `docs/99-future/`) — no son compromisos.

---

## Filosofía

```text
Validar primero → Escalar después → Optimizar al final
```

Cada etapa debe mejorar la **capability del learner**, no solo la velocidad de shipping.

---

## Fase 1 — Learning asistido por IA (corto plazo)

**Objetivo:** el Mentor acompaña el aprendizaje en el Path.

Capabilities: chat contextual — explicación de conceptos — asistencia educativa — ejemplos.

Foco: utilidad, interacción, valor pedagógico.

---

## Fase 2 — Mentor personalizado (objetivo MVP)

**Objetivo:** un Mentor adaptado al learner.

Capabilities: memoria básica — perfil — Progress — recomendaciones ligeras.

Foco: continuidad y personalización **sin** enjambres de agentes.

**MVP = esenciales de Fase 1 + Fase 2.**

```text
Un Learner — Un Goal — Un Mentor
```

---

## Fase 3 — Mentor en Practice Projects (post-MVP)

**Objetivo:** el Mentor hace scaffolding de diseño/revisión dentro de Practice Projects (pedagogía, no delivery OS).

Capabilities: preguntas sobre requisitos — exploración de trade-offs — revisión de artifacts — prompts de documentación.

Foco: colaboración humano + Mentor en la práctica — sigue siendo **un** agente.

---

## Solo Future (pensamiento en cuarentena)

| Fase anterior | Estado | Regla |
|---------------|--------|-------|
| Flotas multi-agent (Product / Arch / Dev / QA / Security) | Future | Solo si la Golden Rule lo exige y el Mentor está validado |
| Workflows de ingeniería autónomos | Future | Autonomy nunca es default; learning safety primero |

No programar esto en roadmaps de producto activos hasta que las métricas de Capability del Mentor aprueben.

---

## Capabilities de IA en el MVP (explícitas)

Incluye:

- Chat del Mentor ligado a contexto Path + Practice
- Explicar / preguntar / guiar
- Memoria básica del learner
- Sin tools de side-effect (o deny-by-default)

Excluye:

- Orquestación multi-agent
- Pipelines de coding autónomos
- “Modes” de producto como agentes separados
- Builder-as-codegen sin pedagogía

Ver [MVP_SCOPE.md](../product/MVP_SCOPE.md) — [AI_PRODUCT_EXPERIENCE.md](../product/AI_PRODUCT_EXPERIENCE.md).

---

## Éxito de este roadmap

No es “enviamos agentes”.

**Los learners mejoran en la Capability rubric y vuelven al Path.**

---

## Relacionados

- [AI_ARCHITECTURE](./AI_ARCHITECTURE.md)
- [AGENT_MODEL](./AGENT_MODEL.md)
- [AI_EVALUATION_FRAMEWORK](./AI_EVALUATION_FRAMEWORK.md)
- [SECURITY](../security/SECURITY.md)
