import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LangSelector from "@/components/LangSelector";
import Instructions from "@/components/Instructions";

const alegreya = Alegreya({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "混雑予測ボード",
  description: "レストランの混雑状況を予測するボードです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={alegreya.className}>
        <Navbar />
        <LangSelector />
        <Instructions />
        {children}
      </body>
    </html>
  );
}
