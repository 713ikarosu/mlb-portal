import Text from "@/app/_components/common";
import { getWords } from "@/services/manager/getWords";
import Link from "next/link";

export async function WordsTable() {
  const { words } = await getWords();

  return (
    <div className="overflow-x-auto">
      {words.length > 0 ? (
        <table className="table bg-neutral">
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
                <tr className="hover" key={word.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>
                    <Link href={`/manage/${word.id}`} className="block w-full">
                      {word.id}
                    </Link>
                  </th>
                  <td>
                    <Link href={`/manage/${word.id}`} className="block w-full">
                      {word.word}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/manage/${word.id}`} className="block w-full">
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