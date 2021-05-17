import { combineReducers } from "redux";
import filterToggle from "./Reducers/FilterToggle";

const allReducers = combineReducers({
    filter: filterToggle
})
export default allReducers;