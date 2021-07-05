import { formatDate } from "../Helpers";
import { Radio } from "../Radio";
import { StyledTodoContainer } from "./styled";
import { TTodoItemProps } from "./types";

export function TodoItem({
  id,
  title,
  description,
  creationDate,
  status,
  handleToggleTodo,
}: TTodoItemProps): JSX.Element {
  return (
    <StyledTodoContainer>
      <div className="container-head">
        <Radio
          id={id}
          checked={status === "CLOSED"}
          onClick={handleToggleTodo}
        />
        <h2>{title}</h2>
      </div>
      <div className="container-body">
        <p>{description}</p>
      </div>
      <div className="container-foot">Created {formatDate(creationDate)}</div>
    </StyledTodoContainer>
  );
}
