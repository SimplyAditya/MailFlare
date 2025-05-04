import express from "express";
import {
  userMiddleware,
  userQueryMiddleware,
} from "../middlewares/user.middleware";
import {
  createNewAppPassword,
  getUsersAppPassword,
} from "../controllers/appPassword.controller";
import { createAppPasswordValidate } from "../middlewares/validation";
const appPasswordRouter = express.Router();

appPasswordRouter
  .route("/")
  .post(createAppPasswordValidate, userMiddleware, createNewAppPassword);

appPasswordRouter.route("/").get(userQueryMiddleware, getUsersAppPassword);
export default appPasswordRouter;
