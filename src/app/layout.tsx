import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Ignition",
  description:
    "🚀 Next.js - my personal boilerplate for fast, consistent, and modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
