import { WordUpdateForm } from "@/app/(admin)/manage/_components/WordUpdateForm";
import Heading from "@/app/_components/Heading";
import { getWord } from "@/services/getWord";
import { notFound } from "next/navigation";

type Props = {
  params: {
    wordId: string;
  };
};

export default async function WordPage({ params }: Props) {
  const { word } = await getWord({ id: params.wordId });
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
