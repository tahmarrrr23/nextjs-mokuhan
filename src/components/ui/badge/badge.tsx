import type { ComponentPropsWithoutRef } from "react";
import styles from "./badge.module.css";

export interface BadgeProps extends ComponentPropsWithoutRef<"div"> {}

export const Badge = (props: BadgeProps) => {
  const { children, className = "", ...rest } = props;

  return (
    <div className={`${styles.badge} ${className}`} {...rest}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
