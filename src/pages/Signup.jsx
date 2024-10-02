import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) 
{
    const navigate = useNavigate()
    const[eusername,setEusername]= useState()
    const[epassword,setEpassword]= useState()
    const users= props.users
const setusers= props.setusers
function handleInput(event) 
{
        setEusername(event.target.value)
}

function handlePassword(event)
{
    setEpassword(event.target.value)
}

function addUser()
{
    setusers([...users,{username:eusername,password:epassword}])
    navigate("/")
}
    return(
      <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p>Sign Up Here :)</p>

        <div className="flex flex-col gap-2 my-2">
     
        <input
            type="text" value={eusername} onChange={handleInput}
            className="w-60 p-1 bg-white border-black rounded-md"
            placeholder="Username"
          />

<input
            type="text"  value={epassword} onChange={handlePassword}
            className="w-60 p-1 bg-white border-black rounded-md"
            placeholder="Password"
          />

<input
            type="text"
            className="w-60 p-1 bg-white border-black rounded-md"
            placeholder="Confirm Password"
          />
<button onClick={addUser} className="bg-[#afda72] w-24 p-1 rounded-md">SIGN UP</button>
<p>Already have an account? <Link to={"/"} className="underline">Login Here</Link></p>
        </div>
        </div>

      </div>
    )
}
export default Signup