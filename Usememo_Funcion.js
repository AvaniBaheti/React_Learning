// import './App.css';
// import React, { useState,useMemo } from 'react'
// function App() {
//   const [ans, seAns] = useState(1)
//   const [ams, seAms] = useState(20)

//   const newApple=useMemo(
//     function Check() {
//       console.warn("Hello")
//       return 100 * ans;
//     }
//   ,[ams])
//   return (
//     <div className="App">
//       <h1>Hooks in React {ans}</h1>
//       {newApple}
//       <button onClick={() => seAns(ans + 1)}>Update State</button>
//       <button onClick={() => seAms(ams * 10)}>Update State</button>

//     </div>
//   );
// }

// export default App;