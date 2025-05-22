const express = require("express");
const router = express.Router();
const {
  getCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require("../controllers/charactersController");

// Route to get all characters
router.get("/", getCharacters);

//Route to get a single character
router.get("/:id", getCharacterById);

// Route to create a character
router.post("/", createCharacter);

// Route to update a character
router.put("/:id", updateCharacter);

// Route to delete a character
router.delete("/:id", deleteCharacter);

module.exports = router;
