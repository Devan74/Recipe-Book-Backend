const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'No token provided.' });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Failed to authenticate token.' });
    }

    req.user = decoded; // Set the decoded user object on the request for later use
    next();
  });
};
