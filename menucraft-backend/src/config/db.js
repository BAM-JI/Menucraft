// src/config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     parseInt(process.env.DB_PORT) || 5432,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false  // Necesario para Supabase en producción
  }
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('[DB] Error conectando a PostgreSQL:', err.message);
  } else {
    console.log('[DB] Conexión a PostgreSQL exitosa');
    release();
  }
});

module.exports = pool;