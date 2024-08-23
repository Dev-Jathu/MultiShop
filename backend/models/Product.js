const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: String,
    weight: {
      type: String,
      required: true,
    },
    expiredDate: {
      type: Date,
      required: true,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    category: String,
    stock: {
      type: Number,
      default: 0,
    },
    deals: {
      type: String,
      enum: ["yes", "no"],
      default: ["no"],
    },
    images: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
