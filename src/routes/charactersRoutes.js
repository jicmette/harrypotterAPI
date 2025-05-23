const express = require("express");
const router = express.Router();
const {
  getCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require("../controllers/charactersController");
const { characterSchema } = require("../utilities/charactersValidation");

// Route to get all characters
router.get("/", getCharacters);

//Route to get a single character
router.get("/:id", getCharacterById);

// Route to create a character
router.post(
  "/",
  (req, res, next) => {
    const { error } = characterSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  },
  createCharacter
);

// Route to update a character
router.put(
  "/:id",
  (req, res, next) => {
    const { error } = characterSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  },
  updateCharacter
);

// Route to delete a character
router.delete("/:id", deleteCharacter);

module.exports = router;
