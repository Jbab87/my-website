import { useState } from 'react'
import './ProductLink.css'
import productList from '../../../products.json'
import drone from "../../assets/zac-gudakov-0addIoploTs-unsplash.jpg"
import gopro from "../../assets/jye-b-DGyTUaS6_aw-unsplash.jpg"
import rode from "../../assets/dimitri-karastelev-AuVIIdp7hfk-unsplash.jpg"
import Card from '../Card/Card'

function ProductLink() {
  const [] = useState(productList)


  const goProStyle = {
      backgroundImage: `url(${gopro})`
  }

  const droneStyle  = {
    backgroundImage: `url(${drone})`
}

const rodeStyle = {
  backgroundImage : `url(${rode})`
}

  return (
    <div className='outlet-ctr'> 
    <div className='desc-ctr'>
      <div className='desc-site'><h2 >Fatllama</h2></div>
      <div className='desc-txt-ctr'>
        <p>Fatllama is a cool online marketplace where people can rent out their stuff to others or borrow things they need. Think of it like Airbnb, but for gadgets and gear. Whether you need a camera for a weekend trip, a drone for some fun aerial shots, or a power tool for a DIY project, they've got it. If you have items lying around that you don’t use often, you can list them on the site and make some extra cash by renting them out. The platform makes sure everything is safe and secure with user verification, secure payments, and insurance for rented items. It’s a great way to save money, make money, and help the environment by sharing resources.</p>
      </div>
    </div>

        <div className='content-ctr'>
            <div className='content-ctr-txt-1'> 
            <h2>Popular Products</h2>
            </div>

            <div className='cards-ctr'> 
                <Card
                backgroundImg={droneStyle}
                title={"Drones"}
                text={"Discover high-performance drones with advanced features and stunning camera quality on Fatllama. Perfect for capturing breathtaking aerial footage."}
                price={"10"}
                />

                <Card
                backgroundImg={goProStyle}
                title={"Go Pro Action Cameras"}
                text={"Find rugged, waterproof GoPro action cameras on Fatllama. Capture every thrilling moment in high-quality 4K resolution."}
                price={"2"}
                />
                <Card
                backgroundImg={rodeStyle}
                title={"DSLRs and Accessories"}
                text={"Explore top-quality DSLR cameras and essential accessories on Fatllama. Perfect for photographers of all levels."}
                price={"5"}
                />

           </div>

          <div className='content-ctr-txt-2'> 
            <h2>And many more items!</h2>
          </div>
           
      </div>
      <div className='fatllama-link-ctr'>
          <h2>Ready to start renting? Head to Fatllama now.</h2>
          <div className='btn-ctr'> 
            <a href='https://fatllama.com/'><button id='link-btn' className='hero-btn'> Get Started Renting</button></a>
        </div>
      </div>
    </div>
  )
}

export default ProductLink
