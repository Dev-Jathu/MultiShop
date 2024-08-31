const session = require("express-session");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

const passportUtil = (app) => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // passport middleware
  passport.use(
    new Strategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"],
      },
      (accessToken, refreshToken, profile, callback) => {
        callback(null, profile);
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

module.exports = passportUtil;
