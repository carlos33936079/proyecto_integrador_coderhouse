import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react"

function ItemCount(props) {

const [count, setCount] = useState(1)

const clickIncrease = () => {
  if(count < props.stock){
  setCount(count + 1)
  }
}

const clickDecrement = () => {
  if(count > props.initial){
    setCount(count - 1) 
  }
}

const handleAgregar =()=>{
  props.onAdd(count)
}

  return ( 
    
       <div className='container_count'> 
          <div className='card_count'>
            <div className='iconMinus'><FontAwesomeIcon icon={faMinus} onClick={clickDecrement} /></div>
            <p className='numero'>{count} / {props.stock}</p>
            <div className='iconPlus'><FontAwesomeIcon icon={faPlus} onClick={clickIncrease}/></div>
          </div>  
          <div className='itemDetail_button'>  
            <button onClick={handleAgregar} >Agregar Unidades</button>
          </div>
        </div> 
  )
}

export default ItemCount