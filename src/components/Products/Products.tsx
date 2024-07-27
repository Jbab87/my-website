import './Products.css'
import Flredirect from '../Flredirect/Flredirect'
import Description from '../Description/Description'
import CardContainer from '../CardContainer/CardContainer'

function Products() {



  return (
    <div className='outlet-ctr'> 
         <Description/>
         <CardContainer/>
      <Flredirect/>
    </div>
  )
}

export default Products
