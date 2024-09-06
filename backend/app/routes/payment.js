const express = require('express');
const router = express.Router();
const { createPayment, getPaymentById } = require('../controllers/payment');
const { protect } = require('../middlewares/auth');

router.post('/', protect, createPayment);
router.get('/:id', protect, getPaymentById);

module.exports = router;
