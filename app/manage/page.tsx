import type { Metadata } from "next";
import Heading from "../_components/Heading";
import IconButton from "../_components/IconButton";
import { WordsTable } from "./_components/WordsTable";

export const metadata: Metadata = {
  robots: {
    index: false, // noindexの設定
  },
};

export default function ManagePage() {
  return (
    <section className="flex space-y-8 py-16 flex-col w-full max-w-screen-md">
      <Heading>MLBポータル - 管理画面</Heading>
      <form className="flex space-y-4 flex-col">
        <h2 className="flex flex-col">MLB用語管理画面。現在開発中。</h2>
        <div>
          <IconButton label="New Item" href="/manage/new" buttonType="success" />
        </div>
        <WordsTable />
      </form>
    </section>
  );
}
