import React,{useState} from 'react'
function Controlled() {
  const [val,setVal]=useState("")

   return (
    <div className="Controlled">
      <h1>Controlled Component </h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
   <h1>{val}</h1>
    </div>
  );

}
export default  Controlled;