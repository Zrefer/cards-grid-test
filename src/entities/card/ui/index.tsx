import React, { CSSProperties, PropsWithChildren } from "react";
import styles from "./card.module.scss";

import HandleIcon from "~/shared/icons/handle-icon.svg?react";
import { useSortable } from "@dnd-kit/sortable";

interface ICardProps extends PropsWithChildren {
  cardId: string;
  title: string;
  description: string;
}

export const Card: React.FC<ICardProps> = ({ cardId, title, description, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: cardId,
  });
  const style: CSSProperties = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
  };

  return (
    <div ref={setNodeRef} className={styles.container} style={style}>
      <div>
        <HandleIcon className={styles.icon} {...attributes} {...listeners} />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};
