import IconButton from "@/app/_components/IconButton";
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
      <div>
        <IconButton label="Back" href="/manage" buttonType="ghost" />
      </div>
      <form action="#" className="flex space-y-4 flex-col">
        <label htmlFor="word">Word</label>
        {/* TODO: read only になってるので編集可能にする */}
        <input
          name="word"
          type="text"
          placeholder="Word Definition"
          className="input input-bordered"
          value={word.word}
        />
        <label htmlFor="description">Description</label>
        {/* TODO: read only になってるので編集可能にする */}
        <textarea
          name="description"
          className="textarea textarea-bordered"
          placeholder="Word Description"
          value={word.description}
        />
        <div className="flex justify-end">
          <button type="submit" className="btn btn-success btn-md">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
