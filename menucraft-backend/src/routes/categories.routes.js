// src/routes/categories.routes.js
const { Router } = require('express');
const { verifyToken } = require('../middlewares/auth.middleware');
const { getCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/categories.controller');

const router = Router();

router.use(verifyToken);

router.get('/',       getCategories);   // GET  /api/categories
router.post('/',      createCategory);  // POST /api/categories
router.put('/:id',    updateCategory);  // PUT  /api/categories/:id
router.delete('/:id', deleteCategory);  // DELETE /api/categories/:id

module.exports = router;