import './Hero.css'

function Hero() {
 

  const scrollToLink = () => {
    const element = document.getElementById('link-btn');
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
        <button onClick={scrollToLink} className='hero-btn'> Get Started Renting</button>
        </div>
      </div>
    
  )
}

export default Hero
