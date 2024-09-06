require('dotenv').config();

const User = require('../models/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const sendMail = require('../utils/sendMail');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = generateToken(user._id);

    // Send verification email
    const url = `${process.env.BASE_URL}/auth/${user._id}/verify/${token}`;
    await sendMail(
      email,
      'Verify Email',
      `
      <div style="max-width: 500px; margin: auto; background-color: #f6ecea; border-radius: 10px; padding: 20px; font-size: 110%; font-family: Arial, sans-serif;">
            <h2 style="text-align: center; text-transform: uppercase; color: crimson;">Welcome to Liquor House, ${user.name}!</h2>
            <p style="margin-top: 20px; text-align: center;"><span style="font-weight: bold;">Congratulations!</span> You're almost set to start using our Shop.</p>
            <p style="margin-top: 20px; text-align: center;">Just click the button below to verify your email address:</p>
            <div style="text-align: center; margin-top: 20px;">
              <a href="${url}" style="background: crimson; text-decoration: none; color: #fff; padding: 10px 20px; border-radius: 10px; display: inline-block;">Verify Email</a>
            </div>
            <p style="margin-top: 20px; text-align: center;">If it wasn't you, you can ignore this email.</p>
            <p>Best regards,<br>Liquor House</p>
            <footer style="margin-top: 30px; font-size: 12px; color: #888;">
              <p>Liquor House - 123-456-7890</p>
            </footer>
      </div>
    `
    );
    res.json({ message: 'Verification email sent' });
  } catch (err) {
    console.error('Server Error:', err);
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Server Error' });
    }
  }
};

// Verify user
const verifyUser = async (req, res) => {
  const { id, token } = req.params;

  // change token into string
  const Token = token.toString();

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.isVerified) {
      return res.status(400).json({ message: 'User already verified' });
    }
    const decodedToken = jwt.verify(Token, process.env.JWT_SECRET);
    if (decodedToken.id !== user._id.toString()) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    user.isVerified = true;
    await user.save();

    console.log('User verified successfully'); // Debug
    res.json({ message: 'User verified successfully' });
  } catch (err) {
    console.error('Server Error:', err);
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Server Error' });
    }
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    if (!user.isVerified) {
      if (!user.verificationEmailSent) {
        const token = generateToken(user._id);
        const url = `${process.env.BASE_URL}/auth/${user._id}/verify/${token}`;
        await sendMail(
          user.email || email,
          'Verify Email',
          `
          <div style="max-width: 500px; margin: auto; background-color: #f6ecea; border-radius: 10px; padding: 20px; font-size: 110%; font-family: Arial, sans-serif;">
            <h2 style="text-align: center; text-transform: uppercase; color: crimson;">Welcome to Liquor House, ${user.name}!</h2>
            <p style="margin-top: 20px; text-align: center;"><span style="font-weight: bold;">Congratulations!</span> You're almost set to start using our Shop.</p>
            <p style="margin-top: 20px; text-align: center;">Just click the button below to verify your email address:</p>
            <div style="text-align: center; margin-top: 20px;">
              <a href="${url}" style="background: crimson; text-decoration: none; color: #fff; padding: 10px 20px; border-radius: 10px; display: inline-block;">Verify Email</a>
            </div>
            <p style="margin-top: 20px; text-align: center;">If it wasn't you, you can ignore this email.</p>
            <p>Best regards,<br>Liquor House</p>
            <footer style="margin-top: 30px; font-size: 12px; color: #888;">
              <p>Liquor House - 123-456-7890</p>
            </footer>
          </div>
          `
        );

        // Update the user document to mark the email as sent
        user.verificationEmailSent = true;
        await user.save();
      }

      return res
        .status(400)
        .json({ message: 'An email has been sent. Please verify your email' });
    }

    const token = generateToken(user._id);

    res.json({
      user,
      token,
      role: user.role,
      message: 'Successfully Login',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  registerUser,
  verifyUser,
  loginUser,
};
