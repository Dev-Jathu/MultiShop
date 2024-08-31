const express = require("express");
const passport = require("passport");
const axios = require("axios");
const { User } = require("../models/User");
const { generateToken } = require("../controllers/auth");

const router = express.Router();

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: `${process.env.CLIENT_URL}/login/faild`,
  })
);

router.get("/google", async (req, res) => {
  try {
    const response = await axios.get(
      "https://accounts.google.com/o/oauth2/v2/auth",
      { params: req.query }
    );
    return res.send(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/login/success", async (req, res) => {
  if (!req.user) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  const { email, name } = req.user._json;
  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({ name, email });
  }

  const token = generateToken(user._id);

  return res.status(200).json({
    user: { ...req.user, isAdmin: user.isAdmin },
    _id: user._id,
    token,
  });
});

router.get("/login/faild", (req, res) => {
  res.status(403);
  throw new Error("Login Failed");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
