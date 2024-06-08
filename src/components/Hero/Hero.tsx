import { useState } from 'react'
import './Hero.css'
import camera from '../../assets/PXL_20240524_133656753.PORTRAIT.ORIGINAL.jpg'

function Hero() {
  const [] = useState(0)

  return (
      <div className='hero-container'>
        {/* <img className='image' src={camera}></img> */}
        <h1>Welcome</h1>
      </div>
    
  )
}

export default Hero
