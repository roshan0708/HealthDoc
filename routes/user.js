const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt_decode = require("jwt-decode");
const issueJWT = require("../utils/jwt_setup");

// user register route
router.post("/api/register", (req, res) => {
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
router.post("/api/login", (req, res) => {
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

// user password reset
router.post("/api/password_reset", async (req, res) => {
  const { password, confirmPassword } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  const user = await User.findById(decoded.sub);
  if (password !== confirmPassword) {
    res.status(400).json({
      message: { msgBody: "Passwords don't match!!!", msgError: true },
    });
  } else {
    user.password = password;
    user.save(async (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: { msgBody: "Error has occured", msgError: true },
        });
      } else {
        res.status(200).json({
          message: {
            msgBody: "Password Changed Successfully!!",
            msgError: false,
          },
        });
      }
    });
  }
});

module.exports = router;
