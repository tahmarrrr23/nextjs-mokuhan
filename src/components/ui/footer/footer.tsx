import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          &copy; {new Date().getFullYear()} Fumiya Yamashita. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
