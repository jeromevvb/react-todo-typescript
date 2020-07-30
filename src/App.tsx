import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodoInput from "./components/AddTodoInput";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/todos/actions";
import { TodoState } from "./store/todos/types";
import { TodoLine } from "./components/TodoLine";
import { AppState } from "./store";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: AppState) => state.todos);
  console.log(todos);

  const onSaveTodo = (todoText: string) => {
    dispatch(addTodo({ content: todoText, complete: false }));
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
