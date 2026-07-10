---
artifact:
  id: ART-029
  type: Database Architecture
  status: Draft
  version: 0.1.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  initiative: INIT-001
  tags:
    - database
    - data
    - architecture
    - persistence
---

# Database Architecture

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Learning posee **LearningPaths / Modules / Progress** — no `Courses`.
> Sin schema de Billing en el MVP. Alinear con [DOMAIN_MODEL.md](./DOMAIN_MODEL.md).

---

# Introduction

Este documento define la arquitectura de datos de Project ZUZU.

El objetivo es establecer cómo la plataforma almacena, organiza y evoluciona la información necesaria para operar como un sistema de aprendizaje e ingeniería aumentado por IA.

---

# Data Philosophy

Los datos representan:

- estado del sistema;
- conocimiento del usuario;
- evolución del aprendizaje;
- contexto para inteligencia artificial.

---

# Principio central


Data

Context

History

=

System Intelligence


---

# Database Goals

La arquitectura de datos debe permitir:

- consistencia;
- evolución;
- trazabilidad;
- recuperación eficiente;
- integración con IA.

---

# Data Categories

ZUZU maneja diferentes tipos de información.

---

# 1. Operational Data

Información necesaria para operar la plataforma.

Ejemplos:

- usuarios;
- cuentas;
- permisos;
- configuraciones.

---

# 2. Learning Data

Información relacionada al aprendizaje.

Ejemplos:

- progreso;
- objetivos;
- evaluaciones;
- actividades.

---

# 3. Project Data

Información relacionada a construcción de software.

Ejemplos:

- proyectos;
- artefactos;
- decisiones;
- documentación.

---

# 4. Knowledge Data

Información utilizada para inteligencia.

Ejemplos:

- documentos;
- conceptos;
- relaciones;
- embeddings.

---

# 5. AI Data

Información generada por interacción con IA.

Ejemplos:

- conversaciones;
- feedback;
- evaluaciones;
- memoria.

---

# 6. Audit Data

Información histórica.

Ejemplos:

- cambios;
- acciones;
- eventos.

---

# Logical Data Architecture

                APPLICATION DATA


                     |

| | | |

Users Learning Projects Knowledge

                     |

                     |

                AI CONTEXT


                     |

                     |

                Evaluation

---

# Database Separation Strategy

Inicialmente:


Single Database

Logical Separation


---

# Evolution

Cuando exista necesidad:


Logical Modules

↓

Independent Storage

↓

Specialized Databases


---

# Domain Ownership

Cada módulo es responsable de sus datos.

Ejemplo:

Identity owns:


Users

Roles

Permissions


Learning owns:


LearningPaths

Modules

Progress

Goals


Projects owns:


Projects

Artifacts

Reviews


---

# Data Access Rules

Los módulos no deben acceder directamente a datos externos.

Incorrect:


Learning

↓

Identity Tables


---

Correct:


Learning

↓

Identity Interface

↓

Identity Module


---

# Database Modeling Principles

Preferimos:

- modelos claros;
- nombres explícitos;
- relaciones entendibles.

---

# Schema Evolution

Los cambios deben ser controlados.

Cada modificación debe incluir:

- migración;
- documentación;
- revisión.

---

# Migration Strategy

Todo cambio estructural debe pasar por:


Migration

↓

Testing

↓

Review

↓

Production


---

# AI Knowledge Storage

La información para IA requiere tratamiento especial.

Separaremos:

## Source Knowledge

Información original.

Ejemplo:

Documentos.

---

## Processed Knowledge

Información preparada para búsqueda.

Ejemplo:

Embeddings.

---

## Retrieved Context

Información enviada al modelo.

---

# Memory Storage

La memoria de IA debe dividirse:

## Short Term Memory

Contexto de sesión.

---

## Long Term Memory

Información persistente del usuario.

---

# Event Data

Los eventos permiten comprender evolución.

Ejemplo:


User completed lesson

User created project

AI reviewed architecture


---

# Observability Data

El sistema debe almacenar:

- métricas;
- errores;
- comportamiento.

---

# Security Principles

Los datos deben proteger:

- privacidad;
- acceso;
- integridad.

---

# Backup Strategy

Debe existir:

- recuperación;
- historial;
- protección contra pérdida.

---

# Anti-patterns
## Database As Integration Layer

Usar tablas compartidas para comunicación.

---

## No Migration Strategy

Cambios manuales.

---

## Storing Everything Together

Mezclar datos sin propósito.

---

## Ignoring Historical Data

Perder evolución.

---

# Declaración final
La base de datos de Project ZUZU no será solamente almacenamiento.

Será la memoria estructurada del sistema, permitiendo aprendizaje, evolución e inteligencia.
