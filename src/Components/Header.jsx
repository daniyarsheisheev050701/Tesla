import React from 'react'
import { NavLink } from 'react-router-dom'
import "./UI/style.css/Header.css"
function Header() {
  return (
    <div className='bods'>
        <ul className='navbar'>
          <li>
          <h1 className='tesla'><a href='/'>Tesla</a></h1>
          </li>
        
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>  <NavLink to='Headset'>Model s</NavLink>
        </li>
        <li><NavLink to='Model_x'>Model x</NavLink>
        </li>
        <li><NavLink to='Contacts'>Model y</NavLink></li>
        <li><NavLink to='Shop'>Shop </NavLink></li>
      </ul>
     
    </div>
  )
}
export default Header