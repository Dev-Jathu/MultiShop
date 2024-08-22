const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protected with token
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (err) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Restrict Routes
const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;
  const role = req.role;

  if (!userId || !role) {
    return res
      .status(401)
      .json({ message: 'Unauthorized: Missing user ID or role' });
  }

  try {
    let user;

    if (role === 'admin') {
      user = await Admin.findById(userId);
    } else if (role === 'user') {
      user = await user.findById(userId);
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!roles.includes(user.role)) {
      return res.status(403).json({
        message: 'Forbidden: You are not authorized to access this resource',
        role: user.role,
      });
    }

    next();
  } catch (error) {
    console.error('Error in role restriction:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { protect, restrict };
