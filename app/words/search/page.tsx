import Heading from "@/app/_components/Heading";
import { searchWords } from "@/services/word/actions";
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
    <div className="flex flex-col gap-8">
      <Heading>検索結果</Heading>
      <div>検索キーワード：{query}</div>
      <div>{words[0].id}</div>
      <div>{words[0].word}</div>
      <div>{words[0].description}</div>
    </div>
  );
}
