import type { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  divider?: boolean;
}

export default function Heading({ children, divider }: HeadingProps) {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold">{children}</h1>
      {divider && <div className="divider divider-neutral" />}
    </div>
  );
}
