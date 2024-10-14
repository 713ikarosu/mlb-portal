import Heading from "@/app/_components/Heading";
import Text from "@/app/_components/common";
import { SITE_NAME } from "@/app/constants";
import { getWord } from "@/services/getWord";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    wordId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { word } = await getWord({ id: params.wordId });
  if (!params.wordId || !word) {
    notFound();
  }

  // TODO: null, undefined handling
  return {
    title: `${word.word} | ${SITE_NAME}`,
    description: `${word.description} | ${SITE_NAME} は日本人ファン向けにメジャーリーグ情報を発信します。`,
  };
}

export default async function WordPage({ params }: Props) {
  const { word } = await getWord({ id: params.wordId });
  if (!word) {
    notFound();
  }
  return (
    <section className="min-h-[80vh] flex space-y-8 py-16 flex-col w-full max-w-screen-md">
      <Heading divider>{word.word}</Heading>
      <div>
        <Text>{word.description}</Text>
      </div>
    </section>
  );
}
