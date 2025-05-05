import { mailTemplates } from "../generated/prisma";
import {
  createMailTemplate,
  getMailTemplateByUserId as repoGetMailTemplateByUserId,
  getMailTemplateById as repoGetMailTemplateById,
  updateMailTemplate,
} from "../repositories/mailTemplate.repository";

export const generateMailTemplate = async (
  subject: string,
  body: string,
  userId: number
): Promise<mailTemplates> => {
  const existingMailTemplate = await getMailTemplateByUserId(userId);
  const updatedList = existingMailTemplate.filter(
    (existingMailTemplateRecord) =>
      existingMailTemplateRecord.subject === subject &&
      existingMailTemplateRecord.body === body
  );
  if (updatedList.length > 0) {
    return await updateMailTemplate(updatedList[0].id, {
      body,
      subject,
    });
  }
  return await createMailTemplate(subject, body, userId);
};

export const getMailTemplateByUserId = async (
  userId: number
): Promise<Omit<mailTemplates[], "isDeleted">> => {
  const mailTemplate = await repoGetMailTemplateByUserId(userId);
  if (!mailTemplate) {
    throw new Error("Mail template not found");
  }
  return mailTemplate;
};

export const getMailTemplateById = async (
  id: number
): Promise<mailTemplates | null> => {
  const mailTemplate = await repoGetMailTemplateById(id);
  if (!mailTemplate) {
    throw new Error("Mail template not found");
  }
  return mailTemplate;
};
