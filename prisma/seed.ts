import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // delete all
  await prisma.player.deleteMany();

  // seeding
  const players: Prisma.PlayerCreateInput[] = [
    {
      statsId: 665487,
      fullName: "Fernando Tatis Jr.",
      fullNameKana: "フェルナンド・タティス・ジュニア",
    },
    {
      statsId: 547180,
      fullName: "Bryce Harper",
      fullNameKana: "ブライス・ハーパー",
    },
    {
      statsId: 596019,
      fullName: "Francisco Lindor",
      fullNameKana: "フランシスコ・リンドーア",
    },
    {
      statsId: 660271,
      fullName: "Shohei Ohtani",
      fullNameKana: "ショウヘイ・オオタニ",
    },
    {
      statsId: 545361,
      fullName: "Mike Trout",
      fullNameKana: "マイク・トラウト",
    },
    {
      statsId: 543037,
      fullName: "Gerrit Cole",
      fullNameKana: "ゲリット・コール",
    },
  ];
  for (const player of players) {
    await prisma.player.create({
      data: player,
    });
  }

  const playerPersonalities: Prisma.PersonalityCreateInput[] = [
    {
      statsId: 665487,
      fullName: "Fernando Tatis Jr.",
      primaryNumber: "23",
      birthDate: "1999-01-02",
      primaryPosition: {
        code: "9",
        name: "Outfielder",
        type: "Outfielder",
        abbreviation: "RF",
      },
      batSide: "Right",
      pitchHand: "Right",
      mlbDebutDate: "2019-03-28",
    },
    {
      statsId: 547180,
      fullName: "Bryce Harper",
      primaryNumber: "3",
      birthDate: "1992-10-16",
      primaryPosition: {
        code: "3",
        name: "First Base",
        type: "Infielder",
        abbreviation: "1B",
      },
      batSide: "Left",
      pitchHand: "Right",
      mlbDebutDate: "2012-04-28",
    },
    {
      statsId: 596019,
      fullName: "Francisco Lindor",
      primaryNumber: "12",
      birthDate: "1993-11-14",
      primaryPosition: {
        code: "6",
        name: "Shortstop",
        type: "Infielder",
        abbreviation: "SS",
      },
      batSide: "Switch",
      pitchHand: "Right",
      mlbDebutDate: "2015-06-14",
    },
    {
      statsId: 660271,
      fullName: "Shohei Ohtani",
      primaryNumber: "17",
      birthDate: "1994-07-05",
      primaryPosition: {
        code: "Y",
        name: "Two-Way Player",
        type: "Two-Way Player",
        abbreviation: "TWP",
      },
      batSide: "Left",
      pitchHand: "Right",
      mlbDebutDate: "2018-03-29",
    },
    {
      statsId: 545361,
      fullName: "Mike Trout",
      primaryNumber: "27",
      birthDate: "1991-08-07",
      primaryPosition: {
        code: "8",
        name: "Outfielder",
        type: "Outfielder",
        abbreviation: "CF",
      },
      batSide: "Right",
      pitchHand: "Right",
      mlbDebutDate: "2011-07-08",
    },
    {
      statsId: 543037,
      fullName: "Gerrit Cole",
      primaryNumber: "45",
      birthDate: "1990-09-08",
      primaryPosition: {
        code: "1",
        name: "Pitcher",
        type: "Pitcher",
        abbreviation: "P",
      },
      batSide: "Right",
      pitchHand: "Right",
      mlbDebutDate: "2013-06-11",
    },
  ];
  for (const playerPersonality of playerPersonalities) {
    await prisma.personality.create({
      data: playerPersonality,
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
