import React from 'react'
import {Link} from 'react-router-dom'
export default function Abouy() {
  return (
    <div>
        <h1>Abouy</h1>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/Abouy">Abouy</Link></li>
        <li><Link to="/User/:aasn">aasn</Link></li>
          <li><Link to="/User/:masn">masn</Link></li>
        </ul>
    </div>
  )
}
