---
artifact:
  id: ART-FOUNDER-001
  type: Founder Decisions
  status: Canonical
  version: 1.0.0
  owner: Founder
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - constitution
    - product
    - decisions
  source_of_truth: true
---

# Founder Decisions

> Decisiones del founder que gobiernan implementación y producto.
> Complementan [PRODUCT_THESIS.md](./PRODUCT_THESIS.md) y los ADRs.
>
> **Método:** [Spec-Driven Development](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering) — spec completo en `docs/` → IA implementa en el mismo repo sin desviarse.

---

## 1. Qué es ZUZU

| Tema | Decisión |
|------|----------|
| Producto | App que guía **viajes** paso a paso: desarrollo con IA desde cero hasta app productiva |
| Objetivo del learner | Entender el proceso completo, incluyendo rol **DevSecOps** |
| Repo | **Mismo repositorio**: `docs/` (spec + viajes) + código de la app |
| Antes de codear | **Todo** definido: viajes + spec de plataforma + ADRs clave |
| Implementación | Con ayuda de IA, siguiendo el spec — no prompt-first |

---

## 2. Dos formas de aprender

| Modo | Descripción |
|------|-------------|
| **App ZUZU** | UX amigable, tipo juego — el learner *siente que juega aprendiendo* |
| **Repo / docs** | Clonar GitHub y recorrer `docs/` sin la app (alternativa válida) |

---

## 3. Mentor e IA (MVP)

| Tema | Decisión |
|------|----------|
| Mentor | Un único Mentor IA contextual |
| Agentes | No existen en el MVP |
| Contexto | Learning Path + Practice Project + historial |
| Proveedores | Arquitectura **multi-provider**; un proveedor **por defecto** (ver [ADR-009](../architecture/adr/ADR-009-ai-default-provider.md)) |
| Código en producto | Sí, **solo después** de comprender el problema |
| Editor integrado | No en el MVP |
| Cursor | Herramienta externa recomendada para implementar |
| Objetivo IA | Enseñar ingeniería, no acelerar la escritura de código |

---

## 4. Usuarios y despliegue inicial

| Tema | Decisión |
|------|----------|
| Usuarios MVP | Founder (+ 1–2 personas como máximo) |
| Entorno | **Local** al inicio — sin auth enterprise |
| Idioma UI | Español |
| Términos técnicos | Inglés por convención (MVP, Mentor, stack, etc.) |

---

## 5. Stack y arquitectura

| Tema | Decisión |
|------|----------|
| Criterio | **Producto primero** — no preferencia personal del founder |
| Elección | Ver [ADR-008](../architecture/adr/ADR-008-stack-selection.md) |
| Estilo | Modular monolith hasta demostrar lo contrario ([ADR-006](../architecture/adr/ADR-006-simplicity-first.md)) |

---

## 6. Motivación (inspiración Duolingo, no copia)

### Queremos

- Path visual claro
- Progreso visible
- Celebrar logros importantes
- Mostrar evolución del estudiante
- Metas alcanzables
- Feedback positivo

### No queremos

- Castigos, vidas, presión artificial, FOMO, culpa por faltar

**Principio:** el alumno vuelve porque **siente que progresa**, no por miedo a perder una racha.

Detalle: [ENGAGEMENT_DESIGN.md](../product/ENGAGEMENT_DESIGN.md).

---

## 7. Descarga del Practice Project (MVP)

El learner **no** descarga ZUZU.

Descarga **su Practice Project** al terminar un módulo/viaje:

- código
- documentación generada (spec SDD)
- decisiones importantes
- README
- estructura profesional

Debe poder **seguir evolucionando el proyecto fuera de ZUZU**.

---

## 8. Primer viaje: Gastos Hormiga

| Tema | Decisión |
|------|----------|
| Rol | **Primer viaje** disponible en la app al crear cuenta |
| No es | Ejemplo aislado en `examples/` ni solo documentación |
| Por qué | Problema real, simple, enseña ingeniería, recorre SDD completo, producto demostrable |
| Nombre interno | **"Hello World" de ZUZU** |

Contenido pedagógico: Capítulos 1–3 (+ 4–8 cuando existan) aplicados a Gastos Hormiga.

---

## 9. Documentación histórica

- **No eliminar** sin revisión explícita.
- Auditar y clasificar: Keep | Refactor | Merge | Archive.
- Archive en `docs/90-archive/` con trazabilidad.
- Ver [DOC_AUDIT.md](../knowledge/DOC_AUDIT.md).

---

## 10. Regla de aprendizaje (decisiones futuras)

Complementa la regla de oro de la tesis.

> **Cada decisión debe justificarse desde el aprendizaje, no desde la ingeniería.**

- No elegimos tecnología porque esté de moda.
- No agregamos features porque sean impresionantes.
- No incorporamos IA porque sea posible.

**Pregunta única:**

> **¿Esto ayuda al estudiante a desarrollar mejor criterio como ingeniero de software colaborando con IA?**

| Respuesta | Acción |
|----------|--------|
| **Sí** | Puede pertenecer a ZUZU |
| **No** | Fuera del MVP o etapa futura — aunque sea excelente idea técnica |

---

## Relacionados

- [PRODUCT_THESIS.md](./PRODUCT_THESIS.md)
- [ADR-008](../architecture/adr/ADR-008-stack-selection.md)
- [ADR-009](../architecture/adr/ADR-009-ai-default-provider.md)
- [START_HERE.md](../../START_HERE.md)
- [LEARNING_CURRICULUM.md](../knowledge/curriculum/LEARNING_CURRICULUM.md)
