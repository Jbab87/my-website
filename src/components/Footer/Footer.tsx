import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {

  return (
   <div className='ftr'>
    <div className='ftr-hdr-ctr'><h2 className='ftr-hdr'>Rent4Cheap</h2> </div>
    
    <div className='ftr-cnt'>
      <ul className='ftr-cnt-list'>
        <li>About</li>
        <Link to={'/privacy'}> <li>Privacy</li></Link>
        <li>Terms & Conditions</li>
      </ul>
    </div>
   </div>
    
  )
}

export default Footer
