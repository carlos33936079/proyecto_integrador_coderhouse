import React from 'react'
import Item from './Item'

function ItemList(props) {
  return (
    <React.Fragment>
        { props.loading ? "Cargando Productos..." : props.item.map((producto, i)=>{
        return <Item key= {i} {...producto}/> })}
    </React.Fragment>
    
  )
}

export default ItemList