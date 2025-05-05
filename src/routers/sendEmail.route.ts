import express from "express";

import { sendEmail } from "../controllers/sendEmail.controller";
import { userMiddleware } from "../middlewares/user.middleware";
import { sendEmailValidate } from "../middlewares/validation";

const sendEmailRouter = express.Router();

sendEmailRouter.route("/").post(sendEmailValidate, userMiddleware, sendEmail);

export default sendEmailRouter;
