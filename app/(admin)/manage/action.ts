"use server";

import { prisma } from "@/lib/prisma";
import type { Word } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type GetWordProps = {
  id: string;
};

export async function getWord({ id }: GetWordProps): Promise<{ word: Word | null }> {
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

export async function addWords(formData: FormData) {
  // TODO: バリデーション
  const word = formData.get("word") as string;
  const description = formData.get("description") as string;
  await prisma.word.create({
    data: {
      word,
      description,
    },
  });

  revalidatePath("/manage/words/");
  redirect("/manage/words/");
}

export async function updateWord(formData: FormData) {
  // 一旦サーバーサイドのバリデーションを無視する（型の不備があったため）
  // const submission = parseWithZod(formData, { schema: wordSchema });

  // if (submission.status !== "success") {
  //   return submission.reply();
  // }

  const wordId = formData.get("wordId") as string;
  const word = formData.get("word") as string;
  const description = formData.get("description") as string;
  await prisma.word.update({
    where: { id: wordId },
    data: { word, description },
  });

  // TODO: revalidate 対象ページ(/words/{wordId})と/manage
  revalidatePath("/manage/words/");
  revalidatePath(`/manage/words/${wordId}`);
  revalidatePath(`/words/${wordId}`);
  redirect("/manage/words/");
}

export async function deleteWord(formData: FormData) {
  const wordId = formData.get("wordId") as string;
  await prisma.word.delete({
    where: { id: wordId },
  });
  // TODO: revalidate 対象ページ(/words/{wordId})と/manage
  revalidatePath("/manage/words/");
  redirect("/manage/words/");
}
