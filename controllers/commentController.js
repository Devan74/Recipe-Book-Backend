const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { recipeId } = req.params;

    // Assume you have the user ID from the authentication process
    const userId = req.user._id; // Replace with your actual user ID retrieval

    // Create a new comment
    const newComment = new Comment({ text, user: userId, recipe: recipeId });
    await newComment.save();

    res.status(201).json({ message: 'Comment created successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getCommentsByRecipeId = async (req, res) => {
  try {
    const { recipeId } = req.params;

    // Find comments for the specified recipe
    const comments = await Comment.find({ recipe: recipeId }).populate('user', 'username');

    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
