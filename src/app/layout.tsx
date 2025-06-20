import type { Metadata } from "next";
import "./globals.css";
import { zenmarugothic } from "@/assets/fonts/zenmarugothic";
export const metadata: Metadata = {
  title: "book-tracker",
  description: "book-tracker"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }} className={zenmarugothic.className}>{children}</body>
    </html>
  );
}