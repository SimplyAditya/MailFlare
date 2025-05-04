import express, { NextFunction, Request, Response } from "express";
import { userMiddleware } from "../middlewares/user.middleware";
import { createNewAppPassword } from "../controllers/appPassword.controller";
import { createAppPasswordValidate } from "../middlewares/validation";
const appPasswordRouter = express.Router();

appPasswordRouter
  .route("/")
  .post(createAppPasswordValidate, userMiddleware, createNewAppPassword);

export default appPasswordRouter;
