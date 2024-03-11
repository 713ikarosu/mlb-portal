import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// DB接続
export const connect = async () => {
  try {
    prisma.$connect();
  } catch (error) {
    return Error(`DB接続に失敗しました...${error}`);
  }
}