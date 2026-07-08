---
artifact:
  id: ART-047
  type: Information Architecture
  status: Draft
  version: 1.0.0
---

# Information Architecture

> "Everything revolves around the Project."

---

# 1. Purpose

Este documento define cómo se organiza toda la información dentro de Project ZUZU.

No describe pantallas.

Describe el modelo mental del producto.

Toda la aplicación se construye alrededor de un único concepto:

# Project

Todo lo demás existe para enriquecerlo.

---

# 2. Core Entity

```
Workspace

↓

Projects

↓

Knowledge

↓

Everything Else
```

El proyecto es la unidad principal de trabajo.

---

# 3. Workspace Hierarchy

```
Workspace

├── Members

├── Projects

├── AI Settings

├── Billing

├── Integrations

└── Knowledge Library
```

Un Workspace representa una organización o un equipo.

---

# 4. Project Hierarchy

Cada proyecto contiene:

```
Project

├── Overview

├── AI Companion

├── Conversations

├── Tasks

├── Architecture

├── Documentation

├── Decisions (ADR)

├── Knowledge

├── Code

├── APIs

├── Database

├── Roadmap

├── Releases

├── Metrics

├── Files

└── Settings
```

Este árbol no representa un menú rígido, sino las capacidades del proyecto.

---

# 5. Knowledge Graph

La información no debe almacenarse de forma aislada.

Debe estar conectada.

```
Decision

↓

Architecture

↓

API

↓

Feature

↓

Task

↓

Conversation

↓

Code

↓

Documentation
```

Cada entidad referencia a las demás cuando existe una relación.

---

# 6. Context Layers

La IA trabaja con distintos niveles de contexto.

## Global

Información del Workspace.

---

## Project

Información específica del proyecto.

---

## Session

Lo ocurrido durante la sesión actual.

---

## User

Preferencias personales.

---

## Task

Contexto inmediato de la actividad.

---

# 7. Information Ownership

Cada dato tiene un propietario claro.

| Entidad | Owner |
|----------|-------|
| Proyecto | Workspace |
| Conversación | Proyecto |
| ADR | Proyecto |
| Código | Repositorio |
| Tarea | Proyecto |
| Documento | Proyecto |
| Memoria IA | Proyecto |

---

# 8. Navigation Philosophy

La navegación no se organiza por herramientas.

Se organiza por intención.

Ejemplo:

No:

```
Chat

Editor

Documentos

```

Sí:

```
Quiero entender

↓

Quiero planificar

↓

Quiero construir

↓

Quiero revisar

↓

Quiero entregar
```

---

# 9. Search First

Todo debe poder encontrarse desde un único punto.

La búsqueda debe incluir:

- documentos;
- conversaciones;
- decisiones;
- tareas;
- APIs;
- código;
- conocimiento generado por IA.

---

# 10. AI Memory

Cada proyecto posee una memoria viva.

La IA conoce:

- objetivos;
- arquitectura;
- convenciones;
- historial;
- decisiones;
- tareas abiertas;
- riesgos.

La memoria no pertenece al usuario.

Pertenece al proyecto.

---

# 11. Living Documentation

Toda modificación importante actualiza automáticamente:

- documentación;
- decisiones;
- conocimiento.

La documentación deja de ser un módulo.

Se convierte en una propiedad del sistema.

---

# 12. Information Lifecycle

Todo elemento atraviesa un ciclo.

```
Created

↓

Connected

↓

Used

↓

Updated

↓

Archived

↓

Deleted
```

---

# 13. Design Rules

Nunca duplicar conocimiento.

Siempre reutilizar contexto.

Relacionar toda la información.

Eliminar información huérfana.

Mantener trazabilidad completa.

---

# 14. Anti-Patterns

❌ Documentación separada del proyecto.

❌ Conversaciones sin contexto.

❌ Código desconectado de decisiones.

❌ Archivos aislados.

❌ Información duplicada.

---

# 15. Success Criteria

El usuario nunca debería preguntarse:

"¿Dónde estaba eso?"

Debería preguntarse únicamente:

"¿Qué quiero hacer?"

Y ZUZU debería llevarlo automáticamente a la información correcta.