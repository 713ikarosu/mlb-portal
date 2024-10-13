"use server";
import { wordSchema } from "@/lib/form/schema";
import { prisma } from "@/lib/prisma";
import { parseWithZod } from "@conform-to/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

  revalidatePath("/manage");
  redirect("/manage");
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
  revalidatePath("/manage");
  revalidatePath(`/manage/${wordId}`);
  revalidatePath(`/words/${wordId}`);
  redirect("/manage");
}

export async function deleteWord(formData: FormData) {
  const wordId = formData.get("wordId") as string;
  await prisma.word.delete({
    where: { id: wordId },
  });
  // TODO: revalidate 対象ページ(/words/{wordId})と/manage
  revalidatePath("/manage");
  redirect("/manage");
}
