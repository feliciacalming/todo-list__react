import { Todo } from "../models/Todo";

interface IAction {
  type: ActionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export enum ActionType {
  ADD,
  TOGGLE,
  DELETE,
}

export const TodosReducer = (todos: Todo[], action: IAction) => {
  switch (action.type) {
    case ActionType.ADD: {
      return [...todos, new Todo(action.payload, false, new Date().getTime())];
    }

    case ActionType.TOGGLE: {
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    }

    case ActionType.DELETE: {
      return todos.filter((todo) => todo.id !== action.payload);
    }

    default:
      return todos;
  }
};
