"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const addWords = async (formData: FormData) => {
  // TODO: バリデーション
  const word = formData.get("word") as string;
  const description = formData.get("description") as string;
  await prisma.word.create({
    data: {
      word,
      description,
    },
  });

  redirect("/manage");
};
