const User = require('../models/User');
const crypto = require('crypto');
require('dotenv').config();

// Generate reset password token
const resetPasswordToken = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');

    user.resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

    await user.save();

    // Send resetToken via email in a real-world app
    res.json({ message: 'Password reset token generated', resetToken });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get current user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  const { name, email, password, role, user, address } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    user.image = image || user.image;
    user.address = address || user.address;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      address: updatedUser.address,
      image: updatedUser.image,
      token: generateToken(updatedUser._id),
      message: 'User Update Successfully',
    });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  resetPasswordToken,
  getUserProfile,
  updateUserProfile,
};
