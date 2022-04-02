import React from 'react'
import ShoppingDetail from './ShoppingDetail'
import { UserContext } from '../context/UserContext'
import { useContext, useState, useEffect } from 'react'
import { db } from '../hook/Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { toast } from 'react-toastify'

function ShoppingContainer() {

  const { dataUser } = useContext(UserContext)
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const productCollection = collection(db,"orders")
    let documentProduct = []
    documentProduct = getDocs(query(productCollection, where("idUser", "==", dataUser.map(item => item.id))))

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
  } , [dataUser])

  return (
    <div className='shopping_container'>
      <div className='shopping_title'>Compras</div>
      <div className='shopping_description'>
        <div className='shopping_description_title'>compras totales</div>
        {loading ? <p className='shopping_cargando'>Cargando detalles...</p> : productos.map(item => <ShoppingDetail key={item.id} product={item} />)}
      </div>
    </div>
  )
}

export default ShoppingContainer