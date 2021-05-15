const JwtStrategy = require("passport-jwt").Strategy;
const User = require("../models/User");
const ExtractJWT = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(
      {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken("secret_token"),
      },
      (payload, done) => {
        console.log("payload", payload);
        User.findById(payload.id)
          .then((user) => {
            if (user) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch((err) => {
            console.log(err);
            done(err);
          });
      }
    )
  );
};
