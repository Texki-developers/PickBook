import { combineReducers } from "redux";
import essential from "./Essentials/Essentials";
import filter from './Filter/FilterReducer'

const allReducers = combineReducers({
    essentials: essential,
    filter: filter
})
export default allReducers;