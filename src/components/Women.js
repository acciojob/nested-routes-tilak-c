import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Item from './Item'
const Women = () => {
  return (
    <div>
        <ul>
       <li><Link to="Grooming">Grooming</Link></li>
       <li> <Link to="Shirt">Shirt</Link></li>
       <li> <Link to="Trouser">Trouser</Link></li>
       <li> <Link to="Jewellery">Jewellery</Link></li>
        </ul>
       <Routes>
        <Route path=":itemName" element={<Item/>}/>
       </Routes>
    </div>
  )
}

export default Women;