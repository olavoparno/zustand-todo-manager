import create from "zustand";
import { deleteTodo, getTodos, patchTodo, postTodo } from "./services";
import { ITodoStore, EViews } from "./types";

export const useTodoStore = create<ITodoStore>((set) => ({
  todos: [],
  isLoading: false,
  currentView: EViews.OPEN,
  changeView: (newView) => {
    return set({
      currentView: newView,
    });
  },
  fetchTodos: async () => {
    set({ isLoading: true });

    const result = await getTodos();

    return set({
      todos: result,
      isLoading: false,
    });
  },
  addTodo: async (todoItem) => {
    set({ isLoading: true });

    const result = await postTodo(todoItem);

    return set((state) => {
      return {
        todos: [...state.todos, result],
        isLoading: false,
      };
    });
  },
  removeTodo: async (id) => {
    set({ isLoading: true });

    await deleteTodo(id);

    const result = await getTodos();

    return set({
      todos: result,
      isLoading: false,
    });
  },
  toggleTodo: async (id, checked) => {
    set({ isLoading: true });

    const newStatus = checked ? "CLOSED" : "OPEN";

    await patchTodo(
      id,
      JSON.stringify({
        status: newStatus,
      })
    );

    const result = await getTodos();

    return set({
      todos: result,
      isLoading: false,
    });
  },
}));
