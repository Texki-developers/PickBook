import ActionTypes from "../ActionTypes";

const filterToggle = (state=false,action) => {
    switch(action.type){
        case ActionTypes.FILTER_STATE_CHANGE:
            return !state;
        default:
            return state;
    }
}
export default filterToggle;