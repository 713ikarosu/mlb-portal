import { prisma } from "@/lib/prisma";
import type { NextRequest } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { wordId: string } }) {
  const data = await prisma.word.findUnique({
    where: {
      // TODO: 型を考える
      id: params.wordId,
    },
  });
  if (!data) {
    return Response.json({ status: 404, body: { message: "Not Found" } });
  }
  // TODO: フロントのWord型に合わせてフォーマットできると良さそう
  return Response.json({ data });
}

export async function POST(req: NextRequest, { params }: { params: { wordId: string } }) {
  const body = await req.json();
  const photo = await prisma.word.update({
    where: { id: Number(params.wordId) },
    data: {
      word: body.word,
      description: body.description,
    },
  });
  return Response.json({ photo });
}
