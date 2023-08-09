import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <ul className='navbar'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Abouy">Abouy</NavLink></li>
          {/* <li><NavLink to="/User/:aasn">aasn</NavLink></li>
          <li><NavLink to="/User/:masn">masn</NavLink></li> */}
          <li><NavLink to="/*">page404</NavLink></li>
        </ul>
    </div>
  )
}
