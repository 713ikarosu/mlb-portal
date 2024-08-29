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
      </div>
    </section>
  );
}
