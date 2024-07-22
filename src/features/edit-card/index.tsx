import React, { useMemo, useState } from "react";

import styles from "./edit-card.module.scss";

import EditIcon from "~/shared/icons/edit-icon.svg?react";
import CheckIcon from "~/shared/icons/check-icon.svg?react";

import { Button } from "~/shared/ui/button";
import { ModalWindow } from "~/shared/ui/modal-window";

import { $cards, editCard } from "~/entities/card";
import { validationSchema, ValidationType } from "./validation-schema";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { Input } from "@headlessui/react";

interface IEditCardProps {
  cardId: string;
}

export const EditCard: React.FC<IEditCardProps> = ({ cardId: id }) => {
  const [editMenuOpened, setEditMenuOpened] = useState<boolean>(false);

  const cards = useUnit($cards);
  const card = useMemo(() => cards.find((card) => card.id === id), [cards, id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationType>({
    resolver: zodResolver(validationSchema),
    values: {
      title: card?.title ?? "",
      description: card?.description ?? "",
      size: card?.size ?? 3,
    },
  });

  const _handleSubmit: SubmitHandler<ValidationType> = (form) => {
    editCard({ id, ...form });
    setEditMenuOpened(false);
  };

  return (
    <div>
      <Button icon={<EditIcon />} onClick={() => setEditMenuOpened(true)} />
      <ModalWindow
        opened={editMenuOpened}
        onClose={() => setEditMenuOpened(false)}
        title="Редактирование карточки"
      >
        <Input className={styles.input} placeholder="Название" {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}

        <Input className={styles.input} placeholder="Описание" {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}

        <Input
          className={styles.input}
          placeholder="Размер (3-12)"
          type="number"
          min={3}
          max={12}
          {...register("size")}
        />
        {errors.size && <p>{errors.size.message}</p>}

        <Button icon={<CheckIcon />} onClick={handleSubmit(_handleSubmit)}>
          Изменить
        </Button>
      </ModalWindow>
    </div>
  );
};
