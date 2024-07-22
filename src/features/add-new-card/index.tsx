import React, { useState } from "react";

import styles from "./add-new-card.module.scss";

import AddIcon from "~/shared/icons/add-icon.svg?react";
import CheckIcon from "~/shared/icons/check-icon.svg?react";

import { Button } from "~/shared/ui/button";
import { ModalWindow } from "~/shared/ui/modal-window";
import { Input } from "@headlessui/react";

import { addCard } from "~/entities/card";
import { validationSchema, ValidationType } from "./validation-schema";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const AddNewCard: React.FC = () => {
  const [addMenuOpened, setAddMenuOpened] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationType>({ resolver: zodResolver(validationSchema) });

  const _handleSubmit: SubmitHandler<ValidationType> = (form) => {
    addCard(form);
    setAddMenuOpened(false);
  };

  return (
    <div>
      <Button icon={<AddIcon />} onClick={() => setAddMenuOpened(true)}>
        Новая карточка
      </Button>
      <ModalWindow
        opened={addMenuOpened}
        onClose={() => setAddMenuOpened(false)}
        title="Новая карточка"
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
          Сохранить
        </Button>
      </ModalWindow>
    </div>
  );
};
