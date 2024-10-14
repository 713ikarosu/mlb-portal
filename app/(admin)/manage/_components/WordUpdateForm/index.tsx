"use client";

import IconButton from "@/app/_components/IconButton";
import { wordSchema } from "@/lib/form/schema";
import { deleteWord, updateWord } from "@/services/manager/word/actions";
import { getInputProps, getTextareaProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import type { Word } from "@prisma/client";
import Link from "next/link";

type Props = {
  word: Word;
};

export function WordUpdateForm({ word }: Props) {
  const [form, fields] = useForm({
    onValidate({ formData }) {
      // Server 側と同じバリデーションがクライアントで行える
      return parseWithZod(formData, { schema: wordSchema });
    },
    shouldRevalidate: "onBlur",
    defaultValue: {
      word: word.word,
      description: word.description,
    },
  });
  return (
    <>
      <div className="flex justify-between">
        <IconButton label="< Back" href="/manage" buttonType="ghost" />
        <Link href={`/words/${word.id}`} className="btn btn-sm btn-accent">
          Current Page
        </Link>
        <form action={deleteWord}>
          <input
            name="wordId"
            type="text"
            placeholder="Word Id"
            className="input input-bordered"
            value={word.id}
            readOnly
            hidden
          />
          {/* TODO: 確認モーダルを挟む */}
          <button type="submit" className="btn btn-secondary btn-sm">
            Delete
          </button>
        </form>
      </div>
      <form id={form.id} onSubmit={form.onSubmit} action={updateWord} className="flex space-y-4 flex-col" noValidate>
        <div className="flex flex-col gap-2">
          <label htmlFor="wordId">Word Id</label>
          <input
            name="wordId"
            type="text"
            placeholder="Word Id"
            className="input input-bordered"
            value={word.id}
            readOnly
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={fields.word.id}>Word</label>
          <input {...getInputProps(fields.word, { type: "text" })} className="input input-bordered" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={fields.description.id}>Description</label>
          <textarea
            {...getTextareaProps(fields.description)}
            className="textarea textarea-bordered textarea-md h-[620px]"
          />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="btn btn-success btn-md">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
