---
title: "Kalsumed"
date: 2025-11-13
draft: false
github: "https://github.com/GitAddRemote/kalsumed"
status: "In Progress"
featured: true
weight: 20
tags: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Enterprise"]
---

A modular backend service built with modern Java and Spring Boot technologies, designed as a production-ready scaffold with enterprise features including observability, event streaming, and multi-tenant architecture.

<!--more-->

## Tech Stack

**Backend**
- Spring Boot 3 (Java 21)
- PostgreSQL database
- Redis caching layer
- Kafka message queue
- JWT authentication

**Observability**
- Prometheus metrics
- OpenTelemetry instrumentation
- Tempo distributed tracing
- Grafana dashboards

**Infrastructure**
- Docker & Docker Compose
- Maven build system
- Production-ready configuration

## Project Structure

The monorepo architecture includes:
- `apps/backend` — Main API service
- `libs/common` — Shared DTOs and utilities
- `monitoring/` — Prometheus and Tempo configurations
- `scripts/` — Build and deployment helpers

## Key Features

- ✅ JWT-based authentication with token blocklist
- ✅ Rate limiting (10 login attempts per 5 minutes per IP)
- ✅ Multi-tenant architecture scaffold
- ✅ Full observability stack (metrics, tracing, logging)
- ✅ Kafka event publishing
- ✅ Health check endpoints
- ✅ Profile management API

## API Capabilities

**Authentication**
- Login with rate limiting
- JWT token management
- Logout with token blocklist

**User Management**
- Profile creation and updates
- Multi-tenant user isolation

**Event Streaming**
- Kafka event publishing demonstration
- Event-driven architecture ready

**Monitoring**
- Health check endpoints
- Metrics collection
- Distributed tracing

## Project Links

- [GitHub Repository](https://github.com/GitAddRemote/kalsumed)
- License: Proprietary — All Rights Reserved
