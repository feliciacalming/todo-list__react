import { Todo } from "../models/Todo";

export interface IAction {
  type: ActionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: string;
}

export enum ActionType {
  ADDED,
  TOGGLED,
  DELETED,
}

export const TodosReducer = (todos: Todo[], action: IAction) => {
  switch (action.type) {
    case ActionType.ADDED: {
      return [...todos, new Todo(action.payload, false, new Date().getTime())];
    }

    case ActionType.TOGGLED: {
      return todos.map((todo) => {
        console.log(action.payload);
        if (todo.id.toString() === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    }

    case ActionType.DELETED: {
      return todos.filter((todo) => todo.id !== action.payload);
    }

    default:
      return todos;
  }
};
