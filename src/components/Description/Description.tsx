import Feature from '../Feature/Feature'
import './Description.css'

function Description() {
  return (
    <div className='desc-ctr'>
       <div className='desc-site'><h2 >Fatllama - <em>"The Airbnb of Things"</em></h2>
    <p>Fatllama is a cool online marketplace where people can rent out their stuff to others or borrow things they need. Think Airbnb, but for gadgets and gear.</p>
    </div>
    <div className='desc-ftr-ctr'>
        <Feature
          title="Rent What You Need"
          icon="volunteer_activism"
          description="A camera for a weekend trip, a drone for some fun aerial shots, or a power tool for a DIY project? They've got it."
        />

          <Feature
          title="Earn Extra Cash"
          icon="attach_money"
          description="Got unused items? List them on Fatllama and earn extra cash by renting them out."
        />

<Feature
          title="Peace of Mind"
          icon="lock"
          description="Stay safe and secure with user verification, secure payments, and insurance for rented items."
        />

<Feature
          title="Multiple Locations"
          icon="map"
          description="Active in numerous cities, making it easy to rent or lend items wherever you are."
        />

      </div>
  </div>
  )
}

export default Description