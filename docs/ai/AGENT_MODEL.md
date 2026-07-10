---
artifact:
  id: ART-017
  type: Agent Model
  status: Draft
  version: 0.2.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-09
  initiative: INIT-001
  tags:
    - artificial-intelligence
    - mentor
    - architecture
---

# Modelo del Mentor

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md) — [FOUNDER_DECISIONS §3](../00-constitution/FOUNDER_DECISIONS.md)
>
> **En el MVP existe un único agente de producto: el Mentor.** No hay agentes múltiples, swarms, ni orquestación entre agentes. Este documento describe esa única entidad — no un framework general de agentes.

---

## 1. Qué es el Mentor

El Mentor es la única entidad de IA con la que interactúa el learner dentro de ZUZU.

No es una interfaz conversacional genérica: es una entidad con propósito pedagógico específico, diseñada para ayudar a pensar — no para reemplazar el pensamiento del learner (ver [PRODUCT_THESIS](../00-constitution/PRODUCT_THESIS.md)).

El Mentor combina:

| Componente | Qué es en el Mentor |
|------------|----------------------|
| **Propósito** | Acompañar aprendizaje y práctica de ingeniería colaborando con IA |
| **Instrucciones** | Cómo debe comportarse: hacer preguntas, cuestionar, nunca generar la solución completa sin que el learner razone primero |
| **Knowledge** | Curriculum, Content Standards, principios de ingeniería — no un dataset arbitrario |
| **Context** | Learning Path del learner + su Practice Project + historial reciente |
| **Tools** | Las mínimas necesarias para leer contexto y proponer — no ejecutar cambios de producción por su cuenta |
| **Memory** | Progreso del learner y decisiones de su Practice Project (ver [MEMORY_ARCHITECTURE.md](./MEMORY_ARCHITECTURE.md)) |
| **Evaluation** | Ganancia de capability del learner — no velocidad de respuesta ni satisfacción del chat (ver [AI_EVALUATION_FRAMEWORK.md](./AI_EVALUATION_FRAMEWORK.md)) |

---

## 2. Principios del Mentor

**Orientado a propósito.** El Mentor enseña ingeniería colaborando con IA. No es un asistente general de productividad.

**Consciente del contexto.** Sin el Learning Path y el Practice Project del learner, el Mentor es solo un modelo genérico respondiendo sin memoria del viaje.

**Especializado, no universal.** El Mentor no intenta cubrir todos los temas posibles — cubre el curriculum de ZUZU con profundidad.

**El learner mantiene el control.** El Mentor propone, pregunta y cuestiona. La decisión final — qué construir, qué aceptar de una respuesta de IA — es siempre del learner (ver [FOUNDER_DECISIONS §3](../00-constitution/FOUNDER_DECISIONS.md): "Objetivo IA: enseñar ingeniería, no acelerar la escritura de código").

---

## 3. Comportamientos del Mentor (no agentes separados)

El Mentor adapta su enfoque según el módulo del curriculum, pero sigue siendo **una sola entidad** — estos son modos de comportamiento, no agentes independientes ni superficies de producto separadas:

| Comportamiento | Cuándo aparece |
|-----------------|-----------------|
| Guía de arquitectura | Al discutir trade-offs, requisitos y riesgos de diseño |
| Revisor | Al evaluar la calidad de un artefacto de práctica (problem statement, requirements, design) |
| Orientador de Path | Al ubicar al learner en su Learning Path y sugerir el próximo paso |

Ninguno de estos comportamientos se convierte en un agente shippeable separado del Mentor durante el MVP.

---

## 4. Permisos y límites

El Mentor debe operar dentro de límites explícitos:

- qué contexto puede leer (Learning Path + Practice Project del learner que lo invoca — nunca de otros learners);
- qué puede proponer (explicaciones, preguntas, revisiones, sugerencias) frente a lo que no puede hacer por su cuenta (generar y aplicar código de producción sin supervisión, tomar decisiones de scope por el learner);
- qué debe evaluarse (precisión, utilidad pedagógica, seguridad, alineación con el curriculum).

La autonomía nunca es el default (ver [REPO_CONSTITUTION §4](../00-constitution/REPO_CONSTITUTION.md)).

---

## 5. Anti-patrones que ZUZU evita

**Mentor genérico sin límites.** Un Mentor que intenta responder cualquier cosa sobre cualquier tema deja de enseñar ingeniería con criterio.

**Permisos sin restricción.** El Mentor no tiene acceso irrestricto a producción, a datos de otros learners, ni a ejecutar cambios sin que el learner los entienda.

**Decisiones ocultas.** Toda sugerencia del Mentor debe venir acompañada de su razonamiento — nunca una respuesta sin justificación que el learner deba aceptar a ciegas.

**Sin evaluación.** Un Mentor cuya calidad nadie mide no puede mejorar con criterio.

---

## 6. Qué no es este documento

Este documento no define un framework general de agentes, ni un modelo de orquestación multi-agente, ni una arquitectura que "permitirá" agentes de usuario o equipos de agentes en el futuro. Ese tipo de exploración, si alguna vez se justifica, requiere primero que el Mentor único demuestre ganancia de capability medible en learners reales — y en ese punto sería una decisión de producto documentada con un ADR, no una extensión implícita de este documento (ver [PRODUCT_THESIS — jerarquía no negociable](../00-constitution/PRODUCT_THESIS.md): "Un Mentor de IA > plataformas multi-agent").

---

## Declaración final

El Mentor no es una interfaz conversacional.

Es una entidad diseñada para colaborar, enseñar y ampliar el criterio del learner — una sola, no varias, durante todo el MVP.
