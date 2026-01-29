import { globalFont } from "@/libs/font";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Ignition",
  description:
    "My personal Next.js boilerplate for fast, consistent, and modern web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={globalFont.className}>{children}</body>
    </html>
  );
}
