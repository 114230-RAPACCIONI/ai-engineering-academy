---
artifact:
  id: ART-008
  type: MVP Product Spec
  status: Canonical
  version: 0.6.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - product
    - mvp
    - requirements
    - features
    - stories
    - learning
  absorbs:
    - ART-005 Product Requirements
    - ART-007 Feature Specifications
    - ART-006 User Stories
---

# MVP — Product Spec

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Regla de oro: **¿Ayuda al learner a pensar, diseñar y construir mejor software — colaborando con IA — independientemente de un stack concreto?**
> Si no es claramente SÍ → fuera del MVP.
>
> Este archivo es la **única verdad de producto** del MVP. Los antiguos `PRODUCT_REQUIREMENTS`, `FEATURE_SPECIFICATIONS` y `USER_STORIES` son stubs archivados.

---

## 1. Hipótesis

> Path + Knowledge + un Mentor + Practice Project forman ingenieros capaces de **pensar, diseñar y construir** con IA — sin atarse a un stack.

La práctica operativa es **[Spec-Driven Development (SDD)](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering)** — ver [ADR-005](../architecture/adr/ADR-005-spec-driven-development.md) y [START_HERE.md](../../START_HERE.md).

---

## 1.1 Fases del MVP (orden obligatorio)

| Fase | Qué es | Estado | Éxito |
|------|--------|--------|-------|
| **Fase 0 — SDD en repo** | Curriculum + Practice Project en markdown + Mentor externo | **Activo ahora** | 1 learner humano completa Cap. 1–3 (+ I1 cuando exista Cap. 4) y quiere seguir |
| **Fase 1 — Plataforma** | App: Identity, Path, Knowledge, Mentor, Progress | Después de Fase 0 | Métricas falsables §9 con instrumento de capability |

**Regla:** no implementar Fase 1 ni extender arquitectura de plataforma hasta validar Fase 0.

Durante Fase 0, las capacidades C1–C6 abajo son **diseño objetivo** de la plataforma — no requisitos de implementación inmediata.

---

## 2. Principios de producto

1. Engineering before tools (identidad de curriculum **stack-independent**)  
2. Aprender construyendo (pensar — diseñar — construir)  
3. IA como Mentor (amplifica; no reemplaza el pensamiento)  
4. Contexto gestionado para aprender — Path + Practice + Progress  
5. Complejidad progresiva  

---

## 3. Objetivo

El learner debe poder:

1. Crear identidad y objetivos  
2. Recibir un Learning Path  
3. Aprender desde la Knowledge Base  
4. Trabajar con **un** Mentor  
5. Practicar en un Practice Project  
6. Ver progreso básico de capability  

---

## 4. Journey (MVP)

```
Registro → Perfil + objetivo → Learning Path (Capítulo 1) → Knowledge
→ Mentor → Practice Project (fase Planning) → Feedback / reflexión
```

**Curriculum del MVP:** el primer arco del Learning Path es el [Capítulo 1 — De la idea al scope](../knowledge/curriculum/chapters/CHAPTER_01_FROM_IDEA_TO_SCOPE.md). Mapa completo del viaje: [LEARNING_CURRICULUM.md](../knowledge/curriculum/LEARNING_CURRICULUM.md).

Journey emocional (canónico): [USER_JOURNEY.md](./USER_JOURNEY.md).

---

## 5. Capacidades y features

### C1 — User Identity (Must)

| | |
|--|--|
| **Incluye** | Registro, perfil, objetivos, experiencia previa |
| **Excluye** | Perfiles públicos, grafo social, reputación |
| **Stories** | US-001, US-002 |
| **Acceptance** | Puede registrarse; definir experiencia; definir objetivos; editar perfil |

**Flow:** Registro → Perfil → Objetivos  

---

### C2 — Learning Path (Must)

| | |
|--|--|
| **Incluye** | Etapas, modules, progreso, objetivos |
| **Excluye** | Personalización avanzada multi-modelo, marketplace de cursos |
| **Vocabulario** | `LearningPath` / `Module` — **no** `Course` |
| **Stories** | US-003, US-004 |
| **Acceptance** | Muestra etapa actual, próximos objetivos, progreso; los challenges tienen goal/contexto/resultado esperado/feedback |

**Flow:** Objetivo → Path → Completar etapas → Avanzar  

---

### C3 — Knowledge Base (Must)

| | |
|--|--|
| **Incluye** | Conceptos, explicaciones, ejemplos, relaciones simples, búsqueda |
| **Excluye** | Plataforma de Knowledge Graph, contenido infinito, cursos externos clonados |
| **Stories** | US-005, US-006 |
| **Estructura** | Concepto → Explicación → Ejemplos → Uso práctico → Relaciones |

---

### C4 — AI Mentor (Must)

| | |
|--|--|
| **Incluye** | Chat contextual (Path + Practice), explicar, preguntar, feedback, orientación |
| **Excluye** | Build autónomo, reemplazo del usuario, fleets multi-agent, “modes” de producto |
| **Stories** | US-007, US-008 |
| **Comportamiento** | Enseñar antes de responder; preguntar antes de asumir; explicar; nunca ocultar la incertidumbre |

**Debe considerar:** perfil del learner, progreso, objetivos, Practice Project actual.

---

### C5 — Practice Project (Must)

| | |
|--|--|
| **Incluye** | Projects, goal de aprendizaje, docs ligeros, decisiones ligeras, progreso |
| **Excluye** | Git hosting, CI/CD, deploy, Releases, Code/API/DB como raíces de navegación, team workspaces |
| **Stories** | US-009, US-010 |
| **Estructura** | Goal — Requirements — Decisions — Documentation — Progress |

Antes se llamaba “Project Workspace” — renombrado para evitar drift de herramienta de PM.

---

### C6 — Progress Tracking (Should)

| | |
|--|--|
| **Incluye** | Avance del Path, Practice Projects, señales de skill |
| **Excluye** | Rankings, competencias, vanity metrics |
| **Stories** | US-011, US-012 (US-012 recomendaciones = livianas) |

---

## 6. Requisitos funcionales

| ID | Requisito |
|----|-------------|
| FR-001 | Gestionar cuentas / identidad del learner |
| FR-002 | Registrar progreso de aprendizaje en el Path |
| FR-003 | Acceder a conocimiento organizado |
| FR-004 | Interactuar con el Mentor |
| FR-005 | Gestionar Practice Projects |

---

## 7. No funcionales (barra MVP — no ensayos enterprise)

| Área | Barra MVP |
|------|---------|
| Performance | La UI se siente responsive; el Mentor hace streaming cuando sea posible |
| Security | Auth + ownership de recursos del learner; proteger prompts/PII hacia providers |
| Scalability | Modular monolith; sin distribución prematura |
| Maintainability | Módulos claros: Identity, Learning, Knowledge, Projects, AI, Progress |

---

## 8. Fuera de alcance

| Fuera | Por qué |
|-----|--------|
| Community / marketplace / certification | No es la hipótesis |
| Payments / Billing / Workspace org | No somos un SaaS OS |
| Plataforma multi-agent / Builder Mode | Primero validar un Mentor |
| Event bus / API Gateway / multi-region | Viola ADR-006 |
| Plataforma Knowledge Graph | Primero base curada |
| Gamificación pesada | Motivación por progreso real |

---

## 9. Criterios de éxito (falsables)

| Métrica | Definición |
|--------|------------|
| Activation | Completa primera experiencia Path + Mentor **o** Practice |
| Engagement | Vuelve y continúa el Path en N días |
| Creation | Termina ≥1 Practice Project Capítulo 1 (artefactos de planeamiento completos) |
| Mentor use | Usa el Mentor como colaborador (no puro codegen) |
| Capability | Mejora medible en rúbrica simple pre/post de diseño/decisión |

Sin instrumento para Capability, el claim de transformación **no se valida**.

---

## 10. Constraints

Priorizar: simplicidad, velocidad de aprendizaje (org), feedback real.  
No priorizar: cantidad de features, scale prematuro, docs aspiracionales.

El producto no debe: amarrarse a un vendor de IA; enseñar solo tools actuales; reemplazar el pensamiento humano; preferir volumen de contenido sobre calidad.

---

## 11. Índice de user stories prioritarias

| ID | Historia | Prioridad |
|----|-------|----------|
| US-001 | Crear perfil | Alta |
| US-002 | Definir objetivo de aprendizaje | Alta |
| US-003 | Ver Learning Path | Alta |
| US-004 | Completar challenges | Media |
| US-005 | Consultar knowledge | Alta |
| US-006 | Entender antes de aplicar | Alta |
| US-007 | Conversar con el Mentor | Alta |
| US-008 | Feedback sobre soluciones | Media |
| US-009 | Crear Practice Project | Alta |
| US-010 | Documentar decisiones | Media |
| US-011 | Ver progreso | Media |
| US-012 | Recomendaciones de siguiente paso | Baja |

Historias narrativas completas: stub archivado [USER_STORIES](./USER_STORIES.md).

---

## 12. Declaración

El MVP no es una universidad, ni un curso en video, ni un companion de entrega.

Es un entorno donde una persona **aprende a pensar y practicar como ingeniero** con un Mentor de IA.

---

## Relacionados

- [PRODUCT_THESIS](../00-constitution/PRODUCT_THESIS.md)
- [PRODUCT_VISION](./PRODUCT_VISION.md)
- [USER_JOURNEY](./USER_JOURNEY.md)
- [INFORMATION_ARCHITECTURE](./INFORMATION_ARCHITECTURE.md)
- [DOMAIN_MODEL](../architecture/DOMAIN_MODEL.md)
- [AI_PRODUCT_EXPERIENCE](./AI_PRODUCT_EXPERIENCE.md)
- [LEARNING_CURRICULUM.md](../knowledge/curriculum/LEARNING_CURRICULUM.md)
- [CHAPTER_01](../knowledge/curriculum/chapters/CHAPTER_01_FROM_IDEA_TO_SCOPE.md)
- [START_HERE.md](../../START_HERE.md)
