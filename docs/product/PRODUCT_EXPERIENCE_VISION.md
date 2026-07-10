---
artifact:
  id: ART-044
  type: Product Experience Vision
  status: Draft
  version: 0.3.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - product
    - experience
    - vision
    - ux
    - learning
---

# Product Experience Vision

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Project ZUZU no es un AI companion que construye software por las personas.
> Es un entorno de aprendizaje donde las personas se vuelven mejores ingenieros con un Mentor de IA.

---

## 1. Propósito

Define la experiencia que ZUZU debe generar.

No describe features.

Describe cómo se siente **aprender ingeniería** con un Mentor de IA.

---

## 2. La promesa

Cuando alguien termina una sesión debería pensar:

> "Hoy soy un poco mejor ingeniero que ayer — y entiendo por qué."

Si solo siente que “avanzó un ticket” u “obtuvo código más rápido”, fallamos la tesis.

---

## 3. Identidad de producto

ZUZU no se comporta como:

- un editor de código;
- un gestor de tareas;
- un chatbot genérico;
- un LMS de videos;
- un Product OS / workbench.

ZUZU se comporta como:

**un entorno de aprendizaje** donde el learner entiende, practica, decide y reflexiona — con un Mentor de IA.

---

## 4. Principios de experiencia

### Learning over Throughput

La velocidad de entrega no es el KPI primario.

La capability del learner sí lo es.

### Clarity over Complexity

Reducir complejidad cognitiva del aprendizaje — no del work management.

### Mentor before Automation

La IA enseña, pregunta y desafía antes de hacer el trabajo por el usuario.

### Progress over Perfection

Avanzar en el Learning Path importa más que pulir un árbol de features.

### Confidence over Blind Trust

Explicaciones, incertidumbre honesta, control humano en las decisiones.

### Context over Commands

El Mentor usa Path + Project-as-practice + progreso — el learner no reinventa su contexto cada sesión.

---

## 5. Metas emocionales

Queremos: confianza, claridad, curiosidad, control, progreso de capability.

Evitamos: dependencia de IA, saturación de tools, miedo a equivocarse, “productividad” vacía.

---

## 6. Personalidad del producto (Mentor)

Paciente, técnica, organizada, honesta, proactiva, humilde.

Nunca arrogante, invasiva, impredecible, ni excesivamente optimista.

---

## 7. La sesión ideal

```
Objetivo de aprendizaje
?
Entender el concepto / problema
?
Practicar en un Project
?
El Mentor pregunta, explica, desafía
?
El learner decide
?
Reflexión: ¿qué capability gané?
```

Al finalizar: el Path avanzó **y** el learner puede explicar qué aprendió.

---

## 8. Friction budget

Cada paso consume atención.

Antes de agregar pantalla o config:

1. ¿Hace al learner mejor ingeniero (pensar — diseñar — construir)?
2. ¿Puede esperar al post-MVP?
3. ¿Es ritual de work OS disfrazado de pedagogía?

La fricción productiva (pedir requirements antes de código) es **método de enseñanza**, no bloqueo ceremonial.

---

## 9. Modelo de confianza

Transparencia — explicaciones — referencias a Path/Project — trazabilidad de consejos.

Nunca certeza fingida.

---

## 10. Colaboración humano + IA

El learner aporta intención, criterio y decisión final.

El Mentor aporta explicación, exploración, feedback y desafío pedagógico.

La IA **no** reemplaza al ingeniero en formación.

---

## 11. Métricas de éxito (experiencia)

- Tiempo hasta primera evidencia de aprendizaje (no solo “primer click”)
- Retorno al Path
- Uso del Mentor como colaborador (no como codegen)
- Capability demostrable en Practice Projects (rúbrica)
- Percepción de “soy mejor en X” (auto + evidencia)

---

## 12. Anti-patterns

| Rechazado | Por qué |
|----------|-----|
| ChatGPT con tabs | Chat sin Path ni practice |
| IDE con IA pegada | No somos editor |
| Nav de gestor de tareas / Releases / Billing | Drift work OS |
| Companion que “construye el producto por ti” | Viola la tesis |
| Automatización sin explicación | Destruye learning |

---

## 13. Pregunta de diseño

> ¿Esta feature hace al learner un mejor ingeniero — pensar, diseñar y construir con IA, independiente del stack?

Si no es claramente **sí**, no va al MVP.

---

## 14. Motivación y engagement (inspiración Duolingo, no copia)

*Sección fusionada desde ENGAGEMENT_DESIGN.md — ver [docs/90-archive/product/ENGAGEMENT_DESIGN.md](../90-archive/product/ENGAGEMENT_DESIGN.md) para el histórico.*

El learner vuelve porque **siente que progresa como ingeniero**, no por miedo a perder una racha. Cada patrón de UX de motivación debe pasar la misma regla de aprendizaje que el resto del producto (§13): ¿ayuda a desarrollar mejor criterio colaborando con IA?

### 14.1 Queremos (MVP)

| Patrón | Implementación conceptual |
|--------|-------------------------|
| **Path visual claro** | Mapa de viajes / capítulos; siguiente paso siempre visible |
| **Progreso visible** | % del viaje, módulos completados, capability checklist |
| **Celebrar logros** | Animación/mensaje al cerrar capítulo, primer AC validado, export de proyecto |
| **Evolución del estudiante** | Línea de tiempo: Planning → Requirements → Design → Build |
| **Metas alcanzables** | Incrementos chicos (I1, I2); nunca "terminá la app entera" |
| **Feedback positivo** | Mentor reconoce avance real; copy en español amable |

### 14.2 No queremos (MVP)

| Patrón | Por qué no |
|--------|------------|
| Castigos | Genera ansiedad; no forma criterio |
| Vidas / hearts | Presión artificial |
| Rachas punitivas | FOMO y culpa si faltás un día |
| Leaderboards agresivos | Comparación vacía; no es el foco |
| Notificaciones guilt-trip | "Te extrañamos" manipulativo |

**Nota:** streaks **informativos** ("llevás 3 días seguidos") pueden evaluarse en post-MVP solo si no castigan ausencia.

### 14.3 Dominio del primer viaje: elegido por el learner

Al crear cuenta, el learner elige el dominio de su primer Practice Project — no hay un dominio obligatorio (ver [FOUNDER_DECISIONS §8](../00-constitution/FOUNDER_DECISIONS.md)). Gastos Hormiga queda como ejemplo de referencia/plantilla si el learner no tiene una idea propia todavía. El path visual muestra los capítulos SDD aplicados al dominio elegido hasta producto exportable — el path es igual sin importar qué construya.

### 14.4 Métricas de engagement (alineadas a aprendizaje)

Complementan las métricas de §11 con la vista específica de retorno/motivación:

| Métrica | Buena señal | Mala señal |
|---------|-------------|------------|
| Retorno voluntario | Vuelve al path sin notificación | Solo entra por culpa/streak |
| Cierre de incremento | Termina I1 y valida ACs | Mucho chat, cero artefactos |
| Export | Descarga Practice Project completo | Abandona antes de spec |
| Auto-reporte | "Entiendo por qué hice X" | "La IA lo hizo por mí" |

---

## Relacionados

- [PRODUCT_THESIS](../00-constitution/PRODUCT_THESIS.md)
- [PRODUCT_VISION](./PRODUCT_VISION.md)
- [USER_JOURNEY](./USER_JOURNEY.md)
- [AI_PRODUCT_EXPERIENCE](./AI_PRODUCT_EXPERIENCE.md)
- [MVP_SCOPE](./MVP_SCOPE.md)
- [FOUNDER_DECISIONS §8](../00-constitution/FOUNDER_DECISIONS.md)

---

## Declaración final

ZUZU aspira a ser el lugar donde las personas **aprenden a pensar y construir como ingenieros** con ayuda de inteligencia artificial.

El éxito no se mide por features ni por throughput de código.

Se mide por capability.
