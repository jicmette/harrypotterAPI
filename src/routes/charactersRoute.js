const express = require("express");
const router = express.Router();
const { getCharacters } = require("../controllers/charactersController");

router.get("/", getCharacters);

module.exports = router;
