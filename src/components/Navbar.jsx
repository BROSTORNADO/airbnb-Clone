import React from 'react'
import { airbnb } from '../assets'
export default function Navbar() {
  return (
    <nav>
      <img src={airbnb} className="nav--logo" />
    </nav>
  )
}
