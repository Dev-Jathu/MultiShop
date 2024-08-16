const express = require('express');
const router = express.Router();
const {
  createReview,
  getReviewsByProductId,
} = require('../controllers/review');
const { protect } = require('../middlewares/auth');

router.post('/', protect, createReview);
router.get('/:productId', getReviewsByProductId);

module.exports = router;
