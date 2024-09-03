const Category = require("../models/Category");

// Add New Category
const addCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    // Validation
    if (!name || !image) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newCategory = new Category({
      name,
      image,
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  addCategory,
};
