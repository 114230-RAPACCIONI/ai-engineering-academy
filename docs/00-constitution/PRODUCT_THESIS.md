---
artifact:
  id: ART-THESIS-001
  type: Product Thesis
  status: Canonical
  version: 1.3.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - constitution
    - product
    - thesis
  source_of_truth: true
---

# Product Thesis

> Este documento es ley.
> Si otro documento lo contradice, ese otro documento está equivocado.

---

## La tesis

**Learning: formar ingenieros capaces de pensar, diseñar y construir software colaborando con Inteligencia Artificial, independientemente del stack tecnológico.**

Eso es el producto.

Todo lo demás es secundario.

| Concepto | Rol |
|----------|-----|
| **Learning** | El producto |
| **Pensar — Diseñar — Construir** | La capacidad que formamos |
| **Projects** | El entorno de aprendizaje / práctica |
| **Inteligencia Artificial** | El Mentor (colaborador) |
| **Engineering** | La práctica |
| **Stacks tecnológicos** | Detalle de implementación — nunca la identidad del curriculum |

---

## Qué ZUZU no es

ZUZU no es:

- otro Cursor
- otro ChatGPT
- otro IDE
- otra herramienta de project management
- otro LMS
- otro bootcamp
- otro code generator

Esos productos pueden inspirar detalles de implementación.

**No** definen el producto.

---

## La regla de oro

Toda feature, pantalla, workflow, capacidad de IA y decisión arquitectónica debe responder:

> **¿Ayuda al learner a pensar, diseñar y construir mejor software — colaborando con IA — independientemente de un stack concreto?**

Si la respuesta no es claramente **SÍ**, no pertenece al MVP.

---

## Regla de aprendizaje (decisiones futuras)

Complementa la regla de oro. Documentada en [FOUNDER_DECISIONS.md](./FOUNDER_DECISIONS.md).

> **Cada decisión debe justificarse desde el aprendizaje, no desde la ingeniería.**

Pregunta única:

> **¿Esto ayuda al estudiante a desarrollar mejor criterio como ingeniero de software colaborando con IA?**

Si la respuesta es **no**, aunque sea excelente idea técnica, queda fuera del MVP o para una etapa futura.

---

## Jerarquía no negociable

1. Resultados de aprendizaje > completitud de features.
2. El journey del learner > el pipeline de entrega de un producto.
3. Un Mentor de IA > plataformas multi-agent.
4. Evidencia de capability > métricas de actividad.
5. Cambios de identidad de producto requieren un ADR — nunca drift silencioso.

---

## Por qué existe ZUZU (problema origen)

El producto nace de un dolor real y frecuente — en developers con experiencia y en principiantes:

1. Se le pide a la IA *"haceme un proyecto"* **sin planeamiento**.
2. La idea **muta** en cada iteración.
3. Cada sesión o cada modelo **reinterpreta** el objetivo.
4. El resultado es un **Frankenstein**: código y decisiones que no encajan.
5. **No se termina nada**; la frustración mata la motivación de seguir aprendiendo.

ZUZU existe para ofrecer un **viaje**: fundamentos que no caducan con el stack, práctica guiada, un Mentor que sostiene el hilo, y una experiencia que da **ganas de quedarse** — desde el primer capítulo (claridad antes de código) hasta una aplicación en producción con prácticas DevSecOps integradas.

---

## Anclas canónicas

| Preocupación | Documento canónico |
|--------------|-------------------|
| Tesis (este archivo) | `docs/00-constitution/PRODUCT_THESIS.md` |
| Ley del repositorio | `docs/00-constitution/REPO_CONSTITUTION.md` |
| Estándares de contenido | `docs/00-constitution/CONTENT_STANDARDS.md` |
| Visión de producto | `docs/product/PRODUCT_VISION.md` |
| Journey del learner | `docs/product/USER_JOURNEY.md` |
| Modelo de dominio | `docs/architecture/DOMAIN_MODEL.md` |
| Alcance MVP | `docs/product/MVP_SCOPE.md` |
| Curriculum (viaje de aprendizaje) | `docs/knowledge/curriculum/LEARNING_CURRICULUM.md` |
| Punto de entrada SDD | `START_HERE.md` |
| Decisiones founder | `docs/00-constitution/FOUNDER_DECISIONS.md` |

Los documentos bajo `docs/90-archive/` y `docs/99-future/` **no** son canónicos.

---

## Declaración final

Learning es el producto.

Formamos ingenieros capaces de **pensar, diseñar y construir** software **con** IA — no operadores de un stack ni copistas de código generado.

Los projects son cómo practican los learners.

La IA es cómo se mentorea a los learners.

Los stacks cambian. La capability no debe.

Cualquier cosa que reemplace el aprendizaje por un work OS, un clon de IDE o un juguete de codegen ha abandonado la tesis.
