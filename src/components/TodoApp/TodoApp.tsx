import { useReducer } from "react";
import { ActionType, TodosReducer } from "../../reducers/TodosReducer";
import { AddTodo } from "../AddTodo/AddTodo";
import { ShowTodo } from "../ShowTodo/ShowTodo";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  const add = (text: string) => {
    console.log("add i TodoApp körs");
    dispatch({ type: ActionType.ADD, payload: text });
  };

  console.log("Todos in app", todos);

  return (
    <>
      <AddTodo createTodo={add}></AddTodo>
      <ShowTodo todos={todos}></ShowTodo>
    </>
  );
};
