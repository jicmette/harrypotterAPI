const express = require("express");
const router = express.Router();
const {
  getSpells,
  getSpellById,
  createSpell,
  updateSpell,
  deleteSpell,
} = require("../controllers/spellsController");

// Route to get all spells
router.get("/", getSpells);

// Route to get a single spell
router.get("/:id", getSpellById);

// Route to create a new spell
router.post("/", createSpell);

//Route to update a spell
router.put("/:id", updateSpell);

//Route to delete a spell
router.delete("/:id", deleteSpell);

module.exports = router;
