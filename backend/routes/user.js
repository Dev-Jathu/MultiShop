const express = require("express");
const router = express.Router();
const {
  resetPasswordToken,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/user");
const { protect, restrict } = require("../middlewares/auth");

// Public routes
router.post("/reset-password", resetPasswordToken);

// Protected routes
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.get("/admin", protect, restrict(["admin"]), (req, res) => {
  res.json({ message: "Admin access only" });
});

module.exports = router;
