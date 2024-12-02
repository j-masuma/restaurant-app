import React from 'react'
import '../styles/Service.css'

const service_data=[
  {
    Image: "/icons/businessman.png",
    title:"Master Chefs",
    description:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    Image: "/icons/cutlery.png",
    title:"Quality food",
    description:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    Image: "/icons/shopping-cart.png",
    title:"Online Order",
    description:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    Image: "/icons/customer-service.png",
    title:"24/7 Service",
    description:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  }
]
function Service() {
  return(
    <div className='service-section'>
      {
        service_data.map((service, index)=>{
          return(
            <div className='service-card' key={index}>
              <img src={service.Image} alt="" width={60} height={70}/>
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Service