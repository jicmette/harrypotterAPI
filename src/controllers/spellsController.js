const spellsModel = require("../models/spellsModel");

const getSpells = async (req, res) => {
  try {
    const spells = await spellsModel.find();
    res.status(200).json(spells);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch characters" });
  }
};

module.exports = {
  getSpells,
};
