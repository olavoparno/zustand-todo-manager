import { MouseEvent } from "react";

export type TRadioProps = {
  id: string;
  checked: boolean;
  onClick: (e: MouseEvent<HTMLInputElement>) => void;
};
