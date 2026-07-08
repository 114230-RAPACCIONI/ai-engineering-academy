---
artifact:
  id: ART-REPO-001
  type: Repository Constitution
  status: Canonical
  version: 1.2.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - constitution
    - documentation
    - governance
  source_of_truth: true
---

# Repository Constitution

> Ley del repositorio — no de la compañía.
> Todo documento futuro debe seguir estos principios.
>
> **Idioma:** explicaciones en español. Se mantienen en inglés términos técnicos del oficio
> (MVP, ADR, Mentor, Learning Path, stack, feature, etc.) y los nombres de archivo.

Esta constitución implementa [PRODUCT_THESIS.md](./PRODUCT_THESIS.md).

---

## 1. Tesis de producto (vinculante)

**Learning — formar ingenieros capaces de pensar, diseñar y construir software colaborando con Inteligencia Artificial, independientemente del stack tecnológico.**

1. Learning es el producto.
2. Capability = pensar + diseñar + construir (con colaboración de IA).
3. Los projects son el entorno de aprendizaje.
4. La IA es el Mentor.
5. Engineering es la práctica.
6. Los stacks son detalle de implementación — nunca identidad de producto.
7. ZUZU no es Cursor, ChatGPT, un IDE, una herramienta de PM, un LMS, un bootcamp ni un codegen.

Si un documento conflictúa con la Tesis, **el documento está equivocado**.

---

## 2. Principios de documentación

1. **Un concepto → un documento canónico.**
2. **Canonical vence a lo aspiracional.** No citar docs Future como requisitos.
3. **Vocabulario de estado:** `Canonical` | `Draft` | `Future` | `Archived`.
4. **`version: 1.0.0` solo cuando es Canonical y está aprobado.**
5. **Lo futuro vive solo bajo** `docs/99-future/`.
6. **El drift y lo reemplazado viven bajo** `docs/90-archive/`.
7. **No hay nuevo documento de arquitectura sin una necesidad concreta de producto.**
8. **Related Artifacts solo enlazan IDs vivos Canonical o Draft.**
9. **Objetivo: ≤ 20 docs Canonical antes de validación de producto.**
10. **Prosa en español**; términos de ingeniería en inglés cuando sean el vocabulario del equipo.

---

## 3. Principios de arquitectura

1. Modular monolith hasta que se demuestre lo contrario (ADR-006).
2. No API Gateway, event bus, Kubernetes ni multi-region como default del MVP.
3. Toda elección estructural necesita un ADR en `docs/architecture/adr/`.
4. Vocabulario de dominio: `LearningPath` / `Module` — no `Course`.
5. Preferir tecnología aburrida que sirva al learning loop.
6. Las elecciones de stack son ADRs explícitos — no notas laterales en ensayos de scalability.

---

## 4. Principios de IA

1. El Mentor enseña; no reemplaza el pensamiento.
2. MVP = **un Mentor**, no swarms de agents ni modes de producto.
3. Éxito = ganancia de capability del learner, no velocidad de respuesta ni satisfacción del chat.
4. Learning safety > completar la tarea.
5. La memoria sirve al progreso del learner (y al project como práctica), no a un work OS.
6. La autonomía nunca es el default.

---

## 5. Principios de escritura

Todo **contenido de aprendizaje** (curriculum, Knowledge Base, guías de Practice Project, material pedagógico del Mentor) debe obedecer [CONTENT_STANDARDS.md](./CONTENT_STANDARDS.md). Esas reglas tienen prioridad sobre brevedad o velocidad.

1. Preferir una frase clara a tres slogans.
2. No hay “Final Statement” sin una constraint o non-goal.
3. Nombrar owners, status y non-goals.
4. Las citas inspiran; no reemplazan decisiones.
5. Markdown roto no es shippable.
6. Todo doc de producto debe declarar cómo obedece la regla de oro.

---

## 6. Principios de decisión

1. **Regla de oro:** ¿Ayuda al learner a pensar, diseñar y construir mejor — con IA — independiente del stack?
2. Si no es claramente SÍ → fuera del MVP.
3. Elegir beachhead antes que universalismo.
4. Validar antes de escalar docs o sistemas.
5. Las contradicciones se cierran por la Tesis, no por compromiso ambiguo.
6. Cambios de identidad de producto requieren ADR — sin drift silencioso.

---

## 7. Verbos permitidos al auditar docs

`Keep` — `Refactor` — `Merge` — `Split` — `Archive` — `Delete`

---

## 8. Autoridad

| Rango | Artefacto |
|------|----------|
| 1 | `PRODUCT_THESIS.md` |
| 2 | Este archivo (`REPO_CONSTITUTION.md`) |
| 2b | `CONTENT_STANDARDS.md` (contenido de aprendizaje) |
| 3 | ADRs aceptados |
| 4 | Docs canónicos de producto (`PRODUCT_VISION`, `USER_JOURNEY`, `DOMAIN_MODEL`, `MVP_SCOPE`) |
| 5 | Resto de Drafts |

La narrativa de compañía en `docs/project/PROJECT_CONSTITUTION.md` no puede anular esta ley del repositorio.

---

## Declaración final

El repositorio existe para proteger una sola visión de producto coherente.

Volumen no es claridad.

Aspiración no es arquitectura.

Learning es el producto.
