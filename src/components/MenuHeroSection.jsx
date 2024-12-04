import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MenuHeroSection.css'
function MenuHeroSection() {
  return (
    <div className='menu-main'>
        <h1>Food Menu</h1>
        <span className='links'>
            <Link to='/' className='navs'>HOME</Link>
            /
            <Link className='navs'>PAGES</Link>
            /
            <Link className='navs-1'>MENU</Link>
        </span>
    </div>
  )
}

export default MenuHeroSection