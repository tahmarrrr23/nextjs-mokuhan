import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <Header environment={process.env.NODE_ENV} />
      {children}
      <Footer />
    </div>
  );
}
