import { ITodo } from "../../Modules/TodoManager/types";
import { useTodoStore } from "../../Modules/TodoManager/useTodoStore";
import { Button } from "../Button";
import { generateUuid } from "../Helpers";
import { useInput } from "../Hooks/useInput";
import { StyledFlexContainer } from "../Layout/styled";
import {
  StyledInputField,
  StyledModalContainer,
  StyledTextArea,
} from "./styled";

export function TodoModal({
  closeModal,
}: {
  closeModal: () => void;
}): JSX.Element {
  const { addTodo } = useTodoStore();
  const [values, handleChange] = useInput({
    titleInput: "",
    descriptionInput: "",
  });

  const handleAddTodo = () => {
    const { titleInput, descriptionInput } = values;
    const newTodo: ITodo = {
      id: generateUuid(),
      title: titleInput,
      description: descriptionInput,
      status: "OPEN",
      creationDate: new Date().toString(),
    };

    addTodo(newTodo).then(() => closeModal());
  };

  return (
    <StyledModalContainer>
      <StyledFlexContainer justifyContent="center" flexDirection="column">
        <h1>New Task</h1>
        <StyledInputField
          name="titleInput"
          value={values.titleInput}
          onChange={handleChange}
          placeholder="Title"
        />
        <StyledTextArea
          name="descriptionInput"
          value={values.descriptionInput}
          onChange={handleChange}
          placeholder="Description"
        />
        <Button onClick={handleAddTodo}>Save</Button>
      </StyledFlexContainer>
    </StyledModalContainer>
  );
}
