import create from "zustand";
import { generateUuid } from "../../Common/Helpers";
import { ITodo, ITodoStore, EViews } from "./types";

export const useTodoStore = create<ITodoStore>((set) => ({
  todos: [
    {
      id: generateUuid(),
      status: "OPEN",
      creationDate: new Date().toString(),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. ",
      title: "Create Sign In validation",
    },
    {
      id: generateUuid(),
      status: "OPEN",
      creationDate: new Date().toString(),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. ",
      title: "Implement validations",
    },
    {
      id: generateUuid(),
      status: "CLOSED",
      creationDate: new Date().toString(),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. ",
      title: "Align with team X",
    },
    {
      id: generateUuid(),
      status: "OPEN",
      creationDate: new Date().toString(),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. ",
      title: "Discuss new feature",
    },
    {
      id: generateUuid(),
      status: "OPEN",
      creationDate: new Date().toString(),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. ",
      title: "Another subject",
    },
  ],
  currentView: EViews.OPEN,
  changeView: (newView: keyof typeof EViews) =>
    set({
      currentView: newView,
    }),
  addTodo: async (todoItem: ITodo) =>
    set((state) => {
      return {
        todos: [...state.todos, todoItem],
      };
    }),
  removeTodo: (todoItem: ITodo) =>
    set((state) => {
      return {
        todos: [
          ...state.todos.filter(
            (currentTodo) => currentTodo.id !== todoItem.id
          ),
        ],
      };
    }),
  toggleTodo: (id: string) =>
    set((state) => {
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
      };
    }),
}));
