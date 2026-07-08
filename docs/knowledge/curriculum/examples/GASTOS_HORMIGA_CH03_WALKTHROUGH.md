---
artifact:
  id: ART-CURR-EX-GH3
  type: Curriculum Walkthrough
  status: Draft
  version: 0.1.0
  owner: Founder
  created: 2026-07-08
  initiative: INIT-001
  tags:
    - example
    - walkthrough
    - gastos-hormiga
    - chapter-03
  illustrative_only: true
  based_on:
    - Capítulo 1 + 2 dry-run Gastos Hormiga
    - CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md
---

# Walkthrough ilustrativo — Gastos Hormiga · Capítulo 3

> **Esto no es tu proyecto obligatorio.** Es un ejemplo completo de `DESIGN.md` + ADRs + plan de incrementos para comparar con lo que **vos** produces en el [Capítulo 3](../chapters/CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md).
>
> Requisitos de entrada: tu `REQUIREMENTS.md` del Capítulo 2 (ver dry-run validado en conversación o producí el tuyo).

---

## Cómo usar este archivo

1. Leé el capítulo general primero.
2. Producí **tu** `DESIGN.md` con la plantilla del capítulo.
3. Compará estructura, no dominio: ¿tenés componentes con una responsabilidad? ¿ADRs con alternativas? ¿Incremento 1 pequeño?
4. Opcional: pedile a Claude/otro Mentor un dry-run y compará con este walkthrough.

---

# Parte A — DESIGN.md (referencia)

## Estado

- **Proyecto:** Gastos Hormiga
- **Fase:** Design (Capítulo 3)
- **Requisitos:** REQUIREMENTS V1 (Cap. 2 cerrado)
- **Última actualización:** 2026-07-08

---

## 1. Resumen de arquitectura

V1 es una **aplicación cliente única** (SPA o equivalente en browser) sin backend propio. Tres capas lógicas: Presentación, Aplicación (reglas de negocio), Persistencia local. Los gastos se guardan solo en el dispositivo (NFR-003, NFR-004). La lógica de "semana actual" (D-006) y los totales por categoría (D-009) viven en la capa de aplicación, no en la UI suelta.

**Estilo:** monolito modular en el cliente — un deployable, módulos internos claros.

**Trazabilidad:** cumple FR-001–FR-006 Must; NFR-001–NFR-004; non-goals Cap. 1 (sin sync, sin login, sin mobile nativo).

---

## 2. Componentes

| Componente | Responsabilidad | FR / NFR / Decisiones |
|------------|-----------------|------------------------|
| **ExpenseForm** | Capturar monto, categoría, fecha; validar entrada usuario | FR-001, FR-006; AC-001.x |
| **ExpenseList** | Mostrar gastos de semana actual | FR-002; AC-002.x; D-008 |
| **WeeklySummary** | Mostrar 5 categorías con totales (incl. 0) | FR-003; AC-003.x; D-009 |
| **ExpenseEditor** | Modo edición (reusa Form o wrapper) | FR-004; AC-004.x |
| **DeleteExpenseAction** | Confirmar y eliminar | FR-005; AC-005.x |
| **WeekCalculator** | Rango lunes–domingo, timezone dispositivo | D-006; FR-002, FR-003 |
| **ExpenseService** | Filtrar por semana, recalcular totales, orquestar CRUD | FR-002–005; D-008 |
| **ExpenseRepository** | Persistir y cargar `Expense[]`; sin reglas de UI | NFR-004; FR-001–005 |

**Nota de diseño:** `DeleteExpenseAction` puede ser un botón + diálogo dentro de `ExpenseEditor` — no requiere componente separado si la responsabilidad queda clara.

---

## 3. Diagrama lógico

```
┌──────────────┐  ┌──────────────┐  ┌─────────────────┐
│ ExpenseForm  │  │ ExpenseList  │  │ WeeklySummary   │
└──────┬───────┘  └──────┬───────┘  └────────┬────────┘
       │                 │                    │
       └─────────────────┼────────────────────┘
                         ▼
                 ┌───────────────┐
                 │ ExpenseService│◀── WeekCalculator
                 └───────┬───────┘
                         ▼
                 ┌───────────────────┐
                 │ ExpenseRepository │
                 └───────────────────┘
                         │
                         ▼
                 [ Almacenamiento local ]
```

---

## 4. Flujos de usuario

### 4.1 Crear gasto

```
[Lista semanal] → [+ Agregar] → Form (monto, categoría, fecha default hoy)
    → Validar (AC-001.2, AC-001.3) → Guardar → Service → Repository
    → Volver a Lista (AC-001.1)
```

### 4.2 Semana vacía

```
[Lista] → sin ítems en rango D-006 → mensaje estado vacío (AC-002.2)
[Summary] → 5 categorías en 0 (AC-003.2, D-009)
```

### 4.3 Editar / eliminar

```
[Lista] → ítem → Editar → Form precargado → Guardar
    Si nueva fecha fuera de semana → desaparece de lista y totales (D-008, AC-004.2)

[Lista] → ítem → Eliminar → confirmar → Repository delete → recálculo (AC-005.x)
```

---

## 5. Modelo de datos lógico

```
Expense {
  id: string          // UUID o id estable — obligatorio para edit/delete
  amount: integer     // > 0, sin decimales V1 (D-007)
  category: Category
  date: LocalDate     // solo fecha; timezone dispositivo (D-006)
}

Category = enum {
  COFFEE | DELIVERY | TRANSPORT | KIOSK | OTHER
}
// Mapeo UI: café, delivery, transporte, kiosco, otros (FR-006)
```

**Persistencia lógica:** colección `expenses[]` + `schemaVersion: 1` en el blob raíz.

---

## 6. Estados de la aplicación

| Estado | Cuándo | UI |
|--------|--------|-----|
| `loading` | Al iniciar, cargando Repository | Indicador carga |
| `ready` | Datos cargados | Lista + Summary |
| `empty-week` | `ready` + 0 gastos en semana | Mensaje amigable (AC-002.2) |
| `form-open` | Crear o editar | Form visible |
| `validation-error` | monto/categoría inválidos | Mensaje en Form |
| `persist-error` | fallo al guardar | Mensaje error; no perder input si es posible |

---

## 7. ADRs (resumen — ver Parte B)

| ADR | Título |
|-----|--------|
| GH-ADR-001 | Cliente único sin backend en V1 |
| GH-ADR-002 | Persistencia local vía Repository + IndexedDB |
| GH-ADR-003 | Lógica de semana en WeekCalculator |
| GH-ADR-004 | Stack: herramientas web que el learner ya domina |

---

## 8. Plan de incrementos

| ID | Alcance | FR / AC cerrados | Notas |
|----|---------|------------------|-------|
| **I1** | Crear gasto + listar semana + persistir | FR-001, FR-002 (parcial), AC-001.1–3, AC-002.1, NFR-003/004 | **Cap. 4 empieza aquí** |
| **I2** | WeeklySummary 5 categorías | FR-003, AC-003.1–2, D-009 | |
| **I3** | Editar + D-008 | FR-004, AC-004.1–2 | |
| **I4** | Eliminar + recálculo | FR-005, AC-005.1–2 | |
| **I5** | Vacío, pulido UX, medir NFR-001 | AC-002.2, NFR-001 | |

### Definition of Done — Incremento 1 (preview Cap. 4)

- [ ] AC-001.1, AC-001.2, AC-001.3 pasan manualmente
- [ ] AC-002.1: solo gastos de semana visible
- [ ] Recargar browser: gastos siguen (NFR-004)
- [ ] Cero requests con datos de gasto (NFR-003)
- [ ] Código revisado por el learner; ADRs respetados

---

## 9. Riesgos y casos límite

| Riesgo | Mitigación |
|--------|------------|
| Filtrar semana en UI y en Summary distinto | Un solo `WeekCalculator` + `ExpenseService` |
| 500+ gastos lentos | Repository carga todo; Service filtra; NFR-002 — optimizar en I5 si hace falta |
| DST / cambio timezone | Documentar: usar fecha local del dispositivo; caso raro V1 |
| Usuario borra datos del browser | Aceptado V1; sin backup (non-goal sync) |
| XSS en inputs | Escapar/sanitizar; no innerHTML con datos usuario (ADR seguridad liviana) |

---

## 10. Definition of Done — Capítulo 3

- [x] Diseño cubre FR Must
- [x] ≥ 2 ADRs (4 en walkthrough)
- [x] Incremento 1 definido con ACs
- [x] Stack justificado en ADR-004
- [x] Sin implementación completa V1

---

# Parte B — ADRs del walkthrough

## GH-ADR-001 — Cliente único sin backend en V1

### Estado
Aceptado

### Contexto
- NFR-003: sin red con datos de gastos
- Non-goals Cap. 1: sin sync banco, sin login, sin compartir
- FR-001–006: CRUD local suficiente para un usuario en un dispositivo
- D-001, D-003 Cap. 1: datos locales, sin cuenta

### Decisión
Arquitectura **cliente única** (SPA en browser o equivalente). Sin API propia, sin base de datos servidor en V1.

### Alternativas consideradas

| Alternativa | Pros | Contras |
|-------------|------|---------|
| Backend + DB | Sync futuro más fácil | Viola NFR-003; ops; scope creep |
| BaaS (Firebase, etc.) | Auth/sync rápido | Red, cuenta, non-goals |
| App mobile nativa | Mejor UX móvil | Non-goal mobile nativo V1 |

### Consecuencias
- **Positivas:** deploy estático simple (Cap. 7); superficie de seguridad chica; alineado a constraints tiempo.
- **Negativas:** sync multi-dispositivo requiere rediseño con Repository como frontera.
- **Riesgos:** tentación de agregar "API chiquita" — revisar non-goals antes.

---

## GH-ADR-002 — Persistencia local vía Repository e IndexedDB

### Estado
Aceptado

### Contexto
- NFR-004: persistencia tras recargar
- NFR-002: hasta 500 gastos sin demora perceptible
- NFR-003: local only
- ExpenseRepository ya definido en diseño

### Decisión
`ExpenseRepository` abstrae persistencia. Implementación V1: **IndexedDB** (o wrapper del browser). Serialización JSON de `Expense[]` con `schemaVersion: 1`.

### Alternativas consideradas

| Alternativa | Pros | Contras |
|-------------|------|---------|
| localStorage | API simple | Límite tamaño; sync API; menos idóneo 500 registros |
| IndexedDB | Estructurado, async, escala | API más compleja |
| SQLite WASM | SQL familiar | Peso bundle; overkill V1 |

### Consecuencias
- **Positivas:** cumple NFR sin backend; Repository permite cambiar mecanismo.
- **Negativas:** más código que localStorage; tests manuales al inicio.
- **Riesgos:** learner no conoce IndexedDB — spike 2h permitido (Cap. 3).

---

## GH-ADR-003 — Semana calendario en WeekCalculator

### Estado
Aceptado

### Contexto
- D-006: lunes–domingo, timezone dispositivo
- FR-002, FR-003, D-008: filtrado y totales dependen del mismo rango
- AC-002.1, AC-004.2

### Decisión
Módulo **WeekCalculator** (o funciones puras equivalentes) calcula `startOfWeek` y `endOfWeek`. `ExpenseService` es el único consumidor para filtrar y agregar.

### Alternativas consideradas

| Alternativa | Pros | Contras |
|-------------|------|---------|
| Filtrar en cada componente UI | Rápido de codear | Duplicación; bugs D-008 |
| Librería fecha (date-fns, etc.) | Menos bugs DST | Dependencia; learner debe justificar en ADR-004 |
| Últimos 7 días rodantes | Simple | Contradice D-006 |

### Consecuencias
- **Positivas:** un lugar para testear; ACs claros.
- **Negativas:** hay que definir bien semana en locale.
- **Riesgos:** si UI filtra distinto que Summary, falla AC-003 — tests manuales cruzados en I2.

---

## GH-ADR-004 — Stack web alineado a familiaridad del learner

### Estado
Aceptado (ejemplo — **tu stack puede diferir**)

### Contexto
- Constraints Cap. 1: 2–3 h/semana
- NFR-001: crear gasto rápido — DX importa
- Learner ejemplo: conoce HTML/CSS/JS y frameworks web (perfil ZUZU founder)
- GH-ADR-001: cliente browser

### Decisión (ejemplo walkthrough)
**Vite + TypeScript + framework que el learner ya domine** (React, Vue, Angular, o vanilla si prefiere mínimo absoluto). Build estático. Sin SSR en V1.

*Si el learner domina Angular:* Angular standalone + servicios para Service/Repository es **válido** si ADR documenta por qué la estructura del framework ayuda a separar capas — no porque "siempre uso Angular".

### Alternativas consideradas

| Alternativa | Pros | Contras |
|-------------|------|---------|
| Vanilla HTML/JS | Cero tooling | Más fricción estructura en I1 |
| React/Vue/Svelte | Ecosistema, componentes | Curva si es nuevo |
| Angular | Estructura fuerte, familiar | Pesado para V1 tiny |

### Consecuencias
- **Positivas:** velocidad de aprendizaje en Cap. 4; IA asiste mejor con stacks documentados.
- **Negativas:** riesgo de pegar código framework sin entender capas — Mentor debe revisar separación Service/Repository.
- **Riesgos:** elegir stack nuevo + aprender ingeniería a la vez — preferir stack conocido para **este** Practice Project.

---

# Parte C — Prompts Mentor sugeridos (Cap. 3)

```
"Dado mi REQUIREMENTS.md, proponé componentes. Una responsabilidad cada uno. Sin framework."

"¿Dónde violaría D-008 si filtro la semana solo en ExpenseList?"

"Borrador GH-ADR-002 comparando localStorage vs IndexedDB para mis NFR."

"¿Mi incremento 1 es demasiado grande? Debe cerrar solo FR-001 y lista parcial FR-002."

"Actuá como reviewer: ¿hay over-engineering en este DESIGN.md?"
```

---

## Relacionados

- [CHAPTER_03](../chapters/CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md)
- [examples/README.md](./README.md)

---

## Declaración final

Este walkthrough es la pizarra del profesor.

Tu entrega del Capítulo 3 es el ejercicio.

Si coinciden en **estructura** y no en dominio, el curriculum funciona.
