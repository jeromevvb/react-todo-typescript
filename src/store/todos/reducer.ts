import { TodoActions, Todo } from "./types";
import { ADD_TODO, UPDATE_COMPLETE_TODO, DELETE_TODO } from "./actions";

const initialState: Todo[] = [];

export default (state = initialState, action: TodoActions): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case UPDATE_COMPLETE_TODO:
      return state.reduce<Todo[]>((finalState, todo) => {
        if (todo.id === action.payload.id) {
          return [
            ...finalState,
            { ...todo, complete: action.payload.complete },
          ];
        }

        return [...finalState, todo];
      }, []);
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
