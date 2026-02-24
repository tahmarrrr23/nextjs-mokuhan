import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { globalFont } from "@/libs/font";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js Mokuhan",
    template: "%s | Next.js Mokuhan",
  },
  description:
    "Mokuhan is a traditional woodblock printing process, focused on carving, ink, and manual printing.",
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
