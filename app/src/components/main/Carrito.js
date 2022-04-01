import React, { useEffect, useState } from 'react'
import CarritoComponent from './CarritoComponent'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { db } from '../hook/Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'



function Carrito() {
  const { cart, clear, removeItem, totalUnit, totalPrice } = useContext(CartContext)

  const [totalUnitTest, setTotalUnitTest] = useState(false)

  const [userState, setUserState] = useState("")
  const { dataUser } = useContext(UserContext)

  useEffect(() => {
  if(dataUser && dataUser.length > 0){
    setUserState("/carrito/check")
  }else{
    setUserState("/user") 
  }
  } , [dataUser])
/* let cartItems = cart.map(item=>item.product)
console.log("cart", cartItems.map(item=>item.id)) */

  useEffect(() => {
  if (totalUnit>0){
    setTotalUnitTest(true)
  } else{
    setTotalUnitTest(false)
  }
},[totalUnit])

const handleClick = () => {
  if(dataUser && dataUser.length > 0){
    const orderData = {
      idUser: dataUser.map(item => item.id),
      buyer: {
        name: dataUser.map(item => item.name),
        email: dataUser.map(item => item.email),
        phone: dataUser.map(item => item.phone),
      },
      items: cart,
      date: serverTimestamp(),
      total: totalPrice
    }

    const ordersCollection = collection(db, 'orders')
    const order = addDoc(ordersCollection, orderData)
    console.log(order)

    clear()
  }
}


  return (
      <div className='container_carrito'>
        <div className='titulo_carrito'>
          <ul>Carrito ({totalUnit})</ul>
          {totalUnitTest ? cart.map(item=>{  
          return (<CarritoComponent key={item.product.id} {...item} remove={removeItem}/>)}) : <h1 className='noProduct'>No hay productos en el carrito</h1>}
          {totalUnitTest ? 
          <div className='carrito_finalizar_container'>
            <button onClick={clear} className='button_borrarCarrito'>Borrar carrito</button>
            <div className='total_carrito'>Total: ${totalPrice}</div> 
           <button  className='button_carrito_terminarCompra' onClick={handleClick}><Link to="/carrito/check">Finalizar compra</Link></button> 
          </div> 
          : <Link to='/' className='button_volverTienda'>Volver a la tienda</Link>}  
        </div>
      </div> 
    )
    }
  
export default Carrito
