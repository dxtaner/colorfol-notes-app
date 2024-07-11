// reducers/index.js
import { combineReducers } from "redux";
import noteReducer from "./noteReducer.js";

const rootReducer = combineReducers({
  notes: noteReducer,
});

export default rootReducer;
