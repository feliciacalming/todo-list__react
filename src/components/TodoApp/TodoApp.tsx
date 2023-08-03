import "./TodoApp.scss";
import { useEffect, useReducer } from "react";
import { TodosReducer } from "../../reducers/TodosReducer";
import { AddTodo } from "../AddTodo/AddTodo";
import { TodoList } from "../TodoList/TodoList";
import { TodosContext } from "../../contexts/TodosContext";
import { TodosDispatchContext } from "../../contexts/TodosDispatchContext";
import { saveToLS } from "../../helpers/saveToLS";
import { getFromLS } from "../../helpers/getFromLS";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, getFromLS());

  useEffect(() => {
    saveToLS(todos);
  }, [todos]);

  return (
    <>
      <div className="wrapper">
        <div className="content-wrapper">
          <h1 className="title">Things to do today:</h1>
          <TodosContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={dispatch}>
              <AddTodo></AddTodo>
              <TodoList></TodoList>
            </TodosDispatchContext.Provider>
          </TodosContext.Provider>
        </div>
      </div>
    </>
  );
};
