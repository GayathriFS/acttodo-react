import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
function TodoContainer() 
{
    
    const[activityarr,setactivityarr] = useState([
        {
            id:1,
            activity:"Go Walking"
        },
        {
            id:2,
            activity:"Read Book"
        },
        {
            id:3,
            activity:"Prepare Breakfast"
        }
    ])
    return(
        <div>
            <div className="flex gap-5 flex-wrap">
       
<AddTodoForm activityarr={activityarr} setactivityarr={setactivityarr}></AddTodoForm>
<TodoList activityarr={activityarr} setactivityarr={setactivityarr}></TodoList>
      
        </div>
      </div>
    )
}

export default TodoContainer