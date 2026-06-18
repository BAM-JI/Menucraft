-- ============================================================
-- MenuCraft SaaS - Script de Inicialización de Base de Datos
-- Issue #9: Backend - Infraestructura y Base de Datos
-- ============================================================

-- Extensión para UUIDs (opcional, usamos AUTO_INCREMENT por diseño)
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── Tabla: RESTAURANTES ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS restaurantes (
  id         SERIAL PRIMARY KEY,
  nombre     VARCHAR(255) NOT NULL,
  slug       VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ─── Tabla: USUARIOS ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS usuarios (
  id              SERIAL PRIMARY KEY,
  restaurante_id  INT NOT NULL REFERENCES restaurantes(id) ON DELETE CASCADE,
  nombre          VARCHAR(255) NOT NULL,
  email           VARCHAR(255) UNIQUE NOT NULL,
  password_hash   VARCHAR(255) NOT NULL,
  rol             VARCHAR(50) NOT NULL DEFAULT 'admin',
  created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ─── Tabla: CATEGORIAS ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS categorias (
  id              SERIAL PRIMARY KEY,
  restaurante_id  INT NOT NULL REFERENCES restaurantes(id) ON DELETE CASCADE,
  nombre          VARCHAR(255) NOT NULL,
  orden           INT DEFAULT 0
);

-- ─── Tabla: PLATILLOS ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS platillos (
  id              SERIAL PRIMARY KEY,
  categoria_id    INT NOT NULL REFERENCES categorias(id) ON DELETE SET NULL,
  restaurante_id  INT NOT NULL REFERENCES restaurantes(id) ON DELETE CASCADE,
  nombre          VARCHAR(255) NOT NULL,
  descripcion     TEXT,
  precio          DECIMAL(10,2) NOT NULL,
  url_foto        VARCHAR(500),
  disponible      BOOLEAN DEFAULT TRUE,
  updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ─── Índices para mejorar rendimiento de queries multi-tenant ─
CREATE INDEX IF NOT EXISTS idx_usuarios_restaurante     ON usuarios(restaurante_id);
CREATE INDEX IF NOT EXISTS idx_categorias_restaurante   ON categorias(restaurante_id);
CREATE INDEX IF NOT EXISTS idx_platillos_restaurante    ON platillos(restaurante_id);
CREATE INDEX IF NOT EXISTS idx_platillos_categoria      ON platillos(categoria_id);