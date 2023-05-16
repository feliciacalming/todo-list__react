import "./ShowTodo.scss";
import { Todo } from "../../models/Todo";

interface ShowTodoProps {
  todo: Todo;
}

export const ShowTodo = ({ todo }: ShowTodoProps) => {
  return (
    <>
      <div className="todo">
        <div className="todo__task-container">
          <input type="checkbox" className="todo__checkbox" />
          <li className="todo__task">{todo.task}</li>
        </div>
        <button className="todo__deleteBtn">X</button>
      </div>
    </>
  );
};
