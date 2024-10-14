import type { ReactNode } from "react";

// TODO: 仮実装でwordページのものを持ってきています。
// TODO: 管理者ログイン認証など、追加実装の予定あり。
export default function ManageLayout({ children }: { children: ReactNode }) {
  return <main className="flex justify-center bg-gray-200 text-slate-600 px-4 md:px-0">{children}</main>;
}
