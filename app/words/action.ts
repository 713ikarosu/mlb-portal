import { prisma } from "@/lib/prisma";
import type { Word } from "@prisma/client";

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
    throw new Error("Failed to fetch word");
  }
}

export async function searchWords(query: string) {
  const words = await prisma.word.findMany({
    where: {
      word: {
        startsWith: query,
      },
    },
    take: 10,
  });

  return { words };
}
