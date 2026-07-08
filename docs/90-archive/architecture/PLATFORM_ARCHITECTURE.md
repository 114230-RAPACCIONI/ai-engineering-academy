> **ARCHIVED — 2026-07-08**
> Quarantined during coherence recovery. Contradicts or predates the Product Thesis.
> **Not canonical.** See [PRODUCT_THESIS](../../00-constitution/PRODUCT_THESIS.md) and `docs/90-archive/README.md`.

---
---
artifact:
  id: ART-025
  type: Platform Architecture
  status: Draft
  version: 0.1.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  initiative: INIT-001
  tags:
    - architecture
    - platform
    - engineering
    - system-design
---

# Platform Architecture

> "Architecture is the structure that allows change."

---

# Introduction

Este documento define la arquitectura general de la plataforma Project ZUZU.

El objetivo es establecer una estructura técnica capaz de evolucionar desde un MVP hasta una plataforma completa de aprendizaje e ingeniería aumentada por IA.

---

# Architecture Philosophy

La plataforma debe priorizar:

- evolución;
- simplicidad;
- separación de responsabilidades;
- independencia tecnológica.

---

# Core Principle


Business Capability

↓

Platform Capability

↓

Technical Implementation


La tecnología implementa capacidades.

No define el producto.

---

# Platform Vision

Project ZUZU está compuesto por diferentes capacidades:

            ZUZU PLATFORM


                 USER


                  |

                  |

          EXPERIENCE LAYER


                  |

                  |

         INTELLIGENCE LAYER


                  |

                  |

          PLATFORM SERVICES


                  |

                  |

         DATA & KNOWLEDGE


                  |

                  |

        INFRASTRUCTURE LAYER

---

# Main Platform Layers

---

# 1. Experience Layer

Responsabilidad:

Interactuar con usuarios.

Incluye:

- aplicación web;
- interfaces;
- navegación;
- experiencias educativas.

---

# 2. Intelligence Layer

Responsabilidad:

Proveer capacidades de IA.

Incluye:

- agentes;
- contexto;
- memoria;
- evaluación.

---

# 3. Application Layer

Responsabilidad:

Contener reglas del producto.

Incluye:

- usuarios;
- progreso;
- proyectos;
- aprendizaje.

---

# 4. Knowledge Layer

Responsabilidad:

Gestionar conocimiento.

Incluye:

- documentación;
- contenidos;
- embeddings;
- información contextual.

---

# 5. Data Layer

Responsabilidad:

Persistencia.

Incluye:

- usuarios;
- configuración;
- eventos;
- métricas.

---

# 6. Infrastructure Layer

Responsabilidad:

Ejecutar el sistema.

Incluye:

- cloud;
- redes;
- despliegue;
- observabilidad.

---

# Platform Components

## Identity System

Gestiona:

- usuarios;
- autenticación;
- autorización.

---

## Learning System

Gestiona:

- cursos;
- progreso;
- objetivos.

---

## Project System

Gestiona:

- proyectos;
- artefactos;
- colaboración.

---

## AI Orchestration System

Gestiona:

- agentes;
- modelos;
- herramientas.

---

## Knowledge System

Gestiona:

- conocimiento;
- búsqueda;
- recuperación.

---

## Evaluation System

Gestiona:

- métricas;
- calidad;
- feedback.

---

# High Level Architecture

                 USER

                  |

                  |

          ZUZU APPLICATION


                  |

    --------------------------------

    |              |              |

Learning Projects AI Platform

    |              |              |

    --------------------------------

                  |

          Knowledge Platform

                  |

             Data Platform

                  |

          Infrastructure

---

# Design Principles

## Separation of Concerns

Cada componente tiene una responsabilidad clara.

---

## Replaceability

Los componentes deben poder evolucionar.

Ejemplo:

Cambiar proveedor IA sin modificar todo el sistema.

---

## Scalability

La arquitectura debe permitir crecimiento progresivo.

---

## Observability

El sistema debe poder explicar qué ocurre.

---

# MVP Architecture

La primera versión debe ser simple.

No necesitamos una plataforma distribuida desde el inicio.

Modelo inicial:


Frontend

↓

Backend Application

↓

AI Service

↓

Database


---

# Future Architecture

Evolución:


Frontend

↓

Platform API

↓

Services

↓

AI Platform

↓

Knowledge Platform

↓

Infrastructure


---

# Architectural Trade-Off

Elegimos:

Simplicidad inicial.

Contra:

Complejidad futura.

Porque:


Premature Complexity

=

Future Problems


---

# Technology Independence

La arquitectura no depende de:

- lenguaje;
- framework;
- proveedor IA.

---

# Final Statement

Project ZUZU debe construirse como una plataforma capaz de evolucionar.

La arquitectura no existe para limitar el cambio.

Existe para permitirlo.
