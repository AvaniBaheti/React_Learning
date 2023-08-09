import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const {Component}=props;
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
        <Component/>
    </div>
  )
}
