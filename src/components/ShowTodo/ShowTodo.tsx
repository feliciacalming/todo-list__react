import "./ShowTodo.scss";
import { Todo } from "../../models/Todo";

interface ShowTodoProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const ShowTodo = ({ todo, toggleTodo, deleteTodo }: ShowTodoProps) => {
  const handleCheckbox = () => {
    toggleTodo(todo.id);
  };

  return (
    <>
      <div className="todo">
        <div className="todo__task-container">
          <input
            type="checkbox"
            className="todo__checkbox"
            onChange={handleCheckbox}
          />
          <li className={`todo__task ${todo.done ? "done" : ""}`}>
            {todo.task}
          </li>
        </div>
        <button className="todo__deleteBtn" onClick={() => deleteTodo(todo.id)}>
          X
        </button>
      </div>
    </>
  );
};
