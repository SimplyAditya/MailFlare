import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../utilities/commonFunctions";
import { getUserById } from "../repositories/user.repository";

export const userMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try{
    const authorization = req.headers["authorization"];
    if (!authorization) {
      throw new Error("Authorization header is missing");
    }
    const token = authorization?.split(" ")[1];
    const decodedToken = await decodeToken(token);
    const user = await getUserById(decodedToken.userId);
    if (!user) {
      throw new Error("User not found");
    }
    req.body = { ...req.body, userId: decodedToken.userId, role: user.role };
    next();
  }catch (error) {
    console.error("Error in user middleware:", error.message);
    res.status(500).json({ message: error.message });
  }
};
