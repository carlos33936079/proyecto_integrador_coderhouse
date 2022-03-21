import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'


function CarritoComponent({product, count, remove}) {
    
  return (
    <div className='container_carritoComponent'> 
        <article className='container_article'>
            <img className='image_carrito' src={product.image} alt="Imagen" />
            <div className='item_information_carrito'>
                <h2 className='title_item_carrito'>{product.name}</h2>
                <h3 className='subtitulo_item_carrito'>{product.category}</h3>
            </div>
            <div className='quantity_carrito'>
                <span>x{count}</span>
            </div>
            <div className='price_item_carrito'>
                <span>${product.price}</span>
            </div>
            <div className='quit_item_carrito'>
                <p className='button_quit_item_carrito' onClick={()=>remove(product)}><FontAwesomeIcon icon={faX}/></p>
            </div>
        </article>
    </div>
      
  )
}

export default CarritoComponent