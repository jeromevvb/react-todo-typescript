import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodoInput from "./components/AddTodoInput";

function App() {
  const onSaveTodo = (todoText: string) => {
    console.log(todoText);
  };

  return (
    <div className="App">
      <AddTodoInput onSave={onSaveTodo} />
    </div>
  );
}

export default App;
