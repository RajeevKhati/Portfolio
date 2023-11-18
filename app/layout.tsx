import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajeev Khati | Personal Portfolio",
  description: "Rajeev is a full stack developer with 2+ years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-cyan-50 to-cyan-100 text-gray-950 h-[900px]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
