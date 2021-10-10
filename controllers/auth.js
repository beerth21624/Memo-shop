const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hashPassword,
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    !email && res.status(500).json('please enter email');
    !password && res.status(500).json('please enter password');
    const user = await User.findOne({ email });
    !user && res.status(500).json('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    !isMatch && res.status(500).json('Invalid credentials');

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: '5d' }
    );
    const userNoPass = {
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
      isAdmin: user.isAdmin,
    };

    console.log(userNoPass);
    res.status(200).json({ token: accessToken, user: userNoPass });
  } catch (err) {
    res.status(500).json(err);
  }
};
