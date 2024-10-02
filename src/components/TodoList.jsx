//import { useState } from "react"
import TodoItem from "./TodoItem"
function TodoList(props) 
{
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
    return(
        <div className="bg-[#BDB4EA] border border-rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        
        {activityarr.length===0?"You haven't added any Activity":""}
    {
activityarr.map(function(item,index)
{
    return <TodoItem id={item.id} activity={item.activity} index={index} activityarr={activityarr} setactivityarr={setactivityarr}>

    </TodoItem>
})
    }
    </div>
    )
}

export default TodoList