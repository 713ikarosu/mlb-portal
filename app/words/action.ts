import type { Word } from "@prisma/client";
import { prisma } from "@/lib/prisma";

type Props = {
  id: string;
};

export async function getWord({ id }: Props): Promise<{ word: Word | null }> {
  try {
    const word = await prisma.word.findUnique({ where: { id } });
    if (!word) {
      return { word: null };
    }
    return { word };
  } catch (error) {
    console.error("Error fetching word:", error);
    throw new Error("Failed to fetch word", { cause: error });
  }
}

export async function searchWords(query: string) {
  try {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      return { words: [] };
    }

    const words = await prisma.word.findMany({
      where: {
        word: {
          startsWith: trimmedQuery,
          mode: "insensitive",
        },
      },
      take: 10,
    });

    return { words };
  } catch (error) {
    console.error("Error searching words:", error);
    throw new Error("Failed to search words", { cause: error });
  }
}
