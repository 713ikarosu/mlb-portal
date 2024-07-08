import type { Metadata } from "next";
import Heading from "../_components/Heading";

export const metadata: Metadata = {
  robots: {
    index: false, // noindexの設定
  },
};
export default function WordsPage() {
  return (
    <section className="flex space-y-8 py-16 flex-col w-full max-w-screen-md">
      <Heading>MLB用語解説（開発中）</Heading>
      <form className="flex space-y-4 flex-col">
        <label className="flex flex-col">MLB用語を日本人ファン向けに解説します。現在調整中につき動きません。</label>
        {/* TODO: フォームのコンポーネント作成 */}
        <input type="text" className="bg-white rounded-md h-8" />
        <button type="submit" className="btn btn-primary">
          検索する
        </button>
      </form>
    </section>
  );
}
