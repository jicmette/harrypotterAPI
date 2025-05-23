const express = require("express");
const router = express.Router();
const {
  getSpells,
  getSpellById,
  createSpell,
  updateSpell,
  deleteSpell,
} = require("../controllers/spellsController");
const { spellSchema } = require("../utilities/spellsValidation");

// Route to get all spells
router.get("/", getSpells);

// Route to get a single spell
router.get("/:id", getSpellById);

// Route to create a new spell
router.post(
  "/",
  (req, res, next) => {
    const { error } = spellSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  },
  createSpell
);

//Route to update a spell
router.put(
  "/:id",
  (req, res, next) => {
    const { error } = spellSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  },
  updateSpell
);

//Route to delete a spell
router.delete("/:id", deleteSpell);

module.exports = router;
