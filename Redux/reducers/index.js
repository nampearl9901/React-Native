import { createStore, combineReducers } from "redux";
import { coursesReducer } from "./couseReducer";

export const rootReducer = combineReducers({
  couses: coursesReducer,
});
