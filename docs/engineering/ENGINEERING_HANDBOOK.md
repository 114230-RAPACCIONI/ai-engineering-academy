---
artifact:
  id: ART-000
  type: Engineering Handbook
  status: Draft
  version: 0.1.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  initiative: INIT-001
  tags:
    - engineering
    - culture
    - principles
    - governance
---

# Engineering Handbook

> "Great products are built by great systems of thinking."

---

# Purpose

Este documento define los principios, prácticas y estándares que guían la construcción de Project ZUZU.

No define tecnologías específicas.

Define cómo pensamos.

---

# Engineering Philosophy

Project ZUZU se construye bajo una idea central:

> La ingeniería de software es un proceso de resolución de problemas, no solamente producción de código.

---

# Engineering Principles

---

# 1. Los principios son más importantes que las herramientas.

Las herramientas cambian.

Los principios permanecen.

Un ingeniero debe comprender:

- por qué existe una solución;
- qué problema resuelve;
- cuáles son sus trade-offs.

---

# 2. Diseñar antes de construir.

Antes de escribir código debemos entender:

- problema;
- contexto;
- restricciones;
- solución propuesta.

Código sin diseño genera complejidad.

---

# 3. La documentación es parte del producto.

La documentación no es una tarea secundaria.

Es conocimiento acumulado.

Todo sistema debe poder ser comprendido por personas y agentes.

---

# 4. Los artefactos son ciudadanos de primera clase.

Los documentos de diseño tienen valor propio.

Un artefacto:

- explica decisiones;
- conserva contexto;
- permite evolución.

---

# 5. Todo cambio debe ser trazable.

Toda modificación importante debe responder:

- qué cambió;
- por qué cambió;
- quién decidió;
- qué impacto tiene.

---

# 6. La IA es un colaborador, no un reemplazo.

La IA aumenta capacidades humanas.

No elimina:

- pensamiento crítico;
- responsabilidad;
- criterio.

---

# 7. Automatizar lo repetitivo.

El tiempo humano debe utilizarse para:

- crear;
- analizar;
- decidir.

Lo repetitivo debe automatizarse.

---

# 8. Simplicidad antes que sofisticación.

La solución más compleja no siempre es la mejor.

Preferimos:

- claridad;
- mantenibilidad;
- evolución.

---

# 9. Pensar en sistemas.

Cada decisión afecta:

- producto;
- usuarios;
- arquitectura;
- negocio.

No diseñamos componentes aislados.

Diseñamos sistemas.

---

# 10. Aprender continuamente.

Todo sistema debe mejorar.

Todo error debe generar aprendizaje.

---

# Decision Framework

Antes de tomar una decisión técnica preguntamos:


¿Qué problema resuelve?

¿Qué alternativas existen?

¿Qué trade-offs tiene?

¿Puede evolucionar?

¿Es simple?


---

# Documentation Standards

Todo conocimiento importante debe existir como artefacto.

Ejemplos:

- decisiones;
- arquitectura;
- requisitos;
- procesos.

---

# AI Collaboration Rules

Cuando trabajamos con IA:

La IA debe:

- entender contexto;
- respetar principios;
- explicar decisiones;
- pedir información cuando falta.

---

# Git Workflow

Todo cambio sigue:


Branch

↓

Change

↓

Commit

↓

Pull Request

↓

Review

↓

Merge


---

# Branch Naming

Formato:


type/name


Ejemplos:


artifact/security-model-art-013

feature/user-authentication

fix/login-validation


---

# Commit Convention

Formato:


type(scope): description


Ejemplos:


docs(ai): define agent model

feat(auth): add login flow


---

# Pull Request Philosophy

Un PR debe explicar:

- qué cambió;
- por qué;
- impacto.

---

# Engineering Culture

Buscamos ingenieros que:

- comprendan problemas;
- cuestionen decisiones;
- documenten conocimiento;
- aprendan constantemente.

---

# Final Statement

Project ZUZU no se construye solamente con código.

Se construye con:

- pensamiento;
- diseño;
- colaboración;
- aprendizaje.

Este handbook representa la forma en que construimos.
