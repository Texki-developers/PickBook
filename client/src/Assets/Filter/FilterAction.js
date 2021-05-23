const Action = {
    addFilter:(data)=>({
        type:'ADD_FILTER',
        payload:data
    }),

    clearFilter:()=>({
        type:'REMOVE_FILTER'
    }),

    searchData:(data)=>({
        type:'SEARCH',
        payload:data
    })
}

export default Action