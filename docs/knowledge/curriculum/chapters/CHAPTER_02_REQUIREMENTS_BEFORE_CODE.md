---
artifact:
  id: ART-CURR-CH02
  type: Curriculum Chapter
  status: Draft
  version: 0.1.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  chapter: 2
  tags:
    - curriculum
    - chapter-02
    - requirements
    - acceptance-criteria
    - nfr
    - spec-driven
  learning_outcomes:
    - Traducir scope en requirements funcionales verificables
    - Definir NFRs mínimos (seguridad, usabilidad, rendimiento) alineados a V1
    - Escribir criterios de aceptación testeables por capability
    - Mantener trazabilidad scope → requirement → criterio
    - Profundizar decision log hacia decisiones de diseño
    - Validar requirements con IA sin que la IA invente el producto
  estimated_duration: 6-10 sesiones (o 2-3 semanas a ritmo part-time)
  prerequisite_chapters:
    - CHAPTER_01_FROM_IDEA_TO_SCOPE
  maps_to_mvp: false
---

# Capítulo 2 — Requirements y decisiones antes del código

> Ley vinculante: [PRODUCT_THESIS.md](../../../00-constitution/PRODUCT_THESIS.md) · [CONTENT_STANDARDS.md](../../../00-constitution/CONTENT_STANDARDS.md)
>
> **Prerrequisito:** [Capítulo 1 — De la idea al scope](./CHAPTER_01_FROM_IDEA_TO_SCOPE.md) completado (Practice Project en fase Planning con Definition of Done marcada).
>
> Regla de oro: ¿Ayuda al learner a **especificar qué debe hacer el sistema** — con criterios verificables — antes de escribir código?

---

## Tabla de contenidos

1. [Para quién es y qué vas a lograr](#1-para-quién-es-y-qué-vas-a-lograr)
2. [Módulo 2.1 — De scope a requirements](#2-módulo-21--de-scope-a-requirements)
3. [Módulo 2.2 — Requirements funcionales](#3-módulo-22--requirements-funcionales)
4. [Módulo 2.3 — Requirements no funcionales](#4-módulo-23--requirements-no-funcionales)
5. [Módulo 2.4 — Criterios de aceptación](#5-módulo-24--criterios-de-aceptación)
6. [Módulo 2.5 — User stories vs requirements](#6-módulo-25--user-stories-vs-requirements)
7. [Módulo 2.6 — Trazabilidad y spec liviano](#7-módulo-26--trazabilidad-y-spec-liviano)
8. [Módulo 2.7 — Decisiones de diseño y ADRs](#8-módulo-27--decisiones-de-diseño-y-adrs)
9. [Módulo 2.8 — IA para requirements sin Frankenstein](#9-módulo-28--ia-para-requirements-sin-frankenstein)
10. [Practice Project — Guía del Capítulo 2](#10-practice-project--guía-del-capítulo-2)
11. [Rúbrica de capability](#11-rúbrica-de-capability)
12. [Errores comunes del capítulo](#12-errores-comunes-del-capítulo)
13. [Reflexión y cierre](#13-reflexión-y-cierre)

---

## 1. Para quién es y qué vas a lograr

### 1.1 Intuición primero

En el Capítulo 1 definiste **qué problema resolvés** y **qué entra en V1**. Eso es como decidir: *"Voy a cocinar una cena para cuatro personas con lo que hay en la heladera."*

En el Capítulo 2 escribís la **receta verificable**: qué pasos, en qué orden, con qué resultado observable en cada uno — sin todavía encender el fuego (codear).

Si saltás este paso y le pedís a la IA *"implementá el scope"*, la IA **rellena huecos** con supuestos que vos nunca aprobaste. Eso es Frankenstein en la fase de requirements.

### 1.2 Qué vas a lograr al terminar este capítulo

| Outcome | Evidencia |
|---------|-----------|
| Cada ítem de scope in tiene al menos un requirement funcional | Tabla FR con IDs |
| Los NFRs críticos de V1 están escritos y son medibles | Lista NFR con métrica o umbral |
| Cada FR prioritario tiene criterios de aceptación | AC testeables (sí/no) |
| Hay trazabilidad scope → FR → AC | Matriz o enlaces explícitos |
| Decisiones de diseño relevantes están en el log | ≥ 2 entradas nuevas (D-00x) |
| **Todavía sin código de implementación** | Fase Requirements completa |

### 1.3 Qué NO es este capítulo

| No es | Por qué |
|-------|---------|
| Elegir framework o base de datos | Capítulo 3 (diseño y trade-offs) |
| Escribir la app | Capítulo 4 (construcción incremental) |
| Documento de 40 páginas waterfall | Viola spec **liviano** ZUZU |
| Lista infinita de user stories | Scope creep disfrazado de agile |

### 1.4 Duración y ritmo

Misma cadencia que Capítulo 1: **6–10 sesiones** part-time. Una sesión = un módulo o un bloque de FRs + ACs de una feature de scope.

### 1.5 Relación con el viaje

```
Capítulo 1  →  Qué y por qué (scope)
Capítulo 2  →  Qué debe hacer el sistema, verificablemente (este)
Capítulo 3  →  Cómo estructurarlo (diseño, componentes, datos)
Capítulo 4  →  Construir por incrementos
```

---

## 2. Módulo 2.1 — De scope a requirements

### 2.1 Qué es un requirement

Un **requirement** (requisito) es una declaración **verificable** de algo que el sistema debe cumplir.

- **Funcional:** qué debe *hacer* (comportamiento).
- **No funcional (NFR):** cómo debe *comportarse* en calidad (rendimiento, seguridad, usabilidad, etc.).

**Diferencia con scope (Cap. 1):**

| Scope in (Cap. 1) | Requirement (Cap. 2) |
|-------------------|----------------------|
| "Registrar un gasto" | "El usuario puede crear un registro con monto > 0, categoría obligatoria y fecha por defecto hoy" |
| Intención de producto | Contrato verificable |
| ~5 bullets | Tantos FRs como comportamientos distintos, sin inflar |

### 2.2 Por qué existen los requirements

**Práctica consolidada:** equipos que implementan sin requirements explícitos tienen más retrabajo, especialmente con IA generando código rápido (2024–2026, observación repetida en estudios de caso y postmortems de proyectos AI-assisted).

Los requirements:

- convierten conversaciones en **acuerdos**;
- permiten decir "terminado" con criterio;
- alimentan tests (Cap. 5) y revisiones;
- dan contexto estable al Mentor entre sesiones.

### 2.3 Cuándo usar requirements formales vs no

| Contexto | Nivel de formalidad |
|----------|---------------------|
| Practice Project V1 personal (ZUZU Cap. 2) | Spec liviano: FR + NFR + AC en markdown |
| Equipo 2–5 personas | Mismo + trazabilidad en issues |
| Regulado (salud, finanzas) | Requirements trazables + aprobación formal |
| Spike de 2 horas | Lista mental; **no** aplica Cap. 2 |

### 2.4 Proceso ZUZU: scope → FR

Para cada ítem de **scope in** del Capítulo 1:

1. Preguntar: *¿Qué comportamientos observables incluye?*
2. Un scope item puede generar **1–3 FRs**; si genera más, revisar si hay scope creep.
3. Asignar ID: `FR-001`, `FR-002`, …
4. Verificar contra **non-goals**: el FR no debe pedir lo explícitamente excluido.

### 2.5 Ejemplo incorrecto

**Scope in:** "Ver lista de gastos de la semana"

**FR mal escrito:**
> FR-003: La lista debe ser bonita y rápida.

*Problemas:* "bonita" no es verificable; "rápida" sin umbral.

### 2.6 Ejemplo correcto

**FR-003:** El sistema muestra todos los gastos cuya fecha cae en la semana calendario actual (lunes 00:00 – domingo 23:59, zona horaria del dispositivo).

**FR-004:** Cada ítem de la lista muestra: monto, categoría, fecha.

---

## 3. Módulo 2.2 — Requirements funcionales

### 3.1 Anatomía de un FR bien escrito

Plantilla ZUZU:

```
ID: FR-XXX
Título: (verbo + objeto)
Descripción: El sistema / El usuario puede ...
Prioridad: Must | Should | Could (MoSCoW para V1)
Origen: (scope in ítem #N)
Dependencias: (otros FRs, si hay)
Fuera de alcance: (enlace a non-goal si aplica)
```

**Reglas:**

- Un FR = un comportamiento comprobable.
- Evitar "y" que una dos features: dividir.
- Actor claro: *usuario*, *sistema*, *admin* (en V1 personal, casi siempre *usuario*).

### 3.2 Priorización Must / Should / Could

| Prioridad | Significado en V1 |
|-----------|-------------------|
| **Must** | Sin esto, los success criteria del Cap. 1 fallan |
| **Should** | Importante pero V1 puede shippear sin ello si hay tiempo |
| **Could** | Deseable; va a scope out si falta tiempo |

**Práctica consolidada:** MoSCoW ampliamente usado; no es el único método (ver alternativas en Cap. 1).

### 3.3 Errores comunes en FRs

| Error | Ejemplo | Corrección |
|-------|---------|------------|
| Implementación disfrazada | "Usar SQLite local" | "Los datos persisten entre sesiones del navegador en el mismo dispositivo" |
| Vago | "Buena UX" | NFR de usabilidad con umbral (Cap. 2.3) |
| Scope creep | "Exportar PDF" | Enlazar a non-goal; no crear FR |
| Negación sin alternativa | "No debe ser lento" | "Carga inicial < 2s en dispositivo medio (ver NFR-002)" |

### 3.4 Casos límite que el FR debe anticipar (o delegar al AC)

Para *Gastos Hormiga* — ejemplos de preguntas que un buen FR o sus ACs responden:

- ¿Monto 0 o negativo?
- ¿Gasto sin categoría?
- ¿Editar fecha a otra semana — sigue apareciendo en "semana actual"?
- ¿Borrar el último gasto — totales en cero?

No hace falta resolver todo en el FR; muchos detalles van en **criterios de aceptación** (Módulo 2.4).

### 3.5 Set de FRs ejemplo — Gastos Hormiga V1

Derivado del scope in del dry-run validado en Cap. 1:

| ID | Título | Prioridad | Origen scope |
|----|--------|-----------|--------------|
| FR-001 | Crear gasto | Must | Scope #1 |
| FR-002 | Listar gastos semana actual | Must | Scope #2 |
| FR-003 | Total por categoría en semana | Must | Scope #3 |
| FR-004 | Editar gasto existente | Must | Scope #4 |
| FR-005 | Eliminar gasto | Must | Scope #4 |
| FR-006 | Categorías fijas | Must | Scope #5 |

Cada uno se expande en la plantilla del Practice Project (sección 10).

---

## 4. Módulo 2.3 — Requirements no funcionales

### 4.1 Qué es un NFR

Un **non-functional requirement** describe **calidades** del sistema: rendimiento, seguridad, usabilidad, confiabilidad, mantenibilidad, etc.

**Por qué en Cap. 2 y no "después":** **Shift-left** (práctica consolidada en DevSecOps): definir calidad y seguridad temprano cuesta poco; repararlo en producción cuesta mucho.

### 4.2 NFRs típicos para un V1 personal (ZUZU)

No necesitás todos. Elegí los que conectan con **success criteria** y **supuestos de seguridad** del Cap. 1.

| Categoría | Pregunta | Ejemplo NFR |
|-----------|----------|-------------|
| **Usabilidad** | ¿Cuánto tarda la tarea clave? | NFR-001: Crear gasto en ≤ 15 s (usuario practicado) |
| **Rendimiento** | ¿Cuántos datos en V1? | NFR-002: Lista de 500 gastos renderiza en < 1 s |
| **Seguridad / privacidad** | ¿Dónde viven los datos? | NFR-003: Datos solo en almacenamiento local del dispositivo; sin envío a servidor |
| **Confiabilidad** | ¿Qué pasa si cierra el browser? | NFR-004: Tras recargar, los gastos persisten |
| **Mantenibilidad** | (más relevante Cap. 4+) | Liviano en Cap. 2 |

### 4.3 Cómo escribir un NFR medible

Formato:

```
ID: NFR-XXX
Categoría: (seguridad | rendimiento | usabilidad | ...)
Enunciado: El sistema ...
Métrica / umbral: ...
Método de verificación: (manual, cronómetro, inspección, test — Cap. 5)
Relación: (success criterion Cap. 1 #N)
```

### 4.4 Ejemplo bueno vs malo

**Malo:** NFR-SEC-001: El sistema debe ser seguro.

**Bueno:** NFR-SEC-001: V1 no realiza peticiones de red con datos de gastos. Verificación: inspección de tráfico (DevTools) durante sesión de uso normal.

### 4.5 Cuándo NO escribir NFRs extensos

- V1 de aprendizaje con un solo usuario y datos no críticos: **3–5 NFRs** alcanzan.
- No simular compliance bancario si el non-goal dice "sin conexión al banco".

### 4.6 Tendencia emergente (2025–2026)

Algunos equipos generan NFRs y políticas de seguridad asistidos por IA a partir del spec. El principio estable es: **humanos aprueban umbrales**; la IA propone borradores.

---

## 5. Módulo 2.4 — Criterios de aceptación

### 5.1 Qué es un criterio de aceptación (AC)

Un **acceptance criterion** es una condición **binaria** (cumple / no cumple) que demuestra que un FR está implementado correctamente **desde la perspectiva del usuario o del negocio**.

Es el puente entre requirements y tests (Capítulo 5).

### 5.2 Formato recomendado: Given / When / Then

**Práctica consolidada** (BDD — Behavior Driven Development): escenarios en lenguaje casi natural.

```
Given (contexto)
When (acción)
Then (resultado observable)
```

**Ejemplo FR-001 Crear gasto:**

```
AC-001.1
Given estoy en la pantalla principal
When ingreso monto 1500, categoría "café" y confirmo
Then el gasto aparece en la lista de la semana con monto, categoría y fecha de hoy

AC-001.2
Given estoy creando un gasto
When ingreso monto 0 o negativo
Then el sistema no guarda y muestra mensaje de error claro

AC-001.3
Given estoy creando un gasto
When no selecciono categoría
Then el sistema no guarda y solicita categoría
```

### 5.3 Alternativas al formato Given/When/Then

| Formato | Ventajas | Desventajas |
|---------|----------|-------------|
| **Given/When/Then** | Claridad, cercano a tests | Verboso |
| **Lista checklist** | Rápido para V1 chico | Menos estructura en casos complejos |
| **Tabla ejemplo** | Bueno para reglas de datos | No captura flujo |

**Recomendación ZUZU:** Given/When/Then para FRs Must; checklist para edge cases simples.

### 5.4 Cobertura mínima de ACs por FR Must

Para cada FR Must:

- al menos **1 camino feliz** (happy path);
- al menos **1 caso inválido** o límite relevante;
- si aplica: comportamiento al **borrar/editar** (efectos secundarios en totales).

### 5.5 Errores comunes

| Error | Por qué falla |
|-------|---------------|
| AC que describe implementación | "Usa localStorage" → atarte a tecnología |
| AC no testeable | "Se ve profesional" |
| Un AC gigante con 5 cosas | No es binario; dividir |
| ACs que contradicen non-goals | "Sincroniza con la nube" |

### 5.6 AC correcto vs incorrecto (stack-agnostic)

**Incorrecto:** Then guarda en `localStorage` bajo clave `expenses`.

**Correcto:** Then al recargar la aplicación en el mismo dispositivo, el gasto sigue visible en la lista.

La implementación elegirá el mecanismo en Capítulo 3–4; el AC describe **comportamiento observable**.

---

## 6. Módulo 2.5 — User stories vs requirements

### 6.1 No son lo mismo

| User story | Requirement |
|------------|-------------|
| Narrativa corta de valor para el usuario | Declaración verificable del sistema |
| "Como X quiero Y para Z" | "El sistema permite Y bajo condiciones C" |
| Herramienta de conversación y priorización | Herramienta de especificación y QA |

**Práctica consolidada:** muchos equipos agile usan **ambos**: story para el backlog humano; FR/AC para el contrato verificable.

### 6.2 Cuándo usar user stories en ZUZU

| Usar story | Usar solo FR |
|------------|--------------|
| Recordar el *por qué* del usuario | V1 personal, un solo usuario |
| Comunicar con stakeholders no técnicos | Ya tenés problem statement fuerte (Cap. 1) |

En Cap. 2 **no es obligatorio** escribir user stories si tus FRs están trazados al problem statement y scope. **Sí es obligatorio** FR + AC.

### 6.3 Ejemplo story opcional (Gastos Hormiga)

> Como freelancer que controla gastos hormiga, quiero registrar un gasto en pocos segundos, para no abandonar el hábito como con la planilla de Google.

Esa story **mapea** a FR-001 + NFR-001; no las reemplaza.

### 6.4 INVEST (recordatorio)

Stories "buenas" suelen ser **INVEST**: Independent, Negotiable, Valuable, Estimable, Small, Testable.

Si una "story" no es testeable, el trabajo real está en los **ACs** — no en la story.

---

## 7. Módulo 2.6 — Trazabilidad y spec liviano

### 7.1 Qué es trazabilidad

**Traceability:** poder seguir el hilo desde el problema hasta la verificación.

Cadena ZUZU mínima:

```
Problem statement
    ↓
Scope in (#1..#5)
    ↓
FR-00x
    ↓
AC-00x.y
    ↓
(Test manual o automatizado — Cap. 5)
```

### 7.2 Matriz de trazabilidad (plantilla)

| Scope | FR | AC | Success criterion Cap.1 |
|-------|----|----|-------------------------|
| #1 Registrar gasto | FR-001 | AC-001.1–3 | Cargar en < 15 s |
| #3 Total por categoría | FR-003 | AC-003.1–2 | Ver total en un vistazo |

### 7.3 Spec liviano — un solo documento

**Práctica consolidada (spec-driven development, 2024–2026):** un documento (o carpeta pequeña) es la fuente de verdad del *intent*, versionada con el proyecto.

En ZUZU, para V1:

```
PRACTICE_PROJECT.md   ← Cap. 1 (se mantiene)
REQUIREMENTS.md       ← Cap. 2 (nuevo)
```

O una sección **Requirements** dentro del mismo `PRACTICE_PROJECT.md` si preferís un solo archivo. Lo importante es **una fuente**, no diez chats sueltos.

### 7.4 Gestión de cambios

Si durante Cap. 2 descubrís que un scope item era incorrecto:

1. **No** cambiar solo el FR en silencio.
2. Actualizar scope en Cap. 1 **o** registrar decisión en decision log: *"Ampliamos scope #3 porque…"*
3. Revisar non-goals — si rompés uno, es cambio consciente.

Eso evita Frankenstein documental.

---

## 8. Módulo 2.7 — Decisiones de diseño y ADRs

### 8.1 Del decision log al diseño

En Capítulo 1 registraste decisiones de **producto** (ej. sin login, categorías fijas).

En Capítulo 2 aparecen decisiones de **diseño y comportamiento** que no son FRs pero afectan la implementación:

- ¿Qué es "semana actual" (calendario vs últimos 7 días)?
- ¿Moneda única implícita?
- ¿Qué pasa con gastos ambiguos (ej. monto alto)?

### 8.2 Formato decisión en el log

Seguir el mismo decision log del Cap. 1. Ejemplos nuevos para *Gastos Hormiga*:

| ID | Decisión | Alternativas | Razón |
|----|----------|--------------|-------|
| D-005 | Semana = lunes–domingo, timezone local | Últimos 7 días rodantes | Alineado a "esta semana" del problem statement |
| D-006 | Montos enteros en moneda local; sin decimales en V1 | Decimales | Uso personal ARS; simplifica validación |
| D-007 | Gasto con fecha fuera de semana actual no aparece en vista semanal | Mostrar siempre | Refuerza foco semanal (D-004 Cap.1) |

### 8.3 Introducción a ADR (Architecture Decision Record)

Un **ADR** es un decision log **orientado a arquitectura** con contexto, decisión y consecuencias.

**Práctica consolidada:** ADRs en repos (formato Michael Nygard y variantes) ampliamente adoptados en equipos que quieren memoria técnica.

En Cap. 2 podés usar entradas `D-00x` livianas. En **Capítulo 3** formalizarás ADRs si elegís stack y estructura.

**Cuándo escribir ADR completo vs línea en log:**

| Línea en decision log | ADR completo |
|-----------------------|--------------|
| Regla de negocio pequeña | Elección de persistencia, auth, arquitectura |
| Afecta un FR | Afecta muchos FRs y costo de cambio |

### 8.4 Modelo conceptual (permitido en Cap. 2, no es código)

Podés nombrar **entidades** que el dominio necesita — sin tablas ni clases:

```
Gasto (Expense): monto, categoría, fecha
Categoría: una de {café, delivery, transporte, kiosco, otros}
```

Eso ayuda a FRs y ACs; **no** elige SQL vs NoSQL (Cap. 3).

---

## 9. Módulo 2.8 — IA para requirements sin Frankenstein

### 9.1 Rol del Mentor en Capítulo 2

El Mentor puede:

- proponer **borradores** de FR/AC a partir de tu scope;
- encontrar **huecos** (casos límite);
- detectar **contradicciones** con non-goals;
- sugerir **NFRs** que olvidaste.

El Mentor **no** debe:

- agregar features no presentes en scope sin tu aprobación;
- elegir stack en los FRs;
- reemplazar tu validación de criterios de éxito.

### 9.2 Prompts recomendados

```
"A partir de este scope in y non-goals, proponé FRs Must solo.
Marcá cualquier FR que roce un non-goal."

"Para FR-001, generá ACs Given/When/Then: happy path + monto inválido + categoría faltante.
No menciones tecnologías."

"¿Qué NFRs mínimos se derivan de estos success criteria y supuestos de seguridad?"

"Actuá como QA: ¿qué AC falta para que FR-003 sea testeable?"

"¿Hay contradicción entre D-004 (solo semana actual) y FR de edición de fecha?"
```

### 9.3 Cómo validar output de IA

1. Leer cada FR: ¿lo pediste vos en scope?
2. Cada AC: ¿es sí/no sin jerga de implementación?
3. Cruzar con non-goals línea por línea.
4. **Reescribir** con tus palabras lo que aceptás — no pegar el bloque entero.

### 9.4 Señales de Frankenstein en requirements

| Señal | Acción |
|-------|--------|
| FRs duplicados con nombres distintos | Fusionar |
| Más FRs que scope items × 3 | Revisar scope creep |
| ACs con nombres de librerías | Reescribir comportamiento observable |
| NFR "enterprise" en V1 personal | Recortar a lo que success criteria exigen |

---

## 10. Practice Project — Guía del Capítulo 2

### 10.1 Objetivo

Llevar el Practice Project de **Planning** → **Requirements** con spec verificable completo para V1.

**Seguís sin implementar.** Sí podés actualizar entidades conceptuales y decision log.

### 10.2 Prerrequisito

Checklist Cap. 1 completa (sección 11 de [CHAPTER_01](./CHAPTER_01_FROM_IDEA_TO_SCOPE.md)).

Si usás *Gastos Hormiga*, corregí antes los gaps del dry-run:

- Success criterion #2 con matiz de "decisión consciente".
- D-005 para gastos ambiguos (si aplica).

### 10.3 Plantilla REQUIREMENTS.md

```markdown
# [Nombre del proyecto] — Requirements V1

## Estado
Fase: Requirements (Capítulo 2)
Prerrequisito: Capítulo 1 cerrado
Última actualización:

---

## 1. Resumen
(Un párrafo: qué hace V1, enlace al problem statement en PRACTICE_PROJECT.md)

## 2. Requirements funcionales

### FR-001 — [Título]
- **Prioridad:** Must
- **Origen scope:** #1
- **Descripción:** ...
- **Notas / reglas de negocio:** ...

### FR-002 — ...

## 3. Requirements no funcionales

### NFR-001 — Usabilidad — Crear gasto
- **Enunciado:** ...
- **Métrica:** ...
- **Verificación:** ...
- **Liga a success criterion Cap.1:** #1

## 4. Criterios de aceptación

### FR-001 — Crear gasto
**AC-001.1** Given ... When ... Then ...
**AC-001.2** Given ... When ... Then ...

## 5. Modelo conceptual (sin implementación)
- Entidad: ...

## 6. Matriz de trazabilidad
| Scope | FR | AC | Success criterion |
|-------|----|----|-------------------|

## 7. Decision log (nuevas entradas Cap. 2)
| ID | Decisión | Alternativas | Razón | Fecha |

## 8. Fuera de alcance (recordatorio)
(Copiar non-goals relevantes — no reescribir en silencio)

## 9. Notas de sesiones con el Mentor
### Sesión — fecha:

## 10. Definition of Done — Capítulo 2
- [ ] Cada scope in Must tiene ≥1 FR
- [ ] Cada FR Must tiene ≥1 AC happy path + casos límite relevantes
- [ ] ≥3 NFRs con métrica o verificación explícita
- [ ] Matriz de trazabilidad completa para Must
- [ ] ≥2 decisiones nuevas en log (comportamiento o diseño)
- [ ] Sin tecnologías de implementación en FR/AC
- [ ] Sin código de implementación (correcto)
```

### 10.4 Ejemplo completado (extracto) — Gastos Hormiga

#### FR-001 — Crear gasto

- **Prioridad:** Must
- **Origen scope:** #1
- **Descripción:** El usuario puede registrar un gasto con monto entero positivo, una categoría de la lista fija, y fecha por defecto el día actual (editable antes de guardar).
- **Notas:** Moneda única implícita (local del usuario). Ver D-006.

**AC-001.1** Given pantalla principal, When monto 1500 + categoría café + confirmar, Then aparece en lista semanal con fecha de hoy.

**AC-001.2** Given creando gasto, When monto ≤ 0, Then no guarda + mensaje de error.

**AC-001.3** Given creando gasto, When sin categoría, Then no guarda + solicitud de categoría.

#### FR-003 — Total por categoría

- **Descripción:** El sistema muestra el sumatorio de montos por cada categoría para la semana actual (D-005).

**AC-003.1** Given gastos 1000 café y 2000 delivery en la misma semana, When veo resumen, Then café=1000, delivery=2000.

**AC-003.2** Given sin gastos en categoría kiosco, When veo resumen, Then kiosco=0 o categoría oculta (decisión D-008 — documentar).

#### NFR-001 — Usabilidad

- **Métrica:** Crear gasto ≤ 15 s, 3 intentos medidos, usuario ya familiarizado con la UI.
- **Verificación:** Cronómetro manual en sesión de prueba (Cap. 4+).

#### NFR-SEC-001 — Privacidad local

- **Enunciado:** Datos de gastos no se transmiten por red en V1.
- **Verificación:** Inspección de red durante uso (Cap. 4+).

### 10.5 Milestones del capítulo

| # | Milestone | Entregable |
|---|-----------|------------|
| M1 | FRs Must completos | Lista FR trazada a scope |
| M2 | ACs Must completos | Escenarios por FR |
| M3 | NFRs críticos | 3–5 NFRs medibles |
| M4 | Trazabilidad | Matriz llena |
| M5 | Cierre Cap. 2 | Definition of Done |

---

## 11. Rúbrica de capability

Escala 1–5. Mínimo para aprobar: promedio ≥ 3, ningún criterio en 1.

| Criterio | 1 | 3 | 5 |
|----------|---|---|---|
| **FRs verificables** | Vagos o con stack | FR Must claros | Sin ambigüedad; casos límite anticipados |
| **ACs testeables** | Ausentes o subjetivos | Happy path + 1 inválido por FR Must | Cobertura límite; sin implementación en AC |
| **NFRs** | Ausentes | 3+ con alguna métrica | Ligados a success criteria y seguridad Cap.1 |
| **Trazabilidad** | No hay | Scope → FR → AC | + success criteria y decisiones |
| **Uso de IA** | Pegó lista de FRs | Iteró con prompts de revisión | Detectó y corrigió creep/contradicciones |

---

## 12. Errores comunes del capítulo

| Error | Síntoma | Corrección |
|-------|---------|------------|
| **Codear antes de ACs** | Repo con código, ACs vacíos | Parar; completar ACs primero |
| **FR = copia del scope** | Mismo texto, no más verificable | Expandir comportamiento y reglas |
| **100 user stories** | Backlog inflado | FR + AC; stories opcionales |
| **NFR genérico** | "Debe escalar" | Borrar o hacer medible para V1 |
| **Olvidar decisión de negocio** | Debates repetidos en Cap. 4 | D-00x en log ahora |
| **IA agregó login** | FR de auth con non-goal "sin login" | Eliminar FR; re-leer non-goals |

---

## 13. Reflexión y cierre

### 13.1 Preguntas de cierre

1. ¿Algún FR te obligó a **acotar** algo que en Cap. 1 dejaste vago?
2. ¿Qué AC te costó más y qué decisión de diseño reveló?
3. ¿Qué non-goal te salvó de un FR espurio?
4. ¿Podrías darle este REQUIREMENTS.md a otra persona y que sepa qué "terminado" significa?
5. ¿Qué harías distinto si hubieras codeado antes de este capítulo?

### 13.2 Puente al Capítulo 3

En el **[Capítulo 3 — Diseño mínimo viable y trade-offs](./CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md)** vas a:

- elegir **estructura** (componentes, flujos, persistencia) alineada a FR/NFR;
- escribir **ADRs** para decisiones técnicas importantes;
- preparar el primer incremento **implementable** sin Frankenstein.

**Regla:** no elijas stack "porque sí". Cada decisión técnica debe **servir** a FR/NFR y non-goals.

### 13.3 Momento de éxito

> *"Todavía no programé — pero si alguien implementa esto, sé exactamente cuándo está bien y cuándo no."*

Eso es requirements de verdad.

---

## Relacionados

- [CHAPTER_01 — De la idea al scope](./CHAPTER_01_FROM_IDEA_TO_SCOPE.md)
- [LEARNING_CURRICULUM.md](../LEARNING_CURRICULUM.md)
- [MVP_SCOPE.md](../../../product/MVP_SCOPE.md)
- [USER_MENTAL_MODEL.md](../../../product/USER_MENTAL_MODEL.md)

---

## Declaración final

Requirements no son burocracia.

Son el **contrato** entre vos, el Mentor y el futuro código.

Sin ellos, la IA implementa un producto que nadie pidió.
