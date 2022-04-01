import React from 'react'
import ItemList from './ItemList'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import {useLocation, useParams} from 'react-router-dom'
import { db } from '../hook/Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import index from '../hook/UseAlgolia'
import SlideShowMain from './SlideShowMain'

function ItemListContainer() {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  
  let {search} = useLocation()
  let searchString = new URLSearchParams(search).get('init')
  const {id} = useParams()

  useEffect(()=>{
    setLoading(true)
    const productCollection = collection(db,"products")
    let documentProduct = []

      if(id === "search"){
          const productSearchAux = []
          index.search(searchString)
          .then(({ hits }) => {
              hits.forEach(item => {
                  const product = {
                      id: item.objectID,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                      description: item.description,
                      category: item.category,
                      categoryb: item.categoryb,
                      stock: item.stock,
                      initial: item.initial
                  }
                  productSearchAux.push(product)
              })
              setProductos(productSearchAux)
          })
          .catch((error404)=>{
            toast.error('Error al cargar el Producto')
          })
          .finally((fin)=>{
            setLoading(false)   
          })   
      }else{
        if(id === undefined || id === "all"){
          documentProduct = getDocs(productCollection)
        }else{
          if (id === "sub"){
            documentProduct = getDocs(query(productCollection, where("categoryb", "==", searchString)))
          }else{
          documentProduct = getDocs(query(productCollection, where("category" , "==", id)))
        }
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
    }
  },[id, searchString])
   
  return (
    <>
      <section className="slideShow_container">
        <SlideShowMain/> 
      </section>
       <div className='container_itemList'>
        {productos ? <ItemList loading={loading} item={productos}/> : <div>No se encontraron productos...</div>}
      </div> 
    </>
  )
}

export default ItemListContainer
