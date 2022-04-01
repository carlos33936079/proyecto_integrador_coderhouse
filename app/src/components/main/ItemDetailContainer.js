import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import {useParams} from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../hook/Firebase'

function ItemDetailContainer() {

  const [loading, setLoading] = useState(true)
  const [producto, setProducto] = useState([])
  const {id} = useParams()

useEffect(()=>{

  const productCollection = collection(db,"products")
  const documentProduct = getDoc(doc(productCollection, id))
  documentProduct
        .then(respuesta=>{
          const product = {
            id: respuesta.id,
            ...respuesta.data()
          }
          setProducto(product)
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