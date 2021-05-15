const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = Appointment = mongoose.model(
  "appointments",
  AppointmentSchema
);
