import React from 'react'
import '../styles/Button.css'

export default function Button({text}) {
  return (
    <button className='btn'>{text}</button>
  )
}

export function BigButton({text}) {
  return (
    <button className='big-btn'>{text}</button>
  )
}

