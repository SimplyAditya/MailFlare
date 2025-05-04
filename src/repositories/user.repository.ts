import prisma from "../db";
import { User } from "../generated/prisma";

const userSelect = {
  id: true,
  email: true,
  mobile: true,
  name: true,
  createdAt: true,
  role: true,
};

export const createUser = (
  data: Partial<User>
): Promise<Omit<User, "password" | "isDeleted">> =>
  prisma.user.create({ data: data as any, select: userSelect });

export const getUserById = (
  id: number
): Promise<Omit<User, "password" | "isDeleted"> | null> =>
  prisma.user.findUnique({
    where: { id },
    select: userSelect,
  });

export const getUserByEmailOrMobile = (
  email: string,
  mobile: string
): Promise<Omit<User, "password" | "isDeleted"> | null> =>
  prisma.user.findFirst({
    where: {
      OR: [{ email }, { mobile }],
    },
    select: userSelect,
  });

export const getCompleteUserByEmailOrMobile = (
  email: string,
  mobile: string
): Promise<User | null> =>
  prisma.user.findFirst({
    where: {
      OR: [{ email }, { mobile }],
    },
  });

export const getAllUsers = (): Promise<
  Omit<User, "password" | "isDeleted">[]
> =>
  prisma.user.findMany({
    where: { isDeleted: false },
    select: userSelect,
  });

export const updateUser = (
  id: number,
  data: Partial<User>
): Promise<Omit<User, "password" | "isDeleted">> =>
  prisma.user.update({
    where: { id },
    data: data as any,
    select: userSelect,
  });

export const deleteUser = (
  id: number
): Promise<Omit<User, "password" | "isDeleted">> =>
  prisma.user.update({
    where: { id },
    data: { isDeleted: true },
    select: userSelect,
  });
