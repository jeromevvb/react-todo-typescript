import { createStore, combineReducers, applyMiddleware } from "redux";
import todos from "./todos/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ todos });

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
