import {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { TChildren, TModalWrapperProps, TUseModalReturn } from "./types";

const fadeStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgb(0 0 0 / 50%)",
  backdropFilter: "blur(5px)",
  zIndex: 100,
};

function WithClickOutside(
  children: TChildren,
  fade = true,
  onClickOutside: () => void,
  className?: string,
  controlId?: string | string[]
) {
  const outRef = useRef<HTMLDivElement>();

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const element = e.target as Element;
      const isControl = element.id !== "" && controlId?.includes(element.id);
      const isAlert = element.classList.toString().includes("alert");
      if (
        outRef.current &&
        !outRef.current.contains(element) &&
        !isControl &&
        !isAlert
      ) {
        onClickOutside();
      }
    },
    [controlId, onClickOutside]
  );
  const handleClickOnFade = useCallback(
    (e: MouseEvent) => {
      const element = e.target as Element;
      if (element && element.id === "fade") {
        return onClickOutside();
      }

      return null;
    },
    [onClickOutside]
  );
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return onClickOutside();
      }

      return null;
    },
    [onClickOutside]
  );

  useEffect(() => {
    global.document.addEventListener("mousedown", handleClickOutside);
    global.document.addEventListener("mousedown", handleClickOnFade);
    global.document.addEventListener("keydown", handleKeyDown);
    return () => {
      global.document.removeEventListener("mousedown", handleClickOutside);
      global.document.removeEventListener("mousedown", handleClickOnFade);
      global.document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOnFade, handleClickOutside, handleKeyDown]);

  const divProps = {
    id: "fade",
    style: fade ? fadeStyle : null,
    ref: outRef,
    className: className || "",
  };
  return createElement("div", divProps, children);
}

export function useModal({
  bindToElement = global.document.body,
}: {
  bindToElement?: HTMLElement | SVGSVGElement;
} = {}): TUseModalReturn {
  const [isOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => {
    if (bindToElement) setModalOpen(true);
  }, [bindToElement]);

  const closeModal = useCallback(() => {
    if (bindToElement) setModalOpen(false);
  }, [bindToElement]);

  const ModalWrapper = useCallback(
    ({
      children,
      backdrop,
      fade,
      className,
      controlId,
    }: TModalWrapperProps) => {
      const returnChildren = backdrop
        ? WithClickOutside(children, fade, closeModal, className, controlId)
        : children;
      return createPortal(
        returnChildren,
        bindToElement || global.document.createElement("div")
      );
    },
    [bindToElement, closeModal]
  );

  return useMemo(
    () => ({ ModalWrapper, isOpen, openModal, closeModal }),
    [ModalWrapper, closeModal, isOpen, openModal]
  );
}
