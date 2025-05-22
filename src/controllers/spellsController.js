const Spell = require("../models/spellsModel");

// Get all the spells from the Spells database
const getSpells = async (req, res) => {
  try {
    const spells = await Spell.find();
    res.status(200).json(spells);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch spells" });
  }
};

// Get a single spell by Id
const getSpellById = async (req, res) => {
  try {
    const spell = Spell.findById(req.params.id);

    if (!spell) {
      return res.status(404).json({ error: "Spell not found" });
    }

    res.status(200).json({ spell });
  } catch (error) {
    res.status(500).json({ error: "Error retrieving spell" });
  }
};

// Create a new spell
const createSpell = async (req, res) => {
  try {
    const { name, type, effect, incantation, difficulty } = req.body;

    if (!name || !type || !effect || !incantation || !difficulty) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newSpell = new Spell({
      name,
      type,
      effect,
      incantation,
      difficulty,
    });

    await newSpell.save();
    res.status(201).json({
      message: "Spell created successfully",
      spell: newSpell,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating spell", error });
  }
};

// Update a spell
const updateSpell = async (req, res) => {
  try {
    const updatedSpell = await Spell.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedSpell) {
      return res.status(404).json({ error: "Spell not found" });
    }

    res
      .status(200)
      .json({ message: "Spell updated successfully", updatedSpell });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error updating Spell", details: error.message });
  }
};

// Delete a spell
const deleteSpell = async (req, res) => {
  try {
    const deletedSpell = await Spell.findByIdAndDelete(req.params.id);

    if (!deletedSpell) {
      return res.status(404).json({ error: "Spell not found" });
    }

    res.status(200).json({ message: "Spell deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting spell", details: error.message });
  }
};

module.exports = {
  getSpells,
  getSpellById,
  createSpell,
  updateSpell,
  deleteSpell,
};
