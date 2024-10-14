import type { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export default function Text({ children }: TextProps) {
  return <p className="text-md leading-7">{children}</p>;
}
