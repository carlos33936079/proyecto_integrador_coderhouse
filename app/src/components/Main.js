import React from 'react'
import ItemListContainer from './main/ItemListContainer'
import ItemDetailContainer from './main/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'
import Carrito from './main/Carrito'

function Main() {
  return (
    <main className='container_main'>
    
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </main>
  )
}

export default Main