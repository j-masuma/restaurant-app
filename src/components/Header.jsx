import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'
import Button from './Button'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className='header'>
      <div>
        <Link className='logo'>
          <h4>Mili Restoran</h4>
        </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <ul>
          <li >
            <NavLink to='/' className='navlinks'>HOME</NavLink>
          </li>
          <li >
            <NavLink to='/about' className='navlinks'>ABOUT</NavLink>
          </li>
          <li >
            <NavLink to='/service' className='navlinks'>SERVICE</NavLink>
          </li>
          <li >
            <NavLink to='/menu' className='navlinks'>MENU</NavLink>
          </li>
          
        </ul>
      </nav>
      <div className='button-container'>
        <Button text="BOOK A TABLE"/>
      </div>
      
    </header>
  )
}

export default Header


