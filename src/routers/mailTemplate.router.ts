import express from "express";
import { createMailTemplateValidate } from "../middlewares/validation";
import {
  userMiddleware,
  userQueryMiddleware,
} from "../middlewares/user.middleware";
import {
  createNewMailTemplate,
  getUsersMailTemplate,
} from "../controllers/mailTemplate.controller";
const mailTemplateRouter = express.Router();

mailTemplateRouter
  .route("/")
  .post(createMailTemplateValidate, userMiddleware, createNewMailTemplate);

mailTemplateRouter.route("/").get(userQueryMiddleware, getUsersMailTemplate);

export default mailTemplateRouter;
