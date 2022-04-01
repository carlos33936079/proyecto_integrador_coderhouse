import React from 'react'
import { Link } from 'react-router-dom'

function Category() {

  return (
        <ul className='category_list'>
            <li>Categoria
                <ul>  
                    <li><Link to='/category/electronicos' className='category_link'>Electronica</Link>
                        <ul>
                            <li><Link to='/category/sub?init=camaras' className='category_link'>Camaras</Link></li>
                            <li><Link to='/category/sub?init=celulares' className='category_link'>Celulares</Link></li>
                            <li><Link to='/category/sub?init=computadoras' className='category_link'>Computadoras</Link></li>
                            <li><Link to='/category/sub?init=memorias' className='category_link'>Memorias</Link></li>
                            <li><Link to='/category/sub?init=televisores' className='category_link'>Televisores</Link></li> 
                        </ul>
                    </li>
                    <li><Link to='/category/hogar' className='category_link'>Hogar</Link>
                        <ul>
                            <li><Link to='/category/sub?init=herramientas' className='category_link'>Herramientas</Link></li>
                            <li><Link to='/category/sub?init=muebles' className='category_link'>Muebles</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/category/vehiculos' className='category_link'>Veiculos</Link>
                        <ul>
                            <li><Link to='/category/sub?init=vehiculo_accesorios' className='category_link'>Accesorios</Link></li>
                            <li><Link to='' className='category_link'>Autos</Link></li>
                            <li><Link to='' className='category_link'>Motos</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/category/all' className='category_link'>Todos los productos</Link></li>    
                </ul>    
            </li>    
        </ul>
        
  )
}

export default Category