import Heading from "@/app/_components/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false, // noindexの設定
  },
};

export default function WordsPage() {
  return (
    <section className="flex space-y-8 flex-col w-full max-w-screen-md">
      <Heading>MLB用語解説（開発中）</Heading>
      <form className="flex space-y-4 flex-col" action="/words/search" method="GET">
        <h3 className="flex flex-col">MLB用語を日本人ファン向けに解説します。現在調整中につき動きません。</h3>
        {/* TODO: フォームのコンポーネント作成 */}
        <div className="flex flex-col space-y-12 md:space-y-16">
          <input
            type="text"
            name="query"
            className="w-full input input-borderd bg-white"
            placeholder="例：ポストシーズン"
          />
          <button type="submit" className="btn btn-base-300 w-full">
            検索する
          </button>
        </div>
      </form>
    </section>
  );
}
