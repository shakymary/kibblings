const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number },
  breed: { type: String, required: true },
  color: { type: String },
  gender: { type: String },
  birthday: { type: String },
  microchip: { type: String },
  vaccines: [String],
  rabies: { type: String },
  userId: { type: String, required: true },
});

module.exports = Pet = mongoose.model("Pet", petSchema);
