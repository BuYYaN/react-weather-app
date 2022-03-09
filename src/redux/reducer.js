import map from "./reducers/map";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({ map });

export default combinedReducers;
