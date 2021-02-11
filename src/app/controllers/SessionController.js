const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = mongoose.model('User');
const authConfig = require('../../config/auth');

exports.store = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (!userExists) {
    return res.status(404).json({ error: 'User does not exists.' });
  }

  const comparePasswordWithHash = await bcrypt.compare(password, userExists.password);

  if (!comparePasswordWithHash) {
    return res.status(400).json({ error: 'Password does not match' });
  }

  return res.json({
    user: {
      userExists,
    },
    token: jwt.sign({ id: userExists.id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    }),
  });
};
