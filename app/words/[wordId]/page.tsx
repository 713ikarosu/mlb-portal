import Heading from "@/app/_components/Heading";
import Text from "@/app/_components/common";
// import { SimpleLink } from "@/app/_components/SimpleLink";
import { SITE_NAME } from "@/app/constants";
import { getWord } from "@/services/getWord";
import type { Metadata } from "next";
// import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: {
    wordId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await getWord({ id: params.wordId });
  if (!params.wordId) {
    notFound();
  }
  console.log(params.wordId, data);

  // TODO: null, undefined handling
  return {
    title: `${data.word} | ${SITE_NAME}`,
    description: `${data.description} | ${SITE_NAME} は日本人ファン向けにメジャーリーグ情報を発信します。`,
  };
}

export default async function WordPage({ params }: Props) {
  const { data } = await getWord({ id: params.wordId });
  return (
    <section className="min-h-[80vh] flex space-y-8 py-16 flex-col w-full max-w-screen-md">
      <Heading divider>{data.word}</Heading>
      <div>
        <Text>{data.description}</Text>
        {/* MEMO: リンク付きページの理想形イメージ
        <p className="leading-6">
          例年7月31日（アメリカ東部標準時16:00）に定められる、メジャー球団が、メジャー契約（40人枠内）選手をシーズン中に
          <SimpleLink href="/">トレード</SimpleLink>できる期限日時のこと。
        </p>
        <p className="leading-6">
          2018年までは、事前に<SimpleLink href="/">ウェイバー</SimpleLink>
          を通過させれば8月以降のシーズン期間でも40人枠内の選手を<SimpleLink href="/">ウェイバー</SimpleLink>
          できたが、2019年からは
          <SimpleLink href="/">ウェイバー</SimpleLink>
          公示に伴う8月以降の<SimpleLink href="/">ウェイバー</SimpleLink>も禁止となった。なお、DFAに伴い40人枠を外れた
          <SimpleLink href="/">ウェイバー</SimpleLink>公示中の選手がクレーム（他球団から獲得申し込み、Claim
          off）を受け、選手が無条件譲渡されるケースは8月以降もありうる。また、今シーズン1度も40人枠に登録されていない
          <SimpleLink href="/">マイナー契約</SimpleLink>（40人枠外）選手については、8月以降も
          <SimpleLink href="/">ウェイバー</SimpleLink>可能。
        </p> */}
      </div>
    </section>
  );
}
