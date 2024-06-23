import { useState } from 'react'
import './Hero.css'
import camera from '../../assets/PXL_20240524_133656753.PORTRAIT.ORIGINAL.jpg'

function Hero() {
  const [] = useState(0)
  const element = document.getElementsByClassName("footer-header");

  const scrollToLink = () => {
    element[0].scrollIntoView({behavior: 'smooth'})
  }

  return (
      <div className='hero-container'>
        {/* <img className='image' src={camera}></img> */}
        <div className='hero-title-ctr'> 
        <h1 className='hero-title'>Discover great deals by <i>Renting</i> instead of buying </h1>
        <h2 className='hero-subtitle'>Get what you need just for the moment, and not a bit more</h2>
        </div>
        <div className='btn-ctr'> 
        <a><button onClick={scrollToLink} className='btn'> Get Started Renting</button></a>
        </div>
      </div>
    
  )
}

export default Hero
