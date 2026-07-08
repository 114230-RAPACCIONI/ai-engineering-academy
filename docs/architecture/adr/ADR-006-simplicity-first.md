---
artifact:
  id: ADR-006
  type: Architecture Decision Record
  status: Accepted
  version: 1.1.0
  owner: CTO
  created: 2026-07-07
  revised: 2026-07-08
---

# ADR-006 — Simplicity First (Modular Monolith)

## Status

Accepted

## Contexto

La complejidad prematura mata la velocidad de aprendizaje del equipo.

## Decisión

El MVP prioriza claridad, velocidad y aprendizaje. Usar un **modular monolith**.

**No** construir por default: microservices, API Gateway, event bus, multi-DB innecesaria, multi-region, Kubernetes.

## Consecuencias

+ Validación más rápida de la tesis de learning  
− Hay que resistir el teatro de arquitectura en docs y PRs  

## Relacionados

ADR-007 — [SYSTEM_ARCHITECTURE](../SYSTEM_ARCHITECTURE.md) — [REPO_CONSTITUTION](../../00-constitution/REPO_CONSTITUTION.md)
