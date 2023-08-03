import "./ShowTodo.scss";
import { useContext } from "react";
import { TodosDispatchContext } from "../../contexts/TodosDispatchContext";
import { ActionType } from "../../reducers/TodosReducer";
import { Todo } from "../../models/Todo";

interface IShowTodoProps {
  todo: Todo;
}

export const ShowTodo = ({ todo }: IShowTodoProps) => {
  const dispatch = useContext(TodosDispatchContext);

  const toggle = (id: number) => {
    dispatch({ type: ActionType.TOGGLED, payload: id.toString() });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: ActionType.DELETED, payload: id.toString() });
  };

  return (
    <>
      <div className="todo">
        <div className="todo__task-container" onClick={() => toggle(todo.id)}>
          <input
            type="checkbox"
            className="todo__checkbox"
            checked={todo.done}
          />
          <li className={`todo__task ${todo.done ? "done" : ""}`}>
            {todo.task}
          </li>
        </div>
        <button className="todo__deleteBtn" onClick={() => deleteTodo(todo.id)}>
          <i className="bi bi-x-square"></i>
        </button>
      </div>
    </>
  );
};
