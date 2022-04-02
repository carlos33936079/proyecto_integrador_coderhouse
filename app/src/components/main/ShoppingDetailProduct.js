import React from 'react'
import { Link } from 'react-router-dom'

function ShoppingDetailProduct({product}) {

  return (
    <div className='shopping_description_all'>
        <div>
            <img src={product.product.image} alt="imagen" />
        </div>
        <div className='shopping_description_allView'>
            <div className='shopping_description_productCheck'>Entregado</div>
            <div>x {product.count} U.</div>
            <div className='shopping_description_product'>{product.product.name}</div>
        </div>
        <div>
            <button className='shopping_description_recompra'><Link to={`/item/${product.product.id}`}>Volver a comprar</Link></button>
        </div>
    </div>
  )
}

export default ShoppingDetailProduct