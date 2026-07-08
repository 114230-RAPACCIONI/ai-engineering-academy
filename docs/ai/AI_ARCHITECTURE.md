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

Arquitectura conceptual:

                USER

                 |

                 |

          ZUZU APPLICATION

                 |

                 |

          AI ORCHESTRATOR

                 |

    ----------------------------

    |            |             |

 Agents       Context       Memory

    |            |             |

    ----------------------------

                 |

          Model Providers

---

# AI Orchestrator

## Propósito

El AI Orchestrator es el cerebro de coordinación.

No genera respuestas directamente.

Coordina capacidades.

---

# Responsibilities

Debe manejar:

- un Mentor (única superficie de producto en el MVP);
- recuperación de contexto (Path + Practice + Knowledge);
- permisos;
- memoria;
- tools (deny-by-default);
- evaluación pedagógica.

---

# Agent Layer

En el MVP existe **un agent de producto: el Mentor**.

Otros nombres (Architecture, Reviewer, Coach) son **comportamientos pedagógicos del mismo Mentor**, no agents/shippable surfaces separados.

Multi-agent fleets = Future (`docs/99-future/`), solo después de validar capability del Mentor.

---

# Tipos de agent (MVP)

## Mentor Agent (canónico)

Responsabilidad:

Ayudar a **pensar, diseñar y construir** — enseñando.

Ejemplos:

- explicar conceptos;
- proponer ejercicios;
- adaptar dificultad;
- cuestionar decisiones;
- revisar practice work con foco pedagógico;
- orientar el siguiente paso en el Learning Path.

---

## Comportamientos futuros (no agents de producto)

| Nombre | Cómo aparece en el MVP |
|--------|------------------------|
| Architecture | El Mentor explora trade-offs y diseño |
| Code Review | El Mentor revisa artefactos de práctica |
| Learning Coach | El Mentor orienta progreso en el Path |

---

# Agent Model

El Mentor contiene:


Agent

Instructions

Knowledge

Context Rules

Tools

Memory


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

# Future Evolution

La arquitectura permitirá:

- agentes especializados;
- equipos de agentes;
- aprendizaje personalizado;
- colaboración humano-IA.

---

# Declaración final
La arquitectura de IA de Project ZUZU define una nueva forma de interacción.

La IA no es una herramienta externa.

Es un colaborador dentro del proceso de aprendizaje y construcción.