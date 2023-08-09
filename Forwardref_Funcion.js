import React from 'react'
import {useRef} from 'react'
import Forward_2 from './Forward_Ref2'
export default function Forwardref_Funcion() {
    let inputRef=useRef(null)
    function updateInput()
    {
      inputRef.current.value="1000";
      inputRef.current.style.color="red"
      inputRef.current.focus()
  
  
    }
    return (
      <div>
        <h1>forwardRef in React </h1>
        <Forward_Ref2 ref={inputRef} />
        <button onClick={updateInput} >Update Input Box</button>
      </div>
    );  
}
