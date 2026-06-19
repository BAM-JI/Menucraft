// src/middlewares/auth.middleware.js
// CORRECCIÓN: acepta token desde cookie httpOnly O desde header Authorization Bearer
// El Dashboard manda el token en el header, por eso se necesitan los dos

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  // 1. Intentar leer desde cookie httpOnly
  let token = req.cookies?.token;

  // 2. Si no hay cookie, intentar desde header Authorization: Bearer <token>
  if (!token) {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }
  }

  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado. Token no provisto' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = {
      usuario_id:     decoded.usuario_id,
      restaurante_id: decoded.restaurante_id,
      rol:            decoded.rol,
    };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};

module.exports = { verifyToken };