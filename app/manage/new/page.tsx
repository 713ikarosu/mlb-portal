import Heading from "@/app/_components/Heading";
import IconButton from "@/app/_components/IconButton";

export default function AddNewPage() {
  return (
    <section className="flex space-y-8 py-16 flex-col w-full max-w-screen-md">
      <Heading>MLBポータル - 管理画面 - 新規追加</Heading>
      <div>
        <IconButton label="Back" href="/manage" buttonType="ghost" />
      </div>
      <form className="flex space-y-4 flex-col">
        <div className="flex flex-col space-y-2">
          <label htmlFor="word">Word</label>
          <input type="text" placeholder="Word Definition" className="input input-bordered" />
          <label htmlFor="word">Description</label>
          <textarea className="textarea textarea-bordered" placeholder="Word Description" />
        </div>
      </form>
    </section>
  );
}
