---
artifact:
  id: ADR-008
  type: Architecture Decision Record
  status: Accepted
  version: 1.0.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
---

# ADR-008 — Selección de stack (MVP ZUZU)

## Status

Accepted

## Contexto

ZUZU es una aplicación web que debe:

- Entregar **viajes** gamificados (path visual, progreso, celebraciones).
- Integrar un **Mentor** con streaming y contexto (Path + Practice Project + historial).
- Soportar **multi-provider IA** ([ADR-001](./ADR-001-ai-provider-independence.md)).
- Exportar el **Practice Project** del learner (código + spec + README).
- Arrancar **local** con 1–3 usuarios; escalar después sin reescribir todo.
- Vivir en el **mismo repo** que `docs/`.
- Maximizar **velocidad de MVP**, no la familiaridad personal del founder con Java/Angular.

**Restricciones:** [ADR-006](./ADR-006-simplicity-first.md) modular monolith; [FOUNDER_DECISIONS](../../00-constitution/FOUNDER_DECISIONS.md) producto primero.

## Criterios de evaluación

| Criterio | Peso para ZUZU |
|----------|----------------|
| Velocidad MVP | Alto |
| Experiencia de desarrollo (DX) | Alto |
| Mantenibilidad | Alto |
| Comunidad / ecosistema | Medio-alto |
| Integración con IA (streaming, SDKs) | Alto |
| Escalabilidad futura | Medio |
| Curva para nuevos colaboradores | Medio |

## Alternativas evaluadas

### A — Next.js (App Router) + TypeScript + Prisma + SQLite/PostgreSQL

**Arquitectura:** monolito modular fullstack en un solo deployable. API Routes / Server Actions + React UI. Dominios en `src/modules/*`.

| Criterio | Evaluación |
|----------|------------|
| Velocidad MVP | **Muy alta** — un solo proyecto, routing, API y UI integrados |
| DX | **Muy alta** — hot reload, TypeScript end-to-end, convenciones claras |
| Mantenibilidad | **Alta** — módulos por dominio (learning, mentor, projects); tipos compartidos |
| Comunidad | **Muy alta** — React/Next ecosistema dominante web 2026 |
| Integración IA | **Muy alta** — Vercel AI SDK, streaming SSE, adapters OpenAI/Anthropic |
| Escalabilidad | **Alta** — escala horizontal del monolito; path a Postgres; sin microservicios prematuros |
| Curva colaboradores | **Alta** — mayoría de devs web conocen React/TS |

**Riesgos:** Server Actions mal usadas mezclan capas; mitigar con módulos tipo hexagonal dentro del monolito.

---

### B — Angular + Spring Boot + PostgreSQL

**Arquitectura:** frontend y backend separados; API REST; dos build pipelines.

| Criterio | Evaluación |
|----------|------------|
| Velocidad MVP | **Media-baja** — dos repos lógicos, más boilerplate, CORS, DTOs |
| DX | **Media** — maduro pero verboso para equipo de 1–2 |
| Mantenibilidad | **Alta** en enterprise; buena para equipos Java grandes |
| Comunidad | **Alta** en enterprise; menor en startups producto web gamificado |
| Integración IA | **Media** — SDKs Java existen; streaming más trabajo que en Node |
| Escalabilidad | **Muy alta** — probado en gran escala |
| Curva colaboradores | **Media** — Angular + Spring son dos curvas distintas |

**Riesgos:** Sobrecosto de coordinación FE/BE para MVP solo; gamificación UI más lenta de iterar que en React.

---

### C — NestJS + Angular (TypeScript en ambos lados)

| Criterio | Evaluación |
|----------|------------|
| Velocidad MVP | **Media** — mejor que B en tipos compartidos, pero dos apps |
| DX | **Media-alta** — Nest estructurado; Angular CLI |
| Mantenibilidad | **Alta** — patrones enterprise claros |
| Comunidad | **Media-alta** |
| Integración IA | **Alta** en backend Nest (Node); streaming natural |
| Escalabilidad | **Alta** |
| Curva colaboradores | **Media** — dos frameworks |

**Riesgos:** Sigue siendo dual-deploy; más setup que A sin ventaja clara para UI tipo juego.

---

### D — NestJS + Next.js (híbrido)

| Criterio | Evaluación |
|----------|------------|
| Velocidad MVP | **Media** — dos runtimes, duplicación de lógica posible |
| DX | **Media** |
| Mantenibilidad | **Media** — frontera FE/API a mantener |
| Integración IA | **Alta** en Nest |
| Escalabilidad | **Alta** |

**Riesgos:** Over-engineering para 1–3 usuarios locales; viola espíritu de ADR-006.

---

### E — Microservicios / Kubernetes

**Rechazado para MVP** — complejidad operacional sin beneficio con 1–3 usuarios ([ADR-006](./ADR-006-simplicity-first.md), [FOUNDER_DECISIONS](../../00-constitution/FOUNDER_DECISIONS.md)).

## Decisión

**Adoptar Alternativa A:**

```
Next.js 15+ (App Router)
+ TypeScript (strict)
+ Prisma ORM
+ SQLite (MVP local) → PostgreSQL (cuando haya deploy compartido)
+ Estructura modular monolith en src/modules/
```

### Estructura de repo propuesta

```
/
  docs/                 ← spec SDD (ya existe)
  src/
    app/                ← rutas Next.js (UI)
    modules/
      identity/
      learning/         ← paths, viajes, progreso
      mentor/           ← chat, contexto, provider adapter
      projects/         ← practice project, export zip
      progress/
    lib/                ← utilidades compartidas
  prisma/
  package.json
```

### Por qué responde al producto (no al founder)

| Necesidad ZUZU | Cómo A la cumple |
|----------------|------------------|
| UX tipo juego | React: animaciones, componentes ricos, ecosistema UI |
| Mentor streaming | Node + AI SDK nativos |
| Mismo repo | Monorepo simple: `docs/` + `src/` |
| Export zip proyecto | File system + API route en Node |
| Iteración rápida solo founder | Un `npm run dev`, un lenguaje |
| Multi-provider IA | Adapters en `modules/mentor/` ([ADR-001](./ADR-001-ai-provider-independence.md)) |
| Local primero | SQLite + sin Docker obligatorio |

Angular + Spring **no es mala elección en abstracto** — es subóptima para **este** MVP (gamificación + IA streaming + solo dev + mismo repo).

## Consecuencias

### Positivas

- Máxima velocidad hacia MVP implementable con IA.
- Un lenguaje (TypeScript) en todo el stack aplicativo.
- Excelente documentación y ejemplos para Mentor/IA en 2026.
- Path claro a Postgres y deploy (Vercel, Docker, etc.) sin cambiar arquitectura.

### Negativas

- Founder invierte curva en React/Next si no los domina (aceptado: prioridad producto).
- Server Components vs Client Components requiere disciplina para no mezclar dominio y UI.

### Riesgos a monitorear

- Acoplar lógica de dominio a React — **mitigar:** servicios en `modules/*` testeables sin UI.
- SQLite límites en concurrencia — **mitigar:** migrar a Postgres antes de multi-usuario real.

## Alternativas rechazadas (resumen)

| Alt | Motivo rechazo |
|-----|----------------|
| B Angular + Spring | Dual stack, más lento MVP, IA menos ergonómica |
| C Nest + Angular | Dos apps sin ventaja vs A para este producto |
| D Nest + Next | Complejidad dual innecesaria |
| E Microservicios | Prematuro |

## Relacionados

- [ADR-006](./ADR-006-simplicity-first.md)
- [ADR-009](./ADR-009-ai-default-provider.md)
- [FOUNDER_DECISIONS](../../00-constitution/FOUNDER_DECISIONS.md)
- [MVP_SCOPE](../../product/MVP_SCOPE.md)
