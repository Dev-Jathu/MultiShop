const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const reviewRoutes = require('./routes/review');
const paymentRoutes = require('./routes/payment');
const cartRoutes = require('./routes/cart');
const wishlistRoutes = require('./routes/whishlist');

const { notFound, errorHandler } = require('./middlewares/error');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Connect DB and Start Server
const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Start the server 
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
