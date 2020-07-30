import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodoInput from "./components/AddTodoInput";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todos/actions";

function App() {
  const dispatch = useDispatch();

  const onSaveTodo = (todoText: string) => {
    dispatch(addTodo({ content: todoText, complete: false }));
  };

  return (
    <div className="App">
      <div className="todo-card">
        <AddTodoInput onSave={onSaveTodo} />
      </div>
    </div>
  );
}

export default App;
