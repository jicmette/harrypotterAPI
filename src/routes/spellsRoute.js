const express = require("express");
const router = express.Router();
const { getSpells } = require("../controllers/spellsController");

router.get("/", getSpells);

module.exports = router;
