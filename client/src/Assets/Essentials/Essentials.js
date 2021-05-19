
const essentials = {
        isLogin:false,
        userData:null,
        filter:false,
        languages:["english","hindi","Tamil","urdu","malayalam"],
        genres:["fiction","children's","memoir","nonfiction","christian","cookbooks"]
}

const essential = (state={...essentials},action) => {
    switch(action.type){
        case 'GET_ESSENTIALS':
            state = essentials
            return state;

        case 'TOGGLE_FILTER':
            state = {...state,filter:!state.filter}
            return state;

        case 'ADD_USER_DATA':
            var newState = {...state,userData:action.payload, isLogin:true};
            return newState;
        default:
            return state;
    }
}

export default essential;