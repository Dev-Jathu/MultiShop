const Order = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const order = new Order({
      user: req.user.id,
      products: req.body.products,
      totalAmount: req.body.totalAmount,
      shippingAddress: req.body.shippingAddress,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('products.product', 'name price');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update order status function would be similar

module.exports = {
  createOrder,
  getOrderById,
  // Add updateOrderStatus as needed
};
