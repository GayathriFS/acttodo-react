
import Header from "../components/Header";
import Card from "../components/card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing()
{
    const data= useLocation()
    return (
        <div className="bg-black p-10">
    
          <div className="bg-[#EFEFEF] p-10 border rounded-md" >
            <Header name={data.state.user}></Header>
            <div className="flex justify-between gap-7 my-5 flex-wrap">
    
           <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} ></Card>
             
           <Card bgcolor={"#FD6663"} title={"September 29"} subtitle={"16:00:00"}></Card>
               
           <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
          
       </div>
         
    <TodoContainer>
    
      
    </TodoContainer>
          </div>
        </div>
      );
    }
    

export default Landing

