//import logo from './logo.svg';

import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from "react"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function App()
{
  const[users,setusers]= useState([
    {
        username:"gayu",
        password:"123"
    }
  ])
  return(
    <div>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
  <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
  <Route path='/landing' element={<Landing/>}></Route>
  </Routes>
  </BrowserRouter>
</div>
  )

}
root.render(
<App></App>
);

export default App
