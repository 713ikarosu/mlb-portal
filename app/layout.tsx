import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import type React from "react";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "MLB-PORTAL for Personal",
  description: "mlb fan site - Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>{children}</body>
    </html>
  );
}
