import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ServiceHeroSection.css'
import Service from './Services'
function ServiceHeroSection() {
  return (
    <div className='s-main'>
        <h1>Services</h1>
        <span className='links'>
            <Link to='/' className='navs'>HOME</Link>
            /
            <Link className='navs'>PAGES</Link>
            /
            <Link className='navs-1'>SERVICE</Link>
        </span>
    </div>
  )
}


export function ExploreService() {
  return (
      <div className='explore'>
        <h5>
          ___ Our Services ___
        </h5>
        <h1>
          Explore Our Services
        </h1>
      </div>
    
  )
}

export default ServiceHeroSection