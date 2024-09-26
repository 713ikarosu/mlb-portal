import { prisma } from "@/lib/prisma";
import { path, handleFailed, handleSucceed } from "../../";

type Word = {
  id: string;
  word: string;
  description: string;
};

export async function getWords(): Promise<{ words: Word[] }> {
  const words = await prisma.word.findMany({ take: 20 });
  // TODO: エラーハンドリング
  return { words };
}
