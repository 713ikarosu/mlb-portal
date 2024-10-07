"use server";
import { prisma } from "@/lib/prisma";

export const updateWord = async (formData: FormData) => {
  const wordId = formData.get("wordId") as string;
  const word = formData.get("word") as string;
  const description = formData.get("description") as string;
  await prisma.word.update({
    where: { id: wordId },
    data: { word, description },
  });
};
