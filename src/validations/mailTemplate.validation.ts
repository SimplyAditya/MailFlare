import Joi from "joi";

export const newMailTemplate = Joi.object({
  subject: Joi.string().required(),
  body: Joi.string().required(),
});
