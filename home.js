import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function Home() {
  const navi=useNavigate();
  const navig=()=>{
    let x=false;
    if(x)
    {
      navi("/home")
    }
    else
    {
      navi('/abouy')
    }
  }
  return (
    <div>
        <h1>Homes</h1>
        <p>Hello rrpn amasn world you</p>
        <Link to="/abouy">Abouy Pages</Link>
        <br/><br  />
        <button onClick={()=>navi("/abouy")}>GoAbouy</button>
        <br/><br  />
        <button onClick={()=>navig()}>Newha</button>
        {/* <Link to="/Abouy">Abouy</Link>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/Abouy">Abouy</Link></li>
        <li><Link to="/User/:aasn">aasn</Link></li>
          <li><Link to="/User/:masn">masn</Link></li>
        </ul> */}
    </div>
  )
}
