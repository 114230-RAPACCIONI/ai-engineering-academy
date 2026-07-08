---
artifact:
  id: ART-000
  type: Engineering Handbook
  status: Canonical
  version: 0.3.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - engineering
    - culture
    - governance
    - learning
  absorbs:
    - ART-039 Engineering Governance Architecture
---

# Engineering Handbook

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md) — [REPO_CONSTITUTION.md](../00-constitution/REPO_CONSTITUTION.md)
>
> No estamos construyendo un work OS para nosotros en los docs.
> Toda elección de ingeniería debe servir a: **learners que piensan, diseñan y construyen con IA**.
>
> Prosa en español; términos del oficio (MVP, ADR, Mentor, stack…) en inglés cuando corresponda.

---

## 1. Por qué ingeniería

El producto de ZUZU es **Learning**.

La ingeniería existe para shippear el learning loop:

`Path → Knowledge → Mentor → Practice Project → Progress (evidencia)`

Si una propuesta técnica no hace ese loop mejor, más barato, más seguro o más claro — espera.

---

## 2. Regla de oro (edición ingeniería)

Antes de construir:

> ¿Esto ayuda al learner a pensar, diseñar y construir mejor — con IA — independientemente del stack?

Antes de infra compleja:

> ¿Esto nos ayuda a validar esa hipótesis más rápido?

Si no está claro → lo más simple (ADR-006).

---

## 3. Orden de autoridad

1. Product Thesis  
2. Repo Constitution  
3. ADRs aceptados (`docs/architecture/adr/`)  
4. Docs canónicos de producto (Vision, Journey, Domain, MVP, Security)  
5. Este Handbook  
6. Todo lo demás  

Archive / Future nunca son requisitos.

Los ensayos archivados de Platform/Application no mandan. Preferir [SYSTEM_ARCHITECTURE](../architecture/SYSTEM_ARCHITECTURE.md).

---

## 4. Principios de ingeniería

1. **Principios over tools** — juicio duradero.  
2. **Diseñar antes de codear** — problema, constraints, opciones, luego implementar.  
3. **Documentación = memoria de producto** — corta, coherente, alineada a la Tesis — no teatro de volumen.  
4. **Simplicity first** — modular monolith; no gateway/events/K8s por moda.  
5. **IA = Mentor** — capa de abstracción (ADR-001); un Mentor en el MVP (ADR-004, ADR-007).  
6. **Medir impacto de aprendizaje** — no solo vanity metrics de shipping.  
7. **Secure by default** — ownership del learner; AI safety = learning safety ([SECURITY](../security/SECURITY.md)).

---

## 5. Proceso de decisión (equipo chico)

| Impacto | Ejemplos | Quién |
|--------|----------|-----|
| Local | Refactor de clase, test | Engineer |
| Módulo | Nuevo endpoint en Learning | Engineer + nota rápida a un peer |
| Arquitectura | Nuevo patrón de persistencia, boundary de módulo | CTO + ADR si es estructural |
| Identidad / tesis | “¿Project debe ser el sol?” | Founder + CTO + **ADR** (nunca silencioso) |

**Reglas**

- Cambio estructural → ADR antes del merge.  
- No Architecture Board / ceremonia enterprise pre-PMF.  
- Citar la regla de oro en PRs que agregan superficie de producto.

---

## 6. Definition of Done (barra MVP)

Un cambio está done cuando:

1. Avanza una capability Canonical del MVP (o infra explícitamente necesaria para ella).  
2. No contradice Tesis / ADRs.  
3. Se actualizan docs si cambió comportamiento o contrato.  
4. Tests o fixtures de eval del Mentor actualizados cuando el comportamiento es visible al usuario.  
5. Ningún contenido Archive/Future se trata como “tenemos que construirlo”.

---

## 7. Deuda técnica

Ver [TECHNICAL_DEBT_MANAGEMENT](./TECHNICAL_DEBT_MANAGEMENT.md).

**La deuda documental cuenta.** Contradecir la Tesis es deuda P0.

Reservar capacidad para deuda; no inventar plataformas FinOps para sentir madurez.

---

## 8. Stack y adopción de tecnología

No colar elecciones de stack en ensayos de scalability.

- Nuevo language/framework/DB/queue/hosting → **ADR**.  
- Preguntar: ¿sirve al learning loop? ¿Lo podemos operar con un equipo chico?  

ADRs pendientes: Auth — Stack — Mentor runtime — AI cost budgets — Retention.

---

## 9. Anti-patterns (rechazar)

- Implementar desde `docs/90-archive/` o `docs/99-future/`  
- Multi-agent / Project OS / superficies de Billing “por las dudas”  
- Nuevo `*_ARCHITECTURE.md` sin necesidad de producto  
- Cosplay de governance enterprise (boards, multi-region) antes de que los learners aprendan  
- Optimizar el workflow del founder en vez de la capability del learner  

---

## 10. Relacionados

- [MVP_SCOPE](../product/MVP_SCOPE.md)  
- [Índice ADR](../architecture/ADR.md)  
- [DOCUMENTATION_ARCHITECTURE](../knowledge/DOCUMENTATION_ARCHITECTURE.md)  
- Historia de governance: [archive](../90-archive/engineering/ENGINEERING_GOVERNANCE_ARCHITECTURE.md)
