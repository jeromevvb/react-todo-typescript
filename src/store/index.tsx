import { createStore, combineReducers, applyMiddleware } from "redux";
import todos from "./todos/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(combineReducers({ todos }), composeWithDevTools());

export default store;
