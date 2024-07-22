import { prisma } from "@/lib/prisma";
import type { NextRequest } from "next/server";

export async function GET() {
  // TODO: 件数指定できるようにする
  const data = await prisma.word.findMany({ take: 20 });
  if (!data) {
    return Response.json({ status: 404, body: { message: "Not Found" } });
  }
  // TODO: フロントのWord型に合わせてフォーマットできると良さそう
  return Response.json({ data });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const photo = await prisma.word.create({
      data: {
        word: body.word,
        description: body.description,
      },
    });
    return Response.json({ photo }, { status: 201 });
  } catch (error) {
    return Response.json({ message: `Internal Server Error ${error}` }, { status: 500 });
  }
}
