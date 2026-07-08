---
artifact:
  id: ART-040
  type: Technical Debt Management
  status: Draft
  version: 1.1.0
  owner: CTO
  reviewers:
    - Founder
    - Engineering Team
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - engineering
    - technical-debt
    - governance
    - sustainability
---

# Gestión de deuda técnica

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> **Documentación que contradice Learning First es deuda P0.**
> El teatro de proceso (boards, ensayos multi-región sin necesidad) también es deuda.

---

## 1. Propósito

Este documento define cómo Project ZUZU identifica, registra, prioriza y reduce la deuda técnica durante el ciclo de vida del producto.

El objetivo no es eliminar toda la deuda, sino gestionarla como cualquier otro activo estratégico.

---

## 2. Filosofía

La deuda técnica es una decisión consciente.

Nunca debe ser:

- invisible;
- permanente;
- accidental.

Toda deuda debe responder a una decisión de negocio o ingeniería claramente documentada.

---

## 3. Definición

Se considera deuda técnica cualquier decisión que:

- simplifique el desarrollo actual;
- incremente el costo futuro de mantenimiento;
- reduzca calidad, escalabilidad o mantenibilidad;
- **desalinee producto o docs con la Product Thesis** (identidad Learning First).

La última categoría es **P0**: docs o features que contradicen la tesis no son “deuda menor”.

---

## 4. Categorías de deuda

### Deuda de arquitectura

Ejemplos: módulos con alto acoplamiento; límites incorrectos entre componentes; dependencias circulares; diseño pensado como delivery OS en lugar de Learning.

---

### Deuda de código

Ejemplos: duplicación; complejidad excesiva; nombres ambiguos.

---

### Deuda de testing

Ejemplos: cobertura insuficiente; pruebas inestables; ausencia de pruebas críticas (incl. golden set del Mentor cuando aplique).

---

### Deuda de documentación

Ejemplos: ADR faltantes; documentación desactualizada; APIs sin documentación; **docs que contradicen la tesis** (P0).

---

### Deuda de infraestructura

Ejemplos: automatización incompleta; configuraciones manuales; versiones obsoletas.

---

### Deuda de seguridad

Ejemplos: librerías vulnerables; secretos mal gestionados; permisos excesivos.

---

### Deuda de identidad de producto

Ejemplos: features multi-agent sin Mentor validado; métricas de activity en lugar de capability; narrativa de codegen / work OS.

Prioridad: **P0** hasta corregir o archivar en `docs/90-archive/` / `docs/99-future/`.

---

## 5. Ciclo de vida de la deuda

Toda deuda sigue el mismo ciclo:

```text
Detected
   ?
Registered
   ?
Evaluated
   ?
Prioritized
   ?
Planned
   ?
Resolved
   ?
Verified
   ?
Closed
```

---

## 6. Registro de deuda

Toda deuda debe registrarse como un artefacto trazable.

Campos mínimos:

| Campo | Descripción |
|--------|-------------|
| ID | TD-XXX |
| Fecha | Descubrimiento |
| Categoría | Arquitectura, Código, Docs (tesis), etc. |
| Descripción | Problema observado |
| Impacto | Bajo / Medio / Alto / Crítico |
| Probabilidad | Baja / Media / Alta |
| Esfuerzo | Story Points |
| Responsable | Owner |
| Estado | Open / Planned / In Progress / Closed |

---

## 7. Matriz de priorización

La prioridad combina impacto y esfuerzo. **Excepción:** contradicción con la Product Thesis = P0 / Crítico, independientemente del esfuerzo “pequeño” de ignorarla.

| Impacto | Esfuerzo | Prioridad |
|----------|-----------|-----------|
| Alto | Bajo | Muy Alta |
| Alto | Alto | Alta |
| Medio | Bajo | Alta |
| Medio | Alto | Media |
| Bajo | Bajo | Media |
| Bajo | Alto | Baja |
| Contradice tesis | Cualquiera | **P0** |

---

## 8. Framework de decisión

Antes de aceptar deuda técnica responder:

1. ¿Qué ganamos hoy?
2. ¿Qué costo tendrá mañana?
3. ¿Existe una alternativa mejor?
4. ¿Cuándo la resolveremos?
5. ¿Quién será responsable?
6. ¿Alinea o contradice Learning First?

Si no existe respuesta clara — o contradice la tesis — la deuda no debe aprobarse (o debe tratarse como P0 a eliminar).

---

## 9. Reglas de gobernanza

Nunca:

- ocultar deuda;
- cerrar tickets sin resolver;
- asumir que “ya se arreglará”;
- dejar docs canónicos que contradigan la tesis.

Siempre:

- documentar;
- estimar;
- planificar;
- archivar o corregir drift de identidad de producto.

---

## 10. Métricas de ingeniería

La plataforma medirá:

### Debt Count

Cantidad total de deudas abiertas.

---

### Debt Age

Tiempo promedio sin resolver.

---

### Debt Distribution

Por categoría (incl. identidad de producto / docs).

---

### Debt Ratio

Porcentaje de esfuerzo dedicado a deuda técnica por sprint.

Objetivo inicial:

```text
15–20%
```

---

### Critical Debt

Cantidad de deudas críticas abiertas (incluye P0 de tesis).

Objetivo:

```text
0
```

---

## 11. Planificación de Sprint

Cada Sprint deberá reservar capacidad para:

- refactorización;
- actualización tecnológica;
- mejoras internas;
- corrección de docs / features que contradicen la tesis.

La deuda técnica compite por prioridad junto con nuevas features.

---

## 12. Integración con ADR

Cuando una deuda modifica una decisión arquitectónica o de identidad de producto:

- actualizar o crear ADR;
- enlazar el registro de deuda;
- documentar consecuencias.

Cambios de identidad de producto requieren ADR — nunca drift silencioso.

---

## 13. Tooling

La deuda debe integrarse con:

- GitHub Issues;
- Jira (si aplica);
- SonarQube;
- Dependabot;
- Renovate.

No debe mantenerse únicamente en hojas de cálculo o notas personales.

---

## 14. Evaluación de riesgo

Una deuda técnica aumenta el riesgo cuando afecta:

- seguridad;
- availability;
- rendimiento;
- mantenibilidad;
- escalabilidad;
- **alineación con la Product Thesis**.

Estas deudas tendrán prioridad automática.

---

## 15. Estrategia de evolución

### MVP

Registrar toda deuda importante. P0 inmediato: contradicciones con Learning First.

---

### Growth

Automatizar detección mediante tooling.

---

### Enterprise

Tablero centralizado con métricas, tendencias y objetivos trimestrales — solo si aporta; el tablero en sí no es el producto.

---

## 16. Anti-patrones

### “Lo arreglamos después”

Sin fecha ni owner.

---

### Hidden Debt

Problemas conocidos que nunca se registran.

---

### Perpetual Refactoring

Refactorizar constantemente sin aportar valor ni capability.

---

### Feature First Forever

Agregar features ignorando el deterioro interno **o** la tesis.

---

### Process theater

Boards, essays y ceremonial sin reducir riesgo real ni alinear producto.

---

## 17. Criterios de éxito

Este documento será exitoso cuando:

- toda deuda tenga owner;
- las deudas críticas (incl. P0 de tesis) sean excepcionales;
- exista visibilidad del estado técnico y de identidad documental;
- la velocidad del equipo no disminuya por degradación del código ni por drift de producto.

---

## 18. Artefactos relacionados

- ART-THESIS-001 — Product Thesis
- ART-035 — Testing Architecture
- ART-036 — CI/CD Architecture
- ART-037 — Documentation Architecture
- ART-039 — Engineering Governance Architecture

---

## Declaración final

La deuda técnica no representa un fracaso de ingeniería.

Representa una inversión que debe ser consciente, medible y temporal.

La sostenibilidad de Project ZUZU dependerá de gestionar esta deuda — incluida la identidad documental — con el mismo rigor con el que se gestionan las features del producto.
