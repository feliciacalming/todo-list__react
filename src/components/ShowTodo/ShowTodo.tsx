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

  return (
    <>
      <div className="todo">
        <div
          className="todo__task-container"
          onClick={() =>
            dispatch({
              type: ActionType.TOGGLED,
              payload: todo.id.toString(),
            })
          }
        >
          <input
            type="checkbox"
            className="todo__checkbox"
            checked={todo.done}
          />
          <li className={`todo__task ${todo.done ? "done" : ""}`}>
            {todo.task}
          </li>
        </div>
        <button
          className="todo__deleteBtn"
          onClick={() => {
            dispatch({ type: ActionType.DELETED, payload: todo.id.toString() });
          }}
        >
          <i className="bi bi-x-square"></i>
        </button>
      </div>
    </>
  );
};
