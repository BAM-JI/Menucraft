// src/routes/products.routes.js
const { Router } = require('express');
const { verifyToken } = require('../middlewares/auth.middleware');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');

const router = Router();

router.use(verifyToken);

router.get('/',       getProducts);    // GET  /api/products?categoria_id=
router.post('/',      createProduct);  // POST /api/products
router.put('/:id',    updateProduct);  // PUT  /api/products/:id
router.delete('/:id', deleteProduct);  // DELETE /api/products/:id

module.exports = router;