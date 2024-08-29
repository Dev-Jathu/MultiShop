const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User"); // Assuming you have a User model
const dotenv = require("dotenv");

dotenv.config();

const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "http://127.0.0.1:3000/oauth"
);

// Function to generate Google Auth URL
const getGoogleAuthURL = (req, res) => {
  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    prompt: "consent",
  });

  res.json({ url: authorizeUrl });
};

// Function to handle Google Sign-In
const googleSignIn = async (req, res) => {
  try {
    const { code } = req.query;

    // Get tokens using the code
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Verify ID token
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.CLIENT_ID,
    });

    const { email, name, sub: googleId } = ticket.getPayload();

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user if not exists
      user = await User.create({ email, name, googleId });
      console.log("New user created:", user);
    } else {
      console.log("User already exists:", user);
    }

    // Generate JWT token or any session handling you use
    const token = generateToken(user._id); // Implement `generateToken` as needed

    res.redirect(`http://localhost:3000/success?token=${token}`);
  } catch (error) {
    console.error("Error during Google Sign-In:", error);
    res.status(500).json({ error: "Authentication failed" });
  }
};

module.exports = {
  googleSignIn,
  getGoogleAuthURL,
};
