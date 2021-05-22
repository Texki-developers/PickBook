const Action = {
    addFilter:(data)=>({
        type:'ADD_FILTER',
        payload:data
    }),

    clearFilter:()=>({
        type:'REMOVE_FILTER'
    })

}

export default Action