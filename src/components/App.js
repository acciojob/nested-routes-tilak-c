
import React from "react";
import './../styles/App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Women from './Women'
const Home=()=>{
  return <h2>Home Page</h2>
}
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <BrowserRouter>
        <ul>
         <li> <Link to="/">Home</Link></li><br/>
          <li><Link to="/women">Women</Link></li>
          </ul>
        <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/women/*" element={<Women/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
