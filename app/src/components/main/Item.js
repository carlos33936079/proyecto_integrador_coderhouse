import React from 'react'
import ItemCount from './ItemCount'

function Item(props) {
const miOnAdd = () => {}
console.log(props.name)
  return (
    <div className='container_card'>
    <div className='container_card_image'>
        <img className="card_image" src={props.image} alt='Imagen'/>
        <h3>{props.name}</h3>
    </div>
   <ItemCount {...props} onAdd={miOnAdd}/>
    </div>
  )
}

export default Item