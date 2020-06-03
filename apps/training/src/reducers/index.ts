import {combineReducers} from "redux";
import numSelected from "./numSelected";
import listPost from "./listPost";
const myReducer = combineReducers({
  numSelected,
  listPost
});

export default myReducer;

