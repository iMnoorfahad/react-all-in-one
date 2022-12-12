import React, { useState } from 'react'
import './style.css'
export const Header = (props) => {

    // const [count, setCount] = useState(0);
    // const [name, setName] = useState(props.name)

    // function eventHandel(e) {
    //     // e.preventDefault();
    //     // setCount(count+1)
    //     // setName('Fahad')
    //     console.log('Welcome');
    // }
    const isClass = props.isValid ? 'demo' : 'active' ;
    const [users] = useState(
        [
            {id:1, name:'Noor', class:'A'},
            {id:2, name:'Fahad', class:'A+'},
        ])
    const inLine = {
        fontSize:'120px',
        color:'blue'
    }
    const listofUsers = users.map((user, index) => {
        return (
            <div key={index}>
                <h1 className={`${isClass} fontSize`}>{user.name}</h1>
                <h2 style={inLine}>{user.class}</h2>
            </div>
        )

    })
  return (
    <ul>
        {listofUsers}
    </ul>
  )
}
