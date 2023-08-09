import React from 'react'
import Props_Funcion_2 from './Props_Funcion_2'
export default function Props_Funcion() {
    const [name,setName]=useState("Anil")
    function apple()
    {
      alert("hello")
    }
    return (
      <div className="App">
       <h1>Props in React :)</h1>
       <Student name={name}/>
       <button onClick={()=>{setName("Sidhu")}} >Update Name</button>
      </div>
    );  
}
