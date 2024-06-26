import { useState } from 'react'
import './ProductLink.css'
import productList from '../../../products.json'
import drone from "../../assets/zac-gudakov-0addIoploTs-unsplash.jpg"
import gopro from "../../assets/jye-b-DGyTUaS6_aw-unsplash.jpg"
import Card from '../Card/Card'

function ProductLink() {
  const [] = useState(productList)

let x =  productList.map((product) => {
    return (
      <div className='product-card'> 
      <div className='image-container'>
         <div className='product-image'>
            
        </div>
      
      </div>
        <div className='product-info'> 
         <a href='https://fatllama.com/uk/i/hire-go-pro-hero9-camera-58788046'><h3>{product.name}</h3> </a>
        <p>£{product.price}</p>
        </div>
        </div>
    )
  })

  const goProStyle = {
      backgroundImage: `url(${gopro})`
  }

  const droneStyle  = {
    backgroundImage: `url(${drone})`
}

  return (
    <div className='outlet-ctr'> 

        <div className='content-ctr'>
            <div className='content-ctr-txt'> 
            <h1>Save on Products below</h1>
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
           </div>

          <div className='content-ctr-txt'> 
            <h1>More to come!</h1>
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
