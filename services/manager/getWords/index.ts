import { prisma } from "@/lib/prisma";
import { path, handleFailed, handleSucceed } from "../../";

type Word = {
  id: string;
  word: string;
  description: string;
};

export async function getWords(): Promise<{ words: Word[] }> {
  try {
    const words = await prisma.word.findMany({ take: 20 });
    if (!words) {
      return { words: [] };
    }
    return { words };
  } catch (error) {
    console.error("Error fetching word:", error);
    throw new Error("Failed to fetch word");
  }
}
