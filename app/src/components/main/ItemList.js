import React from 'react'
import Item from './Item'

function ItemList(props) {
  return (
    <>
        { props.loading ? "Cargando Productos..." : props.item.map((producto, i)=>{
        return <Item key= {i} {...producto}/> })}
    </> 
  )
}

export default ItemList