const mongoose = require("mongoose");

const charactersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    house: { type: String, required: true },
    blood_status: { type: String, required: true },
    wand: {
      wood: { type: String, required: true },
      core: { type: String, required: true },
      length: { type: String, required: true },
    },
    patronus: { type: String, required: true },
  },
  { collection: "Characters" }
);

module.exports = mongoose.model("Characters", charactersSchema);
