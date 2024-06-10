import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [] = useState(0)

  return (
      <div className='navbar'>
        <div className='navbar-contents'>
        <div className='title-container'> 
        <h2 className='title'>Rent4Cheap</h2>
        </div>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
        </div>
      </div>
    
  )
}

export default Navbar
