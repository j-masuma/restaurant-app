import React from 'react'
import '../styles/AboutHeroSection.css'
import { Link } from 'react-router-dom'

function AboutHeroSection() {
  return (
    <div className='abt-main'>
        <h1>About Us</h1>
        <span className='links'>
            <Link className='navs'>HOME</Link>
            /
            <Link className='navs'>PAGES</Link>
            /
            <Link className='navs-1'>ABOUT</Link>
        </span>
    </div>
  )
}

export default AboutHeroSection