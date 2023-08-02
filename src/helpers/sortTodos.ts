import { Todo } from "../models/Todo";

export const sortTodos = (todos: Todo[]) => {
  todos.sort((a, b) => Number(a.done) - Number(b.done) || b.id - a.id);
};
