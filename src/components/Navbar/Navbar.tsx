import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { websiteInfo } from '../../../constants'

function Navbar() {
  const [] = useState(0)

  return (
    <nav className='navbar'>
        <div className='navbar-container'>
        <div className='navbar-logo-container'> 
        <h2><Link className='navbar-logo' to={'/#'}>{websiteInfo.name}</Link></h2>
        </div>
        </div>
      </nav> 
  )
}

export default Navbar
