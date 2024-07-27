import './Description.css'

function Description() {
  return (
    <div className='desc-ctr'>
    <div className='desc-site'><h2 >Fatllama - <em>"The Airbnb of Things"</em></h2>
    <p>Fatllama is a cool online marketplace where people can rent out their stuff to others or borrow things they need. Think Airbnb, but for gadgets and gear.</p>
    </div>
    <div className='desc-txt-ctr'>
      {/* <p className='desc-txt'>A cool online marketplace where people can rent out their stuff to others or borrow things they need. Think Airbnb, but for gadgets and gear. Whether you need a camera for a weekend trip, a drone for some fun aerial shots, or a power tool for a DIY project, they've got it. If you have items lying around that you don’t use often, you can list them on the site and make some extra cash by renting them out. The platform makes sure everything is safe and secure with user verification, secure payments, and insurance for rented items. A great way to save money, make money, and help the environment by sharing resources.</p> */}

      <div className='desc-ftr'> 
      <h2>Rent What You Need</h2>
      <p>A camera for a weekend trip, a drone for some fun aerial shots, or a power tool for a DIY project? They've got it.</p>
      </div>

      <div className='desc-ftr'> 
      <h2>Earn Extra Cash</h2>
      <p>Got unused items? List them on Fatllama and earn extra cash by renting them out.</p>
      </div>

      <div className='desc-ftr'>
      <h2>Peace of Mind</h2>
      <p>Stay safe and secure with user verification, secure payments, and insurance for rented items.</p>
      </div>

      <div className='desc-ftr'> 
      <h2>Reduce Wastage</h2>
      <p>Help the environment by sharing resources.</p>
      </div>
 
    </div>
  </div>
  )
}

export default Description