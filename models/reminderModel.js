const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  note: { type: String },
  time: { type: String },
  userId: { type: String, required: true },
});

module.exports = Reminder = mongoose.model("reminder", petSchema);
