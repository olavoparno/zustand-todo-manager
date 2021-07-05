import { ITodo } from "../../Modules/TodoManager/types";
import { useTodoStore } from "../../Modules/TodoManager/useTodoStore";
import { Button } from "../Button";
import { generateUuid } from "../Helpers";
import { useInput } from "../Hooks/useInput";
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
      Add new TODO
      <StyledInputField
        name="titleInput"
        value={values.titleInput}
        onChange={handleChange}
      />
      <StyledTextArea
        name="descriptionInput"
        value={values.descriptionInput}
        onChange={handleChange}
      />
      <Button onClick={handleAddTodo}>New Task</Button>
    </StyledModalContainer>
  );
}
