import { Todo } from "../models/Todo";

interface IAction {
  type: ActionType;
  payload: any;
}

export enum ActionType {
  ADD,
  TOGGLE,
}

export const TodosReducer = (todos: Todo[], action: IAction) => {
  switch (action.type) {
    case ActionType.ADD:
      return [...todos, new Todo(action.payload, false, new Date().getTime())];
  }

  return todos;
};
