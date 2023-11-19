const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/:recipeId', authMiddleware.verifyToken, commentController.createComment);
router.get('/:recipeId', commentController.getCommentsByRecipeId);

module.exports = router;
