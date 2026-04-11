import React from 'react'
import APIUsers from './components/APIUsers'
import UserCount from './components/UserCount'
import { useEffect, useState } from "react";

function App() {

  // state
      
      let [users, setUsers] = useState([])
      let [loading, setLoading] = useState(false)
      let [error, seterror] = useState(null)
      let [count,setCount] = useState(0)
      
      const increment = ()=>{
          setCount(count=>count + 1)
      }
      
      // a function to make api req
      useEffect(()=>{
          // console.log("use effect execuited")
          async function getData() {
              try{
                // set loading true
                setLoading(true)
                  let res = await fetch("https://jsonplaceholder.typicode.com/users");
                  let userList =await res.json();
                  // console.log(userList)
                  // update user list
                  setUsers(userList)
              } catch(err){
                  console.log('err is',err);
                  seterror(err)
              }finally{
                  setLoading(false)
              }
          }
          // call 
          getData();
      },
      [])
      
  
      
      if(loading){
          return <p className="text-center text-5xl">Loading....</p>
      }
  
      if(error != null){
          return <p className="text-center text-red-600 text-5xl">{error.message}</p>
      }

  return (
    <div>
      <UserCount UserCount ={count} />
      <APIUsers userList={users} onAdd ={increment}/>
    </div>
  )
}

export default App