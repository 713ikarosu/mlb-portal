import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import type React from "react";
import "@/public/css/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LayoutFooter } from "./_components/LayoutFooter";
import { LayoutHeader } from "./_components/LayoutHeader";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata = {
  title: "MLB ポータル",
  description: "mlb fan site - for Japanese",
} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {process.env.GA_TRACKING_ID && <GoogleAnalytics gaId={process.env.GA_TRACKING_ID} />}
      </head>
      <body className={`${NotoSansJP.className} bg-gray-200`}>
        <LayoutHeader>{children}</LayoutHeader>
      </body>
    </html>
  );
}
