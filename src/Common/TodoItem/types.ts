import { MouseEvent } from "react";
import { EViews } from "../../Modules/TodoManager/types";

export type TTodoItemProps = {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  status: keyof typeof EViews;
  handleToggleTodo: (e: MouseEvent<HTMLInputElement>) => void;
  handleRemoveTodo: (id: string) => Promise<void>;
};
