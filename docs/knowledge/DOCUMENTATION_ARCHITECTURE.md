---
artifact:
  id: ART-037
  type: Documentation Architecture
  status: Canonical
  version: 0.3.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - documentation
    - knowledge
    - architecture
---

# Documentation Architecture

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md) — [REPO_CONSTITUTION.md](../00-constitution/REPO_CONSTITUTION.md)
>
> **Idioma:** prosa en español. Nombres de archivo y términos del oficio (MVP, ADR, Mentor, stack, feature…) en inglés cuando son vocabulario técnico.

---

## Propósito

Definir cómo ZUZU organiza la documentación del repositorio **después** de la recuperación de coherencia.

Objetivo: ≤ ~20 docs Canonical antes de PMF. Un concepto → un path. La aspiración nunca se disfraza de requisito.

---

## Vocabulario de status

| Status | Significado |
|--------|---------|
| `Canonical` | Vinculante / source of truth aprobado |
| `Draft` | Trabajo activo; puede cambiar; no es ley |
| `Future` | Solo bajo `docs/99-future/` |
| `Archived` | Solo bajo `docs/90-archive/` |

`version: 1.0.0` solo cuando es `Canonical` y está aprobado.

---

## Árbol activo

```
README.md
START_HERE.md              ← punto de entrada SDD (Fase 0)
docs/00-constitution/
  PRODUCT_THESIS.md          Canonical
  REPO_CONSTITUTION.md       Canonical
  CONTENT_STANDARDS.md       Canonical — ley del contenido de aprendizaje
  FOUNDER_DECISIONS.md       Canonical
docs/product/
  PRODUCT_VISION.md          Canonical
  USER_JOURNEY.md            Canonical
  MVP_SCOPE.md               Canonical
  PRODUCT_EXPERIENCE_VISION.md
  INFORMATION_ARCHITECTURE.md
  AI_PRODUCT_EXPERIENCE.md
  USER_PERSONAS.md
  USER_MENTAL_MODEL.md
  PRODUCT_ROADMAP.md
  PRODUCT_REQUIREMENTS.md    stub → archive
  FEATURE_SPECIFICATIONS.md  stub → archive
  USER_STORIES.md            stub → archive
docs/architecture/
  DOMAIN_MODEL.md            Canonical
  SYSTEM_ARCHITECTURE.md
  BACKEND_ARCHITECTURE.md
  FRONTEND_ARCHITECTURE.md
  DATA_MODEL.md
  DATABASE_ARCHITECTURE.md
  API_DESIGN.md
  INFRASTRUCTURE_ARCHITECTURE.md
  COST_OPTIMIZATION_ARCHITECTURE.md
  ADR.md                     índice
  adr/ADR-001 … ADR-007      Accepted
docs/ai/
  AI_ARCHITECTURE.md
  AGENT_MODEL.md             MVP = Mentor only
  CONTEXT_ENGINEERING.md
  MEMORY_ARCHITECTURE.md
  AI_GOVERNANCE_MODEL.md
  AI_EVALUATION_FRAMEWORK.md
  AI_TECHNICAL_ROADMAP.md
docs/security/
  SECURITY.md                Canonical
  SECURITY_MODEL.md          stub → archive
  SECURITY_ARCHITECTURE.md   stub → archive
docs/engineering/
  ENGINEERING_HANDBOOK.md    Canonical
  ENGINEERING_GOVERNANCE_ARCHITECTURE.md  stub → archive
  TECHNICAL_DEBT_MANAGEMENT.md
docs/quality/
  TESTING_ARCHITECTURE.md
docs/knowledge/
  DOCUMENTATION_ARCHITECTURE.md   ← este archivo
  curriculum/
    LEARNING_CURRICULUM.md       Draft — mapa del viaje
    chapters/
      CHAPTER_01_FROM_IDEA_TO_SCOPE.md   Draft — MVP Capítulo 1
      CHAPTER_02_REQUIREMENTS_BEFORE_CODE.md   Draft — Capítulo 2
      CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md   Draft — Capítulo 3
    examples/
      README.md                        Walkthroughs ilustrativos (no ley)
      GASTOS_HORMIGA_CH03_WALKTHROUGH.md
docs/90-archive/             NO canónico
docs/99-future/              NO son requisitos
docs/project/
  PROJECT_CONSTITUTION.md    Narrativa de compañía — la Tesis prevalece
```

---

## Orden de autoridad

1. `PRODUCT_THESIS.md`
2. `REPO_CONSTITUTION.md`
3. `CONTENT_STANDARDS.md` (contenido de aprendizaje / curriculum)
4. ADRs aceptados (`docs/architecture/adr/`)
5. Anclas canónicas de producto (Vision, Journey, Domain, MVP, Security, Handbook)
6. Otros Drafts
7. Archive / Future — nunca autoritativos

---

## Reglas

1. No nuevo `*_ARCHITECTURE.md` sin necesidad de producto y check de Tesis.
2. No citar Archive/Future como “vamos a construir”.
3. Header de regla de oro en todo doc de producto.
4. Markdown roto = no shippable.
5. Preferir Merge antes que otro doc hermano.
6. Explicaciones en español; términos técnicos en inglés cuando corresponda.
7. Contenido de aprendizaje: obedecer [CONTENT_STANDARDS.md](../00-constitution/CONTENT_STANDARDS.md).

---

## Merges completados (2026-07-08)

| Destino | Absorbió |
|--------|----------|
| `MVP_SCOPE.md` | REQUIREMENTS + FEATURES + STORIES |
| `SECURITY.md` | MODEL + ARCHITECTURE |
| `adr/ADR-001…007` | Split del cuerpo monolítico de ADR |
| `ENGINEERING_HANDBOOK.md` | Esenciales de Governance |
| `PRODUCT_ROADMAP.md` | Rewrite de horizontes — Learning First |
| `INFRASTRUCTURE_ARCHITECTURE.md` | Reducido a MVP boring host |

## Todavía pendiente

| Destino | Acción |
|--------|--------|
| `PROJECT_CONSTITUTION.md` | Banner hecho; rewrite completo después |
| Auth / Stack / Mentor runtime ADRs | Escribir al decidir construir |
| Bodies largos restantes (AI Eval, Cost, Database) | Refactor incremental en español |
