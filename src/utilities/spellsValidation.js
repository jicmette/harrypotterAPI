const Joi = require("joi");

const spellSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string()
    .valid(
      "Charm",
      "Curse",
      "Hex",
      "Jinx",
      "Transfiguration",
      "Dark Magic",
      "Healing",
      "Protective",
      "Utility"
    )
    .required(),
  effect: Joi.string()
    .valid(
      "Summons an object",
      "Unlocks doors",
      "Disarms opponent",
      "Creates light",
      "Extinguishes light",
      "Shields against attacks",
      "Stuns target",
      "Levitation",
      "Conjures Patronus",
      "Erases memories",
      "Produces water",
      "Repels spiders",
      "Slows movement",
      "Kills instantly",
      "Transforms objects",
      "Conjures birds",
      "Explodes target",
      "Confuses target",
      "Locks doors",
      "Changes colors"
    )
    .required(),
  incantation: Joi.string()
    .valid(
      "Accio",
      "Alohomora",
      "Expelliarmus",
      "Lumos",
      "Nox",
      "Protego",
      "Stupefy",
      "Wingardium Leviosa",
      "Expecto Patronum",
      "Obliviate",
      "Aguamenti",
      "Arania Exumai",
      "Arresto Momentum",
      "Avada Kedavra",
      "Avifors",
      "Avis",
      "Bombarda",
      "Confundo",
      "Colloportus",
      "Colovaria"
    )
    .required(),
  difficulty: Joi.string().valid("Easy", "Intermediate", "Advanced").required(),
});

module.exports = { spellSchema };
