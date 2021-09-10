const Joi = require("joi");
const { validateData } = require("../util");

const reverseService = require("../services/reverseService");

// Validation schema
const reverseInputSchema = Joi.object({
  text: Joi.string().max(250).required(),
});

const reverseEcho = (input) => {
  const data = validateData(reverseInputSchema, input);
  const iText = reverseService.reverseText(data.text);
  const isPalindrome = reverseService.isPalindrome(data.text);
  return { text: iText, isPalindrome };
};

module.exports = {
  reverseEcho,
};
