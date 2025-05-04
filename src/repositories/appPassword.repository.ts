import prisma from "../db";
import { appPasswords } from "../generated/prisma";

export const createAppPassword = async (
  email: string,
  password: string,
  id: number
): Promise<appPasswords> => {
  const appPassword = await prisma.appPasswords.create({
    data: {
      email,
      password,
      userId: id,
    },
  });
  return appPassword;
};

export const getAppPasswordById = async (
  id: number
): Promise<appPasswords | null> => {
  const appPassword = await prisma.appPasswords.findUnique({
    where: { id, isDeleted: false },
  });
  return appPassword;
};

export const getAppPasswordByUserId = async (
    userId: number
): Promise<appPasswords[]> => {
  const appPasswords = await prisma.appPasswords.findMany({
    where: { userId, isDeleted: false },
  });
  return appPasswords;
}

export const updateAppPassword = async (
    id: number,
    data: Partial<appPasswords>
): Promise<appPasswords> => {
  const appPassword = await prisma.appPasswords.update({
    where: { id },
    data: data as any,
  });
    return appPassword;
}

export const deleteAppPassword = async (
  id: number
): Promise<appPasswords | null> => {
  const appPassword = await prisma.appPasswords.update({
    where: { id },
    data: { isDeleted: true },
  });
  return appPassword;
};