import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";

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
    <>
      <Header environment={process.env.NODE_ENV} />
      {children}
      <Footer />
    </>
  );
}
