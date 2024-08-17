const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  resetPasswordToken,
  getUserProfile,
  updateUserProfile,
} = require('../controllers/user');
const { protect } = require('../middlewares/auth');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/reset-password', resetPasswordToken);

// Protected routes
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.get('/admin-only', protect, (req, res) => {
  res.json({ message: 'Admin access only' });
});

module.exports = router;
