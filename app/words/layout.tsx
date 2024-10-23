import type { ReactNode } from "react";

export default function WordsLayout({ children }: { children: ReactNode }) {
  return <main className="flex justify-center py-16 bg-gray-200 text-slate-600 px-4 md:px-0 h-full">{children}</main>;
}
