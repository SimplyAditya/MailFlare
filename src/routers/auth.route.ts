import express, { NextFunction, Request, Response } from "express";
import { loginValidate } from "../middlewares/validation";
import { loginUser } from "../controllers/auth.controller";
const authRouter = express.Router();

authRouter
  .route("/login")
  .post(loginValidate, loginUser);

export default authRouter;
