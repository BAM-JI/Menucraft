// src/config/db.js
// Issue #9 - Configuración del pool de conexiones a PostgreSQL

const { Pool } = require('pg');

const pool = new Pool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     parseInt(process.env.DB_PORT) || 5432,
  user:     process.env.DB_USER     || 'menucraft_user',
  password: process.env.DB_PASS     || 'menucraft_password',
  database: process.env.DB_NAME     || 'menucraft_db',
});

// Verificar conexión al arrancar
pool.connect((err, client, release) => {
  if (err) {
    console.error('[DB] Error conectando a PostgreSQL:', err.message);
  } else {
    console.log('[DB] Conexión a PostgreSQL exitosa');
    release();
  }
});

module.exports = pool;