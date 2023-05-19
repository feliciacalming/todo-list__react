import "./AddTodo.scss";
import { ChangeEvent, FormEvent, useState } from "react";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
