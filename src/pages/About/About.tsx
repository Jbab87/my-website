import { websiteInfo } from '../../../constants'
import './About.css'

function About() {

  return (
    <div className='abt-pg'>
      <div className='abt-title'>
        <h1>About Us</h1>
      </div>
      <div className='about-container'>
        <p className='about-text'>


          Welcome! {websiteInfo.name} is all about helping you find the best deals on gadgets and gear. Whether you’re looking to rent a camera, grab a deal on drones, or find accessories for your next adventure, we’re here to make it easy.
           We scour various trusted platforms like Fatllama and others, curating the top options so you can save time and money.
           Think of us as your guide to finding what you need, when you need it, at the best price. Start exploring and discover great deals today!

          <br></br>
          <br></br>



        </p>
      </div>



    </div>
  )
}

export default About
