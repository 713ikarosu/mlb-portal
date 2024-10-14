import { Loading } from "@/app/_components/common/Loading";
import { useLoading } from "@/lib/context/LoadingContext";
import type { ReactNode } from "react";

export function LoadingWrapper({ children }: { children: ReactNode }) {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
}
