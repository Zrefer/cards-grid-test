import React from "react";
// import { CardsBoard } from "~/widgets/cards-board";
import styles from "./main-page.module.scss";
import { AddNewCard } from "~/features/add-new-card";

export const MainPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <AddNewCard />
      {/* <CardsBoard /> */}
    </div>
  );
};
