require('dotenv').config();

// Cambiamos las variables viejas por la nueva DATABASE_URL que inyectamos en Render
const REQUIRED_VARS = ['JWT_SECRET', 'DATABASE_URL'];
const missing = REQUIRED_VARS.filter(v => !process.env[v]);

if (missing.length > 0) {
  console.error(`[MenuCraft API] Faltan variables de entorno requeridas: ${missing.join(', ')}`);
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
}