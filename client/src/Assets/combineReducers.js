import { combineReducers } from "redux";
import essential from "./Essentials/Essentials";


const allReducers = combineReducers({
    essentials: essential,
})
export default allReducers;