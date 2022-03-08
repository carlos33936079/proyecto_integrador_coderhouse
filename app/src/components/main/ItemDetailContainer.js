import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from "react"

let unicoProducto = 
  {
      id: 1,
      name: "Nikon Kit D7500 + lente 18-140mm ED VR DSLR color negro",
      price: 455791,
      stock: 9,
      initial: 1,
      cuotas: 6,
      image : "/images/products/nikond7500.jpg",
      description: ['Resolucion de 20.9 Mpx f/3.5 5.6.', 'El obturador tiene una velocidad maxima de: 1/8000 s.', 'pantalla de 3.2".', 'al tener enfoque manual esta cámara captura más detalles en las fotografías.', 'Modo autofoco', 'Lente incluido', 'Conexion Bluetooth, Wi-Fi.', 'Flash incorporado', 'Calidad sin limites en tus fotografias']
  }



function ItemDetailContainer() {

  const [loading, setLoading] = useState(true)
  const [producto, setProducto] = useState([])

useEffect(()=>{

const promesa = new Promise((res,rej)=>{

  setTimeout(() => {
      res(unicoProducto)
  }, 2000); 
})
promesa
.then((respuesta)=>{
  setProducto(unicoProducto) 
})
.catch((error404)=>{
  console.log(error404)
})
.finally((fin)=>{
  setLoading(false)   
})
})


  return (
    <div className='itemDetailContainer_container'>
      <ItemDetail loading={loading} item={producto}/>
    </div>
  )
}

export default ItemDetailContainer