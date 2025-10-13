import { Card } from "@/components/ui/card";
import styles from "./home-page.module.css";

export const HomePage = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>Next.js Ignition</h1>
      <div className={styles.cardList}>
        <Card>Hello</Card>
        <Card>Hello</Card>
        <Card>Hello</Card>
      </div>
    </div>
  );
};
