import React,{useEffect} from 'react'


import { useNavigate } from 'react-router-dom';
export default function () {
    const login=()=>{
        localStorage.setItem('login',true)
    }
    const navi=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(!login)
        {
            navi('/login')
        }
    })
  return (
    <div>
        <input type="text"/><br/><br/>< br />
        <button onClick={login}>
            Login
        </button>
    </div>
  )
}
