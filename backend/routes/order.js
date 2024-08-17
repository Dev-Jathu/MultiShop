const express = require('express');
const router = express.Router();
const { createOrder, getOrderById } = require('../controllers/order');
const { protect } = require('../middlewares/auth');

router.post('/', protect, createOrder);
router.get('/:id', protect, getOrderById);

module.exports = router;
