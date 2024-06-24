import { useState } from 'react'
import './ProductLink.css'
import productList from '../../../products.json'

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

  return (
    <div className='outlet-ctr'> 
        <div className='fatllama-link-ctr'>
          <h1>More to come!</h1>
          <div className='btn-ctr'> 
        <a href='#'><button className='btn'> Get Started Renting</button></a>
        </div>
      </div>
      <div className='fatllama-link-ctr'>
          <h1>More to come!</h1>
          <div className='btn-ctr'> 
        <a href='https://fatllama.com/'><button className='btn'> Get Started Renting</button></a>
        </div>
      </div>
    </div>
  )
}

export default ProductLink