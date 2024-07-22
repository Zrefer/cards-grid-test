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
