import { createEvent, createStore } from "effector";
import { v4 as uuid } from "uuid";
import { persist } from "effector-storage/local";

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
  const result = [...prev];

  const index = prev.findIndex((card) => card.id === edited.id);
  if (index === -1) return result;

  result[index] = edited;
  return result;
});

export const deleteCard = createEvent<string>("cards/delete");
$cards.on(deleteCard, (prev, id) => {
  return [...prev].filter((card) => card.id !== id);
});
