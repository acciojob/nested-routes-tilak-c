
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
          <Link to="/">Home</Link><br/>
          <Link to="/women">Women</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/women/*" element={<Women/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
