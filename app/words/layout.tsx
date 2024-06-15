import type { ReactNode } from "react";

export default function WordsLayout({ children }: { children: ReactNode }) {
  return <main className="flex justify-center bg-gray-200 text-slate-600">{children}</main>;
}
