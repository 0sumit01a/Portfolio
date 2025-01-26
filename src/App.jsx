import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App