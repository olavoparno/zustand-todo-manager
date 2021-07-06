import { MutableRefObject, useRef } from "react";
import { formatDate } from "../Helpers";
import { Radio } from "../Radio";
import {
  StyledDotMenu,
  StyledDotMenuItem,
  StyledTodoContainer,
} from "./styled";
import { TTodoItemProps } from "./types";
import DotMenu from "../../Assets/dots-icon.svg";
import { StyledFlexContainer } from "../Layout/styled";
import { useModal } from "../Hooks/useModal";

export function TodoItem({
  id,
  title,
  description,
  creationDate,
  status,
  handleToggleTodo,
  handleRemoveTodo,
}: TTodoItemProps): JSX.Element {
  const dotMenuRef = useRef<HTMLDivElement>();
  const { ModalWrapper, isOpen, openModal, closeModal } = useModal({
    bindToElement:
      dotMenuRef.current ||
      document.getElementById("dot-menu") ||
      document.body,
  });

  const handleDotMenuClick = () => {
    openModal();
  };

  return (
    <StyledTodoContainer>
      {isOpen && (
        <ModalWrapper backdrop fade={false} controlId={`dot-menu-${id}`}>
          <StyledDotMenu>
            <StyledDotMenuItem
              onClick={() => handleRemoveTodo(id).then(() => closeModal())}
            >
              Remove TODO
            </StyledDotMenuItem>
          </StyledDotMenu>
        </ModalWrapper>
      )}
      <div className="container-head">
        <StyledFlexContainer alignItems="center">
          <Radio
            id={id}
            checked={status === "CLOSED"}
            onClick={handleToggleTodo}
          />
          <h2>{title}</h2>
        </StyledFlexContainer>
        <div
          role="button"
          tabIndex={0}
          onClick={handleDotMenuClick}
          onKeyPress={handleDotMenuClick}
          ref={dotMenuRef as MutableRefObject<HTMLDivElement>}
        >
          <img id={`dot-menu-${id}`} src={DotMenu} alt="" />
        </div>
      </div>
      <div className="container-body">
        <span>{description}</span>
      </div>
      <div className="container-foot">Created {formatDate(creationDate)}</div>
    </StyledTodoContainer>
  );
}
