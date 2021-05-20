
const essentials = {
        isLogin:false,
        addIcon:true,
        headAndFootShow:true,
        userData:null,
        filter:false,
        languages:["english","hindi","Tamil","urdu","malayalam"],
        genres:["fiction","children's","memoir","nonfiction","christian","cookbooks"],
        loading:false
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
            state = {...state,userData:action.payload, isLogin:true};
            return state;
        case 'ADD_ICON_TOGGLE':
            state = {...state,addIcon:!state.addIcon,headAndFootShow:!state.headAndFootShow}
            return state;
        case "TOGGLE_LOADING":
            state = {...state,loading:!state.loading}
            return state;
        default:
            return state;
    }
}

export default essential;