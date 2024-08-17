const express = require('express');
const router = express.Router();
const { addToCart, getCart } = require('../controllers/cart');
const { protect } = require('../middlewares/auth');

router.post('/', protect, addToCart);
router.get('/', protect, getCart);

module.exports = router;
