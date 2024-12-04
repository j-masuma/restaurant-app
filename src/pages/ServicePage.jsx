import React from 'react'
import ServiceHeroSection, { ExploreService } from '../components/ServiceHeroSection'
import Service from '../components/Services'

function ServicePage() {
  return (
    <div>
      <ServiceHeroSection/>
      <ExploreService/>
      <Service/>
    </div>
  )
}

export default ServicePage