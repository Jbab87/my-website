import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [] = useState(0)
  const element = document.getElementById('link-btn');

  const scrollToLink = () => {
    element?.scrollIntoView({behavior: 'smooth'})
  }

  return (
      <div className='hero-container'>
        {/* <img className='image' src={camera}></img> */}
        <div className='hero-title-ctr'> 
        <h1 className='hero-title'>Discover great deals by <i>Renting</i> instead of buying </h1>
        <h2 className='hero-subtitle'>Get what you need just for the moment, and not a bit more</h2>
        </div>
        <div className='btn-ctr'> 
        <a><button onClick={scrollToLink} className='hero-btn'> Get Started Renting</button></a>
        </div>
      </div>
    
  )
}

export default Hero
