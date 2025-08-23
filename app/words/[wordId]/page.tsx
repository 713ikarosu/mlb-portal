import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Heading from "@/app/_components/Heading";
import { getWord } from "@/app/(admin)/manage/action";
import { SITE_NAME } from "@/app/constants";

type Props = {
  params: Promise<{
    wordId: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { wordId } = await params;
  const { word } = await getWord({ id: wordId });
  if (!wordId || !word) {
    notFound();
  }

  // TODO: null, undefined handling
  return {
    title: `${word.word} | ${word.word}の意味 | ${SITE_NAME}`,
    description: `${word.description} | ${SITE_NAME} は日本人ファン向けにメジャーリーグ情報を発信します。`,
  };
}

export default async function WordPage({ params }: Props) {
  const { wordId } = await params;
  const { word } = await getWord({ id: wordId });
  if (!word) {
    notFound();
  }
  return (
    <div className="flex flex-col space-y-12">
      <section className="min-h-[50vh] flex space-y-8 flex-col w-full max-w-screen-md">
        <Heading divider>{word.word}</Heading>
        <div>
          <ReactMarkdown>{word.description}</ReactMarkdown>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold">関連ワード</h2>
        <div className="divider divider-neutral" />
      </section>
    </div>
  );
}
