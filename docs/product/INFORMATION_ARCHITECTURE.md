---
artifact:
  id: ART-047
  type: Information Architecture
  status: Draft
  version: 0.3.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - product
    - information-architecture
    - learning
  supersedes: "0.1.0 Project-centric draft"
---

# Information Architecture

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Learning es el producto. Los projects son el entorno de aprendizaje.

---

## 1. Propósito

Define cómo se organiza la información en Project ZUZU.

No describe pantallas.

Describe el **modelo mental del learner**.

---

## 2. Jerarquía central (Learning First)

```
Learner (User)
  ?
Learning Journey / Learning Path
  ?
Modules — Knowledge — Skills
  ?
Project (entorno de práctica)
  ?
Artifacts — conversaciones con el Mentor — evidencia de Progress
```

**El sol del sistema es el learner y su journey.**

Project no es un Product OS.

Project es donde el learner **practica** ingeniería.

---

## 3. Superficie de cuenta (MVP)

```
Cuenta del learner
├── Profile (objetivos, experiencia)
├── Learning Path
├── Acceso a Knowledge
├── Projects (práctica)
├── Mentor
└── Progress
```

**Fuera del modelo informacional del MVP:**

- Workspace organizacional
- Billing
- Members / admin de org
- Releases, Metrics dashboards como superficies de producto
- Árboles tipo IDE (Code / APIs / Database) como navegación de primer nivel

---

## 4. Jerarquía del Learning Path

```
Learning Path
├── Goal
├── Stages / Modules
├── Concepts (Knowledge)
├── Skills a desarrollar
├── Practice Projects
└── Checkpoints de Progress
```

---

## 5. Project como entorno de práctica

Cada project de aprendizaje contiene solo lo necesario para practicar y evidenciar capability:

```
Project
├── Goal (¿qué capability practico?)
├── Requirements / planteo del problema
├── Decisions (livianas)
├── Documentation
├── Conversaciones con el Mentor (atadas a esta práctica)
└── Progress / reflexión
```

Si una superficie no responde a la regla de oro — *¿ayuda a pensar, diseñar y construir mejor con IA, independiente del stack?* — no entra en el árbol del MVP.

---

## 6. Knowledge (no plataforma Knowledge Graph)

El MVP usa una **Knowledge Base curada**:

- conceptos;
- explicaciones;
- ejemplos;
- relaciones simples entre conceptos.

Un “Knowledge Graph” industrial queda en `docs/99-future/` hasta que mida outcomes de learning.

---

## 7. Capas de contexto (para el Mentor)

| Capa | Contenido |
|------|----------|
| Learner | Objetivos, nivel, preferencias, progreso |
| Path | Module actual, conceptos en foco |
| Project | Goal de práctica, decisiones, artifacts |
| Session | Conversación actual |
| Task | Actividad de aprendizaje inmediata |

La memoria sirve al **progreso del learner** y al project como práctica — no a un work OS de equipo.

---

## 8. Ownership de información (MVP)

| Entidad | Owner |
|---------|-------|
| Progreso del Learning Path | Learner |
| Artículos de Knowledge | Platform |
| Project (práctica) | Learner |
| Conversación con el Mentor | Learner (+ scope de project cuando está atada a práctica) |
| Decisions / docs en el project | Learner |

Ownership de team/workspace = Future.

---

## 9. Filosofía de navegación

Navegación por **intención de aprendizaje**, no por herramientas:

```
Quiero entender (Knowledge / Mentor)
?
Quiero practicar (Project)
?
Quiero revisar (Mentor / reflexión)
?
Quiero ver mi progreso (Progress)
```

---

## 10. Anti-patterns (rechazados)

- Everything revolves around the Project
- Árboles SaaS Workspace-first (Billing, Members, Releases)
- Superficies Project OS (Code, APIs, Database, Metrics como raíces de nav)
- Chatbot sin Path ni Practice
- Duplicar el Domain Model con vocabulario `Course`

---

## 11. Criterios de éxito

El learner nunca debería preguntarse: “¿Dónde está el work OS?”

Debería preguntarse: “¿Qué estoy aprendiendo y qué practico a continuación?”

---

## Relacionados

- [PRODUCT_THESIS](../00-constitution/PRODUCT_THESIS.md)
- [PRODUCT_VISION](./PRODUCT_VISION.md)
- [USER_JOURNEY](./USER_JOURNEY.md)
- [DOMAIN_MODEL](../architecture/DOMAIN_MODEL.md)
- [MVP_SCOPE](./MVP_SCOPE.md)
