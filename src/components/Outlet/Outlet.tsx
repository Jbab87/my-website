import './Outlet.css'
import Flredirect from '../Flredirect/Flredirect'
import Description from '../Description/Description'
import CardContainer from '../CardContainer/CardContainer'
import Content from '../Content/Content'

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
