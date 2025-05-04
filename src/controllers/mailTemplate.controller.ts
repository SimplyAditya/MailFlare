import { Request, Response } from "express";
import { generateMailTemplate } from "../services/mailTemplate.service";

export const createNewMailTemplate = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { subject, body, userId } = req.body;

    const newMailTemplate = await generateMailTemplate(
      subject,
      body,
      Number(userId)
    );

    res.status(201).json(newMailTemplate);
  } catch (error) {
    console.error("Error creating mail template:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
