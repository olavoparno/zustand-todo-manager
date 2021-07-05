import { MouseEvent, useCallback } from "react";
import shallow from "zustand/shallow";
import { TodoItem } from "../../Common/TodoItem";
import { StyledTodoManagerContainer } from "./styled";

import { useTodoStore } from "./useTodoStore";

export function TodoManager(): JSX.Element {
  const { todos, removeTodo, currentView, toggleTodo } = useTodoStore(
    (state) => ({
      todos: state.todos,
      addTodo: state.addTodo,
      removeTodo: state.removeTodo,
      currentView: state.currentView,
      toggleTodo: state.toggleTodo,
    }),
    shallow
  );

  const handleToggleTodo = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      const { id } = e.currentTarget;

      toggleTodo(id);
    },
    [toggleTodo]
  );

  return (
    <StyledTodoManagerContainer>
      {todos
        ?.filter((rawTodo) => rawTodo.status === currentView)
        .map((currentTodo) => {
          const { id, title, description, creationDate, status } = currentTodo;

          return (
            <TodoItem
              key={id}
              id={id}
              title={title}
              description={description}
              creationDate={creationDate}
              status={status}
              handleToggleTodo={handleToggleTodo}
            />
          );
        })}
    </StyledTodoManagerContainer>
  );
}
