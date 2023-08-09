import React from 'react'

export default function evens() {
        let data="anil sidhu";
        function apple()
        {
        data="peter";
          alert(data);
        }
        return (
          <div className="App">
           <h1>{data}</h1>
           <button onClick={apple}>Click Me</button>
          </div>
        );
}
