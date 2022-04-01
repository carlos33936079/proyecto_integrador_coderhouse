import React, { useContext, useEffect, useState } from 'react'
import ItemListContainer from './main/ItemListContainer'
import ItemDetailContainer from './main/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'
import Carrito from './main/Carrito'
import UserContainer from './headers/UserContainer'
import { UserContext } from './context/UserContext'
import CheckProgress from './main/CheckProgress'
import ShoppingContainer from './main/ShoppingContainer'

function Main() {

  const [userState, setUserState] = useState(false)
  const { user,  } = useContext(UserContext)
  useEffect(() => {
  if(user){
    setUserState(user)
  }else{
    setUserState(false)
  }
} , [user])

  return (
    
    <main className='container_main'>
    <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/shopping" element={<ShoppingContainer/>} />
        <Route path="/carrito/check" element={<CheckProgress done="100"/>} />
        <Route path="/user" element={userState ? <ItemListContainer/>:<UserContainer/> } />
      </Routes>
    </main>
  )
}

export default Main