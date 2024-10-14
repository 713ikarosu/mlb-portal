import Heading from "@/app/_components/Heading";
import IconButton from "@/app/_components/IconButton";
import { addWords } from "@/services/manager/word/actions";

export default function AddNewPage() {
  return (
    <section className="flex space-y-8 py-16 flex-col w-full max-w-screen-md">
      <Heading>新規追加</Heading>
      <form action={addWords} className="flex space-y-4 flex-col">
        <div className="flex justify-between">
          <IconButton label="< Back" href="/manage" buttonType="ghost" />
          <button type="submit" className="btn btn-success btn-sm">
            Submit
          </button>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="word">Word</label>
          <input name="word" type="text" placeholder="Word Definition" className="input input-bordered" />
          <label htmlFor="word">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered h-[620px]"
            placeholder="Word Description"
          />
        </div>
      </form>
    </section>
  );
}
