import React from 'react'
import ShoppingDetailProduct from './ShoppingDetailProduct'

function ShoppingDetail({ product }) {

  console.log("props", product.id)
    
    
  return (
    <div className='shopping_description_detail'>
        <div className='shopping_description_detail_product'>
            <div className='shopping_description_fact_product'>
                <div>Factura N° {product.id}</div>
                <div>Total: ${product.total}</div>
            </div>
            {product.items.map((item,i) => <ShoppingDetailProduct key={i} product={item} />)}
            
        </div>

    </div>
  )
}

export default ShoppingDetail