import React from 'react'
import '../styles/HeroSection.css'
import Button from './Button'
function HeroSection() {
  return (
    <div className='hero-section'>
        <div className='hero-left'>
            <h1>Enjoy Our <br />Delicious Meal</h1>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <Button text="BOOK A TABLE"/>
        </div>
        <div className='hero-right'>
            <img src="/images/hero.png" alt="plate" />
        </div>
    </div>
  )
}

export default HeroSection