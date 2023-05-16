import "./TodoApp.scss";
import { useReducer } from "react";
import { ActionType, TodosReducer } from "../../reducers/TodosReducer";
import { AddTodo } from "../AddTodo/AddTodo";
import { TodoList } from "../TodoList/TodoList";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  const add = (text: string) => {
    dispatch({ type: ActionType.ADD, payload: text });
  };

  const toggle = (id: number) => {
    dispatch({ type: ActionType.TOGGLE, payload: id });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: ActionType.DELETE, payload: id });
  };

  return (
    <>
      <div className="wrapper">
        <AddTodo createTodo={add}></AddTodo>
        <TodoList
          toggle={toggle}
          todos={todos}
          deleteTodo={deleteTodo}
        ></TodoList>
      </div>
    </>
  );
};
