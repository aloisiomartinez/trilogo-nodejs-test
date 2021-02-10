const bcrypt = require('bcryptjs');

const User = require('../../models/User');

// Register new User
exports.store = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ error: 'User already exists.' });
  }

  if (password.length <= 5) {
    return res.status(400).json({ error: 'Password must be atleast 6 characters' });
  }

  const passwordHash = await bcrypt.hash(password, 8);

  const user = new User({ name, email, password: passwordHash });

  await user.save();

  return res.status(201).json({
    success: `User ${name} registred successfully`,
    user,
  });
};
// }

// module.exports = UserController;
