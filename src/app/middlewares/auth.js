const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const payload = await jwt.verify(token, authConfig.secret);

    req.payload = payload;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
