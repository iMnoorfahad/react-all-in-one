import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const LifeCycle = () => {

  const [blogs, setblogs] = useState([])
  const [ username, setusername ] = useState('')
  const [ password, setpassword] = useState('')


  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
      console.log(data);
      setblogs(data.data)
    }).catch(error =>{
      console.log(error);
    })
  },[])

  const handelSubmit = (e) =>{
    e.preventDefault()
    console.log(username);
    console.log(password);
    axios.post("https://jsonplaceholder.typicode.com/posts",{
      id:112233,
      title:username,
      body:password
    }).then((data)=>{
      console.log(data);
    }).catch((e)=>{
      console.log(e);
    })
  }

  return (
    <>
    <h1>Posts List</h1>
    <form onSubmit={handelSubmit}>
    <label>User name</label><br></br>
    <input type={'text'} onChange={(e) =>{setusername(e.target.value)}}></input> <br></br>
    <label>Address</label><br></br>
    <input type={'text'} onChange={(e) =>{setpassword(e.target.value)}}></input> <br></br>
    <button> Submit </button>
    </form>
    </>
  )
}
