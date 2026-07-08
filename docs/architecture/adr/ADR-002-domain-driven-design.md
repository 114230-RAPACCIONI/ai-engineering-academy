---
artifact:
  id: ADR-002
  type: Architecture Decision Record
  status: Accepted
  version: 1.1.0
  owner: CTO
  created: 2026-07-07
  revised: 2026-07-08
---

# ADR-002 — Enfoque Domain Driven Design

## Status

Accepted

## Contexto

ZUZU abarca learning, knowledge, practice projects y mentorship con IA. Una arquitectura feature-first acoplará todo.

## Decisión

Organizar alrededor de dominios de negocio:

`Identity` — `Learning` — `Knowledge` — `Projects` (práctica) — `AI Collaboration` — `Progress`

Vocabulario: **LearningPath / Module — no Course.**

## Alternativas

- Arquitectura monolítica por features — rechazada

## Consecuencias

+ Ownership claro, evolución  
− Requiere disciplina de módulos  

## Relacionados

[DOMAIN_MODEL](../DOMAIN_MODEL.md) — ADR-007
