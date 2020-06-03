import {combineReducers} from "redux";
import numSelected from "./numSelected";
import listPost from "./listPost";
import filter from "./filter";
const myReducer = combineReducers({
  numSelected,
  listPost,
  filter
});

export default myReducer;

