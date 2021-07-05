export enum EViews {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export interface ITodo {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  status: keyof typeof EViews;
}

export interface ITodoStore {
  todos: ITodo[];
  fetchTodos: () => Promise<void>;
  addTodo: (todoItem: Omit<ITodo, "id" | "creationDate">) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
  toggleTodo: (id: string, checked: boolean) => void;
  changeView: (newView: keyof typeof EViews) => void;
  currentView: keyof typeof EViews;
  isLoading: boolean;
}
