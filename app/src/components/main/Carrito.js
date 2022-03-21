import React, { useEffect } from 'react'
import CarritoComponent from './CarritoComponent'
import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'

function Carrito() {
  const { cart, clear, removeItem } = useContext(CartContext)

  return (
    
    <div className='container_carrito'>
      <div className='titulo_carrito'>
        <ul>Carrito ()</ul>
        {cart.map(item=>{  
        return (<CarritoComponent key={item.product.id} {...item} remove={removeItem}/>)})}
        <button onClick={clear} className='button_borrarCarrito'>Borrar carrito</button>
      </div>
    </div> 
  )
}

export default Carrito