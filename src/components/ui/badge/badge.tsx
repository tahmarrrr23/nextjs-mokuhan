import type { ComponentPropsWithoutRef } from "react";
import styles from "./badge.module.css";

export interface BadgeProps extends ComponentPropsWithoutRef<"div"> {}

export const Badge = (props: BadgeProps) => {
  const { children, className = "", ...rest } = props;

  return (
    <span className={`${styles.badge} ${className}`} {...rest}>
      {children}
    </span>
  );
};
