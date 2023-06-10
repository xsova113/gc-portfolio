"use server";

import { prisma } from "@/prisma/client";
import { User } from "@prisma/client";

const saveData = async (data: User) => {
  try {
    await prisma.user.create({
      data,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default saveData;
