import { ITodo } from "./types";

const url =
  process.env.NODE_ENV === "production"
    ? "https://3pqpt.sse.codesandbox.io/todos"
    : "http://localhost:3001/todos";

export async function getTodos(): Promise<ITodo[]> {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export async function postTodo(data: ITodo): Promise<ITodo> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function deleteTodo(id: string): Promise<void> {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  return response.json();
}

export async function patchTodo(id: string, data: string): Promise<void> {
  const response = await fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  return response.json();
}
