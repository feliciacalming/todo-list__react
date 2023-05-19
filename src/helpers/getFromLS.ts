import { Todo } from "../models/Todo";

export const getFromLS = () => {
  if (!localStorage.getItem("todos")) return [];

  let todosFromLS = JSON.parse(
    localStorage.getItem("todos") as string
  ) as Todo[];
  todosFromLS = todosFromLS.map((todo) => {
    return new Todo(todo.task, todo.done, todo.id);
  });

  return todosFromLS;
};
