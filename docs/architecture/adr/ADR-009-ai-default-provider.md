---
artifact:
  id: ADR-009
  type: Architecture Decision Record
  status: Accepted
  version: 1.0.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
---

# ADR-009 — Proveedor de IA por defecto (MVP)

## Status

Accepted

## Contexto

ZUZU requiere ([FOUNDER_DECISIONS](../../00-constitution/FOUNDER_DECISIONS.md), [ADR-001](./ADR-001-ai-provider-independence.md)):

- **Arquitectura multi-provider** — el código depende de capabilities, no de un SDK vendor.
- **Un proveedor por defecto** en el MVP para simplificar configuración local.
- Uso principal: **Mentor pedagógico** (explicar, preguntar, desafiar) con contexto largo (Path + Practice Project + historial).
- Stack elegido: **Next.js / TypeScript** ([ADR-008](./ADR-008-stack-selection.md)).

## Criterios de evaluación

| Criterio | Importancia para Mentor ZUZU |
|----------|------------------------------|
| Calidad pedagógica | Muy alta |
| Costo MVP (bajo volumen 1–3 usuarios) | Alta |
| Latencia / streaming | Alta |
| Facilidad integración TS | Alta |
| Estabilidad API | Alta |
| Ventana de contexto | Alta |
| Independencia futura | Obligatoria (ADR-001) |

## Alternativas evaluadas

### OpenAI (GPT-4o / familia o-series)

| Aspecto | Evaluación |
|---------|------------|
| Calidad | Muy alta; fuerte en instrucciones y código |
| Costo | Competitivo; modelos mini/económicos para tareas livianas |
| Latencia | Excelente con streaming |
| Integración | SDK oficial maduro; amplio soporte en Vercel AI SDK |
| Estabilidad | Muy alta; referencia de industria |
| Contexto | Grande (depende del modelo; suficiente para MVP) |
| Pedagogía | Buena; a veces demasiado “solucionadora” sin preguntar |

### Anthropic (Claude Sonnet / Opus)

| Aspecto | Evaluación |
|---------|------------|
| Calidad | Muy alta; fuerte en razonamiento y texto largo |
| Costo | Similar tier medio-alto; Opus más caro |
| Latencia | Buena con streaming |
| Integración | SDK maduro; soportado en AI SDK |
| Estabilidad | Alta |
| Contexto | **Muy grande** — ventaja para spec + historial Mentor |
| Pedagogía | **Muy fuerte** — tiende a explicar y matizar; alineado a Mentor que no reemplaza criterio |

### Google (Gemini)

| Aspecto | Evaluación |
|---------|------------|
| Calidad | Alta y mejorando |
| Costo | A menudo agresivo en precio |
| Integración | Buena; ecosistema heterogéneo |
| Pedagogía | Variable según modelo/tarea |

### Azure OpenAI / AWS Bedrock

| Aspecto | Evaluación |
|---------|------------|
| Calidad | Depende del modelo subyacente |
| Costo | Enterprise; overkill MVP local |
| Integración | Más configuración; útil en fase deploy enterprise |

## Decisión

**Proveedor por defecto del MVP: Anthropic (modelo clase Sonnet — última estable al momento de implementar).**

**Proveedor secundario documentado para conmutación:** OpenAI (misma interfaz de adapter).

### Implementación

```
modules/mentor/
  ports/
    LLMProvider.ts          ← interface (capabilities)
  adapters/
    AnthropicProvider.ts    ← default
    OpenAIProvider.ts       ← secundario
  MentorService.ts          ← usa LLMProvider, no SDK directo
```

Configuración:

```env
AI_DEFAULT_PROVIDER=anthropic
ANTHROPIC_API_KEY=...
# OPENAI_API_KEY=...       ← opcional
```

### Por qué Anthropic por defecto (y no OpenAI)

| Razón | Detalle |
|-------|---------|
| Pedagogía | Mentor ZUZU debe enseñar antes de codear; Claude suele ser menos “te lo resuelvo todo” |
| Contexto | Path + REQUIREMENTS + DESIGN + historial beneficia ventanas largas |
| Alineación producto | [ADR-004](./ADR-004-ai-as-collaborator.md) — colaborador, no codegen |
| Regla de aprendizaje | Mejor criterio del estudiante > velocidad de respuesta |

OpenAI queda como **segunda opción** excelente si costo, disponibilidad regional o benchmarks cambian — sin tocar dominio gracias a ADR-001.

### Modelo concreto

No fijar nombre de modelo en piedra en este ADR (cambian mensualmente). Regla de implementación:

> Usar **Claude Sonnet** (última versión estable documentada en README de implementación) para Mentor; evaluar costo antes de Opus para MVP.

## Consecuencias

### Positivas

- Mentor alineado a enseñanza y contexto largo.
- Adapter pattern cumple ADR-001 desde día 1.
- Vercel AI SDK puede unificar streaming Anthropic/OpenAI.

### Negativas

- Costo por token puede superar a modelos mini de OpenAI en uso intensivo — monitorear ([pendiente ADR budget tokens]).
- Disponibilidad/API keys según región del founder.

### Riesgos

- Vendor lock-in en **prompts** optimizados por modelo — mitigar: prompts en archivos versionados, eval harness ([AI_EVALUATION_FRAMEWORK](../../ai/AI_EVALUATION_FRAMEWORK.md) cuando se implemente).

## Relacionados

- [ADR-001](./ADR-001-ai-provider-independence.md)
- [ADR-004](./ADR-004-ai-as-collaborator.md)
- [ADR-008](./ADR-008-stack-selection.md)
- [FOUNDER_DECISIONS](../../00-constitution/FOUNDER_DECISIONS.md)
