import { TodoActions, TodoState } from "./types";
import { ADD_TODO } from "./actions";

export default (state: TodoState = [], action: TodoActions) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};
