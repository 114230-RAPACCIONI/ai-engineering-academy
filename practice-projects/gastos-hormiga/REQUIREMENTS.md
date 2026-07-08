# Gastos Hormiga — Requirements V1

## Estado
Fase: Requirements (Capítulo 2)
Prerrequisito: Capítulo 1 cerrado (gaps corregidos: success criterion #2, D-005)
Última actualización: 2026-07-08

---

## 1. Resumen
V1 permite registrar gastos chicos del día a día (café, delivery, transporte, kiosco, otros), verlos agrupados en la semana actual y editarlos o borrarlos si hace falta, sin login ni conexión al banco. Ver [PRACTICE_PROJECT.md](./PRACTICE_PROJECT.md) para el problem statement completo.

## 2. Requirements funcionales

### FR-001 — Crear gasto
- **Prioridad:** Must
- **Origen scope:** #1
- **Descripción:** El usuario puede registrar un gasto con monto entero positivo, una categoría de la lista fija (D-002 Cap. 1), y fecha por defecto el día actual (editable antes de guardar).
- **Notas / reglas de negocio:** Moneda única implícita, local del usuario (ver D-007). Un gasto ambiguo se carga igual, en la categoría más cercana (D-005 Cap. 1) — el sistema no bloquea ni pide una categoría especial para eso.

### FR-002 — Listar gastos de la semana actual
- **Prioridad:** Must
- **Origen scope:** #2
- **Descripción:** El sistema muestra todos los gastos cuya fecha cae en la semana calendario actual (lunes 00:00 – domingo 23:59, timezone del dispositivo — ver D-006). Cada ítem muestra monto, categoría y fecha.
- **Notas / reglas de negocio:** Un gasto con fecha fuera de la semana actual no aparece en esta vista, aunque exista en el sistema (ver D-008).

### FR-003 — Total por categoría en la semana
- **Prioridad:** Must
- **Origen scope:** #3
- **Descripción:** El sistema muestra el sumatorio de montos por cada una de las 5 categorías fijas, para la semana actual (D-006).
- **Notas / reglas de negocio:** Las 5 categorías se muestran siempre, incluso sin gastos cargados (ver D-009).

### FR-004 — Editar gasto existente
- **Prioridad:** Must
- **Origen scope:** #4
- **Descripción:** El usuario puede modificar el monto, la categoría o la fecha de un gasto ya cargado.
- **Notas / reglas de negocio:** Si la nueva fecha cae fuera de la semana actual, el gasto deja de aparecer en la lista semanal (FR-002) y los totales por categoría (FR-003) se recalculan sin él (ver D-008).
- **Dependencias:** FR-002, FR-003 (recalculo de totales tras editar).

### FR-005 — Eliminar gasto
- **Prioridad:** Must
- **Origen scope:** #4
- **Descripción:** El usuario puede eliminar un gasto cargado por error.
- **Notas / reglas de negocio:** Al eliminar, el total de su categoría (FR-003) se recalcula inmediatamente; si era el único gasto de esa categoría, el total vuelve a 0 (la categoría sigue visible, D-009).
- **Dependencias:** FR-003 (recalculo de totales tras eliminar).

### FR-006 — Categorías fijas
- **Prioridad:** Must
- **Origen scope:** #5
- **Descripción:** El sistema solo permite elegir una categoría entre las 5 fijas: café, delivery, transporte, kiosco, otros (D-002 Cap. 1).
- **Fuera de alcance:** Categorías personalizables por el usuario → non-goal / scope out de Cap. 1. No crear FR de administración de categorías.

## 3. Requirements no funcionales

### NFR-001 — Usabilidad — Crear gasto
- **Enunciado:** Un usuario ya familiarizado con la UI puede crear un gasto en muy pocos pasos.
- **Métrica:** ≤ 15 segundos, medidos en 3 intentos.
- **Método de verificación:** Cronómetro manual en sesión de prueba (Cap. 4+).
- **Relación:** Success criterion Cap. 1 #1.

### NFR-002 — Rendimiento — Listado semanal
- **Enunciado:** La lista y los totales de la semana actual se muestran sin demora perceptible incluso con varios meses de historial acumulado.
- **Métrica:** Renderiza en < 1 s con hasta 500 gastos guardados en total.
- **Método de verificación:** Medición manual con datos de prueba (Cap. 4+).
- **Relación:** Success criterion Cap. 1 #2.

### NFR-003 — Seguridad / privacidad — Datos locales
- **Enunciado:** V1 no realiza peticiones de red con datos de gastos; todo vive en el dispositivo del usuario.
- **Métrica:** Cero requests salientes con datos de gasto.
- **Método de verificación:** Inspección de tráfico de red (DevTools) durante una sesión de uso normal.
- **Relación:** Supuestos de seguridad Cap. 1 (sección 9) y D-001, D-003.

### NFR-004 — Confiabilidad — Persistencia
- **Enunciado:** Los gastos cargados no se pierden al cerrar y reabrir la aplicación en el mismo dispositivo.
- **Métrica:** 100% de los gastos cargados siguen presentes tras recargar.
- **Método de verificación:** Prueba manual: cargar, recargar, verificar (Cap. 4+).
- **Relación:** Success criterion Cap. 1 #3.

## 4. Criterios de aceptación

### FR-001 — Crear gasto
**AC-001.1** Given estoy en la pantalla principal, When ingreso monto 1500, categoría "café" y confirmo, Then el gasto aparece en la lista de la semana con monto, categoría y fecha de hoy.
**AC-001.2** Given estoy creando un gasto, When ingreso monto 0 o negativo, Then el sistema no guarda y muestra un mensaje de error claro.
**AC-001.3** Given estoy creando un gasto, When no selecciono categoría, Then el sistema no guarda y solicita categoría.

### FR-002 — Listar gastos de la semana actual
**AC-002.1** Given tengo gastos cargados en distintas fechas, When abro la lista, Then solo veo los que caen entre el lunes y el domingo de la semana actual.
**AC-002.2** Given no cargué ningún gasto esta semana, When abro la lista, Then veo un estado vacío claro (no un error).

### FR-003 — Total por categoría en la semana
**AC-003.1** Given gastos de 1000 en café y 2000 en delivery en la misma semana, When veo el resumen, Then café = 1000 y delivery = 2000.
**AC-003.2** Given sin gastos en la categoría kiosco esta semana, When veo el resumen, Then kiosco aparece igual, en 0 (D-009).

### FR-004 — Editar gasto existente
**AC-004.1** Given un gasto ya cargado, When le cambio el monto o la categoría y confirmo, Then el cambio se refleja en la lista y en el total de la categoría afectada.
**AC-004.2** Given un gasto de esta semana, When le cambio la fecha a la semana pasada, Then desaparece de la lista y del total semanal actuales (D-008).

### FR-005 — Eliminar gasto
**AC-005.1** Given un gasto cargado por error, When lo elimino, Then desaparece de la lista y su monto ya no suma en el total de su categoría.
**AC-005.2** Given elimino el único gasto de una categoría, When veo el resumen, Then esa categoría muestra 0, no desaparece (D-009).

### FR-006 — Categorías fijas
**AC-006.1** Given estoy creando o editando un gasto, When abro el selector de categoría, Then solo veo las 5 categorías fijas, sin opción de crear una nueva.

## 5. Modelo conceptual (sin implementación)
- **Gasto (Expense):** monto (entero positivo), categoría, fecha.
- **Categoría:** una de {café, delivery, transporte, kiosco, otros} — enum fijo, no editable por el usuario (D-002 Cap. 1, FR-006).

## 6. Matriz de trazabilidad

| Scope (Cap. 1) | FR | AC | Success criterion (Cap. 1) |
|-----------------|----|----|------------------------------|
| #1 Registrar gasto | FR-001 | AC-001.1 – AC-001.3 | #1 Cargar en < 15 s |
| #2 Ver lista de la semana | FR-002 | AC-002.1 – AC-002.2 | #2 Ver total en un vistazo |
| #3 Total por categoría | FR-003 | AC-003.1 – AC-003.2 | #2 Ver total y decidir conscientemente |
| #4 Editar o borrar gasto | FR-004, FR-005 | AC-004.1 – AC-004.2, AC-005.1 – AC-005.2 | #3 Usarlo 2 semanas sin volver al celular |
| #5 Categorías fijas | FR-006 | AC-006.1 | #2 Ver total por categoría |

## 7. Decision log (nuevas entradas Cap. 2)

| ID | Decisión | Alternativas | Razón | Fecha |
|----|----------|--------------|-------|-------|
| D-006 | Semana = lunes a domingo, timezone local del dispositivo | Últimos 7 días rodantes | Alineado a "esta semana" tal como aparece en el problem statement | 2026-07-08 |
| D-007 | Montos enteros en moneda local; sin decimales en V1 | Permitir decimales | Uso personal en ARS; simplifica validación y entrada de datos | 2026-07-08 |
| D-008 | Un gasto editado a una fecha fuera de la semana actual deja de aparecer en la vista semanal y en los totales | Mostrar igual con una marca visual | Refuerza el foco semanal de D-004 (Cap. 1); evita una regla especial solo para este caso | 2026-07-08 |
| D-009 | Las 5 categorías se muestran siempre en el resumen semanal, aunque estén en 0 | Ocultar categorías sin gastos | Vista consistente semana a semana; ver "en qué no gasté" es tan útil como ver en qué sí | 2026-07-08 |

## 8. Fuera de alcance (recordatorio)
- Conectar con el banco o la tarjeta (sync automático) — non-goal Cap. 1.
- Notificaciones o recordatorios — non-goal Cap. 1.
- Versión mobile nativa — non-goal Cap. 1.
- Predicción de gastos con IA — non-goal Cap. 1.
- Multi-moneda, gráficos/reportes avanzados, compartir el registro, categorías personalizables — scope out Cap. 1.

## 9. Notas de sesiones con el Mentor

### Sesión 1 — 2026-07-08

**Prompt usado (9.2):** *"A partir de este scope in y non-goals, proponé FRs Must solo. Marcá cualquier FR que roce un non-goal."*

Resultado: los 6 FRs derivan 1:1 de los 5 ítems de scope in (el ítem #4 "editar o borrar" se dividió en FR-004 y FR-005 porque son dos comportamientos distintos, per regla de la sección 2.4). Ninguno roza un non-goal — se revisó en especial que ningún FR mencionara sync, notificaciones o categorías custom.

**Prompt usado (9.2):** *"Para FR-001, generá ACs Given/When/Then: happy path + monto inválido + categoría faltante. No menciones tecnologías."*

Resultado: AC-001.1 a AC-001.3. Se revisaron para no mencionar mecanismos de guardado (nada de "localStorage" ni similar), solo comportamiento observable.

**Prompt usado (9.2):** *"¿Qué NFRs mínimos se derivan de estos success criteria y supuestos de seguridad?"*

Resultado: NFR-001 (usabilidad, de success criterion #1), NFR-003 (seguridad, de los supuestos de sección 9 de Cap. 1), NFR-004 (confiabilidad, de success criterion #3). Se agregó NFR-002 (rendimiento) porque, aunque no estaba en success criteria explícito, sostiene el "vistazo rápido" del criterion #2 a medida que se acumulan semanas de datos.

**Prompt usado (9.2):** *"Actuá como QA: ¿qué AC falta para que FR-003 sea testeable?"*

Resultado: faltaba definir qué pasa con una categoría sin gastos en la semana (¿se oculta o se muestra en 0?). Esto no estaba en el decision log de Cap. 1 ni implícito en el scope. Se registró como decisión nueva D-009 en vez de resolverlo en silencio dentro del AC.

**Prompt usado (9.2):** *"¿Hay contradicción entre D-004 (solo semana actual) y FR de edición de fecha?"*

Resultado: sí, había una contradicción latente — FR-004 permite cambiar la fecha de un gasto, pero no estaba definido qué pasa si la nueva fecha cae fuera de la semana actual. Se resolvió con D-008: el gasto deja de aparecer en la vista semanal, reforzando D-004 en vez de crear una excepción.

**Cambios a artefactos:** se agregaron D-006 a D-009 al decision log de Cap. 2; se ajustó FR-004 y AC-004.2 para reflejar D-008; se ajustó FR-003 y AC-003.2 para reflejar D-009. Sin cambios de scope respecto a Cap. 1.

## 10. Definition of Done — Capítulo 2
- [x] Cada scope in Must tiene ≥1 FR
- [x] Cada FR Must tiene ≥1 AC happy path + casos límite relevantes
- [x] ≥3 NFRs con métrica o verificación explícita (4 NFRs)
- [x] Matriz de trazabilidad completa para Must
- [x] ≥2 decisiones nuevas en log (comportamiento o diseño) (4 nuevas: D-006 a D-009)
- [x] Sin tecnologías de implementación en FR/AC
- [x] Sin código de implementación (correcto)
