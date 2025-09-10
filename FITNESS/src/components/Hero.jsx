import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5 >DEMON_Fitzz</h5>
        </span>
        <h2>POWER UP YOUR MUSCLES, <b>UNLOCK YOUR POTENTIAL;</b> <b>DOMINATE YOUR JOURNEY*</b> </h2>
        <a href="#about"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero