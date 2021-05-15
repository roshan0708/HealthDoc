const express = require("express");
const app = express();
const setHeaders = require("./utils/setHeaders");
const bodyParser = require("./utils/bodyParser");
const passport = require("passport");
require("./passport")(passport);

// set headers to avoid CORS Policy
app.use(setHeaders);
// parser the body of the request
app.use(express.json());
app.use(bodyParser);

// initialize passport
app.use(passport.initialize());

// testing path
app.get("/api", (req, res) => {
  const data = {
    username: "roshan",
    age: 20,
  };

  res.json(data);
});

// error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err });
});

// setting routers
require("./routes/index")(app);

module.exports = app;
