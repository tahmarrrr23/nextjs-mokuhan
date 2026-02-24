import styles from "./not-found-page.module.css";

export const NotFoundPage = () => {
  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <div className={styles.message}>
          <h1>404</h1>
          <p>Page not found</p>
        </div>
      </div>
    </main>
  );
};
