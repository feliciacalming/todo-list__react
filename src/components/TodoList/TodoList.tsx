import "./TodoList.scss";
import { ShowTodo } from "../ShowTodo/ShowTodo";
import { sortTodos } from "../../helpers/sortTodos";
import { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";

export const TodoList = () => {
  const todos = useContext(TodosContext);
  sortTodos(todos);

  return (
    <>
      <div className="todos-container">
        {todos.map((todo, index) => {
          return <ShowTodo todo={todo} key={index}></ShowTodo>;
        })}

        <div className="button-container">
          <button className="clearBtn">clear all!</button>
        </div>
      </div>
    </>
  );
};
