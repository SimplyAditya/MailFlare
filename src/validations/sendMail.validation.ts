import Joi from "joi";

export const sendEmail = Joi.object({
  emails: Joi.array().items(Joi.string().email()).required(),
  appPasswordId: Joi.number().integer().required(),
  mailTemplateId: Joi.number().integer().required(),
});
