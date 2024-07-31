import './CardContainer.css'
import drone from "../../assets/zac-gudakov-0addIoploTs-unsplash.jpg"
import gopro from "../../assets/jye-b-DGyTUaS6_aw-unsplash.jpg"
import rode from "../../assets/dimitri-karastelev-AuVIIdp7hfk-unsplash.jpg"
import Card from '../Card/Card'


function CardContainer() {

  const goProStyle = {
      backgroundImage: `url(${gopro})`
  }

  const droneStyle  = {
    backgroundImage: `url(${drone})`
}

const rodeStyle = {
  backgroundImage : `url(${rode})`
}

  return (
            <div className='cards-ctr'> 
                <Card
                backgroundImg={droneStyle}
                title={"Drones"}
                text={"Discover high-performance drones with advanced features and stunning camera quality on Fatllama. Perfect for capturing breathtaking aerial footage."}
                price={"10"}
                url={"https://fatllama.com/category/297-drone"}
                />

                <Card
                backgroundImg={goProStyle}
                title={"Go Pro Action Cameras"}
                text={"Find rugged, waterproof GoPro action cameras on Fatllama. Capture every thrilling moment in high-quality 4K resolution."}
                price={"2"}
                url={"https://fatllama.com/category/2928-gopro-action-camera"}

                />
                <Card
                backgroundImg={rodeStyle}
                title={"DSLRs and Accessories"}
                text={"Explore top-quality DSLR cameras and essential accessories on Fatllama. Perfect for photographers of all levels."}
                price={"5"}
                url={"https://fatllama.com/uk/category/2922-dslr-cameras"}
                />
           </div>
  )
}

export default CardContainer
