---
artifact:
  id: ART-CURR-001
  type: Learning Curriculum
  status: Draft
  version: 0.4.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - curriculum
    - learning
    - knowledge
    - path
  source_of_truth: true
---

# Learning Curriculum

> Ley vinculante: [PRODUCT_THESIS.md](../../00-constitution/PRODUCT_THESIS.md) � [CONTENT_STANDARDS.md](../../00-constitution/CONTENT_STANDARDS.md)
>
> Regla de oro: **�Ayuda al learner a pensar, dise�ar y construir mejor software � colaborando con IA � independientemente de un stack concreto?**
>
> Este documento es el **mapa del viaje completo** de ZUZU: desde una idea difusa hasta una aplicaci�n en producci�n con pr�cticas DevSecOps integradas. Cada cap�tulo es stack-agnostic; las herramientas solo ilustran principios.

---

## 1. Prop�sito

ZUZU no ense�a lenguajes ni frameworks como identidad del producto.

ZUZU ense�a **ingenier�a**: c�mo pensar, dise�ar, construir, asegurar, operar y evolucionar software � usando la IA como Mentor, no como reemplazo del criterio.

Este curriculum responde al problema que origin� el producto:

> Pedirle a la IA *"haceme un proyecto"* sin planeamiento produce un **Frankenstein**: la idea muta, cada sesi�n reinterpreta distinto, el c�digo no cierra, y nada llega a producci�n.

El viaje de ZUZU existe para **evitar ese patr�n** y reemplazarlo por **Spec-Driven Development (SDD)**: alinear intent en un spec compartido **antes** de que la IA implemente.

Referencia de industria: [Microsoft � Spec-Driven Development (2026)](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering). Punto de entrada del repo: [START_HERE.md](../../START_HERE.md).

---

## 2. Ciclo SDD � mapa oficial ZUZU

| Paso | Acci�n | Artefacto learner | Cap�tulo |
|------|--------|-------------------|----------|
| **Constitution** | Leer leyes | � | [START_HERE](../../START_HERE.md) |
| **Specify** | Problema, scope, FR, AC | `PRACTICE_PROJECT.md`, `REQUIREMENTS.md` | [1](./chapters/CHAPTER_01_FROM_IDEA_TO_SCOPE.md), [2](./chapters/CHAPTER_02_REQUIREMENTS_BEFORE_CODE.md) |
| **Clarify** | Ambig�edades, edge cases | Decision log, notas Mentor | 1�2 |
| **Plan** | Dise�o, ADRs | `DESIGN.md`, `adr/` | [3](./chapters/CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md) |
| **Tasks** | Incrementos verticales | I1, I2� en `DESIGN.md` | 3 |
| **Implement** | Un incremento con IA | `src/` | 4 *(pendiente)* |
| **Validate** | vs acceptance criteria | Tests / checklist | 5+ *(pendiente)* |

**Principio SDD:** *Spec quality = output quality.* En ZUZU: *capability del learner = calidad del spec que escribe.*

No todo cambio requiere los 7 pasos (spikes ? 2 h est�n exentos � ver Cap. 3).

---

## 2.1 Primer viaje en la app: Gastos Hormiga

El primer viaje disponible al crear cuenta es **Gastos Hormiga** — el Hello World de ZUZU ([FOUNDER_DECISIONS](../../00-constitution/FOUNDER_DECISIONS.md)). Los capítulos 1–3 enseñan el método SDD aplicado a ese proyecto.

---

## 3. C�mo leer este curriculum

| Elemento | Significado |
|----------|-------------|
| **Cap�tulo** | Un arco de aprendizaje con outcome medible (semanas o sesiones) |
| **M�dulo** | Una unidad tem�tica dentro del cap�tulo |
| **Knowledge** | Conceptos que el learner estudia antes o durante la pr�ctica |
| **Practice Project** | Laboratorio donde aplica lo aprendido con el Mentor |
| **Capability** | Lo que el learner puede **demostrar**, no lo que consumi� |

Cada cap�tulo enlaza a un documento propio bajo `docs/knowledge/curriculum/chapters/`.

**Estado del contenido:**

| Cap�tulo | T�tulo | Estado | Documento |
|----------|--------|--------|-------------|
| 1 | De la idea al scope (sin Frankenstein) | **Disponible** | [CHAPTER_01](./chapters/CHAPTER_01_FROM_IDEA_TO_SCOPE.md) |
| 2 | Requirements y decisiones antes del c�digo | **Disponible** | [CHAPTER_02](./chapters/CHAPTER_02_REQUIREMENTS_BEFORE_CODE.md) |
| 3 | Dise�o m�nimo viable y trade-offs | **Disponible** | [CHAPTER_03](./chapters/CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md) |
| 4 | Construcci�n incremental con IA | Planeado | � |
| 5 | Testing y calidad como h�bito | Planeado | � |
| 6 | Seguridad desde el dise�o | Planeado | � |
| 7 | Ops: deploy, observabilidad, incidentes | Planeado | � |
| 8 | DevSecOps como pr�ctica continua | Planeado | � |

---

## 4. Hilo transversal: DevSecOps

La seguridad, la calidad y las operaciones **no son un cap�tulo final aislado**.

Aparecen como pr�ctica consolidada desde el Cap�tulo 1 (l�mites, amenazas obvias, criterios de �xito) y se profundizan en cap�tulos posteriores.

| Fase del ciclo | D�nde se introduce en el viaje |
|----------------|-------------------------------|
| **Plan / dise�o** | Cap. 1�3 � scope, requirements, threat thinking ligero |
| **Build** | Cap. 4 � revisiones, secretos, validaci�n de IA |
| **Test** | Cap. 5 � pir�mide de tests, quality gates |
| **Release / deploy** | Cap. 7 � entornos, rollback, observabilidad |
| **Operate / respond** | Cap. 7�8 � incidentes, postmortems, mejora continua |
| **Security en cada etapa** | Cap. 1 (awareness) ? Cap. 6 (profundidad) ? Cap. 8 (integraci�n) |

*Nota:* DevSecOps como disciplina integrada es **pr�ctica consolidada** en industria madura (2026). La madurez exacta var�a por organizaci�n; ZUZU ense�a el modelo ideal y explica cu�ndo las empresas adoptan versiones m�s livianas.

---

## 5. Entradas al viaje (dos perfiles, mismo camino)

| Perfil | Punto de entrada | Mismo principio |
|--------|-------------------|-----------------|
| **Principiante** | Cap�tulo 1 desde cero absoluto | Planear antes de codear |
| **Developer con experiencia** | Cap�tulo 1 acelerado (menos conceptos base, m�s anti-Frankenstein con IA) | Planear antes de codear |

El Mentor adapta ejemplos y ritmo seg�n el perfil declarado; el **curriculum no cambia de identidad** por stack.

---

## 6. Relación con el MVP de producto

### Fase 0 (ahora) — SDD en el repositorio

El **producto activo** es recorrer el ciclo SDD con:

- Este curriculum (Cap. 1–3 disponibles)
- Tu Practice Project (`PRACTICE_PROJECT.md` → `REQUIREMENTS.md` → `DESIGN.md`)
- Un Mentor externo (Cursor, Claude, etc.) que lee el spec cada sesión

**Éxito Fase 0:** un learner humano completa Specify → Plan y quiere seguir a Implement.

Ver [START_HERE.md](../../START_HERE.md) y [MVP_SCOPE §1.1](../../product/MVP_SCOPE.md).

### Fase 1 (después) — Plataforma ZUZU

[MVP_SCOPE](../../product/MVP_SCOPE.md) define la app para **escalar** el mismo ciclo SDD — **no** para reemplazarlo.

Los capítulos 4–8 se escriben **después** de validar Fase 0 con un humano — no antes.

---

## 7. Criterios de éxito del viaje completo


Al terminar el Cap�tulo 8, el learner deber�a poder:

1. Arrancar un proyecto desde una idea, con scope y decisiones documentadas.
2. Construir de forma incremental sin perder el hilo al usar IA.
3. Aplicar testing y quality gates antes de considerar algo "listo".
4. Incorporar seguridad en dise�o, build y operaci�n � no como parche final.
5. Llevar una aplicaci�n a un entorno de producci�n con observabilidad b�sica.
6. Explicar **por qu�** tom� cada decisi�n importante � sin depender de un stack concreto.

---

## Ejemplos ilustrativos (opcional)

Walkthroughs en [examples/](./examples/README.md) � un proyecto de referencia para comparar, no obligatorio.

## Relacionados

- [CHAPTER_01 � De la idea al scope](./chapters/CHAPTER_01_FROM_IDEA_TO_SCOPE.md)
- [MVP_SCOPE.md](../../product/MVP_SCOPE.md)
- [USER_JOURNEY.md](../../product/USER_JOURNEY.md)
- [CONTENT_STANDARDS.md](../../00-constitution/CONTENT_STANDARDS.md)

---

## Declaraci�n final

El curriculum es el **itinerario del viaje**.

Sin �l, ZUZU tiene filosof�a pero no camino.

Con �l, cada m�dulo puede convertirse en Knowledge, Practice y sesiones con el Mentor � sin drift ni Frankenstein documental.
