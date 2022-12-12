import React,{useState} from 'react'

export const Form = () => {
    const [userName, setuserName] =  useState('')
    const [password, setpassword] =  useState('')
    const [dropdown, setdropdown] =  useState(['lime','coconut'])
    const handelSubmit = (event) =>{
        event.preventDefault();
        alert(`${userName} ${password}`)
    }
  return (
    <div>
    <form onSubmit={handelSubmit}>
        <label>User Name</label> <br />
        <input value={userName} onChange={ (e) => setuserName(e.target.value)}></input> <br/>
        <label>Password</label> <br />
        <input type='password' value={password} onChange={ (e) => setpassword(e.target.value)}></input> <br/>
        <label>
          Pick your favorite flavor:
          </label> <br/>
          <select multiple={true} value={dropdown} onChange={(e) => setdropdown(e.target.value)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}
