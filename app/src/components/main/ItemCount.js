import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function ItemCount() {




  return (
    <div className='container_card'>
        <div className='container_card_image'>
            <img className="card_image" src='/images/images_card/no_image.jpg' alt='Image'/>
            <h3>Nombre Producto</h3>
        </div>
        <div className='container_count'> 
        <div className='card_count'>
        <FontAwesomeIcon icon={faMinus} onClick={()=>alert('buton')}/>
        <p className='numero'>0</p>
        <FontAwesomeIcon icon={faPlus} onClick={()=>alert('buton')}/>
        </div>
        <p>/50</p>
        </div>
         <br />
        <button className='button_add' onClick={()=>alert('agregar')}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount