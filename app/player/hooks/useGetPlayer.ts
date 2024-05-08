import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

type UseGetPlayerProps = {
  statsId: string;
};

export const useGetPlayer = ({ statsId }: UseGetPlayerProps) => {
  // TODO: 型
  const { data, error, isLoading } = useSWR(`/api/player/${statsId}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};
