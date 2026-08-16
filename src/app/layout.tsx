import type { Metadata } from "next";
import { Header } from "@/components/layout/header/header";
import { globalFont } from "@/styles/fonts";

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
  return (
    <html lang="en">
      <body className={globalFont.className}>
        <Header environment={process.env.NODE_ENV} />
        <main>{children}</main>
      </body>
    </html>
  );
}
