import Joi from "joi";

export const newUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(20).required(),
  name: Joi.string().min(3).max(30).required(),
  mobile: Joi.string().length(10).required(),
});

export const getUserById = Joi.object({
  id: Joi.number().integer().required(),
});

export const getUserByEmail = Joi.object({
  email: Joi.string().email().required(),
});
export const getAllUsers = Joi.object({
  role: Joi.string().valid("ADMIN", "USER").optional(),
});

export const updateUser = Joi.object({
  id: Joi.number().integer().required(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(6).max(20).optional(),
  name: Joi.string().min(3).max(30).optional(),
  mobile: Joi.string().length(10).optional(),
});
