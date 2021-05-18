import actionTypes from "../ActionTypes"

const essentials = {
        languages:["english","hindi","Tamil","urdu","malayalam"],
        genres:["fiction","children's","memoir","nonfiction","christian","cookbooks"]
}
const essential = (state={},action) => {
    switch(action.type){
        case actionTypes.GET_ESSENTIALS:
            state = essentials
            return state;
        default:
            return state;
    }
}

export default essential;