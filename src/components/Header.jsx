import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './NavBar/NavBar'

function Header() {
  return (
    <div className='bg-pale-yellow pb-12'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Header