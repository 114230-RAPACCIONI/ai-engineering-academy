---
artifact:
  id: ADR-007
  type: Architecture Decision Record
  status: Accepted
  version: 1.1.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-08
  tags:
    - adr
    - product-identity
    - learning
---

# ADR-007 — Identidad de producto: Learning First

## Status

Accepted

---

## Contexto

El drift documental (2026-07-08) introdujo una segunda identidad: Project / work OS / AI companion de entrega.

Eso contradijo la tesis educativa y el ADR-006 (Simplicity First).

---

## Decisión

**Learning es el producto.**

Definición vinculante:

> Formar ingenieros capaces de pensar, diseñar y construir software colaborando con Inteligencia Artificial, independientemente del stack tecnológico.

- Los projects son el **entorno de aprendizaje** (práctica), no un Project Operating System.
- La IA es el **Mentor** (MVP = un mentor), no una plataforma multi-agent de delivery.
- Learner + Learning Path son el sol del dominio; Project orbita a su alrededor.
- Los documentos que afirman “Everything revolves around the Project” están mal salvo que se reformulen.

Artefactos vinculantes:

- `docs/00-constitution/PRODUCT_THESIS.md`
- `docs/00-constitution/REPO_CONSTITUTION.md`

---

## Alternativas consideradas

### A. Convertirse en Project OS / workbench companion

Rechazada. Compite con Cursor/Linear/Notion sin wedge de aprendizaje; abandona la tesis.

### B. Identidad dual (academia + OS)

Rechazada. Garantiza ejecución mediocre en ambos.

### C. Learning First (elegida)

Aceptada.

---

## Consecuencias

Positivas:

- Priorización clara vía regla de oro.
- Archive de docs Project OS / enterprise justificado.
- Mentorship y curriculum son la superficie de producto.

Negativas:

- Hay que resistir features atractivas de work-OS.
- Algunos docs del 2026-07-08 requieren refactor continuo.

---

## Relacionados

- ADR-004 AI As Collaborator
- ADR-006 Simplicity First
- PRODUCT_THESIS
- USER_JOURNEY
- DOMAIN_MODEL
