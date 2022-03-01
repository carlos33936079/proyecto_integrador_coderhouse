import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer({mensaje}) {
  return (
    <div className='item_list'>
        <ItemCount/>
    </div>
  )
}

export default ItemListContainer