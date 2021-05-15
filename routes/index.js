const user = require("./user");
const appointment = require("./appointment");

module.exports = (app) => {
  app.use("/api/user", user);
  app.use("/api/appointment", appointment);
};
