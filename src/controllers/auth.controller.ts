import { Request, Response } from "express";
import { getUserByEmailOrMobile } from "../services/user.service";
import { compareText, generateToken } from "../utilities/commonFunctions";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, mobile, password } = req.body;

    const user = await getUserByEmailOrMobile(email, mobile);

    const isPasswordValid = await compareText(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const token = await generateToken(user.id);
    delete user.password;
    delete user.isDeleted;
    delete user.createdAt;
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({ error: error.message });
  }
};
