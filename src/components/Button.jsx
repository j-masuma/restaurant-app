import React from 'react'
import '../styles/Button.css'

function Button({text}) {
  return (
    <button className='btn'>{text}</button>
  )
}

export default Button