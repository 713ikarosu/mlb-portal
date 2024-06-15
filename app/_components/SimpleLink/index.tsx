import Link from "next/link";
import type { ReactNode } from "react";

type SimpleLink = {
  children: ReactNode;
  href: string;
};

export const SimpleLink = ({ children, href }: SimpleLink) => {
  return (
    <Link href={href} className="text-blue-700 active:text-blue-500">
      {children}
    </Link>
  );
};
