import create from "zustand";
import { mockTodos } from "./mock";
import { ITodo, ITodoStore, EViews } from "./types";

const fakeSleep = (timeToWait = 200) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, timeToWait)
  );

export const useTodoStore = create<ITodoStore>((set) => ({
  todos: mockTodos,
  currentView: EViews.OPEN,
  changeView: async (newView: keyof typeof EViews) => {
    set({ isLoading: true });

    await fakeSleep(300);

    return set({
      currentView: newView,
      isLoading: false,
    });
  },
  addTodo: async (todoItem: ITodo) => {
    set({ isLoading: true });

    await fakeSleep(1000);

    return set((state) => {
      return {
        todos: [...state.todos, todoItem],
        isLoading: false,
      };
    });
  },
  removeTodo: async (id: string) => {
    set({ isLoading: true });

    await fakeSleep(700);

    return set((state) => {
      return {
        todos: [...state.todos.filter((currentTodo) => currentTodo.id !== id)],
        isLoading: false,
      };
    });
  },
  toggleTodo: async (id: string) => {
    set({ isLoading: true });

    await fakeSleep(250);

    return set((state) => {
      return {
        todos: state.todos.map((currentTodo) => {
          if (currentTodo.id === id) {
            return {
              ...currentTodo,
              status: currentTodo.status === "OPEN" ? "CLOSED" : "OPEN",
            };
          }

          return currentTodo;
        }),
        isLoading: false,
      };
    });
  },
  isLoading: false,
}));
