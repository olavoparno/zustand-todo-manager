import { ITodo } from "./types";

export async function getTodos(): Promise<ITodo[]> {
  const response = await fetch("http://localhost:3001/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export async function postTodo(data: ITodo): Promise<ITodo> {
  const response = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function deleteTodo(id: string): Promise<void> {
  const response = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "DELETE",
  });

  return response.json();
}

export async function patchTodo(id: string, data: string): Promise<void> {
  const response = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  return response.json();
}
