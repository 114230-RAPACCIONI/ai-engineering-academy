---
artifact:
  id: ART-SEC-001
  type: Security
  status: Canonical
  version: 1.0.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-08
  revised: 2026-07-09
  initiative: INIT-001
  tags:
    - security
    - privacy
    - ai-safety
  absorbs:
    - ART-013 Security Model
    - ART-033 Security Architecture
---

# Security

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Única fuente de verdad de seguridad. Los docs Model + Architecture anteriores son stubs hacia archive.

---

## 1. Principios

1. Secure by design  
2. Least privilege  
3. Verificación continua de acciones sensibles  
4. Learning safety > completar la tarea (IA)  
5. Controles simples primero; compliance enterprise después  

---

## 2. Objetivos

Confidentiality · Integrity · Availability · Traceability

---

## 3. Capas

```
Identity → Application → Data → Infrastructure → AI Safety → Audit
```

---

## 4. Identidad y autenticación (MVP)

- Verificar quién es el learner (email/password y/o OAuth — elegir vía ADR).
- Gestión de sesión con revocación.
- MFA = Future (salvo que el beachhead regulatorio lo exija).
- No tokens de larga vida silenciosos en storage del cliente sin threat review.

**Decisión pendiente:** ADR de protocolo Auth (session cookie vs JWT vs OIDC).

---

## 5. Autorización (MVP) — gana ownership

```
Learner
  └── posee → Profile, progreso del Path, Practice Projects, conversaciones con el Mentor
```

- Default: un learner solo lee/escribe sus propios recursos.
- Admins de plataforma: acceso break-glass operacional, auditado.
- **RBAC de org** (User/Admin/Creator/Reviewer como roles de producto) = **Future** — no MVP.
- Sharing / teams = Future; no diseñar permisos para eso todavía.

---

## 6. Protección de datos

- Cifrado en tránsito (TLS).
- Cifrado en reposo (mínimo cifrado de disco del provider; field-level después si hace falta).
- Secrets en un secret manager — nunca en el repo ni en bundles del cliente.
- Clasificar: Public / Internal / Learner-private / Secrets.
- Learner-private + Secrets no deben loguearse en texto plano.

---

## 7. Application y API

- Validación de input en todos los write paths.
- Controles CSRF/CORS/XSS para la SPA.
- Rate-limit en auth y endpoints del Mentor.
- Sin tools del Mentor capaces de SSRF en el MVP (sin fetch/tools a URLs arbitrarias).

---

## 8. Seguridad de IA (crítico para ZUZU)

| Control | Expectativa MVP |
|---------|-----------------|
| Prompt injection | Tratar texto del learner + project como input no confiable al modelo |
| Context leak | Nunca mezclar memory/embeddings entre learners |
| Límite del provider | Redactar secrets/PII antes de enviar cuando sea factible; documentar qué sale del boundary |
| Tools del Mentor | Deny-by-default; sin side effects de alto riesgo sin confirmación humana |
| Alucinación | El Mentor debe preferir enseñanza + incertidumbre antes que falsedad confiada |
| Logging | Logs de prompt/response: política de retention + redacción obligatoria antes de habilitar |

**Learning safety:** un Mentor que enseña mal con confianza es un incidente de seguridad de producto, no “solo calidad”.

---

## 9. Audit

Registrar: eventos de auth, denegaciones de acceso, invocaciones del Mentor (metadata), break-glass de admin.

No loguear secrets en crudo. Política de retention TBD en ops cuando exista código.

---

## 10. Amenazas (iniciales)

1. Account takeover  
2. Acceso a datos entre learners  
3. Prompt injection vía Knowledge o artefactos de Practice  
4. Exfiltración vía tools futuros  
5. Retention / training del provider con datos del learner (controles contractuales + técnicos)  

---

## 11. Non-goals explícitos (MVP)

- Matriz completa de RBAC de producto  
- Aislamiento multi-tenant de org más allá de cuentas de un learner  
- Certificaciones de compliance (SOC2, etc.) como blockers de launch  
- Federación IdP enterprise  

---

## 12. Relacionados

- [PRODUCT_THESIS](../00-constitution/PRODUCT_THESIS.md)
- [ADR-001 AI Provider Independence](../architecture/adr/ADR-001-ai-provider-independence.md)
- [ADR-007 Learning First](../architecture/adr/ADR-007-product-identity-learning-first.md)
- [AI_GOVERNANCE_MODEL](../ai/AI_GOVERNANCE_MODEL.md)
- Pendientes: Auth ADR, ADR de retention de datos de IA
