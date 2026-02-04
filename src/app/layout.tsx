import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { globalFont } from "@/libs/font";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js Ignition",
    template: "%s | Next.js Ignition",
  },
  description:
    "My personal Next.js boilerplate for fast, consistent, and modern web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const environment = process.env.NODE_ENV;

  return (
    <html lang="en">
      <body className={globalFont.className}>
        <Header environment={environment} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
