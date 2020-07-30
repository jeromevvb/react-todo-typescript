export const ADD_TODO = "ADD_TODO";

interface Todo {
  content: string;
  complete: boolean;
}

interface AddTodo {
  type: typeof ADD_TODO;
  payload: Todo;
}

export type TodoActions = AddTodo;

export const addTodo = (payload: Todo): AddTodo => {
  return {
    type: ADD_TODO,
    payload,
  };
};
