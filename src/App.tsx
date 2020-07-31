import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
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
        <section>
          <TodoInput onSave={onSaveTodo} />
          {todos.map((todo) => {
            return <TodoLine todo={todo} />;
          })}
        </section>
        {todos.length > 0 && (
          <footer>
            <span>
              {todos.filter((todo) => !todo.complete).length} items left
            </span>
          </footer>
        )}
      </div>
      <div>
        <p>Double click to edit an item</p>
      </div>
    </div>
  );
}

export default App;
