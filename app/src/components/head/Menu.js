import React from 'react'
import { Link } from 'react-router-dom'

function Menu({ propiedades }) {
  return ( 
        <ul>
          <li><Link className='nav_link' to={propiedades.navegacion}>Mis compras</Link></li>
          <li>{propiedades.userState ?<Link className='nav_link' to='/' onClick={()=>propiedades.signOut(propiedades.auth)}> Cerrar Sesión</Link>  : <Link className='nav_link' to='/user'> Iniciar Sesión</Link>}</li>
        </ul> 
  )
}

export default Menu

