import './Outlet.css'
import Flredirect from '../Flredirect/Flredirect'
import Content from '../Content/Content'
import Description from '../Description/Description'

function Outlet() {



  return (
    <div className='outlet-ctr'> 
         <Description/>
         <Content/>
      <Flredirect/>
    </div>
  )
}

export default Outlet
