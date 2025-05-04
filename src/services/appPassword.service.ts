import { appPasswords } from "../generated/prisma";
import {
  createAppPassword,
  getAppPasswordByUserId,
  updateAppPassword,
} from "../repositories/appPassword.repository";

export const generateAppPassword = async (
  userId: number,
  email: string,
  appPassword: string
): Promise<appPasswords> => {
  const existingAppPassword = await getAppPasswordByUserId(userId);
  existingAppPassword.filter(
    (existingAppPasswordRecord) =>
      existingAppPasswordRecord.email === email &&
      existingAppPasswordRecord.password === appPassword
  );
  if (existingAppPassword.length > 0) {
    if (existingAppPassword[0].isDeleted === false) {
      throw new Error("App password already exists");
    } else if (existingAppPassword[0].isDeleted === true) {
      const appPasswordRecord = await updateAppPassword(
        existingAppPassword[0].id,
        { email, password: appPassword, isDeleted: false }
      );
      return appPasswordRecord;
    }
  }
  return await createAppPassword(email, appPassword, userId);
};
