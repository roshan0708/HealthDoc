const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Appointment = require("../models/Appointment");
const jwt_decode = require("jwt-decode");

// book appointment route
router.post("/appointment", (req, res) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt_decode(token);

    const newAppointment = new Appointment({
      ...req.body,
      user: decoded.sub,
    });

    newAppointment.save(async (err, appointment) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: { msgBody: "Error has occured", msgError: true },
        });
      } else {
        const user = await User.findById(decoded.sub);
        const appointments = user.appointments;
        User.findOneAndUpdate(
          { _id: decoded.sub },
          { appointments: [...appointments, appointment] },
          (err, obj) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                message: { msgBody: "Error has occured", msgError: true },
              });
            } else {
              return res.status(200).json({
                data: appointment,
                message: {
                  msgBody: "Appointment Booked Successfully",
                  msgError: false,
                },
              });
            }
          }
        );
      }
    });
  }
});

router.get("/appointment", async (req, res) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt_decode(token);
    const user = await User.findById(decoded.sub).populate("appointments");
    return res.status(200).json(user.appointments);
  }
});

module.exports = router;
