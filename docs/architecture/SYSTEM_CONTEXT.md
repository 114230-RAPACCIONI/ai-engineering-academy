---
artifact:
  id: ART-010
  type: System Context
  status: Draft
  version: 0.2.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - architecture
    - system-design
    - context
---

# Contexto del sistema

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> El sistema existe para formar ingenieros capaces de **pensar, diseñar y construir** con IA — independientemente del stack.
> Actores: Learner — Mentor — Knowledge — Practice — Progress.

---

## Introducción

Este documento define el contexto general de Project ZUZU.

Su objetivo es identificar:

- actores principales;
- sistemas externos;
- responsabilidades del producto;
- límites iniciales del sistema.

---

## Visión general del sistema

Project ZUZU es una plataforma AI-Native orientada a desarrollar capabilities de ingeniería moderna.

El sistema permite que learners aprendan en un Path, practiquen en Projects, preserven Knowledge y Progress, y colaboren con un Mentor de inteligencia artificial.

No es un delivery OS, un clon de IDE ni un codegen toy.

---

## Diagrama de contexto

```text
                    ┌─────────────────┐
                    │     Learner     │
                    └────────┬────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │    Project ZUZU     │
                  │                     │
                  │  Path — Practice    │
                  │  Knowledge — Progress│
                  │  Mentor             │
                  └─────────┬───────────┘
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
     AI Providers       Storage      External Tools
```

---

## Actores del sistema

### Learner

Persona que utiliza ZUZU para formarse y practicar.

**Objetivos:** mejorar capability (pensar — diseñar — construir); aprender ingeniería; completar Practice; colaborar con el Mentor.

**Interacciones:** consume Knowledge; habla con el Mentor; trabaja en Practice Projects; ve Progress.

---

### Mentor

Agente de IA (uno en el MVP) que mentorea: explica, pregunta, guía y revisa — sin reemplazar el ownership del learner.

**Objetivos:** elevar capability; respetar learning safety; usar contexto Path + Practice + Knowledge + Progress.

---

### Knowledge

Cuerpo de conceptos, principios y materiales educativos que el Path y el Mentor utilizan.

No es un dump de tickets de entrega: es curriculum y referencia pedagógica.

---

### Practice (Practice Projects)

Entorno donde el learner diseña y construye para aprender.

Los Projects son el medio de práctica — no el producto (el producto es Learning).

---

### Progress

Registro del crecimiento del learner: posición en el Path, evidencia de capability, continuidad entre sesiones.

---

## Proveedores de IA (externos)

Servicios externos que proporcionan models.

**Responsabilidades:** procesamiento de lenguaje; generación; análisis; asistencia al Mentor.

**Ejemplos:** modelos comerciales; open source; proveedores futuros.

El sistema no debe acoplarse a un único proveedor (ver ADR-001).

---

## Sistemas de almacenamiento

Sistemas responsables de persistir:

- learners;
- Progress;
- Practice Projects / artifacts;
- Knowledge;
- conversaciones con el Mentor (según política).

---

## Herramientas externas de desarrollo

Herramientas que el learner puede usar fuera o junto a ZUZU: repositorios, editores, plataformas cloud.

ZUZU no necesita ser el IDE.

---

## Límite del sistema

### Dentro de ZUZU

- experiencia de Learning (Path);
- gestión del learner;
- Knowledge;
- Mentor (orquestación mínima);
- Practice Projects educativos;
- Progress.

---

### Fuera de ZUZU

- ejecución de models de IA;
- infraestructura cloud genérica del proveedor;
- herramientas de desarrollo del usuario (IDE, CI externos, etc.).

---

## Responsabilidades centrales

| Capacidad | Responsabilidad |
|-----------|-----------------|
| Learning Path | Gestionar caminos de aprendizaje |
| Knowledge | Organizar y servir conocimiento |
| Mentor | Mentoreo con un agente (MVP) |
| Practice | Gestionar Practice Projects pedagógicos |
| Progress | Registrar y mostrar crecimiento de capability |

En MVP, “AI Orchestration” = invocar y contextualizar **un** Mentor — no una plataforma multi-agent.

---

## Vista inicial del sistema

```text
              Learner
                 │
           ZUZU Platform
    ┌────────────┼────────────┐
    │            │            │
 Learning      Mentor      Practice
   Path                     Projects
    │            │            │
 Knowledge    Models      Progress
```

---

## Principios arquitectónicos

### Separación de responsabilidades

Cada preocupación (Path, Knowledge, Mentor, Practice, Progress) debe estar claramente separada.

---

### Proveedores de IA reemplazables

El sistema no debe depender de un único model o vendor.

---

### Ownership de datos

El learner debe conservar control sobre su información.

---

### Evolución antes que optimización prematura

Primero diseñamos para cambiar y para validar Learning.

Después optimizamos.

---

## Consideraciones futuras

Capacidades como múltiples agentes, memoria avanzada, integración profunda con tools externas o colaboración multi-usuario viven en `docs/99-future/` hasta que el Mentor MVP demuestre lift de capability.

---

## Declaración final

El System Context define los límites iniciales de Project ZUZU.

Antes de construir componentes internos, entendemos qué existe alrededor del sistema y qué responsabilidad pertenece realmente al producto: **formar ingenieros** — Learner, Mentor, Knowledge, Practice, Progress — no operar un work OS.
