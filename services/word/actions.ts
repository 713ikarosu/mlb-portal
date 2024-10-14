"use server";

import { prisma } from "@/lib/prisma";

export async function searchWords(query: string) {
  const words = await prisma.word.findMany({
    where: {
      word: {
        startsWith: query,
      },
    },
    take: 10,
  });
  console.log(words);

  return { words };
}
