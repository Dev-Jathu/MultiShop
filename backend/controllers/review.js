const Review = require('../models/Review');

const createReview = async (req, res) => {
  try {
    const review = new Review({
      user: req.user.id,
      product: req.body.product,
      rating: req.body.rating,
      comment: req.body.comment,
    });
    const createdReview = await review.save();
    res.status(201).json(createdReview);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getReviewsByProductId = async (req, res) => {
  try {
    const reviews = await Review.find({
      product: req.params.productId,
    }).populate('user', 'name');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createReview,
  getReviewsByProductId,
};
