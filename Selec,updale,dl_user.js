// //Gey

// import './App.css';
// import React, { useEffect, useState } from 'react';
// function App(){
//   const [users,setUser]=useState([])
//   const [ams,seAms]=useState("");
//   const [nm,seName]=useState("");
//   const [id,seId]=useState(0);
//   useEffect(()=>{
//     geLis();
//   },[])
//     function geLis(){
//       fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
//       result.json().then((resp)=>{
//         // console.warn(resp)
//         setUser(resp)
//         seName(resp[0].userId);
//         seId(resp[0].id);
//         seAms(resp[0].body)
//       })
//     })
//   }
//   function delUser(id)
//   {
//     fetch("https://jsonplaceholder.typicode.com/posts"+id,{
//       method:'DELETE'
//     }.then((resul)=>{
//       resul.json().then((res)=>{
//         console.log(res);
//         geLis();
//       })
//     })
//     )
//   }
//   // function upUsers(id){
//   //   console.log(users[id-1]);
//   //   seName(users[id-1].userId);
//   //   seId(users[id-1].id);
//   //   seAms(users[id-1].body)
//   // }


//   function upUsers()
//   {
//     let item={nm,id,ams}
//     console.warn("item",item)
//     fetch(`https://jsonplaceholder.typicode.com/posts${nm}`, {
//       method: 'PUT',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(item)
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp)
//         geLis();
//       })
//     })

//   }




import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [users, setUser] = useState([])
  const [userId, setuserId] = useState("");
  const [title, settitle] = useState("");
  const [Body, setBody] = useState("");
  const [Id,setId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setuserId(resp[0].userId)
        setBody(resp[0].Body)
        settitle(resp[0].title)
        setId(resp[0].id)
      })
    })
  }

  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(id)
  {
    let item=users[id-1];
    setuserId(item.userId)
        settitle(item.title)
        setBody(item.Body);
        setId(item.id)
  }
  function updateUser()
  {
    let item={userId,Body,title}
    console.warn("item",item)
    fetch(`https://jsonplaceholder.typicode.com/posts${Id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div classuserId="App">
      <h1>Update User Data With API </h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>userId</td>
            <td>title</td>
            <td>Body</td>
            <td>Operations</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.Body}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={() => selectUser(item.id)}>Update</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div>
      <input type="text" value={userId} onChange={(e)=>{setuserId(e.target.value)}} /> <br /><br />
        <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} /> <br /><br />
        <input type="text" value={Body}  onChange={(e)=>{setBody(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );
}
export default App;



//   return (
//     <div className="App">
//       <h1>Get API Call </h1>
//       <table border="1">
//        <tbody>
//        <tr>
//           <td>UsersID</td>
//           <td>Id</td>
//           <td>title</td>
//           <td>Body</td>
//         </tr>
//         {
//           users.map((item,i)=>
//             <tr key={i}>
//             <td>{item.userId}</td>
//           <td>{item.id}</td>
//             <td>{item.title}</td>
//             <td>{item.body}</td>
//             <td><button onClick={()=>delUser(item.id)}>Dl</button></td>

//             <td><button onClick={upUsers}>Change</button></td>
            
//           </tr>
//           )
//         }
//        </tbody>
//       </table>
//       <br/>
//       <div>
//         <input type="text" value={nm}   onChange={(e)=>seName(e.target.value)} /><br /><br />
//         <input type="text" value={id}     onChange={(e)=>seId(e.target.value)}/><br /><br />
//         <input type="text" value={ams}  onChange={(e)=>seAms(e.target.value)}/><br /><br /><br/>
//         <button onClick={upUsers}>Change</button><br/><br/><br/>
//       </div>
//     </div>
//   );
// }
// export default App;




// POST

// import './App.css';
// import React, { useEffect, useState } from 'react'
// function App() {
//  const [name,setName]=useState("");
//  const [email,setEmail]=useState("");
//  const [mobile,setMobile]=useState("");
// function saveData()
// {
//   let data={name,email,mobile}
//   fetch("http://localhost:4000/todo", {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body:JSON.stringify(data)
//   }).then((resp)=>{
//     // console.warn("resp",resp);;
//     resp.json().then((result)=>{
//       console.warn("result",result)
//     })
//   })
// }
//   return (
//     <div className="App">
//       <h1>POST API Example </h1>  
//       <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
//       <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
//       <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
//       <button type="button" onClick={saveData} >Save New User</button>
//     </div>
//   );
// }
// export default App;