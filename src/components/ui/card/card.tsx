import type { ComponentPropsWithoutRef } from "react";
import styles from "./card.module.css";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {}

export const Card = (props: CardProps) => {
  const { className, children, ...rest } = props;

  return (
    <div className={`${styles.root} ${className}`} {...rest}>
      {children}
    </div>
  );
};
