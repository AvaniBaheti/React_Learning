import React ,{useState}from 'react'
function IP_funcion() {
const [data,setData]=useState(null)
const [print,setPrint]=useState(false)

  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="IP_funcion">
     {
       print?
       <h1> {data}</h1>
       :null
     }
    <input type="text" onChange={getData} />
    <button onClick={()=>setPrint(true)} >Print Data</button>
    </div>
  );
}

export default IP_funcion;