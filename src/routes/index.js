const router = require("express").Router();

router.use("/characters", require("./charactersRoutes"));

router.use("/spells", require("./spellsRoutes"));

module.exports = router;
