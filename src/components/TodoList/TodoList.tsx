import "./TodoList.scss";
import { Todo } from "../../models/Todo";
import { ShowTodo } from "../ShowTodo/ShowTodo";

interface TodoListProps {
  todos: Todo[];
  toggle: (id: number) => void;
}

export const TodoList = ({ todos, toggle }: TodoListProps) => {
  return (
    <>
      <div className="todos-container">
        {todos.map((todo, index) => {
          return (
            <ShowTodo toggleTodo={toggle} todo={todo} key={index}></ShowTodo>
          );
        })}
      </div>
    </>
  );
};
