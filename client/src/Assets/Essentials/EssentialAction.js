
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
}


export default Actions;