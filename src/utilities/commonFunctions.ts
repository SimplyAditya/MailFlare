import { text } from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();

const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const hashText = async (text: string): Promise<string> => {
  return await bcrypt.hash(text, Number(SALT_ROUNDS));
};

export const compareText = async (
  text: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(text, hash);
};

export const generateToken = async (userId: number): Promise<string> => {
  return await jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
};
