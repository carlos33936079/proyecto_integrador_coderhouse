import React from 'react'
import Item from './Item'

function ItemList(props) {
  return (
    <section className='item_list'>
        { props.loading ? "Cargando Productos..." : props.item.map((producto, i)=>{
        return <Item key= {i} {...producto}/> })}
    </section>
  )
}

export default ItemList