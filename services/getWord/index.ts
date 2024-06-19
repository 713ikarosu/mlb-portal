import { path, handleFailed, handleSucceed } from "../";

type Word = {
  id: string;
  word: string;
  description: string;
};

type Props = {
  id: string;
  revalidate?: number;
};

export async function getWord({ id, revalidate }: Props): Promise<{ data: Word }> {
  return fetch(path(`/api/words/${id}`), {
    next: {
      tags: [`words/${id}`],
      ...(revalidate !== undefined && { revalidate }),
    },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
