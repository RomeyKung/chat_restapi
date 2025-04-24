
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
docker-compose up -d 

git  clone  https://github.com/RomeyKung/chat_restapi.git
cd  chat_restapi

```

### 2. Command

```bash
pnpm run install
npx prisma generate
npx prisma migrate reset
npx prisma migrate dev --name user

pnpm run start:dev
```