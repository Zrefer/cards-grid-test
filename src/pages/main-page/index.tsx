import React from "react";
import styles from "./main-page.module.scss";
import { AddNewCard } from "~/features/add-new-card";
import { CardsBoard } from "~/widgets/cards-board";

export const MainPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <AddNewCard />
      <CardsBoard />
    </div>
  );
};
