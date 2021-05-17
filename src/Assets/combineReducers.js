import { combineReducers } from "redux";
import essential from "./Reducers/Essentials";
import filterToggle from "./Reducers/FilterToggle";

const allReducers = combineReducers({
    filter: filterToggle,
    essentials: essential,
})
export default allReducers;