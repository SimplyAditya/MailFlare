import { Request, Response } from "express";
import { sendEmailService } from "../services/sendEmail.service";

export const sendEmail = async (req: Request, res: Response) => {
  try {
    const { emails, appPasswordId, mailTemplateId } = req.body;

    await sendEmailService(emails, appPasswordId, mailTemplateId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ error: error.message });
  }
};
