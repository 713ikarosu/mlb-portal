import Heading from "@/app/_components/Heading";
import IconButton from "@/app/_components/IconButton";
import { addWords } from "@/services/manager/word/actions";

export default function AddNewPage() {
  return (
    <section className="flex space-y-8 py-16 flex-col w-full max-w-screen-md">
      <Heading>MLBポータル - 管理画面 - 新規追加</Heading>
      <div>
        <IconButton label="Back" href="/manage" buttonType="ghost" />
      </div>
      <form action={addWords} className="flex space-y-4 flex-col">
        <div className="flex flex-col space-y-2">
          <label htmlFor="word">Word</label>
          <input name="word" type="text" placeholder="Word Definition" className="input input-bordered" />
          <label htmlFor="word">Description</label>
          <textarea name="description" className="textarea textarea-bordered" placeholder="Word Description" />
          <div className="flex justify-end">
            <button type="submit" className="btn btn-success btn-md">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
