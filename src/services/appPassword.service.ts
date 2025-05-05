import { appPasswords } from "../generated/prisma";
import {
  createAppPassword,
  getAppPasswordByUserId as repoGetAppPasswordByUserId,
  getAppPasswordById as repoGetAppPasswordById,
  updateAppPassword,
} from "../repositories/appPassword.repository";

export const generateAppPassword = async (
  userId: number,
  email: string,
  appPassword: string
): Promise<appPasswords> => {
  const existingAppPassword = await repoGetAppPasswordByUserId(userId);
  const updatedList = existingAppPassword.filter(
    (existingAppPasswordRecord) =>
      existingAppPasswordRecord.email === email &&
      existingAppPasswordRecord.password === appPassword
  );
  if (updatedList.length > 0) {
    if (updatedList[0].isDeleted === false) {
      throw new Error("App password already exists");
    } else if (updatedList[0].isDeleted === true) {
      const appPasswordRecord = await updateAppPassword(
        updatedList[0].id,
        { email, password: appPassword, isDeleted: false }
      );
      return appPasswordRecord;
    }
  }
  return await createAppPassword(email, appPassword, userId);
};

export const getAppPasswordByUserId = async (
  userId: number
): Promise<Array<Pick<appPasswords, "id" | "email" | "userId">>> => {
  const appPasswords = await repoGetAppPasswordByUserId(userId);
  if (!appPasswords || appPasswords.length === 0) {
    throw new Error("App password not found");
  }
  return appPasswords.map(({ id, email, userId }) => ({ id, email, userId }));
};

export const getAppPasswordById = async (
  id: number
): Promise<appPasswords | null> => {
  const appPassword = await repoGetAppPasswordById(id);
  if (!appPassword) {
    throw new Error("App password not found");
  }
  return appPassword;
};
