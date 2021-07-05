import { ReactNode } from "react";

export type TChildren =
  | JSX.Element
  | JSX.Element[]
  | ReactNode
  | string
  | number;

export type TModalWrapperProps = {
  children: TChildren;
  backdrop?: boolean;
  fade?: boolean;
  className?: string;
  controlId?: string | string[];
};

export type TUseModalReturn = {
  ModalWrapper: ({
    children,
    backdrop,
    fade,
    className,
    controlId,
  }: TModalWrapperProps) => React.ReactPortal;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};
