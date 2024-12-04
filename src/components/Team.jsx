import React from 'react'
import '../styles/Team.css'

const team_info=[
  {
    name:'John Smith',
    designation:'Head Chef',
    image:'/images/team-1.jpg'
  },
  {
    name:'John Smith',
    designation:'Head Chef',
    image:'/images/team-2.jpg'
  },
  {
    name:'John Smith',
    designation:'Head Chef',
    image:'/images/team-3.jpg'
  },
  {
    name:'John Smith',
    designation:'Head Chef',
    image:'/images/team-4.jpg'
  }
]
function Team() {
  return (
    <div className='team-sec'>
      <h5 className='minitxt'>___ Team Members ___</h5>
      <h1>Our Master Chefs</h1>
      <div className='cards-sec'>
        {
          team_info.map((team, index)=>{
            return(
              <div key={index} className='team-cards'>
                <div className='card-img'>
                  <img 
                  src={team.image} 
                  width={215}
                  height={215}
                  alt="" />
                </div>
                <h5>{team.name}</h5>
                <small>{team.designation}</small>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Team