import { connect, prisma } from "@/app/api/connection";
import { Personality, Player } from "@prisma/client";
import Image from "next/image";

type StatsIdParams = {
  statsId: string;
};
type PlayerData = {
  player: Player;
  playerPersonality: Personality;
};

// async function getPlayerData({ statsId }: StatsIdParams): Promise<PlayerData> {
//   // 静的データ取得と思われている
//   const res = await fetch(`${process.env.BASE_URL}/api/player/${statsId}`);
//   // { cache: "no-store" } つけたら動的になる
//   if (!res.ok) {
//     console.error(res);
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

async function getPlayerData({ statsId }: StatsIdParams): Promise<PlayerData | undefined> {
  const targetPlayerId: number = Number(statsId);
  try {
    await connect();
    const player = await prisma.player.findFirst({
      where: { statsId: targetPlayerId },
    });
    if (!player) {
      throw new Error("Player not found");
    }

    const playerPersonality = await prisma.personality.findUnique({
      where: { statsId: targetPlayerId },
      include: { primaryPosition: true },
    });
    if (!playerPersonality) {
      throw new Error("PlayerPersonality not found");
    }
    console.log("route prisma: ", playerPersonality);
    return { player, playerPersonality };
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

export default async function Page({ params }: { params: StatsIdParams }) {
  const playerData = await getPlayerData({ statsId: params.statsId });
  console.log(playerData);
  return (
    <main>
      {playerData ? (
        <div>
          <Image src="/avatars/dummy.png" alt="player image" width="64" height="64" />
          <p>{params.statsId}</p>
          <h2 className="flex-col red">
            {playerData.player.fullNameKana}
            <span>{playerData.player.fullName}</span>
          </h2>
          <ul>
            <li>{playerData.playerPersonality.birthDate}</li>
            <li>{playerData.playerPersonality.batSide}</li>
            <li>{playerData.playerPersonality.mlbDebutDate}</li>
            <li>{playerData.playerPersonality.pitchHand}</li>
            <li>{playerData.playerPersonality.primaryNumber}</li>
            <li>{playerData.playerPersonality.primaryPosition.name}</li>
          </ul>
        </div>
      ) : (
        <div>プレイヤー情報の取得に失敗しました。</div>
      )}
    </main>
  );
}
