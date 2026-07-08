---
artifact:
  id: ART-045
  type: User Mental Model
  status: Draft
  version: 1.0.0
  owner: Founder
  reviewers:
    - Product Team
    - UX Team
    - CTO
  created: 2026-07-08
  initiative: INIT-001
  tags:
    - product
    - ux
    - cognition
    - ai
---

# User Mental Model

> "The best interface is the one that matches how people already think."

---

# 1. Purpose

Este documento describe cómo piensan los usuarios de Project ZUZU cuando transforman una idea en un producto de software.

No modela perfiles demográficos.

Modela procesos mentales, necesidades cognitivas y patrones de toma de decisiones.

---

# 2. Core Assumption

Los desarrolladores no trabajan escribiendo código.

Trabajan resolviendo problemas.

El código es únicamente una consecuencia.

Por lo tanto, ZUZU debe alinearse con el proceso mental de resolución de problemas, no con la edición de archivos.

---

# 3. The Developer Mindset

Cuando un desarrollador comienza un proyecto normalmente no piensa:

> "Voy a crear una clase."

Piensa:

- ¿Qué estoy intentando resolver?
- ¿Por dónde empiezo?
- ¿Qué riesgos existen?
- ¿Cuál es la mejor arquitectura?
- ¿Qué debería construir primero?

---

# 4. Mental States

Durante un proyecto el usuario atraviesa distintos estados.

## Inspiration

Tiene una idea.

Todavía es difusa.

Necesita explorar.

---

## Structuring

Empieza a ordenar pensamientos.

Busca relaciones.

Define prioridades.

---

## Decision

Compara alternativas.

Evalúa ventajas y riesgos.

---

## Construction

Implementa.

Itera.

Corrige.

---

## Validation

Comprueba resultados.

Busca errores.

Refina.

---

## Evolution

El proyecto cambia.

Aparecen nuevas necesidades.

Debe mantener coherencia.

---

# 5. Cognitive Frictions

Las mayores dificultades no suelen ser técnicas.

Son cognitivas.

### Sobrecarga de información

Demasiadas decisiones al mismo tiempo.

---

### Pérdida de contexto

No recordar por qué se tomó una decisión.

---

### Página en blanco

No saber cómo empezar.

---

### Fatiga de decisión

Elegir constantemente entre muchas alternativas.

---

### Cambio de contexto

Interrumpir el trabajo para buscar documentación, ejemplos o decisiones previas.

---

# 6. What Users Want to Remember

El usuario quiere recordar:

- visión del producto;
- decisiones importantes;
- arquitectura;
- prioridades.

No quiere recordar:

- rutas de archivos;
- comandos repetitivos;
- detalles triviales;
- información ya conocida por el sistema.

---

# 7. What Users Want AI to Remember

La IA debe recordar:

- contexto del proyecto;
- decisiones arquitectónicas;
- convenciones del equipo;
- documentación;
- conversaciones relevantes;
- objetivos de negocio.

Nunca debería obligar al usuario a repetir esa información.

---

# 8. Trust Boundaries

Hay decisiones que el usuario quiere delegar.

Ejemplos:

- generar documentación;
- crear pruebas;
- buscar información;
- detectar problemas.

Hay decisiones que quiere conservar.

Ejemplos:

- arquitectura;
- reglas de negocio;
- prioridades;
- aceptación de cambios.

---

# 9. The Ideal Cognitive Loop

```text
Idea

↓

Conversation

↓

Understanding

↓

Planning

↓

Building

↓

Learning

↓

Knowledge Preservation
```

Cada ciclo debería enriquecer el conocimiento del proyecto.

---

# 10. Attention Economy

La atención es el recurso más escaso.

ZUZU debe protegerla.

Reglas:

- una tarea principal por pantalla;
- minimizar interrupciones;
- reducir decisiones innecesarias;
- mostrar solo el contexto relevante.

---

# 11. Product Responsibilities

ZUZU debe encargarse de:

- organizar información;
- recordar contexto;
- detectar inconsistencias;
- sugerir próximos pasos;
- documentar automáticamente.

El usuario debe encargarse de:

- definir objetivos;
- validar decisiones;
- aportar criterio;
- aprobar cambios.

---

# 12. Learning Model

Cada interacción debería producir dos resultados:

1. Avanzar el proyecto.
2. Incrementar el conocimiento compartido.

Así, cada sesión hace más inteligente al espacio de trabajo, no solo al usuario.

---

# 13. Experience Principles

- Pensar antes que programar.
- Conversar antes que configurar.
- Entender antes que ejecutar.
- Documentar mientras se trabaja.
- Aprender continuamente.

---

# 14. Anti-Patterns

## La IA pregunta siempre lo mismo

Indica pérdida de memoria contextual.

---

## El usuario busca información que ya existe

Indica mala organización del conocimiento.

---

## La IA genera código sin explicar el impacto

Reduce la confianza.

---

## La herramienta obliga al usuario a adaptarse

El producto debe adaptarse al usuario, no al revés.

---

# 15. Success Criteria

Este modelo será exitoso cuando:

- el usuario sienta que ZUZU comprende su proyecto;
- disminuya el tiempo dedicado a buscar información;
- aumente la continuidad entre sesiones;
- la IA actúe como memoria extendida y colaborador, no como un simple generador de texto.

---

# 16. Related Artifacts

- ART-002 — Product Vision
- ART-044 — Product Experience Vision
- ART-037 — Documentation Architecture
- ART-050 — AI Experience Architecture

---

# Final Statement

Project ZUZU no está diseñado para reemplazar el pensamiento humano.

Está diseñado para eliminar la carga cognitiva innecesaria, preservar el conocimiento del proyecto y permitir que las personas concentren su energía en resolver problemas y crear productos de mayor calidad.