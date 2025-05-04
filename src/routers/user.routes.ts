import express, { NextFunction, Request, Response } from "express";
import { createNewUser } from "../controllers/user.controller";
import { createUserValidate } from "../middlewares/validation";
const userRouter = express.Router();

userRouter
  .route("/")
  .post((req: Request, res: Response, next: NextFunction) => {
    createUserValidate(req, res, next);
  }, createNewUser);

export default userRouter;
