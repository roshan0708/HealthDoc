const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const issueJWT = require("../utils/jwt_setup");

// user register route
router.post("/register", (req, res) => {
  const newUser = new User(req.body);

  newUser.save(async (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: { msgBody: "Error has occured", msgError: true },
      });
    } else {
      return res.status(200).json({
        data: user,
        message: { msgBody: "Registered Successfully", msgError: false },
      });
    }
  });
});

// user login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(401).json({
        message: { msgBody: "User not found", msgError: true },
      });
    } else {
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          //user matched
          const jwt = issueJWT(user);
          res.status(200).json({
            isAuthenticated: true,
            data: user,
            token: jwt.token,
            expiresIn: jwt.expires,
          });
        } else {
          return res.status(401).json({
            message: { msgBody: "Wrong Credentials", msgError: true },
          });
        }
      });
    }
  });
});

module.exports = router;
