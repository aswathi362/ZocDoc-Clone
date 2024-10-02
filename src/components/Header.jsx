import React from 'react'
import Navbar from './NavBar'
import Hero from './Hero'

function Header() {
  return (
    <div className='bg-pale-yellow pb-12'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Header