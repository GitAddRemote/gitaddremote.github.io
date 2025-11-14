---
title: "Matrix Academy"
date: 2025-11-13
draft: false
github: "https://github.com/Presstronic/matrix-academy"
status: "In Progress"
featured: true
weight: 10
tags: ["NestJS", "React", "PostgreSQL", "TypeScript", "Education"]
---

An interactive learning platform utilizing a branching, story-driven adventure model where developer decisions impact their learning path, combining hands-on coding, narrative challenges, and progression milestones.

<!--more-->

## Tech Stack

**Backend**
- NestJS + TypeORM
- PostgreSQL 17
- Redis 7 (caching)
- JWT authentication with refresh tokens

**Frontend**
- React 18 + Vite
- Material-UI v6
- React Router with protected routes
- Mobile-responsive design

**Infrastructure**
- Docker multi-stage builds
- Kubernetes (planned)
- Comprehensive Jest testing (Unit & E2E)

## Key Features

### Implemented
- ✅ JWT-based authentication with refresh tokens
- ✅ Material-UI themed React frontend
- ✅ Landing page with hero section and feature showcase
- ✅ Multi-tenant database architecture
- ✅ Role-Based Access Control (RBAC)
- ✅ Redis HTTP response caching
- ✅ Interactive Swagger/OpenAPI documentation
- ✅ Standardized error handling and API responses
- ✅ Comprehensive test coverage

### In Progress
- 🚧 Story-driven choose-your-own-adventure flow
- 🚧 Coding challenge mechanics for progression
- 🚧 Modular, replayable lesson units
- 🚧 Achievement and progression tracking system

## API Endpoints

**Authentication**
- Register, Login, Refresh, Logout, Get User

**User Management**
- Update Profile (email, username, name, phone, bio)

## Project Links

- [GitHub Repository](https://github.com/Presstronic/matrix-academy)
- License: GNU GPLv3 (or later)
