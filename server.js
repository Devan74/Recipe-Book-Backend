const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const commentRoutes = require('./routes/commentRoutes');
const config = require('./config/config');
require('dotenv').config();
const app = express();
const ClintURL="https://recipe-book-apps.netlify.app"
// Middleware
app.use(bodyParser.json());
app.use(cors(ClintURL));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/comments', commentRoutes);

// Connect to MongoDB
//database();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=> console.log("DataBase Connected")).catch((err)=>{
      console.log(err);
  })
// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
