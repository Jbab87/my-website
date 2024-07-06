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

        <div className='content-ctr'>
            <div className='content-ctr-txt-1'> 
            <h2>Popular Products</h2>
            </div>

            <div className='cards-ctr'> 
                <Card
                backgroundImg={droneStyle}
                title={"Drones"}
                text={"Discover high-performance drones with advanced features and stunning camera quality on Fatllama. Perfect for capturing breathtaking aerial footage."}
                />

                <Card
                backgroundImg={goProStyle}
                title={"Go Pro Action Cameras"}
                text={"Find rugged, waterproof GoPro action cameras on Fatllama. Capture every thrilling moment in high-quality 4K resolution."}
                />
                <Card
                backgroundImg={rodeStyle}
                title={"DSLRs and Accessories"}
                text={"Explore top-quality DSLR cameras and essential accessories on Fatllama. Perfect for photographers of all levels."}
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
