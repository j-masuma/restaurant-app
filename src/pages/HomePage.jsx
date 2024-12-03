import React from 'react'
import HeroSection from '../components/HeroSection'
import Service from '../components/Services'
import About from '../components/About'
import Menu from '../components/Menu'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Reservation from '../components/Reservation'

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <Service/>
      {/* <About/> */}
      <Menu/>
      <Reservation/>
      <Team/>
      <Testimonials/>
    </div>
  )
}

export default HomePage