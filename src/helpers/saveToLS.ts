import { Todo } from "../models/Todo";

export const saveToLS = (todolist: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todolist));
};
