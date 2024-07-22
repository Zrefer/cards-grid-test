import React, { PropsWithChildren } from "react";
import styles from "./card.module.scss";

import HandleIcon from "~/shared/icons/handle-icon.svg?react";

interface ICardProps extends PropsWithChildren {
  title: string;
  description: string;
}

export const Card: React.FC<ICardProps> = ({ title, description, children }) => {
  return (
    <div className={styles.container}>
      <HandleIcon className={styles.icon} />
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};
