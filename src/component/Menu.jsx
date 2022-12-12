import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

const Menu = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'> Home</Link>
            </li>
            <li>
              <Link to='/about'> About</Link>
            </li>
            <li>
              <Link to='/contact'> Contact </Link>
            </li>
            <li>
              <Link to='/blog'> Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/blog' element={<Blog></Blog>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Menu;

function Home(){
  return <h1>Home Page</h1>
}
function About(){
  return <h1>About Page</h1>
}
function Contact(){
  return <h1>Contact Page</h1>
}
function Blog(){
  return <h1>Blog Page</h1>
}
