---
artifact:
  id: ADR-001
  type: Architecture Decision Record
  status: Accepted
  version: 1.1.0
  owner: CTO
  created: 2026-07-07
  revised: 2026-07-08
---

# ADR-001 — Independencia del provider de IA

## Status

Accepted

## Contexto

ZUZU depende de IA. Amarrarse a un solo provider es un riesgo estratégico.

## Decisión

Introducir una capa de abstracción de IA. El código de aplicación depende de capabilities, no de un SDK de vendor.

## Alternativas

- Integración directa con un vendor — rechazada (acoplamiento)
- Estrategia single-provider — rechazada (lock-in)

## Consecuencias

+ Flexibilidad, evolución de modelos  
− Un poco más de complejidad inicial  

## Relacionados

[PRODUCT_THESIS](../../00-constitution/PRODUCT_THESIS.md) — ADR-004 — ADR-007
