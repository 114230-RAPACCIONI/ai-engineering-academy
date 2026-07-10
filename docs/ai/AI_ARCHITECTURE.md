---
artifact:
  id: ART-016
  type: AI Architecture
  status: Draft
  version: 0.1.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  initiative: INIT-001
  tags:
    - artificial-intelligence
    - agents
    - architecture
---

# AI Architecture

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md) — [ADR-007](../architecture/adr/ADR-007-product-identity-learning-first.md)
>
> Runtime del MVP: **un Mentor** al servicio del Learning Path + Practice Project.
> Fleets multi-agent y workflows autónomos **no** son requisitos del MVP.

---

# Introduction

Este documento define la arquitectura de inteligencia artificial de Project ZUZU.

El objetivo es establecer cómo la IA participa dentro del sistema:

- cómo interactúa con learners;
- cómo utiliza conocimiento;
- cómo mantiene contexto;
- cómo evoluciona **sin abandonar Learning First**.

---

# AI Philosophy

Project ZUZU no busca reemplazar al ingeniero.

Busca un entorno donde humanos e IA colaboren para **pensar, diseñar y construir** mejor — independientemente del stack.

La IA debe actuar como **Mentor**:

- enseña;
- pregunta;
- desafía;
- acompaña la práctica.

No debe actuar como code generator que elimina el criterio.
- asistente.

---

# Principio central

La IA no debe ser utilizada para responder más rápido.

Debe utilizarse para pensar mejor.

---

# AI System Overview

Arquitectura conceptual — **una sola superficie de IA**, no un orquestador multi-agente:

```
        USER
          |
   ZUZU APPLICATION
          |
        MENTOR  ←── Context (Path + Practice + Knowledge)
          |     ←── Memory (progreso del learner)
          |
    Model Providers
```

El Mentor es el único punto de entrada de IA en el MVP. No hay una capa de orquestación separada que reparta trabajo entre varios agentes — el detalle de qué contexto lee, con qué permisos y qué memoria usa está descripto en [AGENT_MODEL.md](./AGENT_MODEL.md), que es el documento canónico sobre el Mentor. Este documento describe el resto del pipeline (contexto, conocimiento, memoria, tools, evaluación) que alimenta a esa única entidad.

---

# Responsibilities del runtime de IA

El runtime del MVP debe manejar:

- el Mentor (única superficie de producto — ver [AGENT_MODEL.md](./AGENT_MODEL.md));
- recuperación de contexto (Path + Practice + Knowledge);
- permisos;
- memoria;
- tools (deny-by-default);
- evaluación pedagógica.

**No** existe un "AI Orchestrator" que coordine múltiples agentes: no hay más de una entidad a coordinar en el MVP. Si en el futuro el Mentor necesitara delegar en especialistas, esa decisión requiere un ADR — no es una extensión implícita de este documento (ver [PRODUCT_THESIS — jerarquía no negociable](../00-constitution/PRODUCT_THESIS.md): "Un Mentor de IA > plataformas multi-agent").

---

# Context Architecture

El contexto es uno de los elementos más importantes.

La calidad de una IA depende de la calidad del contexto.

---

# Context Sources

Un agente puede recibir:


User Profile

Learning Progress

Current Project

Artifacts

Knowledge Base

Conversation History


---

# Context Flow


User Request

?

Context Resolver

?

Permission Check

?

Context Assembly

?

Agent

?

Model


---

# Knowledge Integration

La IA no debe depender solamente del conocimiento general del modelo.

Debe utilizar conocimiento propio de ZUZU.

---

# Knowledge Architecture


Knowledge Base

?

Retrieval

?

Relevant Context

?

Agent


---

# Memory Architecture

La memoria debe dividirse.

---

# Short Term Memory

Información temporal:

- conversación actual;
- contexto inmediato.

---

# Long Term Memory

Información persistente:

- preferencias;
- progreso;
- proyectos;
- aprendizajes.

---

# Memory Principle

Guardar información no significa recordar todo.

La memoria debe ser:

- útil;
- segura;
- controlada.

---

# Tool Integration

Los agentes podrán utilizar herramientas.

Ejemplos:

- repositorios;
- análisis de código;
- documentación;
- ejecución controlada.

---

# Tool Security

Toda herramienta debe tener:

- permisos;
- límites;
- auditoría.

---

# AI Evaluation

Una IA no se mide solamente por respuestas correctas.

También por:

- utilidad;
- coherencia;
- seguridad;
- alineación.

---

# AI Safety Principles

## Principle 1

La IA debe explicar sus recomendaciones.

---

## Principle 2

La IA debe reconocer incertidumbre.

---

## Principle 3

La IA no debe tomar decisiones críticas sin validación.

---

## Principle 4

El usuario mantiene control final.

---

# Qué queda fuera de este documento

Equipos de agentes, especialización multi-agente y orquestación entre agentes no son parte de esta arquitectura mientras el MVP tenga un único Mentor. Cualquier evolución en esa dirección requiere primero evidencia de capability del Mentor único y un ADR explícito — no es una extensión implícita de "Future Evolution" (ver [AGENT_MODEL §6](./AGENT_MODEL.md)).

---

# Declaración final
La arquitectura de IA de Project ZUZU define una nueva forma de interacción.

La IA no es una herramienta externa.

Es un colaborador dentro del proceso de aprendizaje y construcción.