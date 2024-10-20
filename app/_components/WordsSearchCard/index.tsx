import type { Word } from "@prisma/client";
import Link from "next/link";

type Props = {
  word: Word;
};

export function WordsSearchCard({ word }: Props) {
  return (
    <Link href={`/words/${word.id}/`} className="card shadow-xl bg-base-100 w-full text-base-content">
      <div className="card-body ">
        <h2 className="card-title">{word.word}</h2>
        <p className="line-clamp-3">{word.description}</p>
        <div className="card-actions justify-end">詳細 {">"}</div>
      </div>
    </Link>
  );
}
