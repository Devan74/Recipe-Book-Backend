require('dotenv').config();
module.exports = {
    database: process.env.MONGO_URI,
    jwtSecret: 'dfhjgoijohjgf',
  };
  