---
artifact:
  id: ART-040
  type: Technical Debt Management
  status: Draft
  version: 1.0.0
  owner: CTO
  reviewers:
    - Founder
    - Engineering Team
  created: 2026-07-08
  initiative: INIT-001
  tags:
    - engineering
    - technical-debt
    - governance
    - sustainability
---

# Technical Debt Management

> "Technical debt is acceptable. Unmanaged technical debt is not."

---

# 1. Purpose

Este documento define cómo Project ZUZU identifica, registra, prioriza y reduce la deuda técnica durante todo el ciclo de vida del producto.

El objetivo no es eliminar toda la deuda, sino gestionarla como cualquier otro activo estratégico.

---

# 2. Philosophy

La deuda técnica es una decisión consciente.

Nunca debe ser:

- invisible;
- permanente;
- accidental.

Toda deuda debe responder a una decisión de negocio o ingeniería claramente documentada.

---

# 3. Definition

Se considera deuda técnica cualquier decisión que:

- simplifique el desarrollo actual;
- incremente el costo futuro de mantenimiento;
- reduzca calidad, escalabilidad o mantenibilidad.

---

# 4. Debt Categories

## Architecture Debt

Ejemplos:

- módulos con alto acoplamiento;
- límites incorrectos entre componentes;
- dependencias circulares.

---

## Code Debt

Ejemplos:

- duplicación;
- complejidad excesiva;
- nombres ambiguos.

---

## Testing Debt

Ejemplos:

- cobertura insuficiente;
- pruebas inestables;
- ausencia de pruebas críticas.

---

## Documentation Debt

Ejemplos:

- ADR faltantes;
- documentación desactualizada;
- APIs sin documentación.

---

## Infrastructure Debt

Ejemplos:

- automatización incompleta;
- configuraciones manuales;
- versiones obsoletas.

---

## Security Debt

Ejemplos:

- librerías vulnerables;
- secretos mal gestionados;
- permisos excesivos.

---

# 5. Debt Lifecycle

Toda deuda sigue el mismo ciclo:

```text
Detected

↓

Registered

↓

Evaluated

↓

Prioritized

↓

Planned

↓

Resolved

↓

Verified

↓

Closed
```

---

# 6. Debt Register

Toda deuda debe registrarse como un artefacto trazable.

Campos mínimos:

| Campo | Descripción |
|--------|-------------|
| ID | TD-XXX |
| Fecha | Descubrimiento |
| Categoría | Arquitectura, Código, etc. |
| Descripción | Problema observado |
| Impacto | Bajo / Medio / Alto / Crítico |
| Probabilidad | Baja / Media / Alta |
| Esfuerzo | Story Points |
| Responsable | Owner |
| Estado | Open / Planned / In Progress / Closed |

---

# 7. Prioritization Matrix

La prioridad se calcula considerando impacto y esfuerzo.

| Impacto | Esfuerzo | Prioridad |
|----------|-----------|-----------|
| Alto | Bajo | Muy Alta |
| Alto | Alto | Alta |
| Medio | Bajo | Alta |
| Medio | Alto | Media |
| Bajo | Bajo | Media |
| Bajo | Alto | Baja |

---

# 8. Decision Framework

Antes de aceptar deuda técnica responder:

1. ¿Qué ganamos hoy?
2. ¿Qué costo tendrá mañana?
3. ¿Existe una alternativa mejor?
4. ¿Cuándo la resolveremos?
5. ¿Quién será responsable?

Si no existe respuesta, la deuda no debe aprobarse.

---

# 9. Governance Rules

Nunca:

- ocultar deuda;
- cerrar tickets sin resolver;
- asumir que "ya se arreglará".

Siempre:

- documentar;
- estimar;
- planificar.

---

# 10. Engineering Metrics

La plataforma medirá:

## Debt Count

Cantidad total de deudas abiertas.

---

## Debt Age

Tiempo promedio sin resolver.

---

## Debt Distribution

Por categoría.

---

## Debt Ratio

Porcentaje de esfuerzo dedicado a deuda técnica por sprint.

Objetivo inicial:

```text
15–20%
```

---

## Critical Debt

Cantidad de deudas críticas abiertas.

Objetivo:

```text
0
```

---

# 11. Sprint Planning

Cada Sprint deberá reservar capacidad para:

- refactorización;
- actualización tecnológica;
- mejoras internas.

La deuda técnica compite por prioridad junto con nuevas funcionalidades.

---

# 12. ADR Integration

Cuando una deuda modifica una decisión arquitectónica:

- actualizar ADR;
- enlazar el registro de deuda;
- documentar consecuencias.

---

# 13. Tooling

La deuda debe integrarse con:

- GitHub Issues;
- Jira (si aplica);
- SonarQube;
- Dependabot;
- Renovate.

No debe mantenerse únicamente en hojas de cálculo o notas personales.

---

# 14. Risk Assessment

Una deuda técnica aumenta el riesgo cuando afecta:

- seguridad;
- disponibilidad;
- rendimiento;
- mantenibilidad;
- escalabilidad.

Estas deudas tendrán prioridad automática.

---

# 15. Evolution Strategy

## MVP

Registrar toda deuda importante.

---

## Growth

Automatizar detección mediante herramientas.

---

## Enterprise

Tablero centralizado con métricas, tendencias y objetivos trimestrales.

---

# 16. Anti Patterns

## "Lo arreglamos después"

Sin fecha ni responsable.

---

## Hidden Debt

Problemas conocidos que nunca se registran.

---

## Perpetual Refactoring

Refactorizar constantemente sin aportar valor.

---

## Feature First Forever

Agregar funcionalidades ignorando el deterioro interno.

---

# 17. Success Criteria

Este documento será exitoso cuando:

- toda deuda tenga propietario;
- las deudas críticas sean excepcionales;
- exista visibilidad del estado técnico;
- la velocidad del equipo no disminuya por degradación del código.

---

# 18. Related Artifacts

- ART-035 — Testing Architecture
- ART-036 — CI/CD Architecture
- ART-037 — Documentation Architecture
- ART-039 — Engineering Governance Architecture

---

# Final Statement

La deuda técnica no representa un fracaso de ingeniería.

Representa una inversión que debe ser consciente, medible y temporal.

La sostenibilidad de Project ZUZU dependerá de gestionar esta deuda con el mismo rigor con el que se gestionan las funcionalidades del producto.