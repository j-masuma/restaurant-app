import React from 'react'
import '../styles/Menu.css'

const menu_list= [
  {
    Image:'/images/menu-1.jpg',
    title:'Chicken Burger',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. assumenda.',
    price:'$115'
  },
  {
    Image:'/images/menu-2.jpg',
    title:'Chicken Burger',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. assumenda.',
    price:'$115'
  },
  {
    Image:'/images/menu-3.jpg',
    title:'Chicken Burger',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. assumenda.',
    price:'$115'
  },
  {
    Image:'/images/menu-4.jpg',
    title:'Chicken Burger',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. assumenda.',
    price:'$115'
  },
  {
    Image:'/images/menu-5.jpg',
    title:'Chicken Burger',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. assumenda.',
    price:'$115'
  },
  {
    Image:'/images/menu-6.jpg',
    title:'Chicken Burger',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. assumenda.',
    price:'$115'
  },
  {
    Image:'/images/menu-7.jpg',
    title:'Chicken Burger',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. assumenda.',
    price:'$115'
  },
  {
    Image:'/images/menu-8.jpg',
    title:'Chicken Burger',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. assumenda.',
    price:'$115'
  }
]
function Menu() {
  return (
    <div>
      <div className='menu-sec'>
        <h5>___ Menu Items ___</h5>
        <h1>Most Popular Items</h1>
        <div>
          <div className='category'>
            <div className='c-1'>
                <img 
                src="/icons/coffee.png" 
                width={40}
                height={40}
                alt="Coffee" />
                <div>
                  <p>Popular</p>
                  <h4>Breakfast</h4>
                </div>
            </div>
            <div className='c-1'>
                <img 
                src="/icons/cheese.png" 
                width={40}
                height={40}
                alt="Coffee" />
                <div>
                  <p>Popular</p>
                  <h4>Breakfast</h4>
                </div>
            </div>
            <div className='c-1'>
                <img 
                src="/icons/cutlery.png" 
                width={40}
                height={40}
                alt="Coffee" />
                <div>
                  <p>Popular</p>
                  <h4>Breakfast</h4>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className='menu-part2'>
        {
          menu_list.map((menu, index)=>{
            return(
              <div className='menu-list' key={index}>
                <img src={menu.Image} alt="" />
                <div className='li-des'>
                  <h5>
                    <span>{menu.title}</span>
                    <span className='price'>{menu.price}</span>
                  </h5>
                  <hr />
                  <small>{menu.description}</small>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Menu