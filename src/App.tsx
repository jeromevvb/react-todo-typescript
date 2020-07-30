import React from "react";
import "./App.css";
import AddTodoInput from "./components/AddTodoInput";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/todos/actions";
import { TodoLine } from "./components/TodoLine";
import { AppState } from "./store";
import uuid from "./helpers/uuid";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: AppState) => state.todos);

  const onSaveTodo = (todoText: string) => {
    dispatch(addTodo({ content: todoText, complete: false, id: uuid() }));
  };

  return (
    <div className="App">
      <div className="todo-card">
        <AddTodoInput onSave={onSaveTodo} />
        {todos.map((todo) => {
          return <TodoLine todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default App;
