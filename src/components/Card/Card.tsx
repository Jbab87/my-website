import './Card.css'

function Card(props: any) {

  return (
          <div className='card-ctr'>
            <div className='fatllama-img-ctr'>
              <div style={props.backgroundImg} className='fatllama-img'></div>
            </div>
            <div className='card-txt-ctr'>
              <h2 className='card-title'>{props.title}</h2>
              <p className='card-txt'>{props.text}</p>
            </div>
           </div>
  )
}

export default Card
