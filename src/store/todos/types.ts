import { ADD_TODO } from "./actions";

export interface Todo {
  content: string;
  complete: boolean;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export type TodoState = Todo[];
export type TodoActions = AddTodoAction;
