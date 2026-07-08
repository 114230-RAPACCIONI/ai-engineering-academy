---
artifact:
  id: ART-043
  type: Cost Optimization Architecture
  status: Draft
  version: 0.2.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - architecture
    - costs
    - ai
---

# Cost Optimization Architecture

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> **Crítico para el MVP:** budgets de tokens del Mentor, model routing, quotas por learner.
> **Future / des-enfatizar:** FinOps de equipo, chargeback multi-service, plataformas de auto-optimización.
> Pendiente: ADR dedicado de AI cost budgets.

---

## 1. Propósito

Proteger el runway y la UX de aprendizaje.

El costo dominante de ZUZU será la IA del Mentor — no Kubernetes ni multi-region.

---

## 2. Principios guía

1. Medir tokens y costo por sesión / learner.  
2. Preferir el modelo más barato que preserve calidad pedagógica.  
3. El contexto tiene budget — no dump del project entero.  
4. Cuotas por learner antes de “scale.”  
5. FinOps enterprise espera al PMF.

---

## 3. Dominios de costo (prioridad)

| Prioridad | Dominio | Acción MVP |
|-----------|---------|------------|
| P0 | Tokens / calls del Mentor | Budgets, routing, logging de uso |
| P1 | Storage de conversaciones / embeddings | Retention y límites |
| P2 | Compute / hosting del monolith | Right-size aburrido |
| Future | Network, Obs platform, FinOps team | Después de validar learning |

---

## 4. Estrategia de costo de IA

- Routing por difficulty / tipo de tarea pedagógica (no siempre el modelo más caro).
- Truncado y ranking de contexto (ver CONTEXT_ENGINEERING / MEMORY).
- Límite de steps / tools del Mentor.
- Alertas cuando un learner o el sistema se salen del budget.

Pendiente ADR: budgets concretos (por request, sesión, día, learner).

---

## 5. Optimización de tokens

Maximizar **calidad pedagógica por token**, no tokens totales.

Anti-patterns: reenviar historial completo; re-embeber sin necesidad; Mentor verboso sin pedagogía.

---

## 6. Multi-provider

Alineado a ADR-001: abstracción de provider permite arbitrage de precio/calidad.

No es permiso para over-engineering de failover multi-region en el MVP.

---

## 7. Infra / DB / storage / cache

Solo lo necesario para el learning loop. Ver [INFRASTRUCTURE_ARCHITECTURE](./INFRASTRUCTURE_ARCHITECTURE.md).

Growth / Enterprise de compute, DR y FinOps: `docs/90-archive/` o `docs/99-future/`.

---

## 8. KPIs (MVP)

- Costo de IA por learner activo  
- Tokens p50/p95 por sesión Mentor  
- % sesiones sobre budget  
- Quality/capability vs costo (no optimizar costo destruyendo learning)

---

## 9. Relacionados

- [PRODUCT_THESIS](../00-constitution/PRODUCT_THESIS.md)
- [AI_ARCHITECTURE](../ai/AI_ARCHITECTURE.md)
- [ADR-001](./adr/ADR-001-ai-provider-independence.md)
- [ADR-006](./adr/ADR-006-simplicity-first.md)
