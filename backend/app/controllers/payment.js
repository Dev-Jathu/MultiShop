const Payment = require('../models/Payment');

const createPayment = async (req, res) => {
  try {
    const payment = new Payment({
      user: req.user.id,
      order: req.body.order,
      amount: req.body.amount,
      method: req.body.method,
    });
    const createdPayment = await payment.save();
    res.status(201).json(createdPayment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id)
      .populate('user', 'name')
      .populate('order', 'totalAmount');
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createPayment,
  getPaymentById,
};
