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
    console.log("Din todo i AddTodo:", todo);
    createTodo(todo);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={todo} />
      </form>
    </>
  );
};
