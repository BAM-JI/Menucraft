require('dotenv').config();

const REQUIRED_VARS = ['JWT_SECRET', 'DATABASE_URL'];
const missing = REQUIRED_VARS.filter(v => !process.env[v]);

if (missing.length > 0) {
  console.error(`[MenuCraft API] Faltan variables de entorno requeridas: ${missing.join(', ')}`);
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
}

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[MenuCraft API] Servidor corriendo en http://localhost:${PORT}`);
  console.log(`[MenuCraft API] Entorno: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;