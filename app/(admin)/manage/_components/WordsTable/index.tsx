import { getWords } from "@/app/(admin)/manage/action";
import Text from "@/app/_components/common/Text";
import Link from "next/link";

export async function WordsTable() {
  const { words } = await getWords();

  return (
    <div className="overflow-x-auto">
      {words.length > 0 ? (
        <table className="table bg-neutral table-pin-rows min-w-[768px]">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>ID</th>
              <th>Word</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word) => {
              return (
                <tr className="hover text-base-content" key={word.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>
                    <Link href={`/manage/words/${word.id}`} className="block w-full">
                      {word.id}
                    </Link>
                  </th>
                  <td>
                    <Link href={`/manage/words/${word.id}`} className="block w-full min-w-24">
                      {word.word}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/manage/words/${word.id}`} className="h-16 w-full line-clamp-3">
                      {word.description}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Text>情報がありません。</Text>
      )}
    </div>
  );
}
