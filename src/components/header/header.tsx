import Link from "next/link";
import { Badge } from "../badge";
import styles from "./header.module.css";

export interface HeaderProps {
  environment: "development" | "production" | "test";
}

export const Header = ({ environment }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">Next.js Mokuhan</Link>
        </h1>
        <Badge>{environment}</Badge>
      </div>
    </header>
  );
};
