---
artifact:
  id: ART-012
  type: Architecture Decision Records Index
  status: Canonical
  version: 1.0.0
  owner: CTO
  revised: 2026-07-09
---

# Architecture Decision Records

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> **Un ADR = un archivo** bajo `docs/architecture/adr/`.
> Este archivo es solo un índice. El cuerpo monolítico anterior queda reemplazado.

---

## Formato

Cada ADR incluye: Contexto — Decisión — Alternativas — Consecuencias — Status

---

## Aceptados

| ADR | Título |
|-----|--------|
| [ADR-001](./adr/ADR-001-ai-provider-independence.md) | Independencia del provider de IA |
| [ADR-002](./adr/ADR-002-domain-driven-design.md) | Enfoque Domain Driven Design |
| [ADR-003](./adr/ADR-003-documentation-as-artifact.md) | Documentación como artefacto de producto |
| [ADR-004](./adr/ADR-004-ai-as-collaborator.md) | IA como colaborador (Mentor) |
| [ADR-005](./adr/ADR-005-spec-driven-development.md) | Spec Driven Development |
| [ADR-006](./adr/ADR-006-simplicity-first.md) | Simplicity First (Modular Monolith) |
| [ADR-007](./adr/ADR-007-product-identity-learning-first.md) | Identidad de producto: Learning First |
| [ADR-008](./adr/ADR-008-stack-selection.md) | Stack MVP: Next.js + TypeScript + Prisma |
| [ADR-009](./adr/ADR-009-ai-default-provider.md) | IA default: Anthropic (multi-provider) |

---

## Pendientes (escribir al decidir, no antes)

- Auth local / session (MVP 1–3 usuarios)
- PLATFORM_SPEC.md (spec unificado Implement)
- Contrato runtime Mentor (prompts por capítulo)
- Budget tokens IA

---

## Regla

Sin cambios silenciosos de identidad de producto o de estructura. Si es caro de revertir → escribir un ADR primero.
