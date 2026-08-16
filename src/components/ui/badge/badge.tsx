import type { ComponentPropsWithoutRef } from "react";
import styles from "./badge.module.css";

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {}

export const Badge = ({ className = "", ...props }: BadgeProps) => (
  <span className={`${styles.badge} ${className}`} {...props} />
);
