---
artifact:
  id: ART-018
  type: Context Engineering Strategy
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
    - context-engineering
    - agents
    - rag
---

# Estrategia de context engineering

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> El contexto existe para que el **Mentor** ayude a los learners a **pensar, diseñar y construir** — no para que flotas de agentes “decidan” como un work OS.
> Preferir slices de Path + Practice + Knowledge frente a volcar todo.

---

## Introducción

Este documento define cómo Project ZUZU construye, administra y entrega contexto al Mentor (y, en el futuro, a otros agentes solo si la tesis lo exige).

El objetivo: mejor mentoreo con la información adecuada en el momento adecuado.

---

## Filosofía

En ZUZU el contexto es un recurso estratégico.

No se trata de enviar más información.

Se trata de enviar la información correcta para Learning.

---

## Principio central

```text
Más contexto ≠ mejor contexto
```

El exceso de información puede reducir la calidad de la respuesta del Mentor.

---

## Definición de contexto

Dentro de ZUZU, contexto es:

- información relevante al Learning Path y a la Practice;
- estado actual (Progress);
- objetivo del learner;
- restricciones y ownership;
- historial mínimo necesario.

---

## Fuentes de contexto

El contexto puede provenir de:

| Fuente | Uso |
|--------|-----|
| Perfil del learner | Identidad, nivel, preferencias |
| Learning Progress | Qué ya se formó |
| Practice Project actual | Diseño / construcción en curso |
| Artifacts | Entregables de práctica |
| Knowledge Base | Conceptos y principios |
| Conversation History | Hilo reciente con el Mentor |
| System Rules | Límites, safety, tesis |

---

## Arquitectura de contexto (conceptual)

```text
          Learner request
                 │
      Context Engineering Layer
                 │
   ┌─────────────┼─────────────┐
   │             │             │
 Learner      Practice      Knowledge
 Progress      Project       Base
   │             │             │
   └─────────────┼─────────────┘
                 │
          Context Builder
                 │
              Mentor
                 │
               Model
```

No es un multi-agent OS: es una capa que alimenta **un** Mentor en el MVP.

---

## Capa de context engineering

Responsabilidad: construir el contexto necesario **antes** de ejecutar el Mentor.

Debe:

- identificar intención (aprender / diseñar / construir / revisar);
- seleccionar información (Path — Practice — Knowledge — Progress);
- aplicar permisos;
- ordenar prioridad;
- reducir ruido.

---

## Proceso de ensamblado

```text
Request
  → Intent analysis
  → Context retrieval
  → Permission validation
  → Context ranking
  → Context compression
  → Mentor execution
```

---

## Categorías de contexto

### Identity context

Quién es el learner: experiencia, objetivos, preferencias.

---

### Learning context

Progress, skills en formación, conceptos ya trabajados en el Path.

---

### Practice / Project context

Requisitos de práctica, arquitectura en construcción, decisiones de diseño.

---

### Knowledge context

Documentación, principios, ejemplos pedagógicos.

---

### Conversation context

Preguntas y decisiones recientes en el hilo con el Mentor.

---

## Prioridad de contexto

No toda información tiene el mismo valor. Orden inicial:

```text
Current Goal (capability / práctica)
      ?
Practice Project context
      ?
Learning / Progress context
      ?
Relevant Knowledge
      ?
Historical context
```

Evitar volcar el corpus completo o el historial entero.

---

## Estrategia de retrieval

Conceptualmente:

```text
Question → Search → Relevant Knowledge → Context → Mentor
```

---

## Estrategia RAG

Retrieval Augmented Generation combina:

- conocimiento general del model;
- Knowledge de ZUZU (Path, principios, práctica).

Principios: recuperar lo relevante; mantener fuentes; evitar ruido.

---

## Estrategia de memoria

La memoria debe ser selectiva.

### Short-term memory

Conversación actual y contexto temporal de la sesión.

### Long-term memory

Preferencias, evolución del learner, Practice Projects relevantes, aprendizajes (Capability / Progress).

### Reglas

Nunca guardar: información innecesaria; datos sensibles sin autorización; contexto irrelevante al Learning.

---

## Seguridad de contexto

Todo contexto debe pasar validación:

```text
Data → Permission check → Context Layer → Mentor
```

---

## Aislamiento de contexto

El Mentor no debe recibir el sistema entero.

Solo: **Minimum Required Context**.

---

## Optimización

Optimizar: relevancia, tamaño, costo, latencia — sin sacrificar pedagogía.

---

## Evaluación de contexto

| Dimensión | Pregunta |
|-----------|----------|
| Relevance | ¿La información era útil para mentorear? |
| Accuracy | ¿El contexto era correcto? |
| Efficiency | ¿Cuánto contexto fue realmente necesario? |

Alinear con AI_EVALUATION_FRAMEWORK (capability primary).

---

## Anti-patrones

- **Context overflow** — enviar demasiada información.
- **Missing context** — omitir Path / Practice / Progress necesarios.
- **Wrong context** — información incorrecta o de otro learner.
- **Unsafe context** — exponer información privada.
- **Work-OS dump** — contexto pensado para “decidir y entregar” en vez de formar.

---

## Evolución futura

Memoria avanzada, personalización más fina e integraciones — solo tras validar el Mentor con contexto Path + Practice + Knowledge. Flotas multi-agent: fuera del MVP (ver `docs/99-future/`).

---

## Declaración final

La estrategia de contexto define cómo Project ZUZU convierte información en mentoreo útil.

La ventaja competitiva no será solo usar models avanzados.

Será construir el contexto correcto — Path, Practice, Knowledge, Progress — para que el Mentor forme ingenieros capaces de pensar, diseñar y construir.
