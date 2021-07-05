import { MouseEvent } from "react";
import { Button } from "../Button";
import {
  StyledBorder,
  StyledContainer,
  StyledFlexContainer,
  StyledFooter,
  StyledHeader,
  StyledHeaderButtons,
  StyledTitle,
} from "./styled";
import { ReactComponent as MenuIcon } from "../../Assets/menu-icon.svg";
import { TLayoutProps } from "./types";
import { useTodoStore } from "../../Modules/TodoManager/useTodoStore";
import { EViews } from "../../Modules/TodoManager/types";
import { useModal } from "../Hooks/useModal";
import { TodoModal } from "../Modal";

export function Layout({ children }: TLayoutProps): JSX.Element {
  const { changeView, currentView } = useTodoStore();
  const { ModalWrapper, isOpen, openModal, closeModal } = useModal();

  const handleChangeView = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    changeView(name as keyof typeof EViews);
  };

  const handleNewTodo = () => {
    openModal();
  };

  return (
    <StyledContainer>
      {isOpen && (
        <ModalWrapper backdrop fade>
          <TodoModal closeModal={closeModal} />
        </ModalWrapper>
      )}
      <StyledHeader>
        <StyledHeaderButtons>
          <StyledFlexContainer alignItems="center">
            <MenuIcon />
            <span>tsks.</span>
          </StyledFlexContainer>
          <Button onClick={handleNewTodo}>New Task</Button>
        </StyledHeaderButtons>
        <StyledTitle>Hi there.</StyledTitle>
        <StyledFlexContainer
          fullWidth
          spacing={20}
          justifyContent="space-between"
        >
          <Button
            name="OPEN"
            color={currentView === "OPEN" ? "active" : "secondary"}
            onClick={handleChangeView}
          >
            To do
          </Button>
          <Button
            name="CLOSED"
            color={currentView === "CLOSED" ? "active" : "secondary"}
            onClick={handleChangeView}
          >
            Closed
          </Button>
        </StyledFlexContainer>
      </StyledHeader>
      {children}
      <StyledFooter>
        <StyledBorder />
        Developed by Outboxup
      </StyledFooter>
    </StyledContainer>
  );
}
