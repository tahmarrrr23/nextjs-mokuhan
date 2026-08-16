import type { Metadata } from "next";
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
      <body className={globalFont.className}>{children}</body>
    </html>
  );
}
