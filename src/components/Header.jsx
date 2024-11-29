import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'
import Button from './Button'

function Header() {
  return (
    <header className='header'>
      <div>
        <Link className='logo'>
          <h4>Restoran</h4>
        </Link>
      </div>
      <nav >
        <ul className='nav'>
          <li >
            <NavLink className='navlinks'>HOME</NavLink>
          </li>
          <li >
            <NavLink className='navlinks'>ABOUT</NavLink>
          </li>
          <li >
            <NavLink className='navlinks'>SERVICE</NavLink>
          </li>
          <li >
            <NavLink className='navlinks'>MENU</NavLink>
          </li>
          
        </ul>
      </nav>
      <div>
        <Button text="BOOK A TABLE"/>
      </div>
    </header>
  )
}

export default Header