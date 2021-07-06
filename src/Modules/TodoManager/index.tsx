import { MouseEvent, useCallback, useEffect } from "react";
import shallow from "zustand/shallow";
import { TodoItem } from "../../Common/TodoItem";
import { StyledTodoManagerContainer } from "./styled";

import { useTodoStore } from "./useTodoStore";

export function TodoManager(): JSX.Element {
  const { todos, currentView, toggleTodo, removeTodo, fetchTodos } =
    useTodoStore(
      (state) => ({
        todos: state.todos,
        addTodo: state.addTodo,
        removeTodo: state.removeTodo,
        currentView: state.currentView,
        toggleTodo: state.toggleTodo,
        fetchTodos: state.fetchTodos,
      }),
      shallow
    );

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleToggleTodo = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      const { id, checked } = e.currentTarget;

      return toggleTodo(id, checked);
    },
    [toggleTodo]
  );

  const handleRemoveTodo = useCallback(
    (id: string) => {
      return removeTodo(id);
    },
    [removeTodo]
  );

  const currentTodos = todos?.filter(
    (rawTodo) => rawTodo.status === currentView
  );

  return (
    <StyledTodoManagerContainer>
      {currentTodos?.map((currentTodo) => {
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
            handleRemoveTodo={handleRemoveTodo}
          />
        );
      })}
      {currentTodos?.length === 0 && <p>No {currentView} tasks</p>}
    </StyledTodoManagerContainer>
  );
}
