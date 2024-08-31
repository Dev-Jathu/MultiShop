const express = require('express');
const router = express.Router();
const {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} = require('../controllers/whishList');
const { protect } = require('../middlewares/auth');

router.post('/', protect, addToWishlist);
router.get('/', protect, getWishlist);
router.delete('/', protect, removeFromWishlist);

module.exports = router;
