---
artifact:
  id: ART-023
  type: AI Product Experience
  status: Draft
  version: 0.3.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - artificial-intelligence
    - ux
    - product
    - learning
---

# AI Product Experience

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> MVP = un Mentor. Sin modes. Sin agent swarms.
> Éxito = ganancia de capability del learner, no velocidad de respuesta.

---

## Introducción

Define cómo los learners interactúan con la IA en ZUZU.

La IA es el **Mentor**.

No es un copiloto de productividad ni un agent de Product OS.

---

## Filosofía de experiencia

Colaboración pedagógica.

El learner no delega su pensamiento.

Aprende, decide y practica junto al Mentor.

---

## Principio central

```
Intención del learner
+ guía del Mentor
+ práctica de engineering
= mejor ingeniero
```

---

## Learning loop (con Mentor)

```
Understand
?
Practice (Project)
?
Decide
?
Reflect
?
Improve capability
```

El Mentor acompaña el loop.

No lo reemplaza.

---

## MVP: un Mentor

En el MVP existe **un único agent de producto: el Mentor**.

El Mentor puede:

- explicar conceptos;
- adaptar dificultad;
- preguntar antes de asumir;
- enseñar antes de responder;
- desafiar decisiones débiles;
- revisar practice work con criterio pedagógico;
- orientar próximos pasos en el Learning Path.

El Mentor **no** es:

- un builder autónomo;
- un swarm de agents especializados;
- un “mode” por etapa de delivery de producto.

---

## Comportamientos pedagógicos (no modes de producto)

Las siguientes son **comportamientos del mismo Mentor**, no superficies separadas:

| Comportamiento | Meta pedagógica |
|-----------|------------------|
| Explain | Comprensión |
| Challenge | Criterio |
| Scaffold design | Pensamiento de sistemas |
| Review practice | Calidad + aprendizaje |
| Coach next step | Continuidad en el Path |

Implementar “especialistas” solo si la regla de oro lo exige y el Mentor único ya validó retención.

---

## Presencia de la IA

**Useful Presence > Constant Presence**

### Cuándo debe aparecer el Mentor

- bloqueo de aprendizaje;
- concepto nuevo;
- decisión con trade-offs;
- reflexión post-práctica;
- riesgo de dependencia (el Mentor empuja al learner a decidir).

### Cuándo no debe aparecer

- interrumpir constantemente;
- reemplazar el descubrimiento;
- eliminar la práctica;
- entregar código listo para copiar sin pedagogía.

---

## Anti-dependencia

| Malo | Bueno |
|-----|------|
| “Create app” → aquí está el código | Requirements → opciones → trade-offs → practice → review |
| El usuario copia | El usuario explica y decide |

---

## Personalización (MVP liviano)

Basada en: experiencia declarada, objetivo, module actual, progreso.

No requiere plataforma multi-agent.

---

## Transparencia y confianza

El learner debe ver: qué hace el Mentor, por qué sugiere, qué no sabe.

Explanation — Consistency — Control — Feedback.

---

## Vínculo con evaluación

La experiencia se evalúa por **learning outcomes** (ver AI Evaluation Framework), no solo por satisfacción del chat.

---

## Non-goals explícitos (MVP)

- Fleets multi-agent Product / Architecture / QA / Security
- Builder Mode como superficie de producto
- Workflows de ingeniería autónomos
- Agents creados por usuarios

Eso vive en `docs/99-future/` si se revisita.

---

## Relacionados

- [PRODUCT_THESIS](../00-constitution/PRODUCT_THESIS.md)
- [PRODUCT_EXPERIENCE_VISION](./PRODUCT_EXPERIENCE_VISION.md)
- [MVP_SCOPE](./MVP_SCOPE.md)
- [AI_ARCHITECTURE](../ai/AI_ARCHITECTURE.md)
- [AI_GOVERNANCE_MODEL](../ai/AI_GOVERNANCE_MODEL.md)

---

## Declaración final

ZUZU no usa IA para crear dependencia.

Usa IA para crear ingenieros más capaces.

Un Mentor bien diseñado vence a cinco modes mal justificados.
