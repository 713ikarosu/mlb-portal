import { WordsTable } from "@/app/(admin)/manage/_components/WordsTable";
import Heading from "@/app/_components/Heading";
import IconButton from "@/app/_components/IconButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false, // noindexの設定
  },
};

export default function ManagePage() {
  return (
    <section className="flex space-y-8 py-16 flex-col w-full max-w-screen-md">
      <Heading>管理画面</Heading>
      <form className="flex space-y-4 flex-col">
        <h2 className="flex flex-col">MLB用語管理画面。現在開発中。</h2>
        <div className="flex justify-end">
          <IconButton label="New Item" href="/manage/words/new" buttonType="success" />
        </div>
        <WordsTable />
      </form>
    </section>
  );
}
