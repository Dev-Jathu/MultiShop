require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Import Routes
const userRoutes = require('./routes/user');

// Use Routes
app.use('/users', userRoutes);

// Route
app.get('/', (req, res) => {
  res.send('Welcome Back!');
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

// Start the server
const startServer = async () => {
  try {
    // Start the Express server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
};

// Initialize the app
const initApp = async () => {
  await connectDB();
  await startServer();
};

initApp();
