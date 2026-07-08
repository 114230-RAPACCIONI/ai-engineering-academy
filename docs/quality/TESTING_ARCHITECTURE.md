---
artifact:
  id: ART-035
  type: Testing Architecture
  status: Draft
  version: 0.2.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - testing
    - quality
    - learning
---

# Testing Architecture

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Prioridad de tests en el MVP: corrección del Learning Path — flows de Practice Project —
> **evals de capability del Mentor** — security de ownership.
> Pirámides event/load/enterprise esperan. La regla de oro decide qué testeamos.

---

## 1. Propósito

Definir cómo aseguramos calidad **sin** teatro de testing enterprise antes de validar Learning.

---

## 2. Filosofía

Quality se construye desde el diseño.

Testear lo que protege el learning loop:

`Path → Knowledge → Mentor → Practice → Progress`

---

## 3. Prioridades del MVP

| Prioridad | Qué | Por qué |
|-----------|-----|---------|
| P0 | Auth + ownership (un learner no ve datos de otro) | Confianza |
| P0 | Learning Path / Progress básicos | Producto |
| P0 | Practice Project CRUD + artefactos mínimos | Producto |
| P0 | Evals del Mentor (golden set pedagógico) | Tesis |
| P1 | API contracts de módulos canónicos | Estabilidad |
| P2 | E2E smoke del journey feliz | Regresión |
| Future | Event testing, load masivo, perf theater | Pós-PMF |

---

## 4. Tipos de test (MVP)

### Unit

Reglas de dominio (Path, Progress, ownership).

### Integration / API

Módulos Identity, Learning, Knowledge, Projects, AI (Mentor), Progress.

### AI / Mentor

- Casos golden: enseña antes de codear; pregunta; admite incertidumbre.
- Regresión cuando cambia prompt/spec del Mentor.
- Métrica primaria: lift de capability / adherencia pedagógica — no solo accuracy.

### Security

Auth, autorización por ownership, no filtrado de contexto entre learners.

### E2E smoke

Registro → Path → Mentor → Practice (camino feliz mínimo).

---

## 5. Explicitamente diferido

- Event Testing (broker, retries, duplicates)
- Performance testing a escala
- Coverage vanity metrics como gate único
- Suites que no toquen el learning loop

---

## 6. Quality gates (MVP)

Merge bloqueado si:

1. Rompe ownership / auth  
2. Rompe el journey Path?Mentor?Practice smoke  
3. Degrada el golden set del Mentor bajo umbral acordado  

---

## 7. Anti-patterns

- “Funciona en local, no hay tests”
- Solo happy path
- Mocks eternos sin contrato real
- Regresión 100% manual para siempre
- Testear event bus que no vamos a construir

---

## 8. Relacionados

- [MVP_SCOPE](../product/MVP_SCOPE.md)
- [AI_EVALUATION_FRAMEWORK](../ai/AI_EVALUATION_FRAMEWORK.md)
- [SECURITY](../security/SECURITY.md)
- [ENGINEERING_HANDBOOK](../engineering/ENGINEERING_HANDBOOK.md)
