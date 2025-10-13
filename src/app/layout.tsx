import "@/styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Next.js Ignition",
  description:
    "🚀 Next.js - my personal boilerplate for fast, consistent, and modern",
};

const globalFont = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={globalFont.className}>
      <body>{children}</body>
    </html>
  );
}
