import { mailTemplates } from "../generated/prisma";
import {
  createMailTemplate,
  getMailTemplateByUserId,
  updateMailTemplate,
} from "../repositories/mailTemplate.repository";

export const generateMailTemplate = async (
  subject: string,
  body: string,
  userId: number
): Promise<mailTemplates> => {
  const existingMailTemplate = await getMailTemplateByUserId(userId);
  existingMailTemplate.filter(
    (existingMailTemplateRecord) =>
      existingMailTemplateRecord.subject === subject &&
      existingMailTemplateRecord.body === body
  );
  if (existingMailTemplate.length > 0) {
    return await updateMailTemplate(existingMailTemplate[0].id, {
      body,
      subject,
    });
  }
  return await createMailTemplate(subject, body, userId);
};
