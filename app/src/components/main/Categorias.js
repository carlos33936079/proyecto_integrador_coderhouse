import React from 'react'
import {Link} from 'react-router-dom'

function Categorias() {
  return (
    <div className='category_link'>
    <Link className='category_link_a' to='/category/all'>Todo</Link>
    <Link className='category_link_a' to='/category/camera'>Camaras</Link>
    <Link className='category_link_a' to='/category/memory'>Memorias</Link> 
    </div>
  )
}

export default Categorias