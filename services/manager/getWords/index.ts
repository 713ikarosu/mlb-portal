import { path, handleFailed, handleSucceed } from "../../";

type Word = {
  id: string;
  word: string;
  description: string;
};

type Props = {
  revalidate?: number;
};

export async function getWords({ revalidate }: Props): Promise<{ words: Word[] }> {
  console.log("getWords url: ", path("/api/words/"));

  return fetch(path("/api/words/"), {
    next: {
      tags: ["words"],
      ...(revalidate !== undefined && { revalidate }),
    },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
