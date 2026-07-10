---
artifact:
  id: ART-011
  type: Domain Model
  status: Canonical
  version: 1.0.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-09
  initiative: INIT-001
  tags:
    - architecture
    - domain
    - modeling
    - learning
---

# Domain Model

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> El dominio canónico está centrado en el learner. Project es práctica — no el sol del sistema.
> Capability que formamos: **pensar — diseñar — construir** con IA — **stack-independent**.
> Vocabulario: LearningPath / Module — no Course.

---

# Introduction

Este documento define el modelo conceptual del dominio de Project ZUZU.

El objetivo es identificar:

- entidades principales;
- responsabilidades;
- relaciones;
- conceptos fundamentales.

Este modelo representa el lenguaje común entre:

- producto;
- diseño;
- ingeniería;
- inteligencia artificial.

---

# Domain Overview

El dominio principal de ZUZU:

```
Learner
  → aprende (Knowledge + Path)
  → desarrolla Skills
  → practica en Projects (learning environment)
  → colabora con Mentor (AI)
  → evidenció Progress / capability
```

**Project is practice — not the sun of the system.**
---

# Core Domain Entities

Las entidades principales son:
User

Learning Journey

Learning Path

Module

Knowledge

Concept

Skill

Project

Artifact

Agent

Conversation

Progress

---

# Entity: User

## Propósito

Representa a la persona que utiliza Project ZUZU.

---

## Responsibilities

El usuario:

- define objetivos;
- aprende;
- construye proyectos;
- interactúa con agentes;
- evoluciona.

---

## Attributes

Conceptualmente:
User

id
profile
goals
experienceLevel
interests


---

# Entity: Learning Journey

## Propósito

Representa la transformación completa del usuario dentro de ZUZU.

---

## Responsibilities

Mantiene:

- etapa actual;
- objetivos;
- evolución.

---

## Relationship
User

1 ---- 1

Learning Journey


---

# Entity: Learning Path

## Propósito

Representa un camino estructurado de aprendizaje.

---

## Example
AI Engineering Path

↓

Fundamentals

↓

Agents

↓

Projects
---

## Relationship
Learning Journey

1 ---- *

Learning Paths
---

# Entity: Module

## Propósito

Unidad de aprendizaje dentro de un camino.

---

## Contains

- lessons;
- challenges;
- exercises;
- evaluations.

---

# Entity: Knowledge

## Propósito

Representa información estructurada disponible para aprendizaje.

---

## Knowledge Structure
Knowledge

↓

Concept

↓

Explanation

↓

Example

↓

Application
---

# Entity: Concept

## Propósito

Unidad fundamental de conocimiento.

---

## Example
Concept:

Large Language Model

Relations:

AI

Machine Learning

Transformers
---

# Entity: Skill

## Propósito

Representa una capacidad desarrollada por el usuario.

---

## Examples
Skill:

Prompt Engineering

System Design

Backend Development

Architecture Thinking
---

# Entity: Project

## Propósito

Representa una construcción realizada por el usuario.

---

## Responsibilities

Contiene:

- objetivo;
- requisitos;
- decisiones;
- documentación;
- progreso.

---

## Relationship
User

1 ---- *

Projects
---

# Entity: Artifact

## Propósito

Representa documentación o evidencia creada durante el proceso.

---

## Examples
Artifact:

Specification

Architecture Decision

Documentation

Code Review
---

## Important Principle

En ZUZU los artefactos son ciudadanos de primera clase.

La documentación representa aprendizaje y pensamiento.

---

# Entity: Agent

## Propósito

Representa una inteligencia especializada que colabora con el usuario.

---

## Examples
Agent:

Mentor Agent

Reviewer Agent

Architecture Agent

Learning Coach
---

## Responsibilities

Un agente puede:

- analizar;
- explicar;
- sugerir;
- revisar.

---

# Entity: Conversation

## Propósito

Representa interacción entre usuario y agentes.

---

## Contains

- messages;
- context;
- decisions;
- references.

---

# Entity: Progress

## Propósito

Representa evolución del usuario.

---

## Tracks

- módulos completados;
- habilidades;
- proyectos;
- aprendizajes.

---

# Domain Relationships

Vista conceptual:
             User

              |

              |

      Learning Journey

              |

    -------------------

    |                 |

    Learning Path Progress
    |

 Modules

    |

Knowledge

    |

Concepts
User

|

Projects

|

Artifacts

User

|

Conversations

|

Agents
---

# Domain Rules

## Rule 1

Un usuario puede tener múltiples proyectos.

---

## Rule 2

Un proyecto debe generar evidencia de aprendizaje.

---

## Rule 3

Un agente siempre trabaja con contexto.

---

## Rule 4

El conocimiento debe poder evolucionar.

---

## Rule 5

El progreso representa capacidades, no solamente actividad.

---

# Domain Boundaries

Inicialmente el sistema tendrá estos dominios:
Identity

Learning

Knowledge

Projects

AI Collaboration

Progress

---

# Future Domains

Posibles extensiones:
Community

Marketplace

Enterprise

Certification

Analytics
---

# Declaración final
El Domain Model define el lenguaje interno de Project ZUZU.

Antes de crear tablas o APIs, definimos qué significa cada elemento dentro del sistema.

La arquitectura comienza con comprensión del dominio.