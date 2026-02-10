import styles from "./home-page.module.css";

export const HomePage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.about}>
          <p>Mokuhan is a traditional woodblock printing process, focused on carving, ink, and manual printing.</p>
        </div>
      </div>
    </main>
  );
};
