---
title: "Vuln-Tronic Labs"
date: 2025-11-13
draft: false
github: "https://github.com/GitAddRemote/vuln-tronic-labs"
status: "Active"
featured: true
weight: 30
tags: ["Security", "Docker", "OWASP", "Education", "Cybersecurity"]
---

A curated Docker Compose collection bundling intentionally vulnerable web applications and APIs for security practice. Designed for bug bounty hunters, penetration testers, and students to safely explore OWASP vulnerabilities in controlled environments.

<!--more-->

## Tech Stack

**Core Technologies**
- Docker & Docker Compose v2
- GNU Make for automation
- Shell scripting for orchestration
- Multi-container networking

**Requirements**
- Docker Engine ≥20.x
- Docker Compose v2
- Git (for submodules)

## Included Vulnerable Applications

| Application | Focus Area | Port |
|------------|-----------|------|
| **DVWA** | Classic web vulnerabilities | 8080 |
| **bWAPP** | OWASP Top 10 training | 8081 |
| **Mutillidae II** | Web application security | 8082 |
| **Juice Shop** | Modern SPA/REST attacks | 3000 |
| **VAmPI** | REST API vulnerabilities | 5000 |
| **DVWS** | Intentional API flaws | 8888 |
| **DVGA** | GraphQL security testing | 5013 |
| **Hackazon** | E-commerce logic flaws | 8083 |
| **crAPI** | Microservices vulnerabilities | submodule |
| **Vulhub** | CVE reproduction scenarios | submodule |

## Key Features

- ⚡ **Single-command startup** via `make up`
- 🎯 **Docker Compose profiles** for selective service activation
- 🗄️ **Self-contained databases** with auto-initialization
- 🔒 **Localhost-only binding** (not internet-exposed)
- 🛠️ **Burp Suite integration** for proxy testing
- 📦 **Submodule architecture** for resource-heavy labs
- 🔄 **Internal loopback proxies** for realistic database connectivity

## Use Cases

Perfect for:
- Bug bounty practice and skill development
- Penetration testing training
- Security certification preparation (OSCP, CEH, etc.)
- Learning OWASP Top 10 vulnerabilities
- API security testing practice
- Teaching web application security concepts

## Security Notice

All applications are intentionally vulnerable and should **never** be exposed to the internet. The platform binds to localhost only and is designed exclusively for educational purposes in controlled environments.

## Project Links

- [GitHub Repository](https://github.com/GitAddRemote/vuln-tronic-labs)

## Quick Start

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/GitAddRemote/vuln-tronic-labs

# Start all services
make up

# Start specific labs
docker compose --profile dvwa up
```
