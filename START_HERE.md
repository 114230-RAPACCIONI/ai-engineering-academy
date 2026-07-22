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
| **App ZUZU** (`src/`) | Path + Knowledge + Mentor + Practice + Progress (Cap. 1–4 en plataforma) |
| **Método** | El mismo SDD que enseñamos = el mismo SDD con el que construimos ZUZU |

Decisiones del founder: [FOUNDER_DECISIONS.md](docs/00-constitution/FOUNDER_DECISIONS.md)

---

## Fases (orden obligatorio)

| Fase | Estado | Contenido |
|------|--------|-----------|
| **1. Spec** | Cap. 1–4 curriculum ✅ · Cap. 5–8 pendientes | Viajes + ADRs stack/IA |
| **2. Implement (app)** | En curso en `src/` | Cap. 1–4 del learner en plataforma; resto del producto según MVP |
| **3. Validate** | Después | Tests vs acceptance / Cap. 5+ curriculum |

La app MVP de aprendizaje (Path → I1) ya existe. No reabrir “no codear nada” como regla: el contrato sigue siendo **no desviarse del spec**.

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
| Implement | código del Practice Project (fuera de ZUZU) + bitácora en app | [Cap. 4](docs/knowledge/curriculum/chapters/CHAPTER_04_INCREMENTAL_BUILD_WITH_AI.md) |
| Validate | Tests / ACs | Cap. 5+ *(pendiente)* |

---

## Orden de lectura

1. [PRODUCT_THESIS](docs/00-constitution/PRODUCT_THESIS.md)
2. [FOUNDER_DECISIONS](docs/00-constitution/FOUNDER_DECISIONS.md)
3. [LEARNING_CURRICULUM](docs/knowledge/curriculum/LEARNING_CURRICULUM.md)
4. Capítulos 1–4 (método SDD; ejemplo de referencia Cap. 1–3: Gastos Hormiga)
5. [PRODUCT_EXPERIENCE_VISION §14](docs/product/PRODUCT_EXPERIENCE_VISION.md) — motivación sin castigos
6. [DOC_AUDIT](docs/knowledge/DOC_AUDIT.md) — qué docs usar / ignorar al codear

**Ignorar al implementar:** `BACKEND_*`, `DATABASE_*` bodies viejos, `PROJECT_CONSTITUTION.md` (ver audit).

---

## Dominio del proyecto: lo elige el learner

ZUZU enseña el mismo método SDD sin importar qué construya el learner — el dominio es tan intercambiable como el stack ([FOUNDER_DECISIONS §8](docs/00-constitution/FOUNDER_DECISIONS.md)). No hay un proyecto obligatorio.

**Gastos Hormiga** es el ejemplo de referencia interno usado para escribir y validar los Capítulos 1–3 — sirve como plantilla de "así se ve bien hecho" si el learner no tiene una idea propia todavía, pero cualquier dominio (e-commerce, turnos, API, juego, lo que sea) es igualmente válido. Cap. 4 aplica el mismo dominio elegido al implementar **I1**.

El learner puede también clonar el repo y leer `docs/` sin la app.

Al terminar, **descarga su Practice Project** (código + spec + README) — no descarga ZUZU.

---

## Reglas

**Regla de oro:** ¿Ayuda al learner a pensar, diseñar y construir con IA, stack-agnostic?

**Regla de aprendizaje:** ¿Ayuda al estudiante a desarrollar **mejor criterio**? (no “¿es cool técnicamente?”)

---

## Siguiente artefacto pendiente

1. **Validar con un learner humano** Cap. 1→4 + I1 (éxito MVP Fase 0 ampliado).
2. **Capítulo 5** — Testing y calidad (`CHAPTER_05` + Path en app).
3. **`PLATFORM_SPEC.md`** (opcional) — spec unificado residual si hace falta consolidar lo ya implementado vs MVP_SCOPE.

---

## Declaración

La spec en `docs/` es el contrato.

La IA implementa ZUZU como enseñamos a implementar cualquier proyecto: **sin Frankenstein.**
