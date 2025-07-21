# Restaurant Management System (RMS) Backend

A modular, scalable, and production-grade REST API backend for restaurant operations, built with Node.js, Express, TypeScript, MySQL, and Sequelize ORM.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [Database Migration & Seeding](#database-migration--seeding)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Testing](#testing)
- [Contribution](#contribution)
- [License](#license)

---

## Overview
This backend powers a Restaurant Management System, supporting user management, roles, restaurant entities, orders, billing, reporting, and more. It enforces best practices (SOLID, layered architecture, feature-based modularity) and provides robust validation, error handling, and API documentation.

---

## Features
- Feature-based, layered architecture (route → controller → service → repository)
- Modular business domains: user, role, restaurant, staff, table, order, bill, payment, report, etc.
- Centralized model associations (Sequelize)
- Global error handling and request validation (Zod)
- JWT authentication utilities
- Consistent API response format
- Auto-generated Swagger API docs
- Persistent project rules and PRD in `.cursor/rules/`

---

## Project Structure
```text
src/
  modules/         # All business/domain modules (feature-based)
  core/            # Core utilities (Logger, ApiResponse, ApiError, JWT)
  middleware/      # Global and reusable middleware (validate, errorHandler)
  routes/          # Main API router (index.ts)
  database/        # Sequelize connection, migrations, seeders, associations
  config/          # Configuration files (e.g., config.js for Sequelize CLI)
  types/           # TypeScript type definitions (if any)
  helpers/         # Helper utilities (if any)
  app.ts           # Express app setup
  server.ts        # App entry point
.cursor/rules/     # Persistent project rules and PRD
```

For a visual diagram, see `.cursor/rules/project-structure.mdc`.

---

## Tech Stack
- **Node.js** (LTS)
- **TypeScript** (strict mode)
- **Express.js**
- **MySQL** (with Sequelize ORM)
- **Zod** (validation)
- **JWT** (authentication)
- **dotenv** (environment management)
- **Swagger** (OpenAPI 3.0, auto-generated)

---

## Setup & Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/dev-dotsquares/rms-backend.git
   cd rms-backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and update values as needed.

---

## Database Migration & Seeding
1. **Create the MySQL database:**
   ```sh
   mysql -u root -p -e "CREATE DATABASE rms-backend;"
   ```
2. **Run migrations:**
   ```sh
   npm run migrate
   ```
3. **Run seeders:**
   ```sh
   npm run seed
   ```

---

## API Documentation
- Swagger UI is available at: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- All endpoints and models are documented via JSDoc comments in the codebase.

---

## Development
- **Start the server (dev mode):**
  ```sh
  npm run dev
  ```
- **Start with auto-reload:**
  ```sh
  npm run dev:watch
  ```
- **Build for production:**
  ```sh
  npm run build
  ```
- **Start production build:**
  ```sh
  npm start
  ```

---

## Testing
- (Add your testing instructions here if you have tests set up)

---

## Contribution
1. Fork the repo and create your branch from `main`.
2. Follow the project structure and rules in `.cursor/rules/`.
3. Ensure all new code is modular, validated, and documented.
4. Submit a pull request with a clear description of your changes.

---

## License
[MIT](LICENSE) 
