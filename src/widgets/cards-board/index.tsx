import React from "react";
import styles from "./cards-board.module.scss";
import { Card } from "~/entities/card/ui";
import { useUnit } from "effector-react";
import { $cards } from "~/entities/card";
import { EditCard } from "~/features/edit-card";
import { DeleteCard } from "~/features/delete-card";

export const CardsBoard: React.FC = () => {
  const cards = useUnit($cards);
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <div style={{ gridColumn: `span ${card.size}` }}>
          <Card key={card.id} title={card.title} description={card.description}>
            <div className={styles.cardActions}>
              <EditCard cardId={card.id} />
              <DeleteCard cardId={card.id} />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
