const User = require("../models/User");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
require("dotenv").config();

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// Generate reset password token
const resetPasswordToken = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");

    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

    await user.save();

    // Send resetToken via email in a real-world app
    res.json({ message: "Password reset token generated", resetToken });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Get current user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  const { name, email, phone, password, oldPassword, role, address, image } =
    req.body;
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the old password is provided and correct
    if (oldPassword) {
      // Compare passwords
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid current password" });
      }
    } else {
      // If the user is trying to update any profile field, old password must be provided
      return res
        .status(400)
        .json({ message: "Current password is required to update profile" });
    }

    // Update user fields if provided
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.role = role || user.role;
    user.image = image || user.image;

    // Update nested address fields
    if (address) {
      user.address.street = address.street || user.address.street;
      user.address.city = address.city || user.address.city;
      user.address.state = address.state || user.address.state;
      user.address.zipCode = address.zipCode || user.address.zipCode;
      user.address.country = address.country || user.address.country;
    }

    // Update password if a new one is provided
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    // Save updated user
    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      address: updatedUser.address,
      image: updatedUser.image,
      token: generateToken(updatedUser._id),
      message: "User Updated Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  resetPasswordToken,
  getUserProfile,
  getAllUsers,
  updateUserProfile,
};
