import React from "react"
import './App.css';
import { LifeCycle } from "./component/LifeCycle";
import Menu from './component/Menu'
import Form from "./Form";
// import { Header } from "./component/Header";
// import { Form } from "./component/Form";

// const getGreeting = (user) =>{
//   if(user){
//     return <h1> Hello, {user.firstName + ' ' + user.lastName} </h1>
//   }else
//   {
//     return <h1>Hello, India</h1>
//   }
// }

// const user = {
//   firstName:'Noor',
//   lastName:'Fahad'
// }

// const title = getGreeting(user);
// This is safe:
// const element = <h1>{title}</h1>;

// const newElement = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
