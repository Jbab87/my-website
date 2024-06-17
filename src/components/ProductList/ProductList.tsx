import { useState } from 'react'
import './ProductList.css'
import productList from '../../../products.json'

function ProductList() {
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
    <> 
    <h2>Top deals found</h2>
        <div className='productlist-container'>
          {x}
          <h1>More to come!</h1>
      </div>
      </>
  )
}

export default ProductList
