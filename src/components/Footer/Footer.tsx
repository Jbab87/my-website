import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {

  return (
   <div className='ftr'>
    <div className='ftr-hdr-ctr'><h2 className='ftr-hdr'>Rent4Cheap</h2> </div>
    
    <div className='ftr-cnt'>
      <ul className='ftr-cnt-list'>
       <Link to={'about'}><li>About</li></Link>
        <Link  to={'privacy'}> <li>Privacy</li></Link>
        <Link to={'terms'}><li>Terms</li></Link>
      </ul>
    </div>
   </div>
    
  )
}

export default Footer
