import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { connect, prisma } from "../../connection";
import { NextResponse } from "next/server";

export const GET = async (_req: Request, { params }: { params: Params }) => {
  try {
    const targetPlayerId: number = Number(params.id);

    await connect();
    const player = await prisma.player.findFirst({
      where: { statsId: targetPlayerId },
    });

    return NextResponse.json({ player }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", data: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
