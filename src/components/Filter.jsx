function Filter({filterName,setFilter,filter}){
    
    return(
        <div className={`text-lg px-2 py-1 rounded-md font-medium 
        text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
        ${filterName === filter ? 
        "bg-opacity-60 border-white" :
        "bg-opacity-40 border-transparent"}
        `}>
            <button onClick={()=>{setFilter(filterName)}} >{filterName}</button>
        </div>
    )
}

export default Filter;