import { type NextRequest, NextResponse } from "next/server";
import { connect, prisma } from "../connection";

export const dynamic = "force-dynamic";

export const GET = async (_req: NextRequest) => {
  // MEMO: クエリパラメータを活用しようとした残骸
  // const urlObj = new URL(_req.url);
  // console.log(urlObj.searchParams.get('nameKana'));

  try {
    await connect();
    const players = await prisma.player.findMany();

    return NextResponse.json({ players }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", data: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
