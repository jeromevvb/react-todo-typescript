import { TodoActions, ADD_TODO } from "./actions";

export default (state = [], action: TodoActions) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};
