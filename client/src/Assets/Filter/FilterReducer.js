const filter = {
    isFilter:false,
    filterData:null
}


const filterRedcer = (state=filter,action)=>{

    switch (action.type) {
        case 'ADD_FILTER':
            var afterFilter = {...state,isFilter:true,filterData:action.payload}
            return afterFilter

        case 'REMOVE_FILTER':
            var defaultFilter = {...state,isFilter:false,filterData:null}
            return defaultFilter

        default:
            return state
    }

} 



export default filterRedcer