import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const params=useParams();
    const {name}=params;
    console.log(name);
  return (
    <div>
        <h1>Users {name} page</h1>
        <p>Hello World</p>
    </div>
  );
}