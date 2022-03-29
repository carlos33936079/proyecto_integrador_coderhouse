import React from 'react'
import ItemList from './ItemList'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import Categorias from './Categorias'
import {useParams} from 'react-router-dom'
import { db } from '../Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

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

    const productCollection = collection(db,"products")
    let documentProduct = []
    if(id === undefined || id === "all"){
      documentProduct = getDocs(productCollection)
    }else{
       documentProduct = getDocs(query(productCollection, where("category", "==", id)))
    }
      documentProduct
              .then(respuesta=>{
                const aux = []
                respuesta.forEach(element => {
                  const product = {
                    id: element.id,
                    ...element.data()
                  }
                  aux.push(product)
                })
                setProductos(aux)
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
