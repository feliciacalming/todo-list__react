import "./TodoList.scss";
import { Todo } from "../../models/Todo";
import { ShowTodo } from "../ShowTodo/ShowTodo";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      <div className="todos-container">
        {todos.map((todo, index) => {
          return <ShowTodo todo={todo} key={index}></ShowTodo>;
        })}
      </div>
    </>
  );
};
