import styles from "./home-page.module.css";

export const HomePage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.about}>
          <p>Ignition — a single, silent spark that sets tomorrow in motion.</p>
        </div>
      </div>
    </main>
  );
};
