import Link from "next/link";
import { Badge } from "@/components/ui/badge/badge";
import styles from "./header.module.css";

export interface HeaderProps {
  environment: "development" | "production" | "test";
}

export const Header = ({ environment }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">Next.js Mokuhan</Link>
      </h1>
      <Badge>{environment}</Badge>
    </header>
  );
};
