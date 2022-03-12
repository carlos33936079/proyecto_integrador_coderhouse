import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import { productList } from './productList'
import {useParams} from 'react-router-dom'


function ItemDetailContainer() {

  const [loading, setLoading] = useState(true)
  const [producto, setProducto] = useState([])

  const {id} = useParams()


useEffect(()=>{

const promesa = new Promise((res,rej)=>{

  setTimeout(() => {
    
    const productFilter = productList.find(items => items.id == id)
      res(productFilter)
    
  }, 2000); 
})
promesa
.then((respuesta)=>{
  setProducto(respuesta) 
})
.catch((error404)=>{
  toast.error('Error al cargar el Producto')
})
.finally((fin)=>{
  setLoading(false)   
})
},[id])


  return (
    <div className='itemDetailContainer_container'>
      {loading ? "Cargando detalle de producto" : <ItemDetail loading={loading} item={producto}/>}
    </div>
  )
}

export default ItemDetailContainer