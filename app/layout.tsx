import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import type React from "react";
import "../public/css/globals.css";
import { LayoutFooter } from "./_components/LayoutFooter";
import { LayoutHeader } from "./_components/LayoutHeader";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "MLB-PORTAL for Personal",
  description: "mlb fan site - for Japanese",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body className={NotoSansJP.className}>
        <LayoutHeader />
        {children}
        <LayoutFooter />
      </body>
    </html>
  );
}
