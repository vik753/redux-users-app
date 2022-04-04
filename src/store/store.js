import {applyMiddleware, combineReducers, createStore} from "redux";
import {todosReducer} from "./todosReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";

const rootReducer = combineReducers({todosReducer});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));