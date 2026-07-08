---
artifact:
  id: ART-026
  type: Application Architecture
  status: Draft
  version: 0.1.0
  owner: CTO
  reviewers:
    - Founder
  created: 2026-07-07
  initiative: INIT-001
  tags:
    - architecture
    - application-design
    - software-engineering
---

# Application Architecture

> "Good architecture makes the right things easy and the wrong things difficult."

---

# Introduction

Este documento define cómo se estructura internamente una aplicación dentro de Project ZUZU.

El objetivo es establecer límites claros entre responsabilidades y permitir evolución continua del sistema.

---

# Architecture Philosophy

Una aplicación debe estar diseñada alrededor del dominio.

No alrededor de frameworks.

---

# Core Principle


Business Logic

Framework

Infrastructure


---

# Application Goals

La arquitectura debe permitir:

- evolución del producto;
- mantenimiento simple;
- pruebas independientes;
- incorporación de nuevas capacidades.

---

# Application Structure

Project ZUZU seguirá un enfoque basado en separación de responsabilidades.


Application

|

├── Presentation Layer

├── Application Layer

├── Domain Layer

└── Infrastructure Layer


---

# Presentation Layer

## Responsibility

Gestionar interacción externa.

Ejemplos:

- interfaces;
- APIs;
- validaciones de entrada.

No contiene lógica de negocio.

---

# Application Layer

## Responsibility

Orquestar casos de uso.

Define:

- qué debe ocurrir;
- en qué orden;
- qué servicios participan.

---

# Domain Layer

## Responsibility

Contener conocimiento del negocio.

Aquí viven:

- reglas;
- entidades;
- decisiones importantes.

---

# Infrastructure Layer

## Responsibility

Comunicación con sistemas externos.

Ejemplos:

- bases de datos;
- servicios externos;
- proveedores IA.

---

# Dependency Direction

Las dependencias deben fluir hacia el dominio.


Presentation

  ↓

Application

  ↓

Domain

  ↑

Infrastructure


---

# Why This Matters

El dominio no debe saber:

- qué base de datos usamos;
- qué framework usamos;
- qué proveedor IA usamos.

---

# Module Design

La aplicación debe organizarse por capacidades.

Ejemplo:


Modules

├── Identity

├── Learning

├── Projects

├── Knowledge

├── AI

└── Evaluation


---

# Module Rules

Cada módulo debe tener:

- responsabilidad clara;
- límites definidos;
- bajo acoplamiento.

---

# Communication Between Modules

Preferimos:


Explicit Contracts

sobre

Direct Dependencies


---

# Example

Incorrecto:


Learning Module

↓

Direct Database Access

↓

Identity Tables


---

Correcto:


Learning Module

↓

Identity Interface

↓

Identity Module


---

# Application Services

Los servicios de aplicación coordinan acciones.

Ejemplo:


Create Learning Plan

↓

Validate User

↓

Generate Plan

↓

Store Result


---

# Domain Rules

Las reglas importantes deben estar protegidas.

Ejemplo:

No:


Controller

↓

Business Rule


Sí:


Controller

↓

Use Case

↓

Domain Rule


---

# External Integrations

Todo sistema externo debe estar aislado.

Ejemplo:


AI Provider

↓

AI Adapter

↓

Application


---

# AI Integration Boundary

La IA es una capacidad externa integrada.

No debe contaminar todo el sistema.

---

# Testing Strategy

La arquitectura facilita:

## Domain Tests

Prueban reglas.

## Application Tests

Prueban casos de uso.

## Integration Tests

Prueban infraestructura.

---

# Evolution Strategy

La aplicación puede evolucionar:


Modular Application

↓

Modular Monolith

↓

Distributed Services


---

# Anti Patterns

## Framework Driven Design

Diseñar alrededor del framework.

---

## Massive Modules

Módulos que hacen todo.

---

## Shared Everything

Todo depende de todo.

---

## Business Logic In Controllers

Reglas mezcladas con entrada.

---

# Final Statement

Project ZUZU debe construir aplicaciones donde el negocio sea el centro.

La arquitectura debe proteger el conocimiento del producto y permitir evolución tecnológica.
