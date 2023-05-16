import { Todo } from "../../models/Todo";

interface ShowTodoProps {
  todos: Todo[];
}

export const ShowTodo = ({ todos }: ShowTodoProps) => {
  return (
    <>
      {todos.map((todo) => (
        <h3>{todo.task}</h3>
      ))}
    </>
  );
};
