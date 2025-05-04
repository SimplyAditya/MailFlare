import { Request, Response } from "express";
import {
  generateMailTemplate,
  getMailTemplateByUserId,
} from "../services/mailTemplate.service";

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

export const getUsersMailTemplate = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.body;
    const mailTemplate = await getMailTemplateByUserId(Number(userId));

    res.status(200).json(mailTemplate);
  } catch (error) {
    console.error("Error fetching mail template:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
