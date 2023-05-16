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
      const newState = [
        ...todos,
        new Todo(action.payload, false, new Date().getTime()),
      ];
      console.log("TodosReducer", newState);
      return newState;
    }

    default:
      return todos;
  }
};
