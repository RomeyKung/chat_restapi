
  

# 🗨️ App Backend – NestJS

  

  

Backend system application built with NestJS. Includes user authentication, logging, and database integration via Prisma and PostgreSQL.

  

  

---

  

  

## 🚀 Tech Stack

  

  

-  **NestJS** - Scalable Node.js framework

  

-  **TypeScript**

  

-  **Prisma** - Modern ORM for PostgreSQL

  

-  **PostgreSQL** - Relational DB

  

-  **JWT Authentication**

  

-  **Swagger** - API Documentation

  

-  **Docker Compose** - For local PostgreSQL/pgAdmin

  

-  **Pino Logger** - Fast structured logging

  

-  **Passport** - Auth strategies

  

  

---

  

  

## 🚀 Features

  

  

-  **AUTHENTICATION** - AUTH.

  

-  **CRUD** - CRUD.

  

---

  

  

## 📦 Installation

  

  

### 1. Clone the repository

  

```bash
docker-compose  up  -d

git  clone  https://github.com/RomeyKung/chat_restapi.git

cd  chat_restapi
```

  

### 2. Command


```bash

pnpm  run  install

npx  prisma  generate

npx  prisma  migrate  reset

npx  prisma  migrate  dev  --name  user

pnpm  run  start:dev

```

  

## Swagger  UI
```bash
http://localhost:3001/api
```

## Project Structure 
chatapp-backend/
└── src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
├── auth/ # Login/Auth strategy
├── user/ # Register/RUD functionality
├── common/ # Guards, decorators, exceptions
├── prisma/ # Prisma client instance

  

## Design Decisions 🎯

- NestJS `was chosen for its modular and scalable structure`
- Prisma `simplifies data handling with type safety and intuitive syntax.`
- Docker `allows consistent setup for any collaborator or reviewer. `
- JWT `provides stateless and secure authentication.`

## Dependencies
### ✅ Authentication & Security

-   **`@nestjs/jwt`** – JWT support for secure user authentication.
    
-   **`@nestjs/passport`**, **`passport`**, **`passport-local`**, **`passport-jwt`** – Passport strategies for local and JWT-based login flows.
    
-   **`bcryptjs`** – Password hashing for secure credential storage.
    

### ✅ Validation & Transformation

-   **`class-validator`** – Declarative validation for DTOs.
    
-   **`class-transformer`** – Transforms plain objects to class instances with decorators.
    

### ✅ Configuration

-   **`@nestjs/config`** – Centralized and environment-based configuration using `.env`.
    

### ✅ API Documentation

-   **`@nestjs/swagger`** – Auto-generates Swagger UI and OpenAPI spec from decorators.
    

### ✅ Logging

-   **`nestjs-pino`**, **`pino-http`** – High-performance structured logging with request tracing.
    

### ✅ Database

-   **`@prisma/client`** – Prisma Client for type-safe DB queries.
    

### ✅ Utility & Middleware

-   **`cookie-parser`** – Cookie parsing middleware for handling auth tokens.
    
-   **`joi`** – Schema validation for config or complex data shapes.
    
-   **`ms`** – Utility to parse/format time strings (used for JWT expiration).