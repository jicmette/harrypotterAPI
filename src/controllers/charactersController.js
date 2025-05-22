const Character = require("../models/charactersModel");

// Get all characters from the Characters database
const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch characters" });
  }
};

// Get a single character by Id
const getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving character" });
  }
};

// Create a new character
const createCharacter = async (req, res) => {
  try {
    const { name, house, blood_status, wand, patronus } = req.body;

    if (!wand || !wand.wood || !wand.core || !wand.length) {
      return res.status(400).json({ message: "Invalid wand data" });
    }

    const newCharacter = new Characters({
      name,
      house,
      blood_status,
      wand: {
        wood: wand.wood,
        core: wand.core,
        length: wand.length,
      },
      patronus,
    });

    await newCharacter.save();
    res.status(201).json({
      message: "Character created successfully",
      character: newCharacter,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating character", error });
  }
};

// Update a character
const updateCharacter = async (req, res) => {
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCharacter) {
      return res.status(404).json({ error: "Character not found" });
    }

    res
      .status(200)
      .json({ message: "Character updated successfully", updatedCharacter });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error updating character", details: error.message });
  }
};

// Delete a character
const deleteCharacter = async (req, res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);

    if (!deletedCharacter) {
      return res.status(404).json({ error: "Character not found" });
    }

    res.status(200).json({ message: "Character deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting character", details: error.message });
  }
};

module.exports = {
  getCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
