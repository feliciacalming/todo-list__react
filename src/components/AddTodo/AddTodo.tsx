import { useReducer } from "react";
import { ActionType, TodosReducer } from "../../reducers/TodosReducer";

interface IAddTodoProps {
  createTodo(userInput: string): void;
}

export const AddTodo = ({ createTodo }: IAddTodoProps) => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  const add = (text: string) => {
    dispatch({ type: ActionType.ADD, payload: text });
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleInput} />
      </form>
    </>
  );
};
