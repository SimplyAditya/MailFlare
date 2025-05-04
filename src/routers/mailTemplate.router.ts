import express from "express";
import { createMailTemplateValidate } from "../middlewares/validation";
import { userMiddleware } from "../middlewares/user.middleware";
import { createNewMailTemplate } from "../controllers/mailTemplate.controller";
const mailTemplateRouter = express.Router();

mailTemplateRouter
  .route("/")
  .post(createMailTemplateValidate, userMiddleware, createNewMailTemplate);

export default mailTemplateRouter;
