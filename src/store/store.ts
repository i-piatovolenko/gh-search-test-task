import { applyMiddleware, combineReducers, createStore } from "redux";
import { searchReducer } from "./searchReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({ searchReducer });

const store = createStore(reducers, applyMiddleware(thunk));


export default store;