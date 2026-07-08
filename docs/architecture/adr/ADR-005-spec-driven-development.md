---
artifact:
  id: ADR-005
  type: Architecture Decision Record
  status: Accepted
  version: 1.2.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
---

# ADR-005 — Spec-Driven Development (SDD) como práctica de ZUZU

## Status

Accepted

## Contexto

La industria adopta **Spec-Driven Development (SDD)** para ingeniería AI-native: definir intent, requirements, constraints y acceptance criteria **antes** de que la IA genere implementación — el spec es la fuente de verdad compartida entre humanos y herramientas.

Referencia: [Spec-Driven Development — Microsoft for Developers (2026)](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering). Toolkit de referencia: [GitHub Spec Kit](https://github.com/github/spec-kit).

ZUZU nace del dolor opuesto al SDD: **prompt-first** sin spec ? Frankenstein, reinterpretación por sesión, proyectos sin terminar ([PRODUCT_THESIS](../../00-constitution/PRODUCT_THESIS.md)).

Los learners necesitan el **hábito** de SDD, no solo velocidad de codegen. ADR-006 exige simplicidad; esto no es waterfall de 50 páginas.

## Decisión

ZUZU adopta el **ciclo SDD** como método pedagógico y operativo del Practice Project:

| Paso SDD | Artefacto ZUZU | Curriculum |
|----------|----------------|------------|
| Constitution | `docs/00-constitution/*` | Lectura inicial |
| Specify | `PRACTICE_PROJECT.md`, `REQUIREMENTS.md` | Cap. 1–2 |
| Clarify | Decision log, sesiones Mentor | Cap. 1–2 |
| Plan | `DESIGN.md`, ADRs del proyecto | Cap. 3 |
| Tasks | Incrementos I1, I2… en `DESIGN.md` | Cap. 3 |
| Implement | Código por incremento con IA | Cap. 4 |
| Validate | Tests / verificación vs ACs | Cap. 5+ |

**Fase 0 (ahora):** el repo + curriculum + Mentor externo **son** el producto de aprendizaje SDD.

**Fase 1 (después):** la plataforma ZUZU automatiza Path, Knowledge y contexto del Mentor — no reemplaza el ciclo SDD.

### Diferencias ZUZU vs Spec Kit enterprise

| Spec Kit / equipos | ZUZU |
|--------------------|------|
| Múltiples stakeholders | Learner + Mentor |
| Tooling CI de spec | Markdown en Practice Project |
| Agentes autónomos de build | **Un Mentor**; humano decide |
| Lifecycle completo siempre | **Right-sized**: spikes no necesitan 7 pasos |

### Reglas no negociables

1. **Spec antes de implementación** en todo Practice Project no trivial.
2. El spec es **vivo** — cambios pasan por decision log, no drift silencioso.
3. La IA **ejecuta** contra el spec; no **define** el producto.
4. Validar contra ACs antes de declarar un incremento terminado.

## Alternativas consideradas

| Alternativa | Por qué no |
|-------------|------------|
| Prompt-first puro | Origen del Frankenstein; contradice la tesis |
| Waterfall documental | Viola simplicidad; mata motivación del learner |
| Solo código sin spec | No forma ingenieros; no escala con IA |
| Spec Kit copiado tal cual sin pedagogía | Enterprise-first; ZUZU es learning-first |

## Consecuencias

### Positivas

- Alineación intent ? implementación; mejor contexto para el Mentor.
- Mismo vocabulario que la industria 2026 (SDD, ACs, ADRs).
- Capítulos 1–3 ya mapean Specify ? Plan ? Tasks.

### Negativas

- Fricción inicial antes del primer código (fricción **pedagógica** intencional).
- Requiere disciplina de actualizar spec (hábito a formar).

### Riesgos

- Ceremonia vacía — mitigado por spec **liviano** y CONTENT_STANDARDS.
- Confundir docs del repo ZUZU con spec del Practice Project — mitigado por [START_HERE.md](../../../START_HERE.md).

## Relacionados

- [START_HERE.md](../../../START_HERE.md)
- [LEARNING_CURRICULUM.md](../../knowledge/curriculum/LEARNING_CURRICULUM.md)
- ADR-003, ADR-004, ADR-006
- [MVP_SCOPE](../../product/MVP_SCOPE.md)
