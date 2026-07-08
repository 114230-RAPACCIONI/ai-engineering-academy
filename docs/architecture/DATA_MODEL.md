---
artifact:
  id: ART-014
  type: Data Model
  status: Draft
  version: 0.1.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  initiative: INIT-001
  tags:
    - architecture
    - data
    - modeling
---

# Data Model

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Subordinado a [DOMAIN_MODEL.md](./DOMAIN_MODEL.md) (Canonical).
> Project = entorno de práctica. Vocabulario: **LearningPath / Module — no Course**.
> Los campos de Profile pueden vivir en User o Profile 1:1 — preferir simplicidad en el MVP.

---

# Introduction

Este documento define el modelo conceptual de datos de Project ZUZU.

El objetivo es establecer:

- qué información necesita almacenar el sistema;
- cómo se relacionan las entidades;
- qué datos representan la evolución del usuario.

Este documento no define todavía la tecnología de persistencia.

---

# Data Model Philosophy

En ZUZU los datos representan:

- identidad;
- conocimiento;
- aprendizaje;
- construcción;
- evolución.

No almacenamos solamente actividad.

Almacenamos transformación.

---

# Core Data Domains

El modelo se divide en:


Identity

Learning

Knowledge

Projects

AI Collaboration

Progress

Audit


---

# Domain: Identity

## User

Representa una persona dentro del sistema.

---

## Attributes

Conceptualmente:


User

id

email

profile

createdAt

updatedAt


---

## Relationships


User

1 ---- 1

Profile


---

# Profile

Información adicional del usuario.

---

## Attributes


Profile

experienceLevel

goals

interests

preferences


---

# Domain: Learning

## Learning Journey

Representa el recorrido individual.

---

## Attributes


LearningJourney

id

userId

currentStage

startedAt

status


---

## Relationship


User

1 ---- 1

Learning Journey


---

# Learning Path

Representa un camino estructurado.

---

## Example


AI Engineering Path

Backend Engineering Path

Architecture Path


---

## Attributes


LearningPath

id

title

description

level


---

# Module

Unidad dentro del camino.

---

## Attributes


Module

id

pathId

title

order

objectives


---

# Domain: Knowledge

## Knowledge Item

Unidad de conocimiento.

---

## Attributes


KnowledgeItem

id

title

content

type

createdAt


---

## Types

Ejemplos:


Concept

Article

Example

Exercise

Reference


---

# Concept

Representa una idea fundamental.

---

## Attributes


Concept

id

name

description


---

## Relationships

Los conceptos pueden relacionarse:


Concept

↓

Related Concepts


---

# Domain: Skills

## Skill

Representa una capacidad adquirida.

---

## Attributes


Skill

id

name

category


---

# User Skill

Relaciona usuarios con habilidades.

---

## Attributes


UserSkill

userId

skillId

level

evidence


---

# Domain: Projects

## Project

Representa una construcción del usuario.

---

## Attributes


Project

id

userId

name

description

status

createdAt


---

# Project Artifact

Representa evidencia creada durante un proyecto.

---

## Examples


Requirement

Specification

Architecture Decision

Documentation

Review


---

## Attributes


Artifact

id

projectId

type

content

createdAt


---

# Domain: AI Collaboration

## Agent

Representa una inteligencia especializada.

---

## Attributes


Agent

id

name

type

configuration


---

# Conversation

Representa interacción usuario-agente.

---

## Attributes


Conversation

id

userId

agentId

createdAt


---

# Message

Representa una interacción individual.

---

## Attributes


Message

id

conversationId

role

content

timestamp


---

# Context

Representa información utilizada por la IA.

---

## Attributes


AIContext

id

source

permissions

createdAt


---

# Domain: Progress

## Progress Record

Registra evolución.

---

## Attributes


Progress

id

userId

type

reference

completedAt


---

# Domain: Audit

## Audit Event

Registra acciones importantes.

---

## Attributes


AuditEvent

id

userId

action

timestamp

metadata


---

# Entity Relationships Overview

Vista conceptual:

             User

              |

    ----------------------

    |                    |

Learning Journey Projects

    |                    |

Learning Path Artifacts

    |

 Modules

    |

Knowledge

User

|

Skills

User

|

Conversations

|

Agents


---

# Data Ownership Rules

## Rule 1

Cada usuario es propietario de sus proyectos.

---

## Rule 2

El contexto utilizado por IA debe respetar permisos.

---

## Rule 3

Los artefactos deben mantener historial.

---

## Rule 4

El progreso debe poder reconstruirse.

---

# Data Evolution Principles

El modelo debe permitir:

- nuevos tipos de conocimiento;
- nuevos agentes;
- nuevos caminos;
- nuevos tipos de proyectos.

---

# Future Considerations

Posibles extensiones:


Organization

Team

Mentor

Certification

Marketplace

Analytics


---

# Declaración final
El modelo de datos de Project ZUZU representa la memoria del sistema.

No almacena solamente información.

Almacena el camino de evolución de cada usuario.