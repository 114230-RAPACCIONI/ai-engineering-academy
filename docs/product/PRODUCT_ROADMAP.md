---
artifact:
  id: ART-009
  type: Product Roadmap
  status: Draft
  version: 0.3.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-07
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - product
    - roadmap
    - learning
---

# Product Roadmap

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Un roadmap es una secuencia de **resultados de aprendizaje validados**, no un shopping de features.
> La regla de oro gobierna cada etapa.

---

## Propósito

Evolucionar ZUZU para que los learners se vuelvan mejores ingenieros de software con un Mentor de IA.

No: volverse Cursor, Linear, Notion, GitHub o una plataforma multi-agent de entrega.

---

## Principios

1. **Validar antes de escalar**  
2. **Capability over features** (capability del learner)  
3. **Simplicidad antes que complejidad**  
4. **Un Mentor antes que fleets de agents**  
5. **Practice Project ≠ Project OS**

---

## Mapa de horizontes

| Horizonte | Nombre | Estado |
|---------|------|--------|
| H0 | Foundation + MVP | **Activo** — ver [MVP_SCOPE](./MVP_SCOPE.md) |
| H1 | Mentor más fuerte + Path más claro | Después de que Capability muestre lift |
| H2 | Personalización más profunda / práctica más rica | Future |
| H3 | Comunidad / evidencia / partners | Future — solo si H0–H1 funcionan |

Las fases antes llamadas “Engineering Ecosystem” / academy OS multi-agent **no** son compromisos activos.

---

## Horizonte 0 — MVP (ahora)

**Hipótesis:** Path + Knowledge + un Mentor + Practice Project mejora la capability de ingeniería.

**Shippear:** identidad — Learning Path — Knowledge Base — Mentor — Practice Project — Progress liviano.

**Éxito:** métricas falsables en [MVP_SCOPE §9](./MVP_SCOPE.md) — en especial la **rúbrica de Capability**.

**No shippear:** Billing, Workspace org, Releases, multi-agent, plataforma Knowledge Graph, event bus.

Foundation y MVP son **un horizonte** (no dos fases duplicadas).

---

## Horizonte 1 — Mejor Mentor, mejor prueba (siguiente)

Solo después de retention en H0 + señal de Capability:

- Memoria/contexto del Mentor más fuertes (scopes learner + practice)  
- Mejor adaptación del Path (sigue siendo un Mentor)  
- Challenges de práctica con rúbricas más claras  
- Eval harness del Mentor como gate de release  

Todavía **no**: agents especializados de producto, team OS, git hosting como identidad.

---

## Horizonte 2 — Future (cuarentenado)

Solo aspiracional (`docs/99-future/` si se detalla después):

| Idea | Cómo reencuadrarla si se revisita |
|------|----------------------|
| “Specialized AI agents” | Comportamientos del Mentor o especialistas posteriores — tras validar el Mentor |
| Knowledge Graph | Solo si la base curada + outcomes lo exigen |
| Dev workspace / integración git | Como ayuda a la práctica, no nueva identidad de producto |
| Collaboration / sharing | Cohortes de learners — no herramienta de PM |
| Automation | Solo si aumenta el juicio, no la dependencia |

---

## Horizonte 3 — Red de academy (lejano)

Comunidades, mentores, empresas, certification basada en evidencia — **después** de que el learning loop funcione.

Nunca dejar que el packaging de “Academy” reemplace la Tesis.

---

## En lo que nunca nos convertiremos

| Anti-destino | Por qué |
|--------------|-----|
| Plataforma de cursos en video | El contenido solo ≠ transformación |
| Code generator | Throughput ≠ juicio de ingeniería |
| Biblioteca de tutoriales de tools | Las tools cambian; la capability permanece |
| Cosplay de escuela tradicional | Modelo de aprendizaje incorrecto |
| Project OS / workbench | Abandona Learning First |
| ChatGPT con tabs | Chat sin Path + Practice |

---

## Orden de prioridad

```
Entender → Practicar → Feedback del Mentor → Evidencia de capability → Scale
```

Nunca:

```
Features → Más features → Más features
```

---

## Relacionados

- [MVP_SCOPE](./MVP_SCOPE.md)  
- [USER_JOURNEY](./USER_JOURNEY.md)  
- [AI_TECHNICAL_ROADMAP](../ai/AI_TECHNICAL_ROADMAP.md)  
- [ADR-007](../architecture/adr/ADR-007-product-identity-learning-first.md)
