const charactersModel = require("../models/charactersModel");

const getCharacters = async (req, res) => {
  try {
    const characters = await charactersModel.find();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch characters" });
  }
};

module.exports = {
  getCharacters,
};
