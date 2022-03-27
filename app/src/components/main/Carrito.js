import React, { useEffect, useState } from 'react'
import CarritoComponent from './CarritoComponent'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


function Carrito() {
  const { cart, clear, removeItem, totalUnit, totalPrice } = useContext(CartContext)

  const [totalUnitTest, setTotalUnitTest] = useState(false)


  useEffect(() => {
  if (totalUnit>0){
    setTotalUnitTest(true)
  } else{
    setTotalUnitTest(false)
  }
},[totalUnit])


  return (
      <div className='container_carrito'>
        <div className='titulo_carrito'>
          <ul>Carrito ({totalUnit})</ul>
          {totalUnitTest ? cart.map(item=>{  
          return (<CarritoComponent key={item.product.id} {...item} remove={removeItem}/>)}) : <h1 className='noProduct'>No hay productos en el carrito</h1>}
          {totalUnitTest ? <div className='total_carrito'>Total: ${totalPrice}</div> : null}
          {totalUnitTest ? <button onClick={clear} className='button_borrarCarrito'>Borrar carrito</button> : <Link to='/' className='button_volverTienda'>Volver a la tienda</Link>}
          
        </div>
      </div> 
    )
    }
  


export default Carrito
