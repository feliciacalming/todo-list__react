import { Todo } from "../models/Todo";

interface IAction {
  type: ActionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export enum ActionType {
  ADD,
  TOGGLE,
}

export const TodosReducer = (todos: Todo[], action: IAction) => {
  switch (action.type) {
    case ActionType.ADD: {
      return [...todos, new Todo(action.payload, false, new Date().getTime())];
    }

    default:
      return todos;
  }
};
