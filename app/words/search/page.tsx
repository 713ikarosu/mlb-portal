import Heading from "@/app/_components/Heading";
import { WordsSearchCard } from "@/app/_components/WordsSearchCard";
import { searchWords } from "@/app/words/action";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata = {
  title: "検索結果",
} satisfies Metadata;

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.query ?? "";
  if (Array.isArray(query)) {
    return null;
  }
  const { words } = await searchWords(query);
  if (!words || words.length === 0) {
    notFound();
  }

  return (
    <section className="flex flex-col gap-8 w-full max-w-screen-md">
      <Heading>検索結果</Heading>
      <div>検索キーワード：{query}</div>
      {words.map((word) => {
        return <WordsSearchCard word={word} key={word.id} />;
      })}
    </section>
  );
}
