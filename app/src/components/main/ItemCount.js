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
        <>
        <div className='container_count'> 
        <div className='card_count'>
        <div className='iconMinus'><FontAwesomeIcon icon={faMinus} onClick={clickDecrement} /></div>
        <p className='numero'>{count}</p>
        <div className='iconPlus'><FontAwesomeIcon icon={faPlus} onClick={clickIncrease}/></div>
        </div>
        <p>/{props.stock} U. en stock</p>
        </div>
         <br />
        <button className='button_add' onClick={()=>alert('agregar')}>Agregar al carrito</button>
        </>   
  )
}

export default ItemCount