import "./AddTodo.scss";
import { ChangeEvent, FormEvent, useState } from "react";

interface IAddTodoProps {
  createTodo: (text: string) => void;
}

export const AddTodo = ({ createTodo }: IAddTodoProps) => {
  const [todo, setTodo] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTodo(todo);
    setTodo("");
  };

  return (
    <>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-container__text-input"
            onChange={handleInput}
            value={todo}
          />

          <button className="input-container__btn">+</button>
        </form>
      </div>
    </>
  );
};
