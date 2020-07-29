import { createStore } from "redux";
import todosReducer from "./reducers/todos";

const store = createStore(todosReducer);

export default store;
