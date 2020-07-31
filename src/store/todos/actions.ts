import { Todo, TodoActions } from "./types";

export const ADD_TODO = "ADD_TODO";
export const UPDATE_COMPLETE_TODO = "UPDATE_COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (payload: Todo): TodoActions => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const updateCompleteTodo = (payload: {
  id: string;
  complete: boolean;
}): TodoActions => {
  return {
    type: UPDATE_COMPLETE_TODO,
    payload,
  };
};

export const deleteTodo = (payload: { id: string }): TodoActions => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
