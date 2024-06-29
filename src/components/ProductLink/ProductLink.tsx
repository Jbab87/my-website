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
            <h2>Save on Products below</h2>
            </div>

            <div className='cards-ctr'> 
                <Card
                backgroundImg={droneStyle}
                title={"Drones"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex nulla, consectetur vel suscipit ut, cursus vitae eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque dictum urna sodales quam iaculis, et luctus elit fringilla. Vestibulum condimentum venenatis felis, ut placerat neque hendrerit ac. Nullam scelerisque viverra enim id ornare. Mauris mattis accumsan porttitor. Pellentesque cursus tortor eget molestie scelerisque. Mauris aliquam ligula nec massa iaculis porttitor."}
                />

                <Card
                backgroundImg={goProStyle}
                title={"Go Pro Action Cameras"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex nulla, consectetur vel suscipit ut, cursus vitae eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque dictum urna sodales quam iaculis, et luctus elit fringilla. Vestibulum condimentum venenatis felis, ut placerat neque hendrerit ac. Nullam scelerisque viverra enim id ornare. Mauris mattis accumsan porttitor. Pellentesque cursus tortor eget molestie scelerisque. Mauris aliquam ligula nec massa iaculis porttitor."}
                />
                <Card
                backgroundImg={rodeStyle}
                title={"Go Pro Action Cameras"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex nulla, consectetur vel suscipit ut, cursus vitae eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque dictum urna sodales quam iaculis, et luctus elit fringilla. Vestibulum condimentum venenatis felis, ut placerat neque hendrerit ac. Nullam scelerisque viverra enim id ornare. Mauris mattis accumsan porttitor. Pellentesque cursus tortor eget molestie scelerisque. Mauris aliquam ligula nec massa iaculis porttitor."}
                />

           </div>

          <div className='content-ctr-txt-2'> 
            <h2>And many more items!</h2>
          </div>
           
      </div>
      <div className='fatllama-link-ctr'>
          <h1>More to come!</h1>
          <div className='btn-ctr'> 
            <a href='https://fatllama.com/'><button id='link-btn' className='hero-btn'> Get Started Renting</button></a>
        </div>
      </div>
    </div>
  )
}

export default ProductLink
