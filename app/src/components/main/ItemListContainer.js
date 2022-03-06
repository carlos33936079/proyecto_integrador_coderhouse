import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer({mensaje}) {

const stock= 40
const initial= 1
const miOnAdd = () => {}

  return (
    <div className='item_list'>
        <ItemCount stock={stock} initial={initial} onAdd={miOnAdd}/>
    </div>
  )
}

export default ItemListContainer
