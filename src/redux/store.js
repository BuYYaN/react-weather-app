import { applyMiddleware, createStore } from "redux";
import fetchMiddleware from "./middleware";
import combinedReducers from "./reducer";

const store = createStore(combinedReducers, applyMiddleware(fetchMiddleware));

export default store;
