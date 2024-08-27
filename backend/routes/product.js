const express = require("express");
const router = express.Router();
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
} = require("../controllers/product");
const { protect } = require("../middlewares/auth");

router.post("/", protect, addProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);
router.get("/:id", getProductById);
router.get("/", getAllProducts);

module.exports = router;
