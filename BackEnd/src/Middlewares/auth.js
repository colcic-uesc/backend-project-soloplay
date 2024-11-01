// middlewares/auth.js
const jwt = require('jsonwebtoken');
const { User } = require('../DataBase/models');
const secret = 'your-secret-key'; // Use uma variável de ambiente para o secret

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  console.log(token)
  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    req.user = user;
    next();
  });
};

module.exports = { authenticateJWT, secret };
