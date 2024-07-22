import { createEvent, createStore } from "effector";
import { v4 as uuid } from "uuid";
import { persist } from "effector-storage/local";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export interface ICard {
  id: string;
  title: string;
  description: string;
  size: number;
}
type AddCardType = Omit<ICard, "id">;

export const $cards = createStore<ICard[]>([]);
persist({ key: `cards`, store: $cards });

export const addCard = createEvent<AddCardType>("cards/add");
$cards.on(addCard, (prev, card) => [...prev, { id: uuid(), ...card }]);

export const editCard = createEvent<ICard>("cards/edit");
$cards.on(editCard, (prev, edited) => {
  const index = prev.findIndex((card) => card.id === edited.id);
  if (index === -1) return prev;

  const result = [...prev];
  result[index] = edited;
  return result;
});

export const deleteCard = createEvent<string>("cards/delete");
$cards.on(deleteCard, (prev, id) => {
  return [...prev].filter((card) => card.id !== id);
});

export const moveCard = createEvent<{ oldIndex: number; newIndex: number }>("cards/move");
$cards.on(moveCard, (prev, { oldIndex, newIndex }) => {
  return arrayMove(prev, oldIndex, newIndex);
});
