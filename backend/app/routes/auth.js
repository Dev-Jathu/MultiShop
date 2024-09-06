const express = require('express');
const router = express.Router();
const { registerUser, loginUser, verifyUser } = require('../controllers/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id/verify/:token', verifyUser);

module.exports = router;
