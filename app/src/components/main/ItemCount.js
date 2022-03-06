import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react"

function ItemCount(props) {

const [count, setCount] = useState(props.initial)

const clickIncrease = () => {
  if(count < props.stock){
  setCount(count + 1)
  }
}

const clickDecrement = () => {
  if(count > 0){
    setCount(count - 1)
  }
}

  return (
    <div className='container_card'>
        <div className='container_card_image'>
            <img className="card_image" src='/images/images_card/no_image.jpg' alt='Imagen'/>
            <h3>Nombre Producto</h3>
        </div>
        <div className='container_count'> 
        <div className='card_count'>
        <FontAwesomeIcon icon={faMinus} onClick={clickDecrement} />
        <p className='numero'>{count}</p>
        <FontAwesomeIcon icon={faPlus} onClick={clickIncrease}/>
        </div>
        <p>/{props.stock}</p>
        </div>
         <br />
        <button className='button_add' onClick={()=>alert('agregar')}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount