import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const word1 = await prisma.word.create({
    data: {
      word: "トレードデットライン",
      description:
        "例年7月31日（アメリカ東部標準時16:00）に定められる、メジャー球団が、メジャー契約（40人枠内）選手をシーズン中にトレードできる期限日時のこと。2018年までは、事前にウェイバーを通過させれば8月以降のシーズン期間でも40人枠内の選手をウェイバーできたが、2019年からはウェイバー公示に伴う8月以降のウェイバーも禁止となった。なお、DFAに伴い40人枠を外れたウェイバー公示中の選手がクレーム（他球団から獲得申し込み、Claim off）を受け、選手が無条件譲渡されるケースは8月以降もありうる。また、今シーズン1度も40人枠に登録されていないマイナー契約（40人枠外）選手については、8月以降もウェイバー可能。",
    },
  });

  const word2 = await prisma.word.create({
    data: {
      word: "イッペイ",
      description: "MLBで一番有名な日本人。",
    },
  });

  await prisma.relatedLink.create({
    data: {
      wordId: word1.id,
      linkedWordId: word2.id,
      linkedWord: word2.word,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
