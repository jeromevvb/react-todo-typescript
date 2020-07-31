import React, { useState } from "react";
import { Todo } from "../store/todos/types";
import { TodoCheckIndicator } from "./TodoCheckIndicator";
import { useDispatch } from "react-redux";
import {
  updateCompleteTodo,
  deleteTodo,
  updateContentTodo,
} from "../store/todos/actions";
import TodoInput from "./TodoInput";

interface TodoLineProps {
  todo: Todo;
}

export const TodoLine: React.FC<TodoLineProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const onChangeComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCompleteTodo({ id: todo.id, complete: event.target.checked })
    );
  };

  const onDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  const onSaveTodo = (todoText: string) => {
    dispatch(updateContentTodo({ id: todo.id, content: todoText }));
    setEditMode(false);
  };

  const handleDoubleClick = () => {
    setEditMode(true);
  };

  return (
    <div className="todo-line">
      <div className="todo-check-indicator">
        <TodoCheckIndicator
          complete={todo.complete}
          handleChange={onChangeComplete}
        />
      </div>
      <div onDoubleClick={handleDoubleClick} className="todo-content">
        {!editMode && todo.content}
        {editMode && (
          <TodoInput
            onSave={onSaveTodo}
            defaultValue={todo.content}
            editMode={true}
          />
        )}
      </div>
      <div className="todo-delete-button">
        <button onClick={onDelete}>X</button>
      </div>
    </div>
  );
};
