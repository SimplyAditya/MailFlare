import prisma from "../db";
import { mailTemplates } from "../generated/prisma";

export const createMailTemplate = async (
  subject: string,
  body: string,
  userId: number
): Promise<mailTemplates> => {
  const newMailTemplate = await prisma.mailTemplates.create({
    data: {
      subject,
      body,
      userId,
    },
  });
  return newMailTemplate;
};

export const getMailTemplateById = async (
  id: number
): Promise<mailTemplates | null> => {
  const mailTemplate = await prisma.mailTemplates.findUnique({
    where: { id },
  });
  return mailTemplate;
};

export const getMailTemplateByUserId = async (
  userId: number
): Promise<Omit<mailTemplates[], "isDeleted">> => {
  const mailTemplatesList = await prisma.mailTemplates.findMany({
    where: { userId },
  });
  return mailTemplatesList;
};
export const updateMailTemplate = async (
  id: number,
  data: Partial<mailTemplates>
): Promise<mailTemplates> => {
  const updatedMailTemplate = await prisma.mailTemplates.update({
    where: { id },
    data: data as any,
  });
  return updatedMailTemplate;
};
export const deleteMailTemplate = async (
  id: number
): Promise<mailTemplates | null> => {
  const deletedMailTemplate = await prisma.mailTemplates.delete({
    where: { id },
  });
  return deletedMailTemplate;
};
