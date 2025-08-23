import { notFound } from "next/navigation";
import Heading from "@/app/_components/Heading";
import { WordUpdateForm } from "@/app/(admin)/manage/_components/WordUpdateForm";
import { getWord } from "@/app/(admin)/manage/action";

type Props = {
  params: Promise<{
    wordId: string;
  }>;
};

export default async function WordPage({ params }: Props) {
  const { wordId } = await params;
  const { word } = await getWord({ id: wordId });
  if (!word) {
    notFound();
  }

  return (
    <section className="min-h-[80vh] flex space-y-8 py-16 flex-col w-full max-w-screen-md">
      <Heading>更新・削除</Heading>
      <WordUpdateForm word={word} />
    </section>
  );
}
