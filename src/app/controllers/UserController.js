const bcrypt = require('bcryptjs');

const User = require('../../models/User');

exports.store = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ error: 'Email already registered.' });
  }

  if (password.length <= 5) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  const passwordHash = await bcrypt.hash(password, 8);

  const user = new User({ name, email, password: passwordHash });

  await user.save();

  return res.status(201).json({
    success: `User ${name} registred successfully`,
    user,
  });
};

exports.find = async (req, res) => {
  const users = await User.find();

  if (!users) {
    return res.status(404).json({ error: 'There is no User created.' });
  }

  return res.status(200).json(users);
};

exports.findByEmail = async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: 'There is no user with this E-mail.' });
  }

  return res.status(200).json(user);
};
