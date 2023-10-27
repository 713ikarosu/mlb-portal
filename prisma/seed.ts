import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // delete all
  await prisma.player.deleteMany();

  // seeding
  const players: Prisma.PlayerCreateInput[] = [
    {
      statsId: 665487,
      fullName: 'Fernando Tatis Jr.',
      fullNameKana: 'フェルナンド・タティス・ジュニア',
    },
    {
      statsId: 547180,
      fullName: 'Bryce Harper',
      fullNameKana: 'ブライス・ハーパー',
    },
    {
      statsId: 596019,
      fullName: 'Francisco Lindor',
      fullNameKana: 'フランシスコ・リンドーア',
    },
    {
      statsId: 660271,
      fullName: 'Shohei Ohtani',
      fullNameKana: 'ショウヘイ・オオタニ',
    },
    {
      statsId: 545361,
      fullName: 'Mike Trout',
      fullNameKana: 'マイク・トラウト',
    },
    {
      statsId: 543037,
      fullName: 'Gerrit Cole',
      fullNameKana: 'ゲリット・コール',
    },
  ];
  for (const player of players) {
    await prisma.player.create({
      data: player,
    });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
