---
artifact:
  id: ART-022
  type: AI Evaluation Framework
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
    - evaluation
    - quality
    - reliability
---

# Framework de evaluación de IA

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Éxito primario: lift de **capability** del learner (pensar — diseñar — construir con IA), no solo satisfacción del chat ni accuracy cruda.
> Mentorship quality > velocidad de codegen. Alinear con la Capability rubric del MVP.

---

## Introducción

Este documento define cómo Project ZUZU evalúa la calidad, confiabilidad y evolución de sus sistemas de inteligencia artificial — en particular el **Mentor**.

El objetivo es tratar la IA como un sistema de ingeniería medible al servicio del Learning.

---

## Filosofía de evaluación

Una respuesta “correcta” no siempre es una buena respuesta pedagógica.

La calidad del Mentor depende de múltiples dimensiones; la métrica que manda es:

> ¿El learner queda más capaz de pensar, diseñar y construir?

Chat satisfaction, latencia y accuracy son secundarias.

---

## Principio central

```text
Output del Mentor → Evaluation → Feedback → Mejora del Mentor
```

Sin golden set, sin rúbrica de Capability y sin regresión: no hay release.

---

## Objetivos del framework

El framework busca responder:

- ¿El Mentor ayuda realmente a formar capability?
- ¿La respuesta es correcta *y* pedagógica?
- ¿Utiliza el contexto adecuado (Path — Practice — Knowledge — Progress)?
- ¿Respeta límites de safety y ownership humano?
- ¿Mejora con el tiempo sin romper lo que ya funciona?

---

## Dimensiones de evaluación

### Accuracy

¿La información entregada es correcta?

Ejemplos: conceptos técnicos, recomendaciones, explicaciones.

---

### Relevance

¿La respuesta responde al objetivo real de aprendizaje o de diseño?

Una respuesta correcta pero irrelevante es una mala respuesta.

---

### Calidad de contexto

¿El Mentor utilizó el contexto correcto?

Evaluamos: información usada, omitida e innecesaria (ver CONTEXT_ENGINEERING).

---

### Calidad de razonamiento

¿El Mentor explica decisiones y trade-offs?

Especialmente crítico en ingeniería: enseñar a pensar > entregar código.

---

### Safety

¿La respuesta respeta reglas, límites y learning safety?

Completar la tarea a costa de seguridad pedagógica o de riesgo inaceptable es fallo.

---

### Valor para el learner (User Value / Capability)

¿La interacción mejora la capability del learner?

Esta dimensión es la **primaria** para ZUZU.

---

### Mentorship quality

¿Guía, pregunta y scaffolding — o solo codegen?

Mentor quality > codegen. Si acelera código y no forma criterio, falla la tesis.

---

## Niveles de evaluación

### Nivel 1 — Evaluación del model

Modelo utilizado, capacidades y limitaciones.

---

### Nivel 2 — Evaluación del Mentor (agente)

Comportamiento, prompt / instrucciones, tools permitidas, límites.

En MVP: **un** Mentor — no flota multi-agent.

---

### Nivel 3 — Evaluación del workflow de aprendizaje

Procesos completos learner → Mentor → outcome de capability.

```text
Learner request
      ?
Mentor
      ?
Explicación / guía / revisión
      ?
Outcome del learner (capability)
```

---

## Métodos de evaluación

### Evaluación automatizada

Validaciones, reglas, comparación contra golden set / expected behavior.

---

### Evaluación humana (learner)

Utilidad pedagógica, claridad, confianza, sensación de progreso.

---

### Expert review

Especialistas revisan: arquitectura de la respuesta, trade-offs, calidad técnica y pedagógica.

---

## Dataset y casos de prueba

El Mentor debe evaluarse con casos conocidos (golden set).

```text
Input → Expected Behavior → Actual Result → Score
```

Ejemplo de scenario:

| Campo | Valor |
|-------|--------|
| Agente | Mentor |
| Scenario | Diseñar arquitectura de API en un Practice Project |
| Expected | Explicar trade-offs; preguntar; no imponer stack; ownership del diseño en el learner |

Cada change relevante del Mentor debe pasar regression testing: una mejora no debe romper capabilities existentes.

---

## Pipeline de evaluación

```text
Change → Test Cases / golden set → Evaluation → Analysis → Approval → Release
```

---

## Feedback loop

```text
Interacción del learner → Feedback → Analysis → Improvement → Nueva versión
```

---

## Métricas

| Métrica | Rol |
|---------|-----|
| **Capability lift** (rúbrica pensar — diseñar — construir) | Primaria |
| Mentorship quality score | Primaria / proxy |
| Correction rate | Secundaria |
| Success rate (interacciones útiles) | Secundaria |
| User satisfaction | Secundaria |
| Efficiency (costo / latencia) | Terciaria |

No optimizar codegen speed ni activity metrics a costa de capability.

---

## Scorecard del Mentor

Cada versión del Mentor debe tener scores explícitos:

- Quality Score
- Safety Score
- Context Score
- Capability / User Value Score
- Mentorship Score

---

## Análisis de fallos

Cuando el Mentor falla, no solo corregimos la respuesta: analizamos la causa.

Puede ser: mal contexto, prompt incorrecto, tool incorrecta, model insuficiente, o métrica alineada al producto equivocado (p. ej. maximizar codegen).

---

## Anti-patrones

- **Sin evaluación** — “funciona porque parece bueno”.
- **Solo benchmarking** — medir números sin capability.
- **Ignorar al learner** — no usar feedback real de aprendizaje.
- **Sin regression testing** — mejorar una cosa y romper otra.
- **Optimizar codegen** — velocidad de generación > mentorship.

---

## Evolución futura

Evaluación automática avanzada, scorecards más ricos y observabilidad completa — solo después de que el Mentor MVP demuestre lift de capability. Capacidades multi-agent o autonomía no forman parte del MVP de evaluación activa.

---

## Declaración final

Project ZUZU trata la inteligencia artificial como un sistema crítico al servicio del Learning:

Debe medirse. Debe probarse. Debe evolucionar — con **capability del learner** como métrica que manda.
