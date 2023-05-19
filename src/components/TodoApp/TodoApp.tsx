import "./TodoApp.scss";
import { useReducer } from "react";
import { ActionType, TodosReducer } from "../../reducers/TodosReducer";
import { AddTodo } from "../AddTodo/AddTodo";
import { TodoList } from "../TodoList/TodoList";
import { TodosContext } from "../../contexts/TodosContext";
import { TodosDispatchContext } from "../../contexts/TodosDispatchContext";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  // useEffect(() => {
  //   saveToLS(todos);
  // }, [todos]);

  const toggle = (id: number) => {
    dispatch({ type: ActionType.TOGGLED, payload: id.toString() });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: ActionType.DELETED, payload: id.toString() });
  };

  return (
    <>
      <div className="wrapper">
        <h1 className="title">Things to do today:</h1>
        <TodosContext.Provider value={todos}>
          <TodosDispatchContext.Provider value={dispatch}>
            <AddTodo></AddTodo>
            <TodoList
              toggle={toggle}
              todos={todos}
              deleteTodo={deleteTodo}
            ></TodoList>
          </TodosDispatchContext.Provider>
        </TodosContext.Provider>
      </div>
    </>
  );
};
