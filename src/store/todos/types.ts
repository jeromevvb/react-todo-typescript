import { ADD_TODO, UPDATE_COMPLETE_TODO } from "./actions";

export interface Todo {
  content: string;
  complete: boolean;
  id: string;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface UpdateCompleteTodoAction {
  type: typeof UPDATE_COMPLETE_TODO;
  payload: { id: string; complete: boolean };
}

interface DeleteTodoAction {
  type: "DELETE_TODO";
  payload: { id: string };
}

export type TodoActions =
  | AddTodoAction
  | UpdateCompleteTodoAction
  | DeleteTodoAction;
