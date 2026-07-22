---
artifact:
  id: ART-DOC-AUDIT-001
  type: Documentation Audit
  status: Draft
  version: 0.1.0
  owner: CTO
  created: 2026-07-08
  initiative: INIT-001
  tags:
    - documentation
    - audit
    - governance
---

# Documentation Audit

> Ley: [FOUNDER_DECISIONS.md](../00-constitution/FOUNDER_DECISIONS.md) — **no eliminar** sin revisión; clasificar y archivar con trazabilidad.

**Fecha:** 2026-07-08  
**Alcance:** documentos activos fuera de `docs/90-archive/`  
**Verbos:** Keep | Refactor | Merge | Archive

---

## 1. Canónicos — Keep

| Documento | Rol |
|-----------|-----|
| `START_HERE.md` | Punto de entrada SDD |
| `docs/00-constitution/PRODUCT_THESIS.md` | Ley producto |
| `docs/00-constitution/REPO_CONSTITUTION.md` | Ley repo |
| `docs/00-constitution/CONTENT_STANDARDS.md` | Calidad contenido |
| `docs/00-constitution/FOUNDER_DECISIONS.md` | Decisiones founder |
| `docs/product/MVP_SCOPE.md` | Spec producto MVP |
| `docs/product/FOUNDER_DECISIONS` → ver arriba | |
| `docs/knowledge/curriculum/LEARNING_CURRICULUM.md` | Mapa viajes |
| `docs/knowledge/curriculum/chapters/CHAPTER_01–04` | Viajes escritos (Cap. 5–8 planeados) |
| `docs/architecture/DOMAIN_MODEL.md` | Dominio learner |
| `docs/architecture/adr/ADR-001–009` | Decisiones |
| `docs/security/SECURITY.md` | Seguridad MVP |
| `docs/engineering/ENGINEERING_HANDBOOK.md` | Cómo construimos |
| `docs/knowledge/DOCUMENTATION_ARCHITECTURE.md` | Mapa docs |

---

## 2. Producto — Keep o Refactor

| Documento | Veredicto | Acción |
|-----------|-----------|--------|
| `PRODUCT_VISION.md` | Keep | Mantener; alinear con FOUNDER_DECISIONS si drift |
| `USER_JOURNEY.md` | Keep | Refactor menor: enlazar viajes SDD |
| `PRODUCT_EXPERIENCE_VISION.md` | Keep — **fusión ejecutada 2026-07-09** | Absorbió ENGAGEMENT_DESIGN.md como §14 |
| `ENGAGEMENT_DESIGN.md` | Merge — **ejecutado 2026-07-09** | Stub → ver PRODUCT_EXPERIENCE_VISION.md §14 |
| `INFORMATION_ARCHITECTURE.md` | Refactor | Actualizar cuando exista PLATFORM_SPEC |
| `AI_PRODUCT_EXPERIENCE.md` | Keep | Fuente Mentor UX |
| `USER_MENTAL_MODEL.md` | Keep | Draft útil |
| `USER_PERSONAS.md` | Keep | Draft útil |
| `PRODUCT_ROADMAP.md` | Refactor | Alinear fases post-decisiones founder |
| `PRODUCT_JOURNEY_ARCHITECTURE.md` | Merge | Stub → merge en INFORMATION_ARCHITECTURE o archive |
| `PRODUCT_REQUIREMENTS.md` | Archive | Ya absorbido por MVP_SCOPE (stub) |
| `FEATURE_SPECIFICATIONS.md` | Archive | Stub |
| `USER_STORIES.md` | Archive | Stub |

---

## 3. Arquitectura — Refactor o Archive

| Documento | Veredicto | Acción |
|-----------|-----------|--------|
| `adr/ADR-008`, `ADR-009` | Keep | Nuevos — stack y IA |
| `BACKEND_ARCHITECTURE.md` | Archive — **ejecutado 2026-07-09** | Superado por ADR-008; stub en su lugar |
| `FRONTEND_ARCHITECTURE.md` | Archive — **ejecutado 2026-07-09** | Superado por ADR-008; stub en su lugar |
| `SYSTEM_ARCHITECTURE.md` | Refactor | Recortar a diagrama MVP o archive |
| `DATABASE_ARCHITECTURE.md` | Archive — **ejecutado 2026-07-09** | Superado por ADR-008; stub en su lugar |
| `DATA_MODEL.md` | Refactor | Merge con DOMAIN_MODEL cuando implementemos |
| `API_DESIGN.md` | Refactor | Post PLATFORM_SPEC |
| `INFRASTRUCTURE_ARCHITECTURE.md` | Keep | Ya recortado MVP |
| `APPLICATION_ARCHITECTURE.md` | Archive | Stub |
| `PLATFORM_ARCHITECTURE.md` | Archive | Stub |
| `EVENT_ARCHITECTURE.md` | Archive | Stub |
| `SCALABILITY_ARCHITECTURE.md` | Archive | Stub |
| `COST_OPTIMIZATION_ARCHITECTURE.md` | Keep | Draft liviano |
| `SYSTEM_CONTEXT.md` | Keep | Contexto C4 liviano |

---

## 4. IA — Refactor

| Documento | Veredicto | Acción |
|-----------|-----------|--------|
| `AGENT_MODEL.md` | Refactor | Recortar a Mentor MVP; quitar multi-agent |
| `AI_ARCHITECTURE.md` | Refactor | Alinear ADR-009 + adapters |
| `MEMORY_ARCHITECTURE.md` | Keep | Contexto Path+Project |
| `CONTEXT_ENGINEERING.md` | Keep | |
| `PROMPT_SPECIFICATION_SYSTEM.md` | Refactor | Alinear Gastos Hormiga seed |
| `AI_GOVERNANCE_MODEL.md` | Keep | |
| `AI_EVALUATION_FRAMEWORK.md` | Keep | |
| `AI_TECHNICAL_ROADMAP.md` | Refactor | Post ADR-009 |

---

## 5. Otros

| Documento | Veredicto | Acción |
|-----------|-----------|--------|
| `docs/project/PROJECT_CONSTITUTION.md` | Archive | 5000+ líneas; `source_of_truth: false`; histórico |
| `docs/devops/CICD_ARCHITECTURE.md` | Archive | Stub → 99-future |
| `docs/operations/*` | Archive | Stubs |
| `docs/quality/TESTING_ARCHITECTURE.md` | Keep | Cap. 5 futuro |
| `docs/engineering/TECHNICAL_DEBT.md` | Keep | |
| `docs/engineering/*_ARCHITECTURE` stubs | Archive | |

---

## 6. Pendiente (no hacer en bloque sin review)

1. Validar Cap. 1–4 + I1 con un learner humano.
2. **CHAPTER_05** + Path Cap. 5 (Testing / calidad).
3. **PLATFORM_SPEC.md** — opcional, consolidar app vs MVP_SCOPE.
4. Ejecutar moves a `90-archive/` **por lotes** con PRs pequeños.
5. **No delete** — solo archive según [90-archive/README.md](../90-archive/README.md).

---

## 7. Para la IA al codear

**Leer primero:** START_HERE → FOUNDER_DECISIONS → MVP_SCOPE → ADR-008/009 → curriculum Cap. 1–4.

**Ignorar hasta refactor/archive:** BACKEND_*, DATABASE_*, SYSTEM_* bodies largos, PROJECT_CONSTITUTION.
