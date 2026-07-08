---
artifact:
  id: ART-030
  type: Infrastructure Architecture
  status: Draft
  version: 0.2.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - infrastructure
    - deployment
    - mvp
---

# Infrastructure Architecture

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md) — [ADR-006](./adr/ADR-006-simplicity-first.md)
>
> Infra del MVP = hosting aburrido que hace correr el learning loop.
> Sin multi-region / DR theater como requisitos. Etapas distribuidas = Future (ver archive).

---

## Propósito

Definir lo mínimo para ejecutar ZUZU mientras validamos:

**Path → Knowledge → Mentor → Practice Project → Progress**

---

## Filosofía

1. Simplicidad operativa > sofisticación premature.
2. Un camino de deploy reproducible.
3. Observabilidad básica (logs + errores), no un portal enterprise.
4. El costo del Mentor (tokens) es el riesgo #1 de scale — ver Cost / ADR pendiente de budgets.

---

## MVP (target)

| Pieza | Expectativa |
|-------|-------------|
| Runtime de aplicación | Un servicio (modular monolith) |
| Base de datos | Una DB primaria (elección vía ADR de stack) |
| Cache / jobs (si hace falta) | Solo cuando un use case del learning loop lo exija |
| Frontend | SPA desplegada de forma simple |
| Secrets | Secret manager / env seguros — nunca en el repo |
| Environments | Development → Staging (o Testing) → Production |

El stack concreto (lenguaje, cloud, Angular/otro, provider) se decide en **ADRs**, no en este ensayo.

---

## Explicitamente fuera del MVP

- Kubernetes como default  
- Multi-region / DR geográfico activo  
- Event bus / message broker obligatorio  
- Blue/Green / Canary como ceremonia  
- Developer portal / FinOps platform  

Esos temas viven en `docs/90-archive/` o `docs/99-future/` si se revisitan.

---

## Evolución

Cuando el learning loop esté validado **y** el dolor operativo sea real, se escriben ADRs nuevos.

Hasta entonces: este documento no autoriza complejidad distribuida.

---

## Relacionados

- [SYSTEM_ARCHITECTURE](./SYSTEM_ARCHITECTURE.md)
- [SECURITY](../security/SECURITY.md)
- [COST_OPTIMIZATION_ARCHITECTURE](./COST_OPTIMIZATION_ARCHITECTURE.md) (priorizar budgets del Mentor)
- [ADR-006](./adr/ADR-006-simplicity-first.md)
