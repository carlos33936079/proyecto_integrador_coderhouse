import React from 'react'
import ItemList from './ItemList'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import Categorias from './Categorias'
import {useParams} from 'react-router-dom'
import { productList } from './productList'
import { db } from '../Firebase'
import { getDocs, collection } from 'firebase/firestore'



function ItemListContainer() {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    }
const {id} = useParams()

useEffect(()=>{
  setLoading(true)

/*     const productCollection = collection(db,"products")
    const document = getDocs(collection)

    document
    .then((respuesta)=>{
     
    }) */

  const promesa = new Promise((res,rej)=>{
    
    setTimeout(() => {
    if(id === undefined){
      res(productList)
    }
    if(id === "all"){
      res(productList)
    }else{
      const productFilter = productList.filter(items => items.category === id)
      res(productFilter)
    }
   
  }, 2000); 
})
promesa
.then((respuesta)=>{
  setProductos(respuesta) 
})
.catch((error404)=>{
  toast.error('Error al cargar el Producto')
})
.finally((fin)=>{
  setLoading(false)   
})
},[id])


  return (
    <div className='container_itemList'>
    <div className='category_menu' onClick={handleClick}>Cartegoria:
    {open ? <Categorias/>: ""}
    </div>

    
        <ItemList loading={loading} item={productos}/>
    
    </div>
  )
}

export default ItemListContainer
