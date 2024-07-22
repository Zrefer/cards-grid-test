import TrashIcon from "~/shared/icons/trash-icon.svg?react";

import { deleteCard } from "~/entities/card";
import { Button } from "~/shared/ui/button";

interface IDeleteCardProps {
  cardId: string;
}

export const DeleteCard: React.FC<IDeleteCardProps> = ({ cardId }) => {
  return <Button icon={<TrashIcon />} onClick={() => deleteCard(cardId)} />;
};
