---
artifact:
  id: ART-CONTENT-001
  type: Content Standards
  status: Canonical
  version: 1.0.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - constitution
    - content
    - curriculum
    - pedagogy
    - quality
  source_of_truth: true
  applies_to:
    - learning curriculum
    - knowledge base modules
    - practice project guides
    - mentor pedagogical content
    - any documentation intended for learners
---

# Content Standards

> **Ley vinculante para todo contenido de aprendizaje de ZUZU.**
>
> Estas reglas son obligatorias y tienen **prioridad** sobre cualquier otra instrucción al crear o modificar contenido pedagógico, curriculum, Knowledge Base, guías de Practice Project o material que el Mentor use para enseñar.
>
> Implementa [PRODUCT_THESIS.md](./PRODUCT_THESIS.md) y complementa [REPO_CONSTITUTION.md](./REPO_CONSTITUTION.md).
>
> **Idioma:** prosa en español. Términos técnicos del oficio en inglés cuando sean vocabulario profesional (MVP, ADR, Mentor, stack, feature, DevSecOps, etc.).

---

## Alcance

Este documento gobierna **contenido para formar ingenieros**, no la gobernanza interna del repositorio (eso es `REPO_CONSTITUTION.md`).

| Aplica a | No aplica a |
|----------|-------------|
| Curriculum y capítulos del Learning Path | ADRs de arquitectura interna de ZUZU |
| Módulos de Knowledge Base | Stubs de archive / future |
| Guías de Practice Project | Notas operativas mínimas de equipo |
| Prompts pedagógicos del Mentor | Commits, PRs, configuración de CI del repo |
| Evaluaciones y rúbricas de capability | |

---

## Jerarquía de prioridad (contenido)

Cuando haya tensión entre velocidad, brevedad u otra instrucción y estos estándares:

1. [PRODUCT_THESIS.md](./PRODUCT_THESIS.md) — identidad del producto
2. **Este archivo** — calidad y método del contenido
3. [REPO_CONSTITUTION.md](./REPO_CONSTITUTION.md) — coherencia documental del repo
4. Documentos canónicos de producto relacionados
5. Cualquier otra instrucción

**Regla operativa:** si un borrador es rápido pero viola estos estándares, **no se publica**. Se reescribe.

---

## 1. Precisión técnica por encima de la velocidad

No se priorizan respuestas rápidas ni resumidas.

El objetivo es documentación que pueda convertirse en la **base oficial del producto**.

Antes de afirmar cualquier concepto, verificar que represente las **mejores prácticas actuales** de la ingeniería de software y de la industria.

Si existe más de una forma válida de resolver un problema, **no elegir una arbitrariamente**. Explicar:

- por qué existen varias alternativas;
- cuáles son sus ventajas y desventajas;
- en qué contexto se utiliza cada una;
- cuál recomienda hoy la industria y **por qué** (con fundamento, no por moda).

No simplificar sacrificando exactitud.

---

## 2. Información vigente (2026) y preparada para evolucionar

Todo el contenido debe reflejar el **estado del arte de la industria en 2026** y estar escrito para envejecer bien: principios permanentes, herramientas como ejemplos.

Debe considerar, cuando corresponda al tema:

- prácticas modernas de ingeniería de software;
- arquitectura de software;
- desarrollo basado en IA;
- DevSecOps;
- Cloud;
- observabilidad;
- testing;
- calidad de software;
- seguridad;
- arquitectura distribuida;
- metodologías de desarrollo.

Cuando exista una tendencia consolidándose y sea razonable asumir que marcará el futuro cercano, explicarla claramente, **diferenciando siempre**:

| Etiqueta | Significado |
|----------|-------------|
| **Práctica consolidada** | Adopción amplia, estándares, consenso documentado |
| **Tendencia emergente** | Crecimiento medible; aún sin consenso universal |
| **Predicción fundamentada** | Inferencia razonada; no presentar como hecho |

Nunca presentar una predicción como un hecho.

---

## 3. Enseñar, no informar

El objetivo no es escribir documentación técnica fría.

El objetivo es que **cualquier persona pueda comprender realmente** el tema.

Cada concepto debe explicarse con claridad accesible **sin perder rigor técnico**. Eso implica:

- empezar desde la intuición;
- utilizar ejemplos cotidianos;
- construir el conocimiento paso a paso;
- evitar asumir conocimientos previos;
- recién después introducir la terminología profesional.

La simplicidad debe surgir de una **buena explicación**, nunca de eliminar contenido importante.

---

## 4. Máxima profundidad

No se aceptan documentos superficiales.

Cada documento debe responder las preguntas que una persona curiosa podría hacerse.

Siempre desarrollar, cuando aplique al tema:

| Dimensión | Pregunta guía |
|-----------|---------------|
| Definición | ¿Qué es? |
| Origen | ¿Por qué existe? |
| Problema | ¿Qué problema resuelve? |
| Uso | ¿Cuándo utilizarlo? |
| Anti-uso | ¿Cuándo **no** utilizarlo? |
| Trade-offs | Ventajas y desventajas |
| Alternativas | ¿Qué otras opciones hay? |
| Errores | Errores comunes y malas prácticas |
| Ejemplos | Ejemplos reales **y** ejemplos incorrectos |
| Límites | Casos límite |
| Contexto | Relación con otros conceptos |

No asumir que el lector "ya lo sabe".

---

## 5. Basarse en evidencia, no en opiniones

No escribir afirmaciones del tipo: *"Esto es lo mejor."*

Justificar cada recomendación con:

- fundamentos técnicos;
- consenso de la industria;
- estándares ampliamente adoptados;
- documentación oficial, cuando corresponda.

Si existe desacuerdo entre expertos, el documento debe **reflejar ambas posturas** y explicar el contexto de cada una.

---

## 6. Mantener la filosofía de ZUZU

Todo el contenido debe alinearse con la misión del producto.

**ZUZU no enseña tecnologías. ZUZU forma ingenieros.**

Priorizar siempre:

- pensamiento crítico;
- toma de decisiones;
- resolución de problemas;
- diseño;
- arquitectura;
- calidad;
- mantenibilidad;
- comunicación;
- documentación;
- seguridad;
- escalabilidad.

Las herramientas son **ejemplos**. Los principios son **permanentes**.

Debe obedecer la regla de oro de la Tesis:

> ¿Ayuda al learner a pensar, diseñar y construir mejor software — colaborando con IA — independientemente de un stack concreto?

---

## 7. IA como Mentor, no como reemplazo

Cada explicación debe ayudar al learner a **pensar**.

Nunca fomentar copiar y pegar.

Siempre incluir, cuando corresponda:

- cómo razonar ante un problema;
- cómo validar una respuesta de una IA;
- cómo detectar errores en output generado;
- cómo hacer mejores preguntas;
- cómo revisar código o diseño generado;
- cómo tomar decisiones propias.

La IA es un **compañero de aprendizaje**, no un sustituto del criterio profesional.

---

## 8. Stack-agnostic

Todo el contenido debe centrarse en **principios universales**.

Cuando sea necesario mostrar ejemplos, deben servir **únicamente para ilustrar un concepto**.

Nunca convertir un lenguaje, framework o herramienta en el eje de la enseñanza.

El aprendizaje debe sobrevivir aunque la tecnología cambie.

Si un ejemplo usa un stack concreto, declarar explícitamente **qué principio ilustra** y ofrecer, cuando sea útil, un analog en otro contexto.

---

## 9. Coherencia documental

Antes de modificar un documento existente, revisar la documentación relacionada para evitar contradicciones.

La documentación de ZUZU debe leerse como si hubiera sido escrita por **una sola persona**.

- No duplicar conceptos (enlazar al canónico).
- No generar inconsistencias.
- No introducir ideas nuevas sin justificar cómo encajan con la visión del producto.

Si se detecta conflicto con un doc canónico, **el contenido nuevo o el doc viejo debe corregirse** — no coexistir en ambigüedad.

---

## 10. Calidad antes que cantidad

Preferir **un documento excelente** que diez documentos mediocres.

Si una sección requiere más desarrollo para alcanzar un nivel profesional, dedicar el tiempo necesario.

Cada documento debe poder convertirse en una **referencia oficial** dentro de ZUZU.

No generar contenido "para completar". Generar contenido que una persona pueda estudiar durante años y seguir encontrándolo útil.

---

## Checklist obligatorio (antes de publicar contenido)

Usar esta lista en cada módulo, capítulo o pieza de Knowledge:

- [ ] ¿Obedece la regla de oro de la Tesis?
- [ ] ¿Precisión técnica verificada (no simplificación falsa)?
- [ ] ¿Alternativas y trade-offs explicados donde existen?
- [ ] ¿Distingue práctica consolidada / tendencia / predicción?
- [ ] ¿Enseña desde intuición hacia terminología profesional?
- [ ] ¿Cubre qué / por qué / cuándo sí / cuándo no / errores comunes?
- [ ] ¿Recomendaciones justificadas con evidencia?
- [ ] ¿Incluye guía de uso crítico de IA (no copy-paste)?
- [ ] ¿Stack-agnostic en el eje, ejemplos solo ilustrativos?
- [ ] ¿Revisada coherencia con docs canónicos relacionados?
- [ ] ¿Calidad suficiente para ser referencia oficial?

---

## Regla final

Cada vez que se genere o modifique documentación de aprendizaje, preguntarse:

> **¿Este documento realmente ayuda a formar un mejor ingeniero de software dentro de cinco años, incluso si cambian los lenguajes, frameworks o herramientas?**

Si la respuesta es **no**, el documento debe reescribirse hasta cumplir ese objetivo.

---

## Relacionados

- [PRODUCT_THESIS.md](./PRODUCT_THESIS.md)
- [REPO_CONSTITUTION.md](./REPO_CONSTITUTION.md)
- [PRODUCT_VISION.md](../product/PRODUCT_VISION.md)
- [USER_JOURNEY.md](../product/USER_JOURNEY.md)
- [MVP_SCOPE.md](../product/MVP_SCOPE.md)
- [AI_PRODUCT_EXPERIENCE.md](../product/AI_PRODUCT_EXPERIENCE.md)
- [DOCUMENTATION_ARCHITECTURE.md](../knowledge/DOCUMENTATION_ARCHITECTURE.md)

---

## Declaración final

ZUZU no compite por volumen de contenido.

Compite por **capability duradera**.

La documentación de aprendizaje es producto — no relleno.
