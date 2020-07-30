import { Todo, TodoActions } from "./types";

export const ADD_TODO = "ADD_TODO";

export const addTodo = (payload: Todo): TodoActions => {
  return {
    type: ADD_TODO,
    payload,
  };
};
