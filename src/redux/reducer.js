import async from "./reducers/async";
import map from "./reducers/map";
import stats from "./reducers/stats";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({ map, async, stats });

export default combinedReducers;
