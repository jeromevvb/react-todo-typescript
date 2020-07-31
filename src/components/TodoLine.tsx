import React from "react";
import { Todo } from "../store/todos/types";
import { TodoCheckIndicator } from "./TodoCheckIndicator";
import { useDispatch } from "react-redux";
import { updateCompleteTodo, deleteTodo } from "../store/todos/actions";

interface TodoLineProps {
  todo: Todo;
}

export const TodoLine: React.FC<TodoLineProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const onChangeComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCompleteTodo({ id: todo.id, complete: event.target.checked })
    );
  };

  const onDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <div className="todo-line">
      <div className="todo-check-indicator">
        <TodoCheckIndicator
          complete={todo.complete}
          handleChange={onChangeComplete}
        />
      </div>
      <div className="todo-content">{todo.content}</div>
      <div className="todo-delete-button">
        <button onClick={onDelete}>X</button>
      </div>
    </div>
  );
};
