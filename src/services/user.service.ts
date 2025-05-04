import { User } from "../generated/prisma";
import * as repo from "../repositories/user.repository";

export const generateUser = async (
  data: Partial<User>
): Promise<Omit<User, "password" | "isDeleted">> => {
  const existingUser = await repo.getUserByEmailOrMobile(
    data.email,
    data.mobile
  );
  if (existingUser) {
    throw new Error("User already exists");
  }
  return await repo.createUser(data);
};

export const getUserByEmailOrMobile = async (
  email: string,
  mobile: string
): Promise<User | null> => {
  const user = await repo.getCompleteUserByEmailOrMobile(email, mobile);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
