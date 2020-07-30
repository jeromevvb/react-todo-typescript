import React from "react";
import { Todo } from "../store/todos/types";

interface TodoLineProps {
  todo: Todo;
}

export const TodoLine: React.FC<TodoLineProps> = ({ todo }) => {
  return <div className="todo-line">{todo.content}</div>;
};
