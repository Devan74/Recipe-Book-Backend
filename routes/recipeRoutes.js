const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', recipeController.getAllRecipes);
router.post('/', authMiddleware.verifyToken, recipeController.createRecipe);
router.get('/:id', recipeController.getRecipeById);
router.put('/:id', authMiddleware.verifyToken, recipeController.updateRecipe);
router.delete('/:id', authMiddleware.verifyToken, recipeController.deleteRecipe);

module.exports = router;
