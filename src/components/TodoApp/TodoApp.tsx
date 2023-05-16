import "./TodoApp.scss";
import { useReducer } from "react";
import { ActionType, TodosReducer } from "../../reducers/TodosReducer";
import { AddTodo } from "../AddTodo/AddTodo";
import { TodoList } from "../TodoList/TodoList";
import { saveToLS } from "../helpers/saveToLS";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  const add = (text: string) => {
    dispatch({ type: ActionType.ADD, payload: text });
    saveToLS(todos);
  };

  return (
    <>
      <div className="wrapper">
        <AddTodo createTodo={add}></AddTodo>
        <TodoList todos={todos}></TodoList>
      </div>
    </>
  );
};
