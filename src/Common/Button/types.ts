import { MouseEvent } from "react";
import { theme } from "../Layout/theme";

export type TStyledButtonProps = {
  children: JSX.Element | JSX.Element[] | string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  color?: keyof typeof theme.buttons;
};
