
const Actions = {

    getEssentials:()=>({
        type:'GET_ESSENTIALS'
    }),

    toggleFilter:()=>({
        type:'TOGGLE_FILTER'
    }),

    addUserData : (userData) => ({
        type:'ADD_USER_DATA',
        payload: userData,
    }),

    addIconToggle : () => ({
        type:'ADD_ICON_TOGGLE'
    }),

    toggleLoading : () => ({
        type: "TOGGLE_LOADING"
    }),

    logout:()=>({
        type:'LOG_OUT'
    })
}


export default Actions;