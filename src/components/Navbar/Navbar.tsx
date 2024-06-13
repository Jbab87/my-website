import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [] = useState(0)

  return (
    <nav className='navbar'>
        <div className='navbar-container'>
        <div className='navbar-logo-container'> 
        <h2><Link className='navbar-logo' to={'/#'}>Rent4Cheap</Link></h2>
        </div>
        <ul>
          <li><Link className='list-item' to={'/#'}>Products</Link></li>
          <li><Link className='list-item' to={'/about'}>Blog</Link></li>
          <li><Link className='list-item' to={'/about'}>About</Link></li>
        </ul>
        </div>
      </nav> 
  )
}

export default Navbar
