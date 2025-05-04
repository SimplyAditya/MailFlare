import { Request, Response } from "express";
import { hashText } from "../utilities/commonFunctions";
import { generateUser } from "../services/user.service";

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const data = { ...req.body, password: await hashText(req.body.password) };
    const user = await generateUser(data);
    res.status(201).json({ user });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: error.message });
  }
};
