import React, { PropsWithChildren } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import styles from "./modal.module.scss";

export interface IModalWindowProps extends PropsWithChildren {
  title: string;
  opened: boolean;
  onClose: () => unknown;
}

export const ModalWindow: React.FC<IModalWindowProps> = ({ title, opened, onClose, children }) => {
  return (
    <Dialog open={opened} onClose={onClose} className={styles.container}>
      <DialogBackdrop className={styles.background} />
      <DialogPanel className={styles.panel}>
        <DialogTitle className={styles.title}>{title}</DialogTitle>
        {children}
      </DialogPanel>
    </Dialog>
  );
};
