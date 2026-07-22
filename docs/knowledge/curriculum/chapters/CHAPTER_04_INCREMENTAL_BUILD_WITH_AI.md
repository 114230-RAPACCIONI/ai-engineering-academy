---
artifact:
  id: ART-CURR-CH04
  type: Curriculum Chapter
  status: Draft
  version: 0.1.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-22
  revised: 2026-07-22
  initiative: INIT-001
  chapter: 4
  tags:
    - curriculum
    - chapter-04
    - implement
    - ai-collaboration
    - incremental
    - review
  learning_outcomes:
    - Implementar solo el Incremento 1 definido en Cap. 3
    - Usar IA como colaborador bajo el spec (no como autor del producto)
    - Revisar código generado contra FR/AC/ADR
    - Validar ACs de I1 con evidencia observable
    - Cerrar I1 antes de abrir I2
  estimated_duration: 4-8 sesiones (o 1-2 semanas a ritmo part-time)
  prerequisite_chapters:
    - CHAPTER_01_FROM_IDEA_TO_SCOPE
    - CHAPTER_02_REQUIREMENTS_BEFORE_CODE
    - CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS
  maps_to_mvp: true
---

# Capítulo 4 — Construcción incremental con IA

> Ley vinculante: [PRODUCT_THESIS.md](../../../00-constitution/PRODUCT_THESIS.md) · [CONTENT_STANDARDS.md](../../../00-constitution/CONTENT_STANDARDS.md)
>
> **Prerrequisitos:** [Capítulo 3](./CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md) cerrado (`DESIGN.md`, ADRs, I1 definido).
>
> Regla de oro: ¿Cada línea que entrá al repo **sirve** a un AC de I1 — y la revisaste vos?
>
> **Puente canónico:** Cap. 3 §9.4 (DoD I1) y §14.2. Este capítulo **no** inventa producto: operacionaliza ese puente.
>
> **Sobre el código:** vive **fuera de ZUZU** (tu IDE / Cursor). En la plataforma registrás bitácora, review y evidencia de ACs ([FOUNDER_DECISIONS](../../../00-constitution/FOUNDER_DECISIONS.md) — sin editor integrado en el MVP).

---

## Tabla de contenidos

1. [Para quién es y qué vas a lograr](#1-para-quién-es-y-qué-vas-a-lograr)
2. [Módulo 4.1 — Spec antes del teclado](#2-módulo-41--spec-antes-del-teclado)
3. [Módulo 4.2 — Workspace fuera de ZUZU](#3-módulo-42--workspace-fuera-de-zuzu)
4. [Módulo 4.3 — Mentor como colaborador, no autor](#4-módulo-43--mentor-como-colaborador-no-autor)
5. [Módulo 4.4 — Construir el slice I1](#5-módulo-44--construir-el-slice-i1)
6. [Módulo 4.5 — Revisar código generado](#6-módulo-45--revisar-código-generado)
7. [Módulo 4.6 — Validar ACs de I1](#7-módulo-46--validar-acs-de-i1)
8. [Módulo 4.7 — Hábitos seguros con IA](#8-módulo-47--hábitos-seguros-con-ia)
9. [Módulo 4.8 — Cerrar I1 antes de I2](#9-módulo-48--cerrar-i1-antes-de-i2)
10. [Practice Project — Guía del Capítulo 4](#10-practice-project--guía-del-capítulo-4)
11. [Rúbrica de capability](#11-rúbrica-de-capability)
12. [Errores comunes](#12-errores-comunes)
13. [Reflexión y cierre](#13-reflexión-y-cierre)

---

## 1. Para quién es y qué vas a lograr

### 1.1 Intuición primero

Cap. 3 eligió la receta y la cocina. Cap. 4 **prende el fuego solo para el primer plato (I1)**.

No es “terminar la app”. Es demostrar que el hilo Spec → Plan → Build se sostiene cuando aparece código — especialmente código propuesto por IA.

### 1.2 Outcomes

| Outcome | Evidencia |
|---------|-----------|
| I1 implementado como vertical slice | Flujo usable localmente según ACs de I1 |
| Review humana del output de IA | Notas: qué aceptaste / qué reescribiste |
| ACs en verde | Lista pass/fail con evidencia |
| Sin I2 prematuro | I2 explícitamente pendiente |
| Secretos fuera del repo | `.env` / keys no commiteadas |

### 1.3 Qué no es este capítulo

- Completar V1 entera
- Editor de código dentro de ZUZU
- Tests automatizados profundos (eso es Cap. 5)
- Dejar que la IA sea autora del producto sin revisión

---

## 2. Módulo 4.1 — Spec antes del teclado

Antes de prompt-first, tené a mano:

- `REQUIREMENTS.md` (FRs/ACs del slice)
- `DESIGN.md` + ADRs
- Plan de Incremento 1

**Mal:** “implementá la app”.  
**Bien:** “Implementá solo I1 según estos ACs; no toques I2.”

Si no podés decir qué ACs cerrás hoy, no abras el IDE todavía.

---

## 3. Módulo 4.2 — Workspace fuera de ZUZU

Loop:

1. Spec / bitácora en ZUZU (o markdown exportado)
2. Implementación en tu herramienta
3. Volvés a ZUZU a registrar avances, dudas al Mentor y validación de ACs

Prepará: repo según ADR de stack, `.gitignore`, sin secretos en git, README mínimo del proyecto de práctica.

---

## 4. Módulo 4.3 — Mentor como colaborador, no autor

Working agreement sugerido:

- Pegá ACs + ADR relevantes en cada sesión
- Pedí un archivo/función a la vez, no “toda la app”
- Vos corrés, probás y decidís merge
- Si el output contradice non-goals o ADRs → rechazar

Prompt útil:

> Dado AC-001.1–3 y ADR-001, proponé el cambio mínimo. No agregues features de I2.

Si no revisás el diff, la IA es autora. Eso viola la tesis.

---

## 5. Módulo 4.4 — Construir el slice I1

I1 (definido en Cap. 3) debe atravesar el stack del ADR: UI → lógica → persistencia del slice.

Disciplina:

- Un AC a la vez si hace falta
- No “mientras tanto” agregues I2
- Si el diseño no alcanza, volvé a Cap. 3 (ADR/DESIGN) — no parches silenciosos

Registrá en Practice Project qué partes ya existen y qué falta.

---

## 6. Módulo 4.5 — Revisar código generado

Checklist:

- ¿Cumple el AC pedido o inventó comportamiento?
- ¿Respeta ADRs (persistencia, capas)?
- ¿Hay secretos, logs de datos sensibles, deps innecesarias?
- ¿Podés explicar cada cambio en voz alta?

Si no podés explicarlo, no está listo — aunque “funcione”.

---

## 7. Módulo 4.6 — Validar ACs de I1

DoD Incremento 1 (preview Cap. 3 §9.4), generalizado a **tu** proyecto:

- [ ] ACs del slice verificados manualmente (Given/When/Then observables)
- [ ] Persistencia tras reload (si aplica tu NFR)
- [ ] Sin filtrar datos sensibles por red si era non-goal/NFR
- [ ] Código revisado por vos
- [ ] Sin contradecir ADRs

Anotá fallos → fix → re-validar. No pases a I2 con ACs rojos.

---

## 8. Módulo 4.7 — Hábitos seguros con IA

Mínimo Cap. 4:

- API keys solo en env local / secret manager — nunca en chat público ni commit
- No pegues datos reales de usuarios en prompts
- Revisá deps que la IA agregó
- Si hay duda de licencia o supply chain, pausá

Hilo DevSecOps del curriculum: en Build aparecen revisiones, secretos y validación de IA.

---

## 9. Módulo 4.8 — Cerrar I1 antes de I2

Cierre I1:

- ACs en verde
- Review hecha
- Notas de sesión / decisiones de implementación (¿hace falta ADR?)
- Bitácora / export actualizado en ZUZU

Solo entonces mirás I2. Si “casi” está — no está.

---

## 10. Practice Project — Guía del Capítulo 4

### 10.1 Artefactos en ZUZU

| Campo | Contenido |
|-------|-----------|
| Bitácora I1 | Qué existe fuera de ZUZU / qué falta / bloqueos |
| Validación ACs | Pass/fail + evidencia |
| Review | Qué aceptaste / reescribiste y por qué |
| Estado | `implementing` → `done` cuando I1 cierra |

Export ZIP incluye `IMPLEMENT_I1.md` junto a Practice / Requirements / Design / Decision log.

### 10.2 Definition of Done — Capítulo 4 (I1)

- [ ] Workspace fuera de ZUZU según ADR
- [ ] I1 implementado como slice vertical
- [ ] ACs de I1 verificados (evidencia escrita)
- [ ] Review de código IA documentada
- [ ] Sin secretos en repo
- [ ] I2 no empezado (o explícitamente aparcado)
- [ ] Avance sustancial del Path Cap. 4

**Cap. 4 = al menos I1.** No es “terminar la app”.

---

## 11. Rúbrica de capability

| Criterio | 1 | 3 | 5 |
|----------|---|---|---|
| **Fidelidad al spec** | Código ignora FR/AC/ADR | I1 cubre ACs pedidos | Sin drift; cambios justificados |
| **Disciplina incremental** | Mezcló I2+ o V1 entera | Solo I1 hasta cerrar | I1 cerrado con evidencia antes de seguir |
| **Review de código IA** | Pegó sin leer | Revisó y corrigió puntos clave | Puede explicar cada cambio |
| **Validación de ACs** | No probó ACs | ACs I1 verificados manualmente | Evidencia pass/fail + re-test |
| **IA como colaborador** | IA autora del producto | Prompts acotados al slice | Rechazó creep y secretos; vos decidís |

Mínimo aprobar: promedio ≥ 3, ningún 1.

---

## 12. Errores comunes

| Error | Corrección |
|-------|------------|
| “Codeá toda la V1” | Recortar al plan I1 |
| Pegar diff sin leer | Review obligatoria antes de merge |
| ACs “en la cabeza” | Lista escrita pass/fail |
| Secrets en el repo / chat | `.env` + rotar si hubo leak |
| Parche silencioso al ADR | Volver a Cap. 3 o escribir ADR nuevo |
| Empezar I2 con I1 rojo | Cerrar DoD I1 primero |

---

## 13. Reflexión y cierre

### 13.1 Preguntas

1. ¿Qué AC te costó más demostrar y por qué?
2. ¿Qué cambio de la IA rechazaste — y qué principio del spec te protegió?
3. ¿Podés explicar I1 en voz alta sin abrir el IDE?
4. ¿Empezarías I2 mañana o todavía falta evidencia?

### 13.2 Puente al Capítulo 5

**Capítulo 5 — Testing y calidad:** convertir verificación manual de ACs en hábito de tests / quality gates — sin abandonar el spec.

### 13.3 Momento de éxito

> *"Implementé solo lo que el diseño pedía, revisé lo que la IA propuso, y tengo ACs en verde — todavía sin haber construido toda la V1."*

---

## Relacionados

- [CHAPTER_03](./CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md)
- [LEARNING_CURRICULUM.md](../LEARNING_CURRICULUM.md)
- Practice en app: `/app/path/c/chapter-04`, `/app/projects`

---

## Declaración final

El Capítulo 4 no premia velocidad de generación.

Premia **fidelidad al spec**, **review humana** y **cierre de un incremento** antes del siguiente.
