const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRecipe = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, ingredients, instructions } = req.body;
  
      // Check if the recipe with the given ID exists
      const existingRecipe = await Recipe.findById(id);
      if (!existingRecipe) {
        return res.status(404).json({ error: 'Recipe not found.' });
      }
  
      // Update the recipe fields
      existingRecipe.title = title;
      existingRecipe.ingredients = ingredients;
      existingRecipe.instructions = instructions;
  
      // Save the updated recipe
      const updatedRecipe = await existingRecipe.save();
  
      res.json({ message: 'Recipe updated successfully.', recipe: updatedRecipe });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  exports.deleteRecipe = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Check if the recipe with the given ID exists
      const existingRecipe = await Recipe.findById(id);
      if (!existingRecipe) {
        return res.status(404).json({ error: 'Recipe not found.' });
      }
  
      // Delete the recipe
      await existingRecipe.remove();
  
      res.json({ message: 'Recipe deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };