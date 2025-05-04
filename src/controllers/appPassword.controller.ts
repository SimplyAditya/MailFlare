import { Request, Response } from "express";
import {
  generateAppPassword,
  getAppPasswordByUserId,
} from "../services/appPassword.service";

export const createNewAppPassword = async (req: Request, res: Response) => {
  try {
    const { userId, email, password } = req.body;
    const newAppPassword = await generateAppPassword(
      Number(userId),
      email,
      password
    );

    res
      .status(201)
      .json({ message: "App password created successfully", newAppPassword });
  } catch (error) {
    console.error("Error creating app password:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getUsersAppPassword = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const appPassword = await getAppPasswordByUserId(Number(userId));

    res.status(200).json(appPassword);
  } catch (error) {
    console.error("Error fetching app password:", error.message);
    res.status(500).json({ error: error.message });
  }
};
