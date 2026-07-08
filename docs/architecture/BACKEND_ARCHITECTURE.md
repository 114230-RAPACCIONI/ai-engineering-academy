---
artifact:
  id: ART-027
  type: Backend Architecture
  status: Draft
  version: 0.1.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  initiative: INIT-001
  tags:
    - backend
    - architecture
    - api
    - engineering
---

# Backend Architecture

> "A backend is not a collection of endpoints. It is the engine that protects business rules."

---

# Introduction

Este documento define la arquitectura backend de Project ZUZU.

El objetivo es establecer una estructura que permita construir un sistema mantenible, seguro y preparado para evolucionar.

---

# Backend Philosophy

El backend debe ser responsable de:

- proteger reglas de negocio;
- procesar información;
- coordinar capacidades;
- exponer contratos claros.

---

# Core Principle


API

↓

Application Logic

↓

Business Rules

↓

Data


El backend organiza comportamiento.

No solamente recibe requests.

---

# Backend Responsibilities

El backend debe manejar:

- autenticación;
- autorización;
- reglas de negocio;
- persistencia;
- integración externa;
- procesamiento asíncrono;
- auditoría.

---

# Architectural Style

Project ZUZU utilizará inicialmente:


Modular Backend Architecture


No comenzaremos con múltiples servicios independientes.

---

# Evolution Path


Modular Monolith

↓

Service Extraction

↓

Distributed Architecture


---

# Backend Layers

La estructura interna:


Backend

├── API Layer

├── Application Layer

├── Domain Layer

├── Infrastructure Layer

└── Shared Kernel


---

# API Layer

Responsabilidad:

Comunicación externa.

Incluye:

- controllers;
- endpoints;
- request validation;
- response mapping.

No contiene reglas de negocio.

---

# Application Layer

Responsabilidad:

Ejecutar casos de uso.

Ejemplos:


Create Learning Path

Generate AI Session

Review Project

Update User Progress


---

# Domain Layer

Responsabilidad:

Representar el conocimiento del negocio.

Incluye:

- entidades;
- value objects;
- reglas;
- invariantes.

---

# Infrastructure Layer

Responsabilidad:

Implementaciones técnicas.

Incluye:

- database;
- external APIs;
- AI providers;
- storage.

---

# Dependency Rule

La dirección correcta:


API

↓

Application

↓

Domain

Infrastructure

↓

Domain Interfaces


La infraestructura implementa contratos.

---

# API Design Principles

Las APIs deben ser:

- claras;
- consistentes;
- versionables;
- documentadas.

---

# API Versioning

Ejemplo:


/api/v1/users

/api/v1/projects

/api/v1/agents


---

# Request Flow Example


User Request

↓

Controller

↓

Use Case

↓

Domain Logic

↓

Repository

↓

Database

↓

Response


---

# Domain Driven Design

El backend estará orientado al dominio.

Los módulos principales:


Identity

Learning

Projects

Knowledge

AI

Evaluation

Billing


---

# Module Isolation

Cada módulo controla:

- sus entidades;
- sus reglas;
- sus servicios.

---

# Example

Identity:


User

Role

Permission


Learning:


Course

Progress

Achievement


Projects:


Project

Artifact

Review


---

# Repository Pattern

El acceso a datos estará abstraído.

Ejemplo:


Application

↓

UserRepository Interface

↓

Database Implementation


---

# External Services

Las integraciones deben utilizar adapters.

Ejemplo:


Application

↓

AI Service Interface

↓

OpenAI Adapter

Anthropic Adapter

Local Model Adapter


---

# AI Integration

La IA es una capacidad del backend.

No debe estar mezclada con lógica general.

Ejemplo:

Incorrecto:


UserController

↓

Call AI Provider


Correcto:


UserController

↓

AI Application Service

↓

AI Provider Adapter


---

# Async Processing

Procesos largos deben ejecutarse fuera del request.

Ejemplos:

- generación de contenido;
- evaluación;
- procesamiento documental.

Modelo:


Request

↓

Job Queue

↓

Worker

↓

Result


---

# Security Considerations

El backend debe garantizar:

- autenticación;
- autorización;
- validación;
- protección de datos.

---

# Observability

Todo sistema debe permitir entender qué ocurre.

Incluye:

- logs;
- métricas;
- trazas;
- auditoría.

---

# Testing Strategy

## Unit Tests

Reglas de negocio.

---

## Application Tests

Casos de uso.

---

## Integration Tests

Persistencia e integraciones.

---

# Backend Evolution

La arquitectura debe permitir:


Small Team

↓

Growing Product

↓

Engineering Organization


---

# Anti Patterns

## Fat Controllers

Toda la lógica en endpoints.

---

## Database Driven Design

Diseñar desde tablas.

---

## Direct External Calls

Acoplamiento a proveedores.

---

## Shared Database Between Modules

Dependencias ocultas.

---

# Final Statement

El backend de Project ZUZU debe ser una plataforma de capacidades.

Debe proteger el dominio, permitir evolución y mantenerse independiente de tecnologías específicas.
