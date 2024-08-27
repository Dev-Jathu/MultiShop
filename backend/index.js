require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const reviewRoutes = require("./routes/review");
const requestRoutes = require("./routes/request");
const paymentRoutes = require("./routes/payment");
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const wishlistRoutes = require("./routes/whishlist");
const { notFound, errorHandler } = require("./middlewares/error");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5000",
  credentials: true,
  optionSuccessStatus: 200,
};

// Routes
app.get("/", (req, res) => {
  res.send("Server Working Well!");
});
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRoutes);
app.use("/request", requestRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/category", categoryRoutes);

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
