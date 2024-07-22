import React, { PropsWithChildren } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import styles from "./modal.module.scss";

export interface IModalWindowProps extends PropsWithChildren {
  title: string;
  opened: boolean;
  onClose: () => unknown;
}

export const ModalWindow: React.FC<IModalWindowProps> = ({ title, opened, onClose, children }) => {
  return (
    <Dialog open={opened} onClose={onClose} className={styles.container}>
      <DialogPanel className={styles.panel}>
        <DialogTitle>{title}</DialogTitle>
        {children}
      </DialogPanel>
    </Dialog>
  );
};
