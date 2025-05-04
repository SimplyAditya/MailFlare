import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../utilities/commonFunctions";

export const userMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const token = authorization?.split(" ")[1];
  const decodedToken = await decodeToken(token);
  req.body = { ...req.body, userId: decodedToken.userId };
  next();
};
