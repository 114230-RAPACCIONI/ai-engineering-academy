---
artifact:
  id: ART-019
  type: Memory Architecture
  status: Draft
  version: 0.3.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - artificial-intelligence
    - memory
    - learning
---

# Memory Architecture

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> La memoria sirve al **progreso del learner** y al **project como práctica**.
> No crea un plano de memoria de Project OS de equipo.
> Useful memory > complete memory.

---

## Propósito

Definir qué puede recordar el Mentor, por qué, y con qué ownership — para que el aprendizaje continúe sin envenenar el contexto ni filtrar datos entre learners.

---

## Precedencia (escritura / lectura)

1. **Stores canónicos** — entidades en DB (progreso del Path, artefactos del Practice Project, profile)  
2. **Índices derivados** — embeddings / RAG sobre Knowledge + docs de práctica accesibles al learner  
3. **Sesión episódica** — working set de la conversación actual  
4. **Inferencias durables del Mentor** — solo con provenance, confidence, scope, TTL  

Si hay conflicto, gana lo canónico. Las memories nunca pisan en silencio hechos del Path o del Project.

---

## Scopes de memoria

| Scope | Posee | MVP |
|-------|------|-----|
| **Learner** | Objetivos, nivel, preferencias, señales de estilo, resúmenes de progreso del Path | Sí |
| **Practice Project** | Goal, decisiones, preguntas abiertas, punteros a artefactos de esa práctica | Sí |
| **Session** | Working set del turno / thread actual | Sí |
| **Knowledge (platform)** | Conceptos curados vía RAG — no una “Knowledge Memory” rival | Sí (lectura) |
| **Workspace / Org / Team** | Memoria compartida de org | **No — Future** |
| **Stores opacos privados del agent** | Diarios de agent no auditables | **No** |

---

## Principios

1. Preferir enlazar artefactos canónicos a copiar prosa en “memories”.  
2. Toda inferencia durable: `source` — `confidence` — `scope` — `ttl` — `created_by`.  
3. Olvidar / invalidar cuando cambia el module del Path o el goal de Practice.  
4. Nunca mezclar embeddings o memories del Learner A en el contexto del Learner B.  
5. Enseñar mal con memory stale = incidente de calidad **y** de safety.

---

## Ensamblado del Mentor (MVP)

```
System + spec del Mentor
+ slice de perfil del learner
+ module / conceptos actuales del Path
+ slice del Practice Project activo (si hay)
+ turnos de sesión (con budget)
+ snippets de Knowledge recuperados (con cita)
```

El budget de tokens/contexto lo posee el runtime del Mentor (ADR pendiente). Tirar el project entero al contexto es un anti-pattern.

---

## Non-goals explícitos (MVP)

- Transcripción infinita del chat como memoria  
- Memoria de IA compartida entre learners / orgs  
- “Cerebro vivo de Project OS” que se auto-actualiza  
- Memoria que bypasea artefactos visibles para el humano  

---

## Relacionados

- [CONTEXT_ENGINEERING](./CONTEXT_ENGINEERING.md)
- [AI_ARCHITECTURE](./AI_ARCHITECTURE.md)
- [AGENT_MODEL](./AGENT_MODEL.md)
- [INFORMATION_ARCHITECTURE](../product/INFORMATION_ARCHITECTURE.md)
- [SECURITY](../security/SECURITY.md)

---

## Nota sobre el draft anterior

El catálogo largo de “tipos de memoria” superpuestos queda reemplazado por la tabla de scopes. El detalle de implementación pertenece al ADR de Mentor runtime + schema — no a mitologías paralelas.
