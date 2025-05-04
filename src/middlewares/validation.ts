import { NextFunction, Request, Response } from "express";
import { newUser } from "../validations/user.validation";
import { loginUser } from "../validations/auth.validation";

export const createUserValidate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body) {
    return res.status(400).json({
      message: "Request body is required",
    });
  }
  const { error } = await newUser.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Validation error",
      error: error.details.map((err) => ({
        field: err.path[0],
        message: err.message,
      })),
    });
  }
  next();
};

export const loginValidate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.body) {
      return res.status(400).json({
        message: "Request body is required",
      });
    }
    const { error } = await loginUser.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Validation error",
        error: error.details.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }
    next();
  };