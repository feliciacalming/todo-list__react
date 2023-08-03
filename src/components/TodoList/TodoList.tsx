import "./TodoList.scss";
import { ShowTodo } from "../ShowTodo/ShowTodo";
import { sortTodos } from "../../helpers/sortTodos";
import { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { TodosDispatchContext } from "../../contexts/TodosDispatchContext";
import { ActionType } from "../../reducers/TodosReducer";

export const TodoList = () => {
  const todos = useContext(TodosContext);
  const dispatch = useContext(TodosDispatchContext);
  sortTodos(todos);

  const clearTodos = () => {
    dispatch({ type: ActionType.CLEARED, payload: "" });
  };

  return (
    <>
      <div className="todos-container">
        {todos.map((todo, index) => {
          return <ShowTodo todo={todo} key={index}></ShowTodo>;
        })}

        <div className="button-container">
          {todos.length > 0 ? (
            <button className="clearBtn" onClick={clearTodos}>
              clear all!
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
