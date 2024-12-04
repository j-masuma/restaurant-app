import React from 'react'
import '../styles/About.css'
import { BigButton } from './Button'
function About() {
  return (
    <div className='about-section'>
        <div className='ab-1'>
            <div className='img'>
                <div className='img-1'>
                  <img src="/images/about-1.jpg" alt="About" />
                </div>
                <div className='img-2'>
                  <img src="/images/about-2.jpg"  alt="About" />
                </div>
            </div>
          <div className='img'>
              <div className='img-3'>
                <img src="/images/about-3.jpg"  alt="About" />
              </div>
              <div className='img-4'>
                <img src="/images/about-4.jpg"  alt="About" />
              </div>
          </div>

        </div>
        <div className='ab-2'>
            <h5>about us_____</h5>
            <h1>Welcome to Restoran</h1>
            <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
            </p>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className='exp-sec'>
              <div className='exp1'>
                <h1>15</h1>
                <div>
                  <p>Years of</p>
                  <h5>EXPERIENCE</h5>
                </div>
              </div>
              <div className='exp1'>
                <h1>15</h1>
                <div>
                  <p>Years of</p>
                  <h5>EXPERIENCE</h5>
                </div>
              </div>
            </div>
            <div>
            <BigButton text="READ MORE"/>
            </div>
        </div>
    </div>
  )
}

export default About