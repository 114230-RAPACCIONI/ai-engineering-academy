---
artifact:
  id: ART-031
  type: API Design
  status: Draft
  version: 0.1.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  initiative: INIT-001
  tags:
    - api
    - contracts
    - integration
    - architecture
---

# API Design

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> MVP: Application API de un modular monolith (sin requisito de API Gateway).
> Reparación de formato + ejemplos OpenAPI aún pendientes.

---

# Introduction

Este documento define los principios y estándares para diseñar las APIs de Project ZUZU.

Las APIs representan los contratos mediante los cuales diferentes partes del sistema colaboran.

---

# API Philosophy

Una API debe ser:

- clara;
- estable;
- predecible;
- documentada.

---

# Principio central


Consumers

↓

Contract

↓

Implementation


El consumidor no debe depender de detalles internos.

---

# API Goals

Las APIs deben permitir:

- evolución independiente;
- integración segura;
- comunicación consistente;
- escalabilidad.

---

# Communication Model

La arquitectura del MVP utiliza un **modular monolith**:

```
Frontend (SPA)
    ↓
Application API (mismo deploy backend)
    ↓
Módulos de dominio + Data Layer
```

**No** hay API Gateway ni "Backend Services" distribuidos como requisito del MVP (ADR-006).

---

# API Style

Inicialmente:


REST API


Razones:

- simple;
- ampliamente soportado;
- fácil de documentar.

---

# Future Evolution

Cuando sea necesario:


REST

Events

Specialized Protocols


---

# API Versioning

Todas las APIs públicas deben versionarse.

Formato:


/api/v1/{resource}


Ejemplo:


GET /api/v1/projects


---

# Resource Design

Las APIs representan recursos.

Ejemplo:

Usuarios:


/users


Proyectos:


/projects


Artefactos:


/artifacts


---

# HTTP Methods

Uso estándar:

## GET

Obtener información.

---

## POST

Crear recursos.

---

## PUT

Actualizar completamente.

---

## PATCH

Actualizar parcialmente.

---

## DELETE

Eliminar recursos.

---

# Request Design

Los requests deben:

- validar datos;
- utilizar nombres claros;
- evitar información innecesaria.

Ejemplo:

```json
{
  "name": "My Project",
  "description": "Architecture project"
}
Response Design

Las respuestas deben ser consistentes.

Ejemplo:

{
  "data": {},
  "metadata": {}
}
Error Handling

Todos los errores deben seguir un formato común.

Ejemplo:

{
  "error": {
    "code": "PROJECT_NOT_FOUND",
    "message": "Project does not exist"
  }
}
Authentication

Toda operación protegida requiere identidad.

Modelo:

User

↓

Authentication

↓

Authorization

↓

Resource
Authorization

No basta saber quién es el usuario.

También debemos validar:

permisos;
roles;
ownership.
API Security

Principios:

validar entrada;
limitar acceso;
proteger secretos;
auditar acciones.
Documentation

Toda API debe tener:

descripción;
endpoints;
ejemplos;
errores posibles.
API Contracts

Los contratos deben mantenerse explícitos.

Cambios importantes requieren:

nueva versión;
migración;
comunicación.
Frontend Integration

El frontend consume contratos.

Nunca debe asumir:

estructura interna;
base de datos;
lógica backend.
AI API Integration

La IA debe exponerse mediante contratos claros.

Ejemplo:

POST /api/v1/ai/sessions

POST /api/v1/ai/reviews

POST /api/v1/ai/generate
Asynchronous APIs

Procesos largos deben utilizar operaciones asíncronas.

Ejemplo:

Create Task

↓

Job ID

↓

Process

↓

Result
Events

En el futuro:

User Completed Lesson

↓

Event

↓

AI Evaluation

↓

Analytics
Rate Limiting

Las APIs deben protegerse contra abuso.

Especialmente:

IA;
generación;
procesamiento costoso.
Monitoring

Las APIs deben registrar:

latencia;
errores;
uso;
consumo.
Anti Patterns
Breaking Changes

Cambiar contratos sin control.

Business Logic In API Layer

Meter reglas de negocio en endpoints.

Inconsistent Responses

Cada endpoint responde diferente.

Hidden Contracts

Dependencias no documentadas.

Declaración final
Las APIs de Project ZUZU deben funcionar como contratos estables que permitan evolucionar la plataforma sin bloquear innovación.


---
