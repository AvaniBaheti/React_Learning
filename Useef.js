import './Hook1.css';
import React, { useEffect, useState } from 'react'
function Hook1() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn("use effect")
  })
  return (
    <div className="Hook1">
      <h1>useEffect in React {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
}

export default Hook1;