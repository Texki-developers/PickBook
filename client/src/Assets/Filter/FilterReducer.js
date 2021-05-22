const filter = {
    isFilter:false,
    filterData:null,
    isSearch:false,
    searchText:''
}


const filterRedcer = (state=filter,action)=>{

    switch (action.type) {
        case 'ADD_FILTER':
            var afterFilter = {...state,isFilter:true,filterData:action.payload,isSearch:false}
            return afterFilter

        case 'REMOVE_FILTER':
            var defaultFilter = {...state,isFilter:false,filterData:null}
            return defaultFilter

        case 'SEARCH':
            var searchState = {...state,isSearch:true,searchText:action.payload,isFilter:false,filterData:null}
            return searchState
            
        default:
            return state
    }

} 



export default filterRedcer