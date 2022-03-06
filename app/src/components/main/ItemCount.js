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
    
        <React.Fragment>
        <div className='container_count'> 
        <div className='card_count'>
        <FontAwesomeIcon icon={faMinus} onClick={clickDecrement} />
        <p className='numero'>{count}</p>
        <FontAwesomeIcon icon={faPlus} onClick={clickIncrease}/>
        </div>
        <p>/{props.stock} U. en stock</p>
        </div>
         <br />
        <button className='button_add' onClick={()=>alert('agregar')}>Agregar al carrito</button>
        </React.Fragment>
    
  )
}

export default ItemCount