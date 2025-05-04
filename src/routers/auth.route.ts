import express, { NextFunction, Request, Response } from "express";
import { loginValidate } from "../middlewares/validation";
import { loginUser } from "../controllers/auth.controller";
const authRouter = express.Router();

authRouter
  .route("/login")
  .post((req: Request, res: Response, next: NextFunction) => {
    loginValidate(req, res, next);
  }, loginUser);

export default authRouter;
