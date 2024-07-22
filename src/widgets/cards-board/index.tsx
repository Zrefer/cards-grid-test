import React from "react";
import styles from "./cards-board.module.scss";
import { Card } from "~/entities/card/ui";
import { useUnit } from "effector-react";
import { $cards, moveCard } from "~/entities/card";
import { EditCard } from "~/features/edit-card";
import { DeleteCard } from "~/features/delete-card";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

export const CardsBoard: React.FC = () => {
  const cards = useUnit($cards);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id === over?.id) return;

    const oldIndex = cards.findIndex((card) => card.id === active.id);
    const newIndex = cards.findIndex((card) => card.id === over?.id);

    moveCard({ oldIndex, newIndex });
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={cards} strategy={rectSortingStrategy}>
        <div className={styles.container}>
          {cards.map((card) => (
            <div key={card.id} style={{ gridColumn: `span ${card.size}` }}>
              <Card cardId={card.id} title={card.title} description={card.description}>
                <div className={styles.cardActions}>
                  <EditCard cardId={card.id} />
                  <DeleteCard cardId={card.id} />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
