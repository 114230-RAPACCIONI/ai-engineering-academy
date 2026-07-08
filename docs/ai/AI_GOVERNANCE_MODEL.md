---
artifact:
  id: ART-021
  type: AI Governance Model
  status: Draft
  version: 0.2.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - artificial-intelligence
    - governance
    - security
    - ethics
---

# Modelo de gobernanza de IA

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md) — [SECURITY.md](../security/SECURITY.md)
>
> Learning safety > task completion. El Mentor enseña; la autonomy nunca es el default.
> Un Mentor en el MVP — no teatro de gobernanza multi-agent.

---

## Introducción

Este documento define cómo Project ZUZU controla, supervisa y evoluciona sus sistemas de inteligencia artificial.

La gobernanza permite que la IA sea útil, segura, transparente y confiable — **sin** sacrificar el aprendizaje por completar una tarea.

---

## Filosofía de gobernanza

La IA debe aumentar la capability humana (pensar — diseñar — construir).

Nunca debe eliminar:

- criterio;
- responsabilidad;
- decisión humana.

Completar una tarea más rápido a costa de learning safety es un fallo de gobernanza.

---

## Principio central

```text
Asistencia de IA ≠ autoridad autónoma
```

La IA recomienda y enseña.

El humano decide.

En MVP: **un Mentor**. No orquestación multi-agent.

---

## Objetivos de gobernanza

Garantizar:

- calidad pedagógica y técnica;
- learning safety y security;
- privacidad;
- transparencia;
- evolución controlada (change management).

---

## Límites de decisión de la IA

No todas las acciones tienen el mismo nivel de riesgo.

### Acciones de bajo riesgo

Ejemplos: explicar conceptos; generar ejemplos pedagógicos; sugerir mejoras de razonamiento.

Pueden ejecutarse de forma más automática (siempre auditables).

---

### Acciones de riesgo medio

Ejemplos: recomendar arquitectura; modificar documentación; proponer cambios en un Practice Project.

Requieren revisión humana.

---

### Acciones de alto riesgo

Ejemplos: modificar producción; acceder información sensible; tomar decisiones críticas de producto o seguridad.

Requieren aprobación humana explícita. En MVP, tools con side-effects: deny-by-default.

---

## Human in the loop

La participación humana depende del impacto.

```text
Mentor sugiere
      ?
Humano revisa
      ?
Humano aprueba
      ?
Sistema ejecuta (si aplica)
```

Autonomy nunca es el default.

---

## Gobernanza del Mentor (MVP)

El Mentor debe definir de forma explícita:

| Campo | Contenido |
|-------|-----------|
| Purpose | Mentoreo pedagógico alineado a la tesis |
| Permissions | Mínimos necesarios (least privilege) |
| Tools | Lista cerrada; deny-by-default para side-effects |
| Limits | Qué nunca puede hacer |
| Evaluation criteria | Capability rubric + safety |

No hay “flota de agentes” que gobernar en el MVP: hay un Mentor con boundaries claros.

---

## Permisos (least privilege)

El Mentor solamente recibe lo necesario para mentorear.

Principio: **Least Privilege**.

---

## Gobernanza de datos

Los datos utilizados por IA deben cumplir: autorización, trazabilidad y protección.

---

## Gobernanza de contexto

El contexto enviado al model debe ser necesario, permitido y verificable (ver CONTEXT_ENGINEERING).

---

## Gobernanza de models

Cada model utilizado debe registrar: versión, proveedor, propósito y limitaciones.

Independencia de proveedor donde la arquitectura lo permita (ver ADR-001).

---

## Change management de IA

Cambios importantes del Mentor requieren:

```text
Proposal → Review → Testing (golden set) → Approval → Deployment
```

---

## Auditabilidad

El sistema debe poder responder:

- qué Mentor / agente actuó;
- qué contexto recibió;
- qué model utilizó;
- qué resultado generó;
- si hubo evaluación.

---

## Logs de IA

Debe registrarse: Request, Context (según política), Agent, Model, Response Metadata, Evaluation.

Sin data innecesaria ni secretos en claro.

---

## Gobernanza de evaluación

Toda capability de IA debe medirse (ver AI_EVALUATION_FRAMEWORK).

| Criterio | Pregunta |
|----------|----------|
| Quality | ¿La respuesta es útil y pedagógica? |
| Accuracy | ¿La información es correcta? |
| Safety | ¿Respeta límites y learning safety? |
| Capability / User Value | ¿Mejora pensar — diseñar — construir? |

Task completion sola no basta.

---

## Gestión de fallos

Los errores de IA se tratan como incidentes:

```text
Detection → Analysis → Correction → Learning
```

---

## Transparencia

El learner debe saber:

- cuándo interactúa con IA;
- qué capacidades tiene el Mentor;
- cuáles son sus límites.

---

## Anti-patrones

- **Black box AI** — sistemas sin explicación.
- **Unlimited agents** — permisos excesivos o multi-agent sin Mentor validado.
- **Uncontrolled evolution** — cambios de prompt/model sin seguimiento.
- **Blind trust** — aceptar respuestas sin validación.
- **Task completion over learning** — optimizar “cerrar la tarea” a costa de capability y safety.

---

## Evolución futura

Equipos de agentes, autonomía mayor y auditabilidad avanzada quedan en `docs/99-future/` hasta que el Mentor MVP demuestre lift de capability con safety aceptable.

---

## Declaración final

Project ZUZU considera la gobernanza de IA como capacidad fundamental.

La inteligencia artificial debe ser poderosa — y responsable.

Learning safety > task completion. Un Mentor. Ownership humano.
