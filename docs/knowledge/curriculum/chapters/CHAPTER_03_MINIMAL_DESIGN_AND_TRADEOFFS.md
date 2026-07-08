---
artifact:
  id: ART-CURR-CH03
  type: Curriculum Chapter
  status: Draft
  version: 0.2.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  chapter: 3
  tags:
    - curriculum
    - chapter-03
    - design
    - architecture
    - adr
    - trade-offs
  learning_outcomes:
    - Traducir FR/NFR en estructura de sistema mínima verificable
    - Documentar decisiones técnicas con ADRs justificados
    - Evaluar alternativas de persistencia y arquitectura sin dogma de stack
    - Definir flujos de usuario y límites de componentes
    - Planificar el primer incremento implementable (vertical slice)
    - Elegir tecnología como consecuencia del diseño, no al revés
  estimated_duration: 6-10 sesiones (o 2-3 semanas a ritmo part-time)
  prerequisite_chapters:
    - CHAPTER_01_FROM_IDEA_TO_SCOPE
    - CHAPTER_02_REQUIREMENTS_BEFORE_CODE
  maps_to_mvp: false
---

# Capítulo 3 — Diseño mínimo viable y trade-offs

> Ley vinculante: [PRODUCT_THESIS.md](../../../00-constitution/PRODUCT_THESIS.md) · [CONTENT_STANDARDS.md](../../../00-constitution/CONTENT_STANDARDS.md)
>
> **Prerrequisitos:** [Capítulo 1](./CHAPTER_01_FROM_IDEA_TO_SCOPE.md) y [Capítulo 2](./CHAPTER_02_REQUIREMENTS_BEFORE_CODE.md) completados (`REQUIREMENTS.md` con Definition of Done marcada).
>
> Regla de oro: ¿Cada decisión de diseño **sirve** a un FR, NFR o non-goal — y queda **escrita** antes de codear?
>
> **Sobre los ejemplos:** este capítulo es **general**. Donde aparece *Gastos Hormiga*, es solo un **walkthrough ilustrativo** — aplicá el mismo método con **tu** Practice Project. Referencia completa opcional: [GASTOS_HORMIGA_CH03_WALKTHROUGH.md](../examples/GASTOS_HORMIGA_CH03_WALKTHROUGH.md).

---

## Tabla de contenidos

1. [Para quién es y qué vas a lograr](#1-para-quién-es-y-qué-vas-a-lograr)
2. [Módulo 3.1 — De requirements a diseño](#2-módulo-31--de-requirements-a-diseño)
3. [Módulo 3.2 — Diseño mínimo vs arquitectura enterprise](#3-módulo-32--diseño-mínimo-vs-arquitectura-enterprise)
4. [Módulo 3.3 — Componentes y responsabilidades](#4-módulo-33--componentes-y-responsabilidades)
5. [Módulo 3.4 — Flujos de usuario y estados](#5-módulo-34--flujos-de-usuario-y-estados)
6. [Módulo 3.5 — Persistencia y modelo de datos](#6-módulo-35--persistencia-y-modelo-de-datos)
7. [Módulo 3.6 — Elegir stack con criterio](#7-módulo-36--elegir-stack-con-criterio)
8. [Módulo 3.7 — ADRs — decisiones técnicas formales](#8-módulo-37--adrs--decisiones-técnicas-formales)
9. [Módulo 3.8 — Primer incremento (vertical slice)](#9-módulo-38--primer-incremento-vertical-slice)
10. [Módulo 3.9 — IA en diseño sin Frankenstein](#10-módulo-39--ia-en-diseño-sin-frankenstein)
11. [Practice Project — Guía del Capítulo 3](#11-practice-project--guía-del-capítulo-3)
12. [Rúbrica de capability](#12-rúbrica-de-capability)
13. [Errores comunes del capítulo](#13-errores-comunes-del-capítulo)
14. [Reflexión y cierre](#14-reflexión-y-cierre)

---

## 1. Para quién es y qué vas a lograr

### 1.1 Intuición primero

Tenés la receta (requirements). El diseño responde: **¿cómo organizo la cocina para cocinar esa receta sin chaos?**

- ¿Una sartén o cinco?
- ¿Dónde guardo los ingredientes?
- ¿En qué orden preparo?

Todavía **no** es "prender el fuego a full" (implementar todo). Es decidir la **forma** del sistema para que el Capítulo 4 sea incremental y no otro Frankenstein.

### 1.2 Qué vas a lograr al terminar este capítulo

| Outcome | Evidencia |
|---------|-----------|
| Diseño mínimo que cubre FR/NFR Must de V1 | `DESIGN.md` |
| Decisiones técnicas importantes documentadas | ≥ 2 ADRs aceptados |
| Componentes con responsabilidades claras | Diagrama o lista + límites |
| Flujos críticos descritos | Flujos usuario + estados |
| Modelo de datos alineado al conceptual | Esquema lógico (no DDL obligatorio) |
| Primer incremento definido | Plan de vertical slice con FR/AC que cierra |
| **Sin implementar V1 completa** | Solo diseño + plan de build |

### 1.3 Qué cambia respecto al Capítulo 2

| Capítulo 2 | Capítulo 3 |
|------------|------------|
| *Qué* debe hacer el sistema | *Cómo* se estructura para cumplirlo |
| FR/AC sin tecnología | ADRs **sí** eligen tecnología **con razón** |
| Modelo conceptual | Modelo lógico + persistencia |
| Prohibido codear | Permitido **prototipo desechable** opcional (≤ 2 h, throwaway) |

**Regla:** un spike de 2 horas para probar persistencia local está bien si tiene **fecha de muerte** y no se convierte en "el proyecto".

### 1.5 Ejemplos ilustrativos vs tu proyecto

| Tipo de contenido | Qué hacés vos |
|-------------------|---------------|
| Módulos 3.1–3.2, 3.7–3.9, plantillas, rúbrica | Estudiar y aplicar a **tu** proyecto |
| Secciones marcadas *Gastos Hormiga* | Comparar con tu diseño; **no copiar** dominio ni stack |
| [Walkthrough completo Cap. 3](../examples/GASTOS_HORMIGA_CH03_WALKTHROUGH.md) | Referencia si querés ver un `DESIGN.md` + ADRs cerrados de punta a punta |

Si tu proyecto es distinto (otro dominio, otro stack), el capítulo **no cambia** — cambian tus artefactos.

### 1.6 Relación con el viaje

```
Capítulo 2  →  Requirements verificables
Capítulo 3  →  Diseño + ADRs + incremento 1 (este)
Capítulo 4  →  Construcción incremental con IA
```

---

## 2. Módulo 3.1 — De requirements a diseño

### 2.1 Qué es diseño de software (en ZUZU)

**Diseño** es la descripción de:

- **estructura** (partes y límites);
- **comportamiento** entre partes;
- **datos** y su ciclo de vida;
- **trade-offs** explícitos.

No es dibujar por dibujar. Cada elemento del diseño debe **trazar** a un FR, NFR o decisión previa (D-00x).

### 2.2 Proceso ZUZU

```
1. Leer REQUIREMENTS.md (FR Must, NFR, AC)
2. Identificar capacidades del sistema (verbs): crear, listar, sumar, editar, eliminar
3. Agrupar en componentes con una responsabilidad cada uno
4. Definir flujos de usuario que ejercitan ACs
5. Decidir persistencia que cumple NFR-003, NFR-004
6. Elegir stack mínimo que cumple constraints (tiempo, solo dev, local)
7. Escribir ADRs para decisiones reversibles o costosas
8. Definir incremento 1 = vertical slice más pequeño que entrega valor + aprendizaje
```

### 2.3 Cuándo el diseño es "suficiente" para V1 personal

**Práctica consolidada:** diseño suficiente cuando un developer (vos) podés explicar en 10 minutos cómo implementar cada FR Must **sin inventar** reglas nuevas en el teclado.

No cuando tenés diagrama UML de 12 páginas.

### 2.4 Anti-patrón: diseño driven by hype

| Señal | Problema |
|-------|----------|
| "Uso microservicios porque es lo moderno" | NFR no lo pide; complejidad gratis |
| "PostgreSQL porque siempre" | V1 local sin red — overkill |
| "React porque lo vi en TikTok" | No conectado a FR/NFR |
| La IA sugirió Kubernetes | Rechazar para Gastos Hormiga V1 |

---

## 3. Módulo 3.2 — Diseño mínimo vs arquitectura enterprise

### 3.1 Espectro de arquitectura

| Estilo | Descripción | Cuándo (industria) |
|--------|-------------|------------------|
| **Monolito modular** | Una app, módulos internos claros | Default recomendado ZUZU V1 |
| **Cliente + API + DB** | Separación clásica tres capas | Cuando hay backend real y multi-usuario |
| **Microservicios** | Servicios independientes desplegables | Escala org, equipos autónomos — **no V1 personal** |
| **Serverless** | Funciones bajo demanda | Eventos, picos, ops mínima — evaluar costo/complejidad |

**Práctica consolidada (2026):** la mayoría de productos nuevos empiezan **simple** (monolito o SPA+storage local) y evolucionan si los NFR lo exigen.

**Tendencia emergente:** más equipos usan IA para generar boilerplate de arquitecturas más complejas — el riesgo es **complejidad prematura**. ZUZU enseña lo contrario.

### 3.2 Diseño mínimo viable (no confundir con MVP de producto)

**MVP de producto** (Cap. 1): qué valor entregás al usuario.

**Diseño mínimo viable** (Cap. 3): la **estructura más simple** que cumple FR/NFR Must.

Pregunta guía:

> ¿Cuál es la arquitectura con **menos partes móviles** que aún cumple NFR-003 (local) y NFR-004 (persistencia)?

Para *Gastos Hormiga*, la respuesta típica es: **aplicación web de una sola página (SPA) o equivalente, datos en el cliente, sin backend en V1**.

### 3.3 Capas lógicas (stack-agnostic)

Aunque no tengas backend, pensá en capas **lógicas**:

```
[ Presentación ]  → UI, formularios, lista, resumen
[ Aplicación ]    → reglas: semana actual, totales, validación monto
[ Persistencia ]  → guardar/cargar gastos
```

**Ventaja:** podés cambiar la tecnología de persistencia sin mezclar validación en la UI.

**Práctica consolidada:** separación de concerns — desde structured programming hasta clean/hexagonal architecture comparten esta idea.

---

## 4. Módulo 3.3 — Componentes y responsabilidades

### 4.1 Qué es un componente (aquí)

Un **componente** es una unidad con **una responsabilidad principal** y límites claros.

No hace falta que sea un "microservicio". Puede ser un módulo en la misma app.

### 4.2 Regla de responsabilidad única (intuición)

Si describís un componente con **"y"** dos veces, probablemente son dos componentes.

| Mal | Mejor |
|-----|-------|
| "Lista y guarda y calcula totales" | `ExpenseList`, `ExpenseForm`, `WeeklySummary`, `ExpenseRepository` |

### 4.3 Componentes sugeridos — Gastos Hormiga V1

| Componente | Responsabilidad | FRs que sirve |
|------------|-----------------|---------------|
| **ExpenseForm** | Capturar monto, categoría, fecha; validar entrada | FR-001, FR-006 |
| **ExpenseList** | Mostrar gastos de semana actual | FR-002 |
| **WeeklySummary** | Totales por categoría (5 siempre, D-009) | FR-003 |
| **ExpenseEditor** | Editar gasto existente (o reusa Form en modo edición) | FR-004 |
| **WeekCalculator** | Definir límites lunes–domingo (D-006) | FR-002, FR-003 |
| **ExpenseRepository** | CRUD persistido; sin lógica de UI | FR-001–005, NFR-004 |
| **ExpenseService** (opcional) | Orquestar reglas: filtrar semana, recalcular totales | FR-002–005, D-008 |

**Alternativa válida:** fusionar Service + Repository si querés menos archivos en V1 — documentar en ADR.

### 4.4 Diagrama lógico (ejemplo)

```
┌─────────────┐     ┌──────────────────┐     ┌───────────────────┐
│ ExpenseForm │────▶│  ExpenseService  │────▶│ ExpenseRepository │
└─────────────┘     │  (reglas semana) │     │  (persistencia)   │
┌─────────────┐     │                  │     └───────────────────┘
│ ExpenseList │◀────│                  │
└─────────────┘     └──────────────────┘
┌─────────────┐            ▲
│WeeklySummary│────────────┘
└─────────────┘
```

### 4.5 Errores comunes

| Error | Consecuencia |
|-------|--------------|
| Lógica de totales en el componente UI | Duplicación, bugs al editar |
| Repository que valida monto | Mezcla capas; testear mal |
| 15 componentes para 6 FRs | Over-engineering |

---

## 5. Módulo 3.4 — Flujos de usuario y estados

### 5.1 Por qué flujos

Los ACs describen escenarios. Los **flujos** conectan pantallas/vistas para que no inventes navegación al codear.

### 5.2 Flujo principal — registrar y ver

```
[Inicio / Lista semanal]
    │
    ├─(vacía)→ mensaje estado vacío (AC-002.2)
    │
    ├─ Ver resumen por categoría (siempre 5 filas, D-009)
    │
    └─ [Agregar gasto] → Form → Validar → Guardar → Volver a Lista (AC-001.x)
```

### 5.3 Flujo editar / eliminar

```
[Lista] → seleccionar ítem → [Editar] → Form precargado
                │
                └─ [Eliminar] → confirmar → Lista actualizada (AC-005.x)

Si fecha editada queda fuera de semana → ítem desaparece de lista (D-008, AC-004.2)
```

### 5.4 Estados de la aplicación (mínimo)

| Estado | Descripción |
|--------|-------------|
| `loading` | Cargando gastos al iniciar |
| `ready` | Lista + resumen visibles |
| `empty-week` | Sin gastos en semana (subestado de ready) |
| `editing` | Form en modo edición |
| `error` | Error de validación o persistencia |

**NFR:** estados de error deben ser **claros** (mensaje humano), no stack traces al usuario.

### 5.5 Casos límite de diseño (de Cap. 2)

| Caso | Comportamiento diseñado |
|------|-------------------------|
| Monto ≤ 0 | Form bloquea; mensaje (AC-001.2) |
| Sin categoría | Form bloquea (AC-001.3) |
| Gasto ambiguo alto (D-005 Cap.1) | Usuario elige categoría; sin flujo especial |
| 500 gastos históricos | Repository filtra por semana en Service; NFR-002 |

---

## 6. Módulo 3.5 — Persistencia y modelo de datos

### 6.1 Del modelo conceptual al lógico

**Cap. 2 conceptual:**

- Gasto: monto, categoría, fecha
- Categoría: enum fijo

**Cap. 3 lógico (ejemplo):**

```
Expense {
  id: identificador único (UUID o incremental)
  amount: entero positivo
  category: enum { COFFEE, DELIVERY, TRANSPORT, KIOSK, OTHER }
  date: fecha (solo día, sin hora, o con hora según ADR)
}
```

**Decisión de diseño:** `id` estable para editar/eliminar (FR-004, FR-005).

### 6.2 Alternativas de persistencia (cliente solo, V1)

| Opción | Ventajas | Desventajas | Contexto |
|--------|----------|-------------|----------|
| **localStorage** | Simple, API síncrona | Límite ~5MB, string-only, bloquea main thread | V1 muy chica, pocos registros |
| **IndexedDB** | Más capacidad, estructurado, async | API más compleja | Cientos/miles de registros, NFR-002 |
| **Archivo JSON manual** | Transparente | Friction en browser | Más común en scripts desktop |
| **SQLite (desktop/mobile)** | Robusto | Requiere runtime nativo o WASM | Apps nativas, no browser puro |

**Recomendación para Gastos Hormiga (con fundamento):**

- Si browser SPA y ≤ 500 gastos: **IndexedDB** o **localStorage** con JSON serializado cumplen NFR-003 y NFR-004.
- **localStorage** es válido si aceptás límite de escala y simplicidad máxima (learner principiante).
- **IndexedDB** si querés practicar persistencia más realista sin backend.

**No hay una sola respuesta correcta** — hay trade-off documentado en ADR.

### 6.3 Integridad y migraciones (liviano)

| Tema | V1 mínimo |
|------|-----------|
| Schema version | Campo `schemaVersion: 1` en blob guardado |
| Migración | Si cambiás modelo, función `migrateV1toV2` — puede ser Cap. 4+ |
| Corrupción de datos | Mensaje error + estado vacío; log interno |

### 6.4 Seguridad en diseño (shift-left)

| Amenaza V1 | Mitigación diseño |
|------------|-------------------|
| Datos en disco local visibles | Aceptado para V1 personal; documentar en ADR |
| XSS roba gastos | Sanitizar inputs; no `innerHTML` con datos usuario |
| Extensión maliciosa lee storage | Fuera de scope V1; awareness en ADR |

---

## 7. Módulo 3.6 — Elegir stack con criterio

### 7.1 Orden correcto de decisión

```
Requirements → Diseño lógico → Constraints → ADR stack → Implementación
```

**Nunca al revés:** "Sé Angular, entonces el diseño es Angular".

### 7.2 Criterios de selección (2026)

| Criterio | Pregunta |
|----------|----------|
| **Fit con NFR** | ¿Cumple local, persistencia, < 15s crear gasto? |
| **Familiaridad del learner** | ¿Podés terminar incremento 1 en tu tiempo? |
| **Ecosistema** | ¿Hay docs y IA que ayuden sin mentirte? |
| **Costo** | ¿Gratis para V1 personal? |
| **Mantenibilidad** | ¿Entendés el código que generarás? |

### 7.3 Ejemplos de stack **válidos** para Gastos Hormiga (ilustrativos)

| Stack | Por qué podría servir | Trade-off |
|-------|----------------------|-----------|
| HTML + CSS + JS vanilla + localStorage | Mínimo, sin build | Escala y estructura manual |
| Vite + React/Vue/Svelte + IndexedDB | Componentes, DX moderna | Tooling, curva si sos nuevo en el framework |
| Angular (si ya lo conocés) | Estructura fuerte | Pesado para V1 tiny |
| PWA estática | Offline, instalable | Más config |

**ZUZU no elige por vos.** Vos documentás en ADR por qué tu stack cumple **tus** FR/NFR y constraints (2–3 h/semana, freelancer, etc.).

### 7.4 Cuándo agregar backend (spoiler: no en V1)

Non-goals Cap. 1 excluyen sync y multi-usuario. Un backend **contradice** NFR-003 salvo que sea backend local (innecesario).

**Predicción fundamentada:** si V2 pide sync, el diseño Cap. 3 debería haber mantenido **Repository** como frontera para no reescribir toda la UI.

---

## 8. Módulo 3.7 — ADRs — decisiones técnicas formales

### 8.1 Qué es un ADR

**Architecture Decision Record** — documento corto:

- **Contexto:** qué fuerza la decisión (FR, NFR, constraint)
- **Decisión:** qué elegiste
- **Alternativas:** qué descartaste
- **Consecuencias:** qué ganás y qué perdés

**Práctica consolidada:** formato Nygard y variantes en repos `docs/adr/` — ampliamente adoptado.

### 8.2 Plantilla ZUZU

```markdown
# ADR-XXX — Título corto

## Estado
Aceptado | Propuesto | Reemplazado por ADR-YYY

## Contexto
(Enlaces a FR/NFR/D-00x)

## Decisión
(Qué se elige)

## Alternativas consideradas
| Alternativa | Pros | Contras |

## Consecuencias
### Positivas
### Negativas
### Riesgos a monitorear
```

### 8.3 ADRs mínimos para Gastos Hormiga (ejemplo)

**ADR-001 — Arquitectura cliente única sin backend en V1**

- Contexto: NFR-003, non-goals sync/login
- Decisión: SPA o equivalente, sin servidor propio
- Alternativas: API + DB, Firebase
- Consecuencias: simple deploy estático después; sync difícil en V2

**ADR-002 — Persistencia local (ej. IndexedDB vía abstracción Repository)**

- Contexto: NFR-004, NFR-002, FR-001–005
- Decisión: IndexedDB detrás de `ExpenseRepository`
- Alternativas: localStorage, SQLite WASM
- Consecuencias: más código inicial; mejor escala

**ADR-003 — Semana calendario en módulo WeekCalculator**

- Contexto: D-006, FR-002, FR-003
- Decisión: lógica de rango de fechas centralizada, timezone del dispositivo
- Alternativas: filtrar en UI; librería de fechas
- Consecuencias: un solo lugar para testear; cuidado con DST (caso límite)

### 8.4 Cuántos ADRs en V1

| V1 personal ZUZU | Cantidad |
|------------------|----------|
| Mínimo | 2 ADRs |
| Recomendado | 3–4 ADRs |
| Máximo saludable | 6 — si hay más, quizás over-documentás |

---

## 9. Módulo 3.8 — Primer incremento (vertical slice)

### 9.1 Qué es un vertical slice

Un **vertical slice** implementa una **capacidad de usuario** de punta a punta: UI → lógica → persistencia → verificación.

No es "primero toda la DB, después toda la UI" (horizontal slice — anti-patrón para aprender).

### 9.2 Por qué importa antes del Capítulo 4

**Práctica consolidada (agile, lean):** entregar valor temprano reduce riesgo y Frankenstein.

El incremento 1 debe ser **demostrable** y **cerrar ACs** de un FR Must.

### 9.3 Orden sugerido de incrementos — Gastos Hormiga

| Incremento | Alcance | FR/AC | Valor |
|------------|---------|-------|-------|
| **I1** | Crear gasto + persistir + ver en lista semanal | FR-001, FR-002 (parcial), AC-001.x, AC-002.1 | Primer flujo completo |
| **I2** | Resumen por categoría (5 filas, D-009) | FR-003, AC-003.x | "Vistazo" del success criterion #2 |
| **I3** | Editar + efecto D-008 | FR-004, AC-004.x | |
| **I4** | Eliminar + recálculo | FR-005, AC-005.x | |
| **I5** | Pulir vacío, errores, NFR-001 medición | AC-002.2, NFRs | |

**Capítulo 4** implementa al menos **I1** completo con IA como colaborador, no autor.

### 9.4 Definition of Done — Incremento 1 (preview Cap. 4)

- [ ] AC-001.1, AC-001.2, AC-001.3 verificados manualmente
- [ ] Gasto persiste tras recargar (NFR-004)
- [ ] Sin requests de red con datos de gasto (NFR-003)
- [ ] Código revisado por vos (no solo pegado de IA)
- [ ] Decisiones de implementación no contradicen ADRs

---

## 10. Módulo 3.9 — IA en diseño sin Frankenstein

### 10.1 Qué pedirle al Mentor

```
"Dado REQUIREMENTS.md, proponé componentes con una responsabilidad cada uno.
No elijas framework todavía."

"Compará localStorage vs IndexedDB para estos NFR. Tabla pros/contras."

"Borrador ADR-002 para persistencia local. Contexto: FR-001 a FR-005, NFR-003, NFR-004."

"¿Qué componente viola D-008 si pongo el filtro de semana solo en la lista UI?"

"Definí incremento 1 como vertical slice. ¿Qué ACs cierra?"
```

### 10.2 Qué no pedir todavía

```
"Generá la app completa en React"
"Elegí el mejor stack 2026 y codeá"
```

Eso salta al Capítulo 4 sin diseño estable.

### 10.3 Validar diseño generado por IA

1. ¿Cada componente mapea a FR?
2. ¿Repository aísla persistencia?
3. ¿ADRs citan FR/NFR/non-goals?
4. ¿Incremento 1 es pequeño?
5. ¿Hay microservicios sin justificación? → eliminar

---

## 11. Practice Project — Guía del Capítulo 3

### 11.1 Objetivo

Fase **Design**: producir `DESIGN.md` + ADRs + plan de incrementos.

### 11.2 Plantilla DESIGN.md

```markdown
# [Proyecto] — Design V1

## Estado
Fase: Design (Capítulo 3)
Requisitos: [REQUIREMENTS.md](./REQUIREMENTS.md)

## 1. Resumen de arquitectura
(Un párrafo: estilo, capas, sin backend, etc.)

## 2. Componentes
| Componente | Responsabilidad | FR/NFR |

## 3. Diagrama lógico
(ASCII o enlace)

## 4. Flujos de usuario
### Flujo: crear gasto
### Flujo: editar / eliminar

## 5. Modelo de datos lógico
## 6. Estados de la aplicación
## 7. ADRs
- [ADR-001](./adr/ADR-001-....md)
- [ADR-002](./adr/ADR-002-....md)

## 8. Plan de incrementos
| ID | Alcance | FR/AC | Notas |

## 9. Riesgos y casos límite
## 10. Definition of Done — Capítulo 3
- [ ] Diseño cubre todos los FR Must
- [ ] ≥ 2 ADRs aceptados
- [ ] Incremento 1 definido con ACs
- [ ] Stack elegido con justificación en ADR
- [ ] Sin implementación completa de V1 (correcto)
```

### 11.3 Walkthrough ilustrativo (opcional)

Si querés ver un diseño completo aplicado a un proyecto concreto — **sin que sea el tuyo obligatoriamente** — usá:

**[GASTOS_HORMIGA_CH03_WALKTHROUGH.md](../examples/GASTOS_HORMIGA_CH03_WALKTHROUGH.md)**

Incluye `DESIGN.md` cerrado, 3 ADRs y plan de incrementos I1–I5. Comparalo con lo que producís para tu proyecto.

### 11.4 Extracto resumido — Gastos Hormiga *(solo ilustración)*

**Resumen:** SPA en browser, tres capas lógicas, persistencia local vía Repository, sin backend. Semana y totales en ExpenseService + WeekCalculator.

**Incremento 1:** Form + List + Repository + validación monto/categoría; AC-001.1–3; lista muestra gastos de semana; persistencia tras reload.

### 11.5 Spike opcional (≤ 2 h)

Probar solo: "¿guardo y leo un Expense en mi storage elegido?"  
**Throwaway code** — no es el proyecto. Resultado va al ADR de persistencia.

---

## 12. Rúbrica de capability

| Criterio | 1 | 3 | 5 |
|----------|---|---|---|
| **Alineación a requirements** | Diseño ignora FR | Cubre FR Must | Trazabilidad FR → componente |
| **Trade-offs** | Stack sin razón | ADR con alternativas | Consecuencias honestas |
| **Simplicidad** | Over-engineering | Monolito modular claro | Mínimo que cumple NFR |
| **Incremento 1** | Ausente o gigante | Vertical slice definido | ACs + DoD preview Cap.4 |
| **Uso de IA** | "Codeá todo" | Revisión de componentes/ADR | Corrigió complejidad innecesaria |

Mínimo aprobar: promedio ≥ 3, ningún 1.

---

## 13. Errores comunes del capítulo

| Error | Corrección |
|-------|------------|
| Diagrama UML enorme | Lista componentes + flujos |
| Elegir stack antes de componentes | Reordenar proceso |
| Sin ADR de persistencia | Escribir ADR-002 |
| Incremento 1 = "toda la app" | Recortar a FR-001 + lista |
| Copiar arquitectura de tutorial ajeno | Diseñar desde tus FR |
| Backend "por las dudas" | Releer non-goals y NFR-003 |

---

## 14. Reflexión y cierre

### 14.1 Preguntas de cierre

1. ¿Qué decisión de diseño te hubiera ahorrado un Frankenstein en proyectos pasados?
2. ¿Tu stack elegido es por familiaridad o por requirements?
3. ¿Podés explicar incremento 1 sin abrir la computadora?
4. ¿Qué ADR te costó más y qué alternativa rechazaste?
5. ¿Estás listo para codear **solo** incremento 1?

### 14.2 Puente al Capítulo 4

**Capítulo 4 — Construcción incremental con IA:** implementás I1 con el Mentor, revisás código generado, validás ACs, sin saltar a I2 hasta cerrar I1.

### 14.3 Momento de éxito

> *"Sé qué voy a construir primero, con qué piezas, y por qué — todavía sin haber escrito toda la app."*

---

## Relacionados

- [CHAPTER_02](./CHAPTER_02_REQUIREMENTS_BEFORE_CODE.md)
- [LEARNING_CURRICULUM.md](../LEARNING_CURRICULUM.md)
- [ADR.md](../../../architecture/ADR.md) (ADRs del repo ZUZU — referencia de formato)

---

## Declaración final

El diseño no es ornamentación.

Es la **última barrera** antes de que el teclado decida por vos.

Un buen Capítulo 3 hace que el Capítulo 4 sea aburrido en lo bueno: predecible, incremental, sin sorpresas.
