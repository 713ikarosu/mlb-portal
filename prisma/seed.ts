import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // delete all
  await prisma.personality.deleteMany();
  await prisma.player.deleteMany();

  // seeding
  const players: Prisma.PlayerCreateInput[] = [
    {
      fullName: "Fernando Tatis Jr.",
      fullNameKana: "フェルナンド・タティス・ジュニア",
      personality: {
        create: {
          statsId: "665487",
          fullName: "Fernando Tatis Jr.",
          primaryNumber: "23",
          birthDate: "1999-01-02",
          primaryPositionCode: "9",
          batSide: "Right",
          pitchHand: "Right",
          mlbDebutDate: "2019-03-28",
        },
      },
    },
    {
      fullName: "Bryce Harper",
      fullNameKana: "ブライス・ハーパー",
      personality: {
        create: {
          statsId: "547180",
          fullName: "Bryce Harper",
          primaryNumber: "3",
          birthDate: "1992-10-16",
          primaryPositionCode: "3",
          batSide: "Left",
          pitchHand: "Right",
          mlbDebutDate: "2012-04-28",
        },
      },
    },
    {
      fullName: "Francisco Lindor",
      fullNameKana: "フランシスコ・リンドーア",
      personality: {
        create: {
          statsId: "596019",
          fullName: "Francisco Lindor",
          primaryNumber: "12",
          birthDate: "1993-11-14",
          primaryPositionCode: "6",
          batSide: "Switch",
          pitchHand: "Right",
          mlbDebutDate: "2015-06-14",
        },
      },
    },
    {
      fullName: "Shohei Ohtani",
      fullNameKana: "ショウヘイ・オオタニ",
      personality: {
        create: {
          statsId: "660271",
          fullName: "Shohei Ohtani",
          primaryNumber: "17",
          birthDate: "1994-07-05",
          primaryPositionCode: "Y",
          batSide: "Left",
          pitchHand: "Right",
          mlbDebutDate: "2018-03-29",
        },
      },
    },
    {
      fullName: "Mike Trout",
      fullNameKana: "マイク・トラウト",
      personality: {
        create: {
          statsId: "545361",
          fullName: "Mike Trout",
          primaryNumber: "27",
          birthDate: "1991-08-07",
          primaryPositionCode: "8",
          batSide: "Right",
          pitchHand: "Right",
          mlbDebutDate: "2011-07-08",
        },
      },
    },
    {
      fullName: "Gerrit Cole",
      fullNameKana: "ゲリット・コール",
      personality: {
        create: {
          statsId: "543037",
          fullName: "Gerrit Cole",
          primaryNumber: "45",
          birthDate: "1990-09-08",
          primaryPositionCode: "1",
          batSide: "Right",
          pitchHand: "Right",
          mlbDebutDate: "2013-06-11",
        },
      },
    },
  ];
  for (const player of players) {
    await prisma.player.create({
      data: player,
    });
  }

  const primaryPositions: Prisma.PrimaryPositionCreateManyInput[] = [
    {
      code: "0",
      name: "NoAssigned",
      type: "NoAssigned",
      abbreviation: "N",
    },
    {
      code: "1",
      name: "Pitcher",
      type: "Pitcher",
      abbreviation: "P",
    },
    {
      code: "2",
      name: "Catcher",
      type: "Catcher",
      abbreviation: "C",
    },
    {
      code: "3",
      name: "First Base",
      type: "Infielder",
      abbreviation: "1B",
    },
    {
      code: "4",
      name: "Second Base",
      type: "Infielder",
      abbreviation: "2B",
    },
    {
      code: "5",
      name: "Third Base",
      type: "Infielder",
      abbreviation: "3B",
    },
    {
      code: "6",
      name: "Shortstop",
      type: "Infielder",
      abbreviation: "SS",
    },
    {
      code: "7",
      name: "Outfielder",
      type: "Outfielder",
      abbreviation: "LF",
    },
    {
      code: "8",
      name: "Outfielder",
      type: "Outfielder",
      abbreviation: "CF",
    },
    {
      code: "9",
      name: "Outfielder",
      type: "Outfielder",
      abbreviation: "RF",
    },
    {
      code: "Y",
      name: "Two-Way Player",
      type: "Two-Way Player",
      abbreviation: "TWP",
    },
  ];
  // await prisma.primaryPosition.createMany({
  //   data: primaryPositions,
  // });
  for (const primaryPosition of primaryPositions) {
    // await prisma.primaryPosition.createMany({ data: primaryPosition });
    await prisma.primaryPosition.create({
      data: primaryPosition,
    });
  }

  // const playerPersonalities: Prisma.PersonalityCreateInput[] = [
  //   {
  //     statsId: 665487,
  //     fullName: "Fernando Tatis Jr.",
  //     primaryNumber: "23",
  //     birthDate: "1999-01-02",
  //     primaryPositionCode: "9",
  //     batSide: "Right",
  //     pitchHand: "Right",
  //     mlbDebutDate: "2019-03-28",
  //   },
  //   {
  //     statsId: 547180,
  //     fullName: "Bryce Harper",
  //     primaryNumber: "3",
  //     birthDate: "1992-10-16",
  //     primaryPositionCode: "3",
  //     batSide: "Left",
  //     pitchHand: "Right",
  //     mlbDebutDate: "2012-04-28",
  //   },
  //   {
  //     statsId: 596019,
  //     fullName: "Francisco Lindor",
  //     primaryNumber: "12",
  //     birthDate: "1993-11-14",
  //     primaryPositionCode: "6",
  //     batSide: "Switch",
  //     pitchHand: "Right",
  //     mlbDebutDate: "2015-06-14",
  //   },
  //   {
  //     statsId: 660271,
  //     fullName: "Shohei Ohtani",
  //     primaryNumber: "17",
  //     birthDate: "1994-07-05",
  //     primaryPositionCode: "Y",
  //     batSide: "Left",
  //     pitchHand: "Right",
  //     mlbDebutDate: "2018-03-29",
  //   },
  //   {
  //     statsId: 545361,
  //     fullName: "Mike Trout",
  //     primaryNumber: "27",
  //     birthDate: "1991-08-07",
  //     primaryPositionCode: "8",
  //     batSide: "Right",
  //     pitchHand: "Right",
  //     mlbDebutDate: "2011-07-08",
  //   },
  //   {
  //     statsId: 543037,
  //     fullName: "Gerrit Cole",
  //     primaryNumber: "45",
  //     birthDate: "1990-09-08",
  //     primaryPositionCode: "1",
  //     batSide: "Right",
  //     pitchHand: "Right",
  //     mlbDebutDate: "2013-06-11",
  //   },
  // ];
  // for (const playerPersonality of playerPersonalities) {
  //   await prisma.personality.create({
  //     data: playerPersonality,
  //   });
  // }
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
