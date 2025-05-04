import Joi from "joi";

export const newAppPassword = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(12).max(30).required(),
});
