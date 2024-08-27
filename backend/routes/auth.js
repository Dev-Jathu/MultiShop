const express = require("express");
const { googleSignIn } = require("../controllers/auth");
const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

// Initialize the OAuth2Client
const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "http://127.0.0.1:3000/oauth"
);

// Route to generate the Google OAuth authorization URL
router.post("/google", (req, res) => {
  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    prompt: "consent",
  });

  res.json({ url: authorizeUrl });
});

// Callback route for Google OAuth
router.get("/oauth", googleSignIn);

module.exports = router;
