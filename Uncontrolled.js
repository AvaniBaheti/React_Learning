import React,{useRef} from 'react'

export default function Uncontrolled() {
    let ams=useRef(null);
    let ans=useRef(null);
    function subForm(e){
        e.preventDefault();
        console.log("hello",ans.current.value)
        console.log("hello",ams.current.value)
        let ip3=document.getElementById("ip03").value;
        console.log(ip3);
    }
  return (
    <div>Uncontrolled
        <form onsubmit={subForm}>
        <input type="text" ref={ans}/><br/><br/>
        <input ref={ams} type="text"/><br/><br/>
        <input id="ip03" type="text"/><br/><br />
        <button >Submit</button>
        </form>
    </div>
  )
}
