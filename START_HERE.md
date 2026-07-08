# Empezá acá — Project ZUZU

**Learning:** formar ingenieros capaces de **pensar, diseñar y construir** software con IA, **independientemente del stack**.

Este repositorio es **spec + viajes + (después) código de la app** en el mismo repo. Seguimos **[Spec-Driven Development (SDD)](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering)**:

> **Documentamos el spec completo → la IA implementa sin desviarse del plan.**

> *Alinear primero. Acelerar después.*

---

## Qué estamos construyendo

| Capa | Qué es |
|------|--------|
| **Viajes** (`docs/knowledge/curriculum/`) | Paso a paso: desarrollo con IA desde cero hasta app productiva + DevSecOps |
| **App ZUZU** (`src/` — pendiente) | UX tipo juego; primer viaje: **Gastos Hormiga** |
| **Método** | El mismo SDD que enseñamos = el mismo SDD con el que construimos ZUZU |

Decisiones del founder: [FOUNDER_DECISIONS.md](docs/00-constitution/FOUNDER_DECISIONS.md)

---

## Fases (orden obligatorio)

| Fase | Estado | Contenido |
|------|--------|-----------|
| **1. Spec** | **Ahora** | Viajes 1–8 (1–3 ✅), PLATFORM_SPEC, ADRs stack/IA ✅ |
| **2. Implement** | Después | IA codea la app en este repo desde el spec |
| **3. Validate** | Después | Tests vs acceptance criteria |

**No codear la app hasta cerrar el spec.** Sí está permitido (y es el plan) que la IA codee cuando el spec esté listo.

---

## Decisiones técnicas (ADRs aceptados)

| Tema | Decisión |
|------|----------|
| Stack | [ADR-008](docs/architecture/adr/ADR-008-stack-selection.md) — **Next.js + TypeScript + Prisma + SQLite→Postgres** |
| IA default | [ADR-009](docs/architecture/adr/ADR-009-ai-default-provider.md) — **Anthropic** (multi-provider, adapters) |
| Arquitectura | Modular monolith ([ADR-006](docs/architecture/adr/ADR-006-simplicity-first.md)) |
| Mentor | Uno solo; sin agentes MVP; Cursor externo para codear |

---

## Ciclo SDD

| Paso | Artefacto | Capítulo |
|------|-----------|----------|
| Constitution | Tesis, founder decisions | Lectura inicial |
| Specify | `PRACTICE_PROJECT.md`, `REQUIREMENTS.md` | [Cap. 1](docs/knowledge/curriculum/chapters/CHAPTER_01_FROM_IDEA_TO_SCOPE.md)–[2](docs/knowledge/curriculum/chapters/CHAPTER_02_REQUIREMENTS_BEFORE_CODE.md) |
| Clarify | Decision log | Cap. 1–2 |
| Plan | `DESIGN.md`, ADRs | [Cap. 3](docs/knowledge/curriculum/chapters/CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md) |
| Tasks | Incrementos I1… | Cap. 3 |
| Implement | `src/` | Cap. 4 *(pendiente)* |
| Validate | Tests / ACs | Cap. 5+ *(pendiente)* |

---

## Orden de lectura

1. [PRODUCT_THESIS](docs/00-constitution/PRODUCT_THESIS.md)
2. [FOUNDER_DECISIONS](docs/00-constitution/FOUNDER_DECISIONS.md)
3. [LEARNING_CURRICULUM](docs/knowledge/curriculum/LEARNING_CURRICULUM.md)
4. Capítulos 1–3 (viaje **Gastos Hormiga** en la app)
5. [ENGAGEMENT_DESIGN](docs/product/ENGAGEMENT_DESIGN.md) — motivación sin castigos
6. [DOC_AUDIT](docs/knowledge/DOC_AUDIT.md) — qué docs usar / ignorar al codear

**Ignorar al implementar:** `BACKEND_*`, `DATABASE_*` bodies viejos, `PROJECT_CONSTITUTION.md` (ver audit).

---

## Primer viaje: Gastos Hormiga

Al crear cuenta en la app, el único viaje disponible será **Gastos Hormiga** — el "Hello World" de ZUZU.

El learner puede también clonar el repo y leer `docs/` sin la app.

Al terminar, **descarga su Practice Project** (código + spec + README) — no descarga ZUZU.

---

## Reglas

**Regla de oro:** ¿Ayuda al learner a pensar, diseñar y construir con IA, stack-agnostic?

**Regla de aprendizaje:** ¿Ayuda al estudiante a desarrollar **mejor criterio**? (no “¿es cool técnicamente?”)

---

## Siguiente artefacto pendiente

**`PLATFORM_SPEC.md`** — spec unificado de la app para la fase Implement.

---

## Declaración

La spec en `docs/` es el contrato.

La IA implementa ZUZU como enseñamos a implementar cualquier proyecto: **sin Frankenstein.**
