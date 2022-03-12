import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {

  return (
    <article className='container_card'>
      
        <img className="card_image" src={props.image} alt='Imagen'/>
        <h2>{props.name}</h2>
        <p>${props.price}</p>
        <button>
          <Link to={`/item/${props.id}`}>Ver detalle</Link>
        </button>
      
    </article>
  )
}

export default Item