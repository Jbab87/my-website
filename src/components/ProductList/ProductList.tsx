import { useState } from 'react'
import './ProductList.css'
import productList from '../../../products.json'

function ProductList() {
  const [products, setProducts] = useState(productList)

let x =  productList.map((product) => {
    return (
      <div className='product-card'>
         <div className='product-image'>
            
        </div>
        <a href='https://fatllama.com/uk/i/hire-go-pro-hero9-camera-58788046'><h3>{product.name}</h3> </a>
        <p>£{product.price}</p>
      </div>
    )
  })

  return (
    <> 
    <h1>Top deals found</h1>
        <div className='productlist-container'>
          {x}
          <h1>More to come!</h1>
      </div>
      </>
  )
}

export default ProductList
