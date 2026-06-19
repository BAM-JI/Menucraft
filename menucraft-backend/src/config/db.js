const { Pool } = require('pg');

// Usamos directamente la URL completa para evitar errores de mapeo en producción
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
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