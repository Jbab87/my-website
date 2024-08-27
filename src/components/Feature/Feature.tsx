import './Feature.css'

function Feature(props: any) {
  return (
      <div className='desc-ftr'> 
      <h2 className='desc-title'>{props.title}</h2>
      <div className='desc-icon-ctr'>
        <span className="material-symbols-outlined">{props.icon}</span>
        </div>
      <p>{props.description}</p>
      </div> 
  )
}

export default Feature