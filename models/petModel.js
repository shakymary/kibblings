const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number },
  breed: [String],
  color: { type: String },
  gender: { type: String, required: true },
  birthday: { type: String },
  microchip: { type: String },
  vaccines: [String],
  allergies: [String],
  rabies: { type: Boolean, required: true },
  userId: { type: String, required: true },
});

module.exports = Pet = mongoose.model("Pet", petSchema);
