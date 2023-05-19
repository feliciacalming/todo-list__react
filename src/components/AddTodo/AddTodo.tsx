import { TodosDispatchContext } from "../../contexts/TodosDispatchContext";
import { ActionType } from "../../reducers/TodosReducer";
import "./AddTodo.scss";
import { ChangeEvent, FormEvent, useContext, useState } from "react";

export const AddTodo = () => {
  const dispatch = useContext(TodosDispatchContext);
  const [task, setTask] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({ type: ActionType.ADDED, payload: task });

    setTask("");
  };

  return (
    <>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-container__text-input"
            onChange={handleInput}
            value={task}
          />

          <button className="input-container__btn">+</button>
        </form>
      </div>
    </>
  );
};
