import "./TodoList.scss";
import { Todo } from "../../models/Todo";
import { ShowTodo } from "../ShowTodo/ShowTodo";

interface TodoListProps {
  todos: Todo[];
  toggle: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const TodoList = ({ todos, toggle, deleteTodo }: TodoListProps) => {
  return (
    <>
      <div className="todos-container">
        {todos.map((todo, index) => {
          return (
            <ShowTodo
              deleteTodo={deleteTodo}
              toggleTodo={toggle}
              todo={todo}
              key={index}
            ></ShowTodo>
          );
        })}
      </div>
    </>
  );
};
