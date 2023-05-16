import "./ShowTodo.scss";
import { Todo } from "../../models/Todo";

interface ShowTodoProps {
  todo: Todo;
}

export const ShowTodo = ({ todo }: ShowTodoProps) => {
  return (
    <>
      <div className="todo">
        <input type="checkbox" />
        <li>{todo.task}</li>
        <span className="todo__deleteBtn">X</span>
      </div>
    </>
  );
};
