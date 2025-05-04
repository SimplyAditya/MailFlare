import Joi from "joi";

export const loginUser = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(6).max(20).required(),
  mobile: Joi.string().length(10)
}).or("email", "mobile");
