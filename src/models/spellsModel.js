const mongoose = require("mongoose");

const spellsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    effect: { type: String, required: true },
    incantation: { type: String, required: true },
    difficulty: { type: String, required: true },
  },
  { collection: "Spells" }
);

module.exports = mongoose.model("Spells", spellsSchema);
