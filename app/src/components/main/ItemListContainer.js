import React from 'react'
import ItemList from './ItemList'
import {useState, useEffect} from "react"

let productList = [
  {
      id: 1,
      name: "Nikon D7500",
      stock: 20,
      initial: 1,
      image : "/images/products/nikond7500.jpg"
  },
  {
      id: 2,
      name: "Nikon D3500",
      stock: 10,
      initial: 1,
      image : "/images/products/nikond3500.jpg"
  },
  {
      id: 3,
      name: "Canon EOS R5",
      stock: 12,
      initial: 1,
      image : "/images/products/canon_eos_r5.jpg"
  },


]

function ItemListContainer() {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

useEffect(()=>{

const promesa = new Promise((res,rej)=>{

  setTimeout(() => {
      res(productList)
  }, 2000); 
})
promesa
.then((respuesta)=>{
  setProductos(productList) 
})
.catch((error404)=>{
  console.log(error404)
})
.finally((fin)=>{
  setLoading(false)   
})
})


  return (
    <div className='item_list'>
        <ItemList loading={loading} item={productos}/>
    </div>
  )
}

export default ItemListContainer
