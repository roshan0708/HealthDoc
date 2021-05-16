const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const connectDB = require("./config/db");
const setHeaders = require("./utils/setHeaders");

// api routes
const user = require("./routes/user");
const appointment = require("./routes/appointment");

// passport
const passport = require("passport");
require("./utils/passport")(passport);

// set headers to avoid CORS Policy
app.use(setHeaders);

// parser the body of the request
app.use(express.json());

// initialize passport
app.use(passport.initialize());

// connecting to Mongo Atlas
connectDB();

// testing path
app.get("/api", (req, res) => {
  const data = {
    username: "roshan",
    age: 20,
  };

  res.json(data);
});

app.use(express.static("client/build"));

// setting routers
app.use(user);
app.use(appointment);

// error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(PORT, console.log(`Server is running at Port: ${PORT}`));
