# Gastos Hormiga — V1

## Estado
Fase: Planning (Capítulo 1)
Learner: Claude (dry-run del Capítulo 1, sin plataforma)
Fecha inicio: 2026-07-08

---

## 1. Problem statement
Quién: Un freelancer que gestiona sus propios gastos personales (yo).
Problema: Gasto plata en cosas chicas (café, delivery, kiosco) sin darme cuenta, y a fin de mes no sé en qué se fue una parte del dinero.
Frecuencia: Casi todos los días, varias veces por semana.
Por qué falla lo actual: El resumen de la tarjeta mezcla todo sin categorías útiles; una nota del celular no tiene estructura, así que nunca la reviso.
Éxito (sin solución técnica): Poder ver en menos de un minuto cuánto gasté esta semana en gastos chicos y en qué categorías, sin abrir el home banking.

## 2. Usuario objetivo (V1)
Yo mismo: freelancer que quiere controlar gastos chicos diarios sin fricción.

## 3. Scope in (máx. 5)
1. Registrar un gasto (monto + categoría + fecha automática).
2. Ver la lista de gastos de la semana actual.
3. Ver el total gastado por categoría en la semana.
4. Editar o borrar un gasto cargado por error.
5. Usar 5 categorías fijas: café, delivery, transporte, kiosco, otros.

## 4. Scope out
- Gastos grandes o fijos (alquiler, servicios) — es otro problema.
- Multi-moneda.
- Compartir el registro con otra persona.
- Gráficos o reportes mensuales avanzados.
- Categorías personalizables por el usuario.

## 5. Non-goals
- Conectar con el banco o la tarjeta (sync automático).
- Notificaciones o recordatorios.
- Versión mobile nativa.
- Predicción de gastos con IA.

## 6. Success criteria (medibles)
- Cargar un gasto nuevo en menos de 15 segundos.
- Ver el total semanal por categoría en un solo vistazo, y poder decidir conscientemente si sigo gastando en esa categoría (no solo mirar el número).
- Usarlo 2 semanas seguidas sin volver a la nota del celular.

## 7. Constraints
- Tiempo: 2–3 horas por semana, fuera del trabajo.
- Solo / equipo: solo yo.
- Datos sensibles (sí/no): datos personales de gasto, no críticos, pero no públicos.

## 8. Decision log
| ID | Decisión | Alternativas consideradas | Razón | Fecha |
|----|----------|---------------------------|-------|-------|
| D-001 | V1 sin conexión al banco/tarjeta | Sync automático de movimientos | Menor superficie de seguridad; cargar a mano fuerza a "darme cuenta" del gasto, que es parte del valor | 2026-07-08 |
| D-002 | Categorías fijas (5), no personalizables | Categorías custom desde el usuario | Menos decisiones de UX en V1; cubren ~90% de mis gastos hormiga reales | 2026-07-08 |
| D-003 | Datos solo locales, sin login | Login + guardado en la nube | Uso personal en un solo dispositivo; menor riesgo y más rápido de armar | 2026-07-08 |
| D-004 | Ventana de datos = semana actual únicamente | Histórico completo con filtros de fecha | El problema real es "esta semana", no analytics históricos; evita over-engineering en V1 | 2026-07-08 |
| D-005 | Un gasto ambiguo (monto alto o dudoso entre "hormiga" y "fijo") se carga igual, en la categoría más cercana, sin bloquear el flujo | Crear categoría "ambiguo" aparte / dejarlo fuera del registro | Mantener la carga simple y sin fricción; casos raros se revisan a mano en la sesión, no ameritan una regla nueva del sistema en V1 | 2026-07-08 |

## 9. Supuestos de seguridad (ligero)
- Datos: montos y categorías de gasto personal — no sensibles a nivel legal, pero personales.
- Quién accede: solo yo, en mi propio dispositivo.
- Qué NO hará en V1 por seguridad: no sincroniza a la nube, no pide login, no comparte con terceros.

## 10. Notas de sesiones con el Mentor

### Sesión 1 — 2026-07-08

**Prompt usado (bueno, sección 6.3):** *"Tengo este problem statement. Haceme 5 preguntas que expongan supuestos débiles."*

Preguntas y respuestas:

1. *¿"Gastos hormiga" es igual de doloroso que gastos grandes, o es más una molestia liviana? ¿Vale la pena un proyecto entero para esto?*
   Es una molestia liviana pero recurrente. Elegí este problema justamente porque es chico y controlable para practicar planeamiento, no porque sea un dolor grave.
2. *¿Ya intentaste una herramienta existente y por qué no te sirvió?*
   Probé una planilla de Google; funcionó dos semanas y la abandoné porque cargar un gasto tardaba demasiado. El problema real es la fricción de carga, no la falta de herramientas.
3. *¿Qué pasa si en la semana 3 te da fiaca cargar los gastos? ¿Eso invalida el proyecto?*
   No invalida el proyecto, pero sería señal de que el success criterion de "cargar en <15s" no se cumplió de verdad, y habría que revisar la fricción antes de agregar features.
4. *¿"Ver el total por categoría" te va a cambiar el comportamiento, o solo te va a dar culpa sin acción?*
   El objetivo real no es solo ver el número, sino decidir conscientemente si sigo gastando en esa categoría. Lo sumo como matiz del success criterion, sin cambiar el scope.
5. *¿Por qué "semana" y no "mes", si la tarjeta resume por mes?*
   Porque los gastos hormiga se corrigen mejor con feedback rápido (semanal); para cuando llega el resumen mensual ya gasté todo el mes.

**Prompt usado:** *"¿Qué supuestos no estoy declarando?"*

Supuestos identificados:
- Asumo que voy a cargar CADA gasto, incluso los de $500.
- Asumo que una sola "categoría" alcanza (sin sub-categorías tipo comida-delivery vs comida-supermercado).
- Asumo que uso un solo dispositivo (no cargo desde la compu y reviso desde el celular).

**Prompt usado:** *"Actuá como reviewer: ¿dónde veo Frankenstein en este plan?"*

Riesgos detectados: la tentación de agregar gráficos o comparaciones mes a mes en la sesión 2 sin actualizar el scope (ya cubierto por scope out / non-goals explícitos); y la posibilidad de que aparezca un gasto ambiguo (ej. $8000) que no sea claramente "hormiga" ni "fijo" — si pasa, se registra como decisión nueva, no se resuelve en silencio.

**Cambios a artefactos:** se agregó el matiz de "cambio de comportamiento" al success criterion 2; se documentaron 3 supuestos explícitos. Sin cambios de scope.

### Corrección de gaps — 2026-07-08 (previo a Capítulo 2)

Antes de pasar a requirements (sección 10.2 del Capítulo 2), se corrigieron dos gaps menores detectados en la Sesión 1:
- Success criterion #2 actualizado con el matiz de "decisión consciente" (quedó pendiente de sesión 1, punto 4).
- D-005 agregado al decision log para cubrir gastos ambiguos (quedó pendiente de sesión 1, riesgo de reviewer).

Sin cambios de scope ni de non-goals — ambos eran huecos de redacción, no decisiones nuevas de producto.

---

## 11. Definition of Done — Capítulo 1
- [x] Problem statement validado (stress-test con Mentor)
- [x] Scope in ≤ 5 ítems
- [x] Al menos 2 non-goals explícitos
- [x] Al menos 3 entradas en decision log
- [x] Success criteria verificables
- [x] Sin código de implementación (correcto)
