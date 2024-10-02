import { useState } from "react"

function AddTodoForm(props)
{

  const activityarr=props.activityarr
  const setactivityarr=props.setactivityarr

  const [newactivity,setnewactivity]= useState("")

  function handleChange(event)
  {
    setnewactivity(event.target.value)
  }

  function addActivity()
  {
    setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
    setnewactivity("")
  }
    return(
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>


        <div>
        <input onChange={handleChange} value={newactivity} type="text" className="border border-black rounded bg-transparent p-1" placeholder="Next Activity?"></input>
        <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
        </div>
      </div>
    )
}

export default AddTodoForm