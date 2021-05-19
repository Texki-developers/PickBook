
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
    isLoggedIn : () => ({
        type: "IS_LOGGED_IN"
    })
}


export default Actions;