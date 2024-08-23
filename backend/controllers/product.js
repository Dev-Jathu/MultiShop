const Product = require("../models/Product");

// Add a new product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      weight,
      expiredDate,
      category,
      stock,
      deals,
      ingredients,
      images,
    } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      expiredDate,
      weight,
      category,
      stock,
      deals,
      ingredients,
      images,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update an existing product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      price,
      description,
      weight,
      category,
      stock,
      deals,
      ingredients,
      images,
    } = req.body;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.weight = weight || product.weight;
    product.category = category || product.category;
    product.stock = stock || product.stock;
    product.deals = deals || product.deals;
    product.ingredients = ingredients || product.ingredients;
    product.images = images || product.images;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete an existing product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();
    res.json({ message: "Product removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("name");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("name");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
};
