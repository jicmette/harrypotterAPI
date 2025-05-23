const Joi = require("joi");

const characterSchema = Joi.object({
  name: Joi.string().required(),
  house: Joi.string()
    .valid("Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff")
    .required(),
  blood_status: Joi.string()
    .valid("Pure-blood", "Half-blood", "Muggle-born")
    .required(),
  wand: Joi.string().required(),
  patronus: Joi.string().required(),
  birth_year: Joi.number()
    .integer()
    .min(1800)
    .max(new Date().getFullYear())
    .required(),
  occupation: Joi.string().required(),
});

module.exports = { characterSchema };
