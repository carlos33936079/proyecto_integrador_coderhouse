import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

function CartWidget() {
  const { totalUnit } = useContext(CartContext)

  const [totalUnitTest, setTotalUnitTest] = useState(false)

  useEffect(() => {
  if (totalUnit>0){
    setTotalUnitTest(true)
  } else{
    setTotalUnitTest(false)
  }
},[totalUnit])

  return (
    <div className='cart_widget'>
   {totalUnitTest ? <Link to='/carrito' className='cart_widgetIcon'><FontAwesomeIcon icon={faCartShopping} /> {totalUnit}</Link> : null}
    </div>
  )
}

export default CartWidget