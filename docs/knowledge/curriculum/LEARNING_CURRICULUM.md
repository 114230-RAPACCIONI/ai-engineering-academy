---
artifact:
  id: ART-CURR-001
  type: Learning Curriculum
  status: Draft
  version: 0.5.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-22
  initiative: INIT-001
  tags:
    - curriculum
    - learning
    - knowledge
    - path
  source_of_truth: true
---

# Learning Curriculum

> Ley vinculante: [PRODUCT_THESIS.md](../../00-constitution/PRODUCT_THESIS.md) — [CONTENT_STANDARDS.md](../../00-constitution/CONTENT_STANDARDS.md)
>
> Regla de oro: **¿Ayuda al learner a pensar, diseñar y construir mejor software — colaborando con IA — independientemente de un stack concreto?**
>
> Este documento es el **mapa del viaje completo** de ZUZU: desde una idea difusa hasta una aplicación en producción con prácticas DevSecOps integradas. Cada capítulo es stack-agnostic; las herramientas solo ilustran principios.

---

## 1. Propósito

ZUZU no enseña lenguajes ni frameworks como identidad del producto.

ZUZU enseña **ingeniería**: cómo pensar, diseñar, construir, asegurar, operar y evolucionar software — usando la IA como Mentor, no como reemplazo del criterio.

Este curriculum responde al problema que originó el producto:

> Pedirle a la IA *"haceme un proyecto"* sin planeamiento produce un **Frankenstein**: la idea muta, cada sesión reinterpreta distinto, el código no cierra, y nada llega a producción.

El viaje de ZUZU existe para **evitar ese patrón** y reemplazarlo por **Spec-Driven Development (SDD)**: alinear intent en un spec compartido **antes** de que la IA implemente.

Referencia de industria: [Microsoft — Spec-Driven Development (2026)](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering). Punto de entrada del repo: [START_HERE.md](../../START_HERE.md).

---

## 2. Ciclo SDD — mapa oficial ZUZU

| Paso | Acción | Artefacto learner | Capítulo |
|------|--------|-------------------|----------|
| **Constitution** | Leer leyes | — | [START_HERE](../../START_HERE.md) |
| **Specify** | Problema, scope, FR, AC | `PRACTICE_PROJECT.md`, `REQUIREMENTS.md` | [1](./chapters/CHAPTER_01_FROM_IDEA_TO_SCOPE.md), [2](./chapters/CHAPTER_02_REQUIREMENTS_BEFORE_CODE.md) |
| **Clarify** | Ambigüedades, edge cases | Decision log, notas Mentor | 1–2 |
| **Plan** | Diseño, ADRs | `DESIGN.md`, `adr/` | [3](./chapters/CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md) |
| **Tasks** | Incrementos verticales | I1, I2… en `DESIGN.md` | 3 |
| **Implement** | Un incremento con IA | código del Practice Project + bitácora | [4](./chapters/CHAPTER_04_INCREMENTAL_BUILD_WITH_AI.md) |
| **Validate** | vs acceptance criteria | Tests / checklist | 5+ *(pendiente)* |

**Principio SDD:** *Spec quality = output quality.* En ZUZU: *capability del learner = calidad del spec que escribe.*

No todo cambio requiere los 7 pasos (spikes ≤ 2 h están exentos — ver Cap. 3).

---

## 2.1 Dominio del proyecto: lo elige el learner

El curriculum enseña el método SDD — no un dominio fijo. El learner elige (o clona) el dominio de su Practice Project; no hay un proyecto obligatorio ([FOUNDER_DECISIONS §8](../../00-constitution/FOUNDER_DECISIONS.md)).

Los capítulos 1–4 muestran el método aplicado de punta a punta (Cap. 1–3 con **Gastos Hormiga** como ejemplo de referencia; Cap. 4 sobre **tu** I1).

---

## 3. Cómo leer este curriculum

| Elemento | Significado |
|----------|-------------|
| **Capítulo** | Un arco de aprendizaje con outcome medible (semanas o sesiones) |
| **Módulo** | Una unidad temática dentro del capítulo |
| **Knowledge** | Conceptos que el learner estudia antes o durante la práctica |
| **Practice Project** | Laboratorio donde aplica lo aprendido con el Mentor |
| **Capability** | Lo que el learner puede **demostrar**, no lo que consumió |

Cada capítulo enlaza a un documento propio bajo `docs/knowledge/curriculum/chapters/`.

**Estado del contenido:**

| Capítulo | Título | Estado | Documento |
|----------|--------|--------|-------------|
| 1 | De la idea al scope (sin Frankenstein) | **Disponible** | [CHAPTER_01](./chapters/CHAPTER_01_FROM_IDEA_TO_SCOPE.md) |
| 2 | Requirements y decisiones antes del código | **Disponible** | [CHAPTER_02](./chapters/CHAPTER_02_REQUIREMENTS_BEFORE_CODE.md) |
| 3 | Diseño mínimo viable y trade-offs | **Disponible** | [CHAPTER_03](./chapters/CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md) |
| 4 | Construcción incremental con IA | **Disponible** | [CHAPTER_04](./chapters/CHAPTER_04_INCREMENTAL_BUILD_WITH_AI.md) |
| 5 | Testing y calidad como hábito | Planeado | — |
| 6 | Seguridad desde el diseño | Planeado | — |
| 7 | Ops: deploy, observabilidad, incidentes | Planeado | — |
| 8 | DevSecOps como práctica continua | Planeado | — |

---

## 4. Hilo transversal: DevSecOps

La seguridad, la calidad y las operaciones **no son un capítulo final aislado**.

Aparecen como práctica consolidada desde el Capítulo 1 (límites, amenazas obvias, criterios de éxito) y se profundizan en capítulos posteriores.

| Fase del ciclo | Dónde se introduce en el viaje |
|----------------|-------------------------------|
| **Plan / diseño** | Cap. 1–3 — scope, requirements, threat thinking ligero |
| **Build** | Cap. 4 — revisiones, secretos, validación de IA |
| **Test** | Cap. 5 — pirámide de tests, quality gates |
| **Release / deploy** | Cap. 7 — entornos, rollback, observabilidad |
| **Operate / respond** | Cap. 7–8 — incidentes, postmortems, mejora continua |
| **Security en cada etapa** | Cap. 1 (awareness) → Cap. 6 (profundidad) → Cap. 8 (integración) |

*Nota:* DevSecOps como disciplina integrada es **práctica consolidada** en industria madura (2026). La madurez exacta varía por organización; ZUZU enseña el modelo ideal y explica cuándo las empresas adoptan versiones más livianas.

---

## 5. Entradas al viaje (dos perfiles, mismo camino)

| Perfil | Punto de entrada | Mismo principio |
|--------|-------------------|-----------------|
| **Principiante** | Capítulo 1 desde cero absoluto | Planear antes de codear |
| **Developer con experiencia** | Capítulo 1 acelerado (menos conceptos base, más anti-Frankenstein con IA) | Planear antes de codear |

El Mentor adapta ejemplos y ritmo según el perfil declarado; el **curriculum no cambia de identidad** por stack.

---

## 6. Relación con el MVP de producto

### Fase 0 (ahora) — SDD en el repositorio

El **producto activo** es recorrer el ciclo SDD con:

- Este curriculum (Cap. 1–4 disponibles; Cap. 5–8 planeados)
- Tu Practice Project (`PRACTICE_PROJECT.md` → `REQUIREMENTS.md` → `DESIGN.md` → bitácora I1)
- Mentor en plataforma y/o externo que lee el spec cada sesión

**Éxito Fase 0 (ampliado):** un learner humano completa Specify → Plan → Implement I1 y quiere seguir a Validate (Cap. 5).

Ver [START_HERE.md](../../START_HERE.md) y [MVP_SCOPE §1.1](../../product/MVP_SCOPE.md).

### Fase 1 (después) — Plataforma ZUZU

[MVP_SCOPE](../../product/MVP_SCOPE.md) define la app para **escalar** el mismo ciclo SDD — **no** para reemplazarlo.

La plataforma ya cubre Cap. 1–4 en `src/`. Los capítulos 5–8 se escriben y se llevan a la app **después** de validar con un humano el arco hasta I1 — no antes de haber cerrado Cap. 4.

---

## 7. Criterios de éxito del viaje completo

Al terminar el Capítulo 8, el learner debería poder:

1. Arrancar un proyecto desde una idea, con scope y decisiones documentadas.
2. Construir de forma incremental sin perder el hilo al usar IA.
3. Aplicar testing y quality gates antes de considerar algo "listo".
4. Incorporar seguridad en diseño, build y operación — no como parche final.
5. Llevar una aplicación a un entorno de producción con observabilidad básica.
6. Explicar **por qué** tomó cada decisión importante — sin depender de un stack concreto.

---

## Ejemplo de referencia: Gastos Hormiga

Gastos Hormiga es el ejemplo de referencia interno que los Capítulos 1–3 aplican de punta a punta — cada capítulo incluye su ejemplo completado, y [examples/](./examples/README.md) tiene el recorrido extendido del Capítulo 3 (`DESIGN.md` + ADRs + incrementos).

No es el proyecto obligatorio del MVP ([FOUNDER_DECISIONS §8](../../00-constitution/FOUNDER_DECISIONS.md)): podés seguir el mismo método con cualquier dominio propio. Sirve para comparar tu proceso contra un caso completo, no para copiar.

## Relacionados

- [CHAPTER_01 — De la idea al scope](./chapters/CHAPTER_01_FROM_IDEA_TO_SCOPE.md)
- [MVP_SCOPE.md](../../product/MVP_SCOPE.md)
- [USER_JOURNEY.md](../../product/USER_JOURNEY.md)
- [CONTENT_STANDARDS.md](../../00-constitution/CONTENT_STANDARDS.md)

---

## Declaración final

El curriculum es el **itinerario del viaje**.

Sin él, ZUZU tiene filosofía pero no camino.

Con él, cada módulo puede convertirse en Knowledge, Practice y sesiones con el Mentor — sin drift ni Frankenstein documental.
