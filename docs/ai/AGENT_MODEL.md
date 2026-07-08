---
artifact:
  id: ART-017
  type: Agent Model
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

# Agent Model

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Agent de producto en el MVP = **solo Mentor**. Otros nombres son pedagogía futura, no superficies shippeables.

---

# Introduction

Este documento define el modelo conceptual de agentes dentro de Project ZUZU.

El objetivo es establecer:

- qué es un agente;
- qué responsabilidades tiene;
- cómo interactúa;
- cómo evoluciona.

---

# What Is An Agent?

Dentro de ZUZU, un agente es una entidad inteligente especializada que colabora con el usuario para alcanzar un objetivo específico.

Un agent combina:


Propósito

Instructions

Knowledge

Context

Tools

Memory

Evaluation


---

# Agent Philosophy

Los agentes no existen para reemplazar al usuario.

Existen para aumentar sus capacidades.

---

# Agent Principles

## Principio 1 — Orientado a propósito

Cada agente debe tener una responsabilidad clara.

Un agente que intenta hacer todo termina siendo poco confiable.

---

## Principle 2 — Context Aware

Un agente sin contexto es solamente un modelo generativo.

---

## Principle 3 — Specialized Intelligence

La especialización mejora la calidad.

---

## Principle 4 — Human Control

El usuario mantiene la decisión final.

---

# Agent Anatomy

Un agente ZUZU está compuesto por:

         Agent

           |

| | | |

Goal Instructions Knowledge Tools

           |

        Context

           |

        Memory

           |

      Evaluation

---

# Core Properties

---

# Identity

Cada agente tiene identidad propia.

Ejemplo:


Name:

Architecture Mentor Agent

Propósito:

Help users design software systems.


---

# Goal

Define qué intenta conseguir.

Ejemplo:


Review architecture decisions

Explain tradeoffs

Suggest improvements


---

# Instructions

Define cómo debe comportarse.

Incluye:

- comportamiento;
- límites;
- criterios.

---

# Knowledge

Información que el agente puede utilizar.

Puede incluir:

- documentación;
- principios;
- ejemplos;
- referencias.

---

# Context

Información específica de la situación actual.

Ejemplo:

Usuario:


Tomando una decisión arquitectónica


Contexto:


Proyecto actual

Requisitos

Restricciones

Decisiones anteriores


---

# Tools

Capacidades externas.

Ejemplos:


Repository Analysis

Code Search

Documentation Search

Testing Tools


---

# Memory

Información persistente.

Tipos:


Short Term Memory

Long Term Memory


---

# Evaluation

Mecanismos para medir calidad.

Ejemplos:

- precisión;
- utilidad;
- seguridad;
- alineación.

---

# Agent Lifecycle

Un agente atraviesa diferentes estados.


Created

↓

Configured

↓

Available

↓

Executing

↓

Evaluated

↓

Improved


---

# Agent Types

## MVP (Canonical)

### Mentor Agent

**Objective:** Acompañar aprendizaje y práctica.

Capabilities:

- explicar;
- adaptar dificultad;
- proponer ejercicios;
- cuestionar decisiones;
- revisar practice work con foco pedagógico;
- orientar próximos pasos en el Learning Path.

Superficie shippeable del MVP = **solo Mentor**.

---

## Comportamientos futuros (no agents de producto separados)

Estos nombres pueden describir **comportamientos del Mentor** o especialistas posteriores.
**No** son agents shippeables del MVP hasta que pasen las métricas de Capability del Mentor.

| Nombre | Como pedagogía dentro del Mentor |
|------|---------------------------|
| Architecture | Trade-offs, requisitos, riesgos |
| Reviewer | Calidad de practice artifacts |
| Project | Contexto de Practice Project + próximos pasos |

---

# Colaboración entre agents

La colaboración multi-agent es **Future** (`docs/99-future/`).

No implementar grafos de orquestación en el MVP.

Patrón MVP:

```
Learner → Mentor (single) → Path + Practice context
```

---

# Agent Permissions

Los agentes deben tener límites.

Un agente debe saber:

- qué información puede acceder;
- qué herramientas puede usar;
- qué acciones puede ejecutar.

---

# Agent Security Model


User Permission

↓

Context Permission

↓

Agent Permission

↓

Tool Permission


---

# Agent Configuration

Conceptualmente:


Agent

{

name

purpose

instructions

knowledgeSources

allowedTools

memoryPolicy

evaluationRules

}


---

# Agent Evolution

Los agentes deben poder mejorar.

Pero toda evolución debe ser:

- documentada;
- evaluada;
- versionada.

---

# Agent Versioning

Ejemplo:


Architecture Agent v1.0

↓

Architecture Agent v1.1


Cambios importantes deben generar nuevo registro.

---

# Anti-patterns
ZUZU evitará:

## Generic Agent

Un agente que hace todo.

---

## Unlimited Permissions

Agentes con acceso completo.

---

## Hidden Decisions

Agentes que toman decisiones sin explicación.

---

## No Evaluation

Agentes sin medición.

---

# Future Vision

La arquitectura permitirá:

- agentes personalizados;
- agentes creados por usuarios;
- equipos de agentes;
- agentes empresariales.

---

# Declaración final
Un agente dentro de Project ZUZU no es una interfaz conversacional.

Es una entidad inteligente diseñada para colaborar, enseñar y mejorar la capacidad humana.
