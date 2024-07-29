import Text from "@/app/_components/common";
import { getWords } from "@/services/manager/getWords";

export async function WordsTable() {
  const { words } = await getWords({ revalidate: 60 * 60 * 24 });

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
                <tr className="hover" key={`${word.id}`}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>{word.id}</th>
                  <td>{word.word}</td>
                  <td>{word.description}</td>
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
